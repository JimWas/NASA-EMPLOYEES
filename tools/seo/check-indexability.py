"""Check public sitemap coverage, HTTP status, indexing directives, and canonicals."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request, urlopen
from html.parser import HTMLParser
import json, xml.etree.ElementTree as ET, subprocess
BASE='https://www.nasaemployees.com'
class Meta(HTMLParser):
 def __init__(self): super().__init__();self.canonical=[];self.robots=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='meta' and a.get('name','').lower() in ['robots','googlebot']:self.robots.append(a.get('content',''))
def get(url):
 with urlopen(Request(url,headers={'User-Agent':'NASAEmployees-IndexabilityCheck/1.0'}),timeout=30) as r:return r.status,r.url,dict(r.headers),r.read().decode()
sitemap=get(BASE+'/sitemap.xml')[3];urls=[e.text for e in ET.fromstring(sitemap).iter() if e.tag.endswith('}loc')]
files=subprocess.check_output(['git','ls-files','app/*/page.tsx','app/page.tsx'],text=True).splitlines()
routes=sorted(set('/'+f[4:-9].strip('/') for f in files if f!='app/admin/page.tsx'))
routes=[r or '/' for r in routes]
def check(route):
 url=BASE+route
 try:
  status,final,headers,html=get(url);m=Meta();m.feed(html)
  return {'path':route,'status':status,'final':final,'sitemap':url.rstrip('/') in {u.rstrip('/') for u in urls},'canonical':m.canonical,'robots':m.robots,'xRobots':headers.get('X-Robots-Tag','')}
 except Exception as e:return {'path':route,'error':str(e)}
results=list(ThreadPoolExecutor(max_workers=4).map(check,routes))
out={'robots':get(BASE+'/robots.txt')[3],'sitemapUrls':urls,'pages':results}
Path('output').mkdir(exist_ok=True);Path('output/indexability-check.json').write_text(json.dumps(out,indent=2))
print('Audited',len(results),'pages; sitemap contains',len(urls),'URLs. Robots:',out['robots'])
issues=[]
for r in results:
 if r.get('error') or not r.get('sitemap') or [u.rstrip('/') for u in r.get('canonical',[])]!=[(BASE+r['path']).rstrip('/')] or 'noindex' in str(r.get('robots',[]))+r.get('xRobots',''):issues.append(r)
for issue in issues:print(json.dumps(issue))
raise SystemExit(bool(issues))
