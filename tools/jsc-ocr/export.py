"""Build the website's complete, auditable archive from local OCR checkpoints."""
import argparse
import hashlib
import json
import re
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("--cache", type=Path, default=Path("/private/tmp/jsc-ocr-pages"))
parser.add_argument("--ocr", type=Path, default=Path("/private/tmp/jsc-best"))
parser.add_argument("--vision", type=Path, default=Path("/private/tmp/jsc-vision-tiled-results"))
parser.add_argument("--allow-incomplete", action="store_true")
args = parser.parse_args()
root = Path(__file__).resolve().parents[2]
assets = root / "public/archives/jsc-2002"
manifest = json.loads((args.cache / "manifest.json").read_text())

titles = ["Cover", "Emergency numbers", "Employee alarm system", "Introduction", "Table of contents", "JSC internet guide", "Contractor abbreviations", "General information", "Severe weather information", "Safety and health information", "Safety action hotline", "Telephone area codes", "JSC site map", "JSC building legend", "Ellington Field map", "Directions to Ellington Field", "NASA installations", "JSC organization chart"]
def section(n):
    if n <= 5: return "Opening pages"
    if n <= 12: return "Guides & safety"
    if n <= 18: return "Maps & facilities"
    if n <= 37: return "Organizational listing"
    if n <= 95: return "Employee directory"
    return "Classified subject listing"

def vision_columns(data, number):
    lines = data["lines"]
    # Read each visual column top to bottom. Cluster cells by baseline, without
    # substituting or inferring any recognized values.
    mid = .5
    if 38 <= number <= 95:
        from PIL import Image
        import numpy as np
        a = np.asarray(Image.open(args.cache / f"page-{number:03}.png"))
        h,w=a.shape[:2]
        left,right=int(w*.4),int(w*.55)
        mid=(left+int((a[int(h*.12):int(h*.91),left:right]<160).sum(axis=0).argmax()))/w
    multi = number in [3, 7, 8, 9, 10, 11, 14] or 19 <= number <= 99
    sets = [[l for l in lines if l["box"][0] < mid], [l for l in lines if l["box"][0] >= mid]] if multi else [lines]
    out=[]
    for group in sets:
        rows=[]
        for line in sorted(group, key=lambda l:l["box"][1]+l["box"][3]/2):
            cy=line["box"][1]+line["box"][3]/2
            tolerance = .0048 if 38 <= number <= 95 else min(.004, line["box"][3]*.4)
            if rows and abs(rows[-1][0]-cy)<tolerance:
                rows[-1][1].append(line)
            else: rows.append([cy,[line]])
        out.append("\n".join("  ".join(l["text"] for l in sorted(row, key=lambda l:l["box"][0])) for _,row in rows))
    return out

pages=[]
missing=[]
for original in manifest["pages"]:
    n=original["number"]
    target=args.ocr/f"page-{n:03}.json"
    if not target.exists():
        missing.append(n)
        ocr={"engine":"Original PDF text layer (temporary preview)","columns":[original["originalText"]],"text":original["originalText"]}
    else: ocr=json.loads(target.read_text())
    title=titles[n-1] if n<=len(titles) else section(n)
    page={"number":n,"title":title,"section":section(n),"engine":ocr["engine"],"columns":ocr["columns"],"text":ocr["text"]}
    vp=args.vision/f"page-{n:03}.json"
    if vp.exists():
        vc=vision_columns(json.loads(vp.read_text()),n)
        page["alternateColumns"]=page["columns"]
        page["alternateText"]=page["text"]
        page["columns"]=vc
        page["text"]="\n\n".join(vc)
        page["engine"]="Apple Vision accurate / tiled employee listings"
    else: missing.append(f"Vision {n}")
    if n in [12,13,15,16,17,18]: page["reviewNote"]="This page includes a map, diagram, or chart. Use the scan to see spatial relationships and labels that OCR may omit."
    if 38<=n<=95:
        page["reviewNote"]="Small type and clipped scan edges can obscure characters. Verify directory entries against the original image."
    pages.append(page)
if missing and not args.allow_incomplete: raise SystemExit(f"Incomplete OCR: {missing}")
output={"title":"Johnson Space Center Telephone Directory", "edition":"June 2002", "pageCount":99,"source":manifest["source"],"sha256":manifest["sha256"],"pages":pages}
(root/"content/jsc-directory-2002.json").write_text(json.dumps(output, ensure_ascii=False, indent=2))
transcript="Johnson Space Center Telephone Directory · June 2002\nHistorical archive. OCR is not proofread; verify against original scans.\n\n"+"\n\n".join(f"=== PDF PAGE {p['number']} · {p['title']} ===\n{p['text']}" for p in pages)
(assets/"transcript.txt").write_text(transcript)
(assets/"ocr-provenance.json").write_text(json.dumps({"source":manifest["source"],"sourceSHA256":manifest["sha256"],"pageCount":99,"rasterDPI":300,"primaryEngine":"Apple Vision accurate, English, language correction disabled; tiled employee pages","secondaryEngine":"Tesseract 5.5.3, tessdata_best English, LSTM","bestModelSHA256":hashlib.sha256(Path('/private/tmp/jsc-tessdata-best/eng.traineddata').read_bytes()).hexdigest(),"method":"Employee pages split at the printed column divider. No generative correction of names, numbers, or identifiers.","benchmark":{"model":"mlx-community/PaddleOCR-VL-1.6-4bit","runtime":"mlx-vlm 0.7.8 / mlx 0.32.4","hardware":"Apple M2, 8 GB unified memory","cropTokens":641,"cropSeconds":14.86,"fullPageTokens":10000,"fullPageSeconds":94.93,"decision":"Excluded from final text: crop sample omitted and duplicated entries and shifted field associations; full page reached output token limit."},"proofread":False,"incomplete":missing},indent=2))
print(f"Exported {len(pages)} pages; {len(missing)} incomplete checkpoints; {len(transcript):,} characters")
