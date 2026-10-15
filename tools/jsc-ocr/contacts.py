"""Extract name/phone listings without completing obscured characters.

Geometry is retained from Apple Vision. Tesseract supplies an independent
reading, aligned in printed order within each page column.
"""
import argparse
import json
import re
import unicodedata
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
parser = argparse.ArgumentParser()
parser.add_argument('--vision', type=Path, default=Path('/private/tmp/jsc-vision-tiled-results'))
parser.add_argument('--output', type=Path, default=Path('/private/tmp/jsc-contacts.json'))
args = parser.parse_args()
archive = json.loads((ROOT/'content/jsc-directory-2002.json').read_text())
HOMOGLYPHS = str.maketrans('АВСЕНКМОРТХУаесорхуІі', 'ABCEHKMOPTXYaecopxyIi')

def clean(value):
    return ' '.join(unicodedata.normalize('NFKC', value).translate(HOMOGLYPHS).split()).strip(' |')

def key(value):
    return re.sub('[^A-Z0-9]', '', clean(value).upper())

def phone(value):
    value = clean(value)
    match = re.fullmatch(r'[•*]*(\d{2,3})[.:\s-]+(\d{4})[.,:;-]?', value)
    return '-'.join(match.groups()) if match else value

def split_prefix(text):
    match = re.match(r'^[•*| ]*([\d?$SIlBO|]{2,3}[.: -][\d?$SIlBO|]{4})[.,:;-]?\s+(.+)$', text)
    return match.groups() if match else None

def fields_for_column(lines, left, right):
    group = [l for l in lines if left <= l['box'][0] < right]
    headers = [l for l in group if .065 < l['box'][1] < .105]
    bldg = next((l['box'][0] for l in headers if re.match(r'b[il1]?d[gq]', l['text'], re.I)), None)
    if bldg is None:
        bldg = next((l['box'][0]-.054 for l in headers if 'room' in l['text'].lower()), left+.30)
    name_x = next((l['box'][0] for l in headers if re.match(r'^name\W*$', l['text'], re.I)), bldg-.185)
    phone_x = next((l['box'][0] for l in headers if l['text'].lower().startswith('phone')), name_x-.064)
    header_bottom = max((l['box'][1]+l['box'][3] for l in headers if 'name' in l['text'].lower() or 'phone' in l['text'].lower()), default=.096)
    fields = []
    for line in group:
        x,y,w,h = line['box']
        if not header_bottom+.003 < y+h/2 < .937 or x >= bldg-.018 or x < phone_x-.020:
            continue
        text = clean(line['text'])
        role = 'phone' if x < name_x-.016 else 'name'
        if role == 'phone' and len(re.findall('[A-Za-z]',text)) > 3 and len(re.findall(r'\d',text)) < 3:
            role='name'
        prefix = split_prefix(text)
        if not prefix and role == 'phone':
            match = re.match(r'^([A-Z$?]?\d[\d.$? -]{3,12})\s*([A-Z][A-Za-z.\x27 ,/-]{3,})$', text)
            if match: prefix=match.groups()
        if prefix:
            if role == 'phone': fields.append({'role':'phone','text':prefix[0],'cy':y+h/2,'width':w})
            fields.append({'role':'name','text':prefix[1],'cy':y+h/2,'width':w})
        else:
            fields.append({'role':role,'text':text,'cy':y+h/2,'width':w})
    # The line spacing is about .010 of the page height. Join fields within
    # less than half a row, keeping different rows in printed order.
    rows=[]
    for field in sorted(fields,key=lambda f:f['cy']):
        matches=[r for r in rows[-2:] if abs(r['cy']-field['cy']) < .0048]
        if matches:
            row=min(matches,key=lambda r:abs(r['cy']-field['cy']))
            role=field['role']
            if role not in row: row[role]=field['text'];row[role+'_width']=field['width']
            elif role=='phone':
                def rank(text,width):return (bool(re.fullmatch(r'\d{3}-\d{4}',phone(text))),len(re.findall(r'\d',text)),-width)
                if rank(field['text'],field['width'])>rank(row[role],row.get(role+'_width',1)):row[role]=field['text'];row[role+'_width']=field['width']
            elif len(field['text'])>len(row[role]):row[role]=field['text']
        else:
            rows.append({'cy':field['cy'],field['role']:field['text'],field['role']+'_width':field['width']})
    rows.sort(key=lambda r:r['cy'])
    # Section initials are headings, not people. Keep every other observed
    # name/phone row, including rows with a missing field.
    return [r for r in rows if len(re.findall(r'\d',r.get('phone',''))) >= 4 or len(key(r.get('name',''))) > 2]

def tesseract_rows(text):
    out=[]
    for line in text.splitlines():
        match=re.search(r'(?<!\d)([\d?$SIlBO|]{2,3}[. -][\d?$SIlBO|]{4})[.,]?\s+(.+)',line)
        if not match: continue
        number,rest=match.groups()
        name=re.split(r'\s{2,}',rest)[0]
        # A short building code occasionally shares the same OCR segment.
        out.append({'phone':clean(number),'name':clean(name),'raw':line.strip()})
    return out

def align(primary,alternate):
    n,m=len(primary),len(alternate)
    scores=[[float('-inf')]*(m+1) for _ in range(n+1)]
    moves={}
    scores[0][0]=0
    for i in range(n+1):
        for j in range(m+1):
            if i==j==0:continue
            choices=[]
            if i:choices.append((scores[i-1][j]-.85,'p'))
            if j:choices.append((scores[i][j-1]-.85,'a'))
            if i and j:
                a,b=primary[i-1],alternate[j-1]
                nk1,nk2=key(a.get('name','')),key(b.get('name',''))
                similar=SequenceMatcher(None,nk1,nk2).ratio() if nk1 and nk2 else 0
                pk1,pk2=key(a.get('phone','')),key(b.get('phone',''))
                same=bool(pk1 and pk2 and pk1==pk2)
                suffix=bool(len(pk1)>=6 and len(pk2)>=6 and pk1[-4:]==pk2[-4:])
                score=2.4*similar+(1.1 if same else .4 if suffix else 0)-1
                choices.append((scores[i-1][j-1]+score,'both'))
            scores[i][j],moves[i,j]=max(choices)
    pairs=[];i=n;j=m
    while i or j:
        move=moves[i,j]
        if move=='both':pairs.append((primary[i-1],alternate[j-1]));i-=1;j-=1
        elif move=='p':pairs.append((primary[i-1],{}));i-=1
        else:pairs.append(({},alternate[j-1]));j-=1
    return pairs[::-1]

records=[];coverage=[]
for page in archive['pages'][37:95]:
    number=page['number']
    lines=json.loads((args.vision/f'page-{number:03}.json').read_text())['lines']
    split=json.loads((args.vision/f'page-{number:03}-tiles.json').read_text())[0][2]
    for col,(left,right) in enumerate([(0,split),(split,1)],1):
        primary=fields_for_column(lines,left,right)
        alternate=tesseract_rows(page['alternateColumns'][col-1])
        pairs=align(primary,alternate)
        coverage.append({'page':number,'column':col,'vision_rows':len(primary),'tesseract_rows':len(alternate),'exported_rows':len(pairs)})
        for row,(a,b) in enumerate(pairs,1):
            name=clean(a.get('name',''))
            number_reading=phone(a.get('phone',''))
            other_name=clean(b.get('name',''));other_phone=phone(b.get('phone',''))
            notes=[]
            if not name and other_name:name=other_name;notes.append('name from alternate OCR')
            if not number_reading and other_phone:number_reading=other_phone;notes.append('phone from alternate OCR')
            if name and other_name and key(name)!=key(other_name):notes.append('name OCR disagreement')
            if number_reading and other_phone and key(number_reading)!=key(other_phone):notes.append('phone OCR disagreement')
            if not a:notes.append('Tesseract-only row; verify against scan')
            elif not b:notes.append('Vision-only row; verify against scan')
            if not name:notes.append('name missing or unreadable')
            if not re.fullmatch(r'\d{3}-\d{4}',number_reading):notes.append('phone clipped, missing, or unreadable')
            records.append({'name':name,'phone':number_reading,'listing_type':'Alphabetical employee listing','pdf_page':number,'column':col,'row':row,'review_notes':'; '.join(notes),'alternate_name':other_name,'alternate_phone':other_phone,'source_url':f'https://www.nasaemployees.com/archives/jsc-telephone-directory-2002#page-{number}','_cy':a.get('cy')})

# Two damaged rows were checked directly in the original 300-DPI scans.
# Anderson's number is legible in the scan despite being missed by both OCRs.
for record in records:
    if record['pdf_page']==39 and record['column']==1 and key(record['name'])=='ANNERSONRALPHV':
        record.update(name='ANDERSON, RALPH V',phone='483-1272',review_notes='Name and phone visually checked against original scan')
# A ruled/scuffed line hides this entry from both engines. The name remains
# readable; the damaged phone number is intentionally left unavailable.
records.append({'name':'MOLINA, JAMES G','phone':'','listing_type':'Alphabetical employee listing','pdf_page':72,'column':2,'row':0,'review_notes':'Name read from original scan; phone unreadable because of scan damage','alternate_name':'','alternate_phone':'','source_url':'https://www.nasaemployees.com/archives/jsc-telephone-directory-2002#page-72','_cy':.79469})
records.sort(key=lambda r:(r['pdf_page'],r['column'],r['_cy'] if r['_cy'] is not None else (r['row']/100)))
counts=Counter()
for record in records:
    group=(record['pdf_page'],record['column']);counts[group]+=1;record['row']=counts[group]
args.output.write_text(json.dumps({'records':records,'coverage':coverage},ensure_ascii=False,indent=2))
print(json.dumps({'records':len(records),'pages':len(set(r['pdf_page'] for r in records)),'missing_names':sum(not r['name'] for r in records),'missing_phones':sum(not r['phone'] for r in records),'review_rows':sum(bool(r['review_notes']) for r in records),'row_counts':Counter(c['exported_rows'] for c in coverage)},default=dict))
