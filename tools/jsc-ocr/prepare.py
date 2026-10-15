"""Render every source page and retain the original OCR for comparison."""
import argparse
import hashlib
import json
import shutil
from pathlib import Path
import fitz

parser = argparse.ArgumentParser()
parser.add_argument("pdf", type=Path)
parser.add_argument("--cache", type=Path, default=Path("/private/tmp/jsc-ocr-pages"))
args = parser.parse_args()
root = Path(__file__).resolve().parents[2]
assets = root / "public/archives/jsc-2002"
assets.mkdir(parents=True, exist_ok=True)
args.cache.mkdir(parents=True, exist_ok=True)
doc = fitz.open(args.pdf)
manifest = {"source": args.pdf.name, "sha256": hashlib.sha256(args.pdf.read_bytes()).hexdigest(), "pageCount": len(doc), "pages": []}
for index, page in enumerate(doc):
    n = index + 1
    name = f"page-{n:03}"
    png = args.cache / f"{name}.png"
    webp = assets / f"{name}.webp"
    if not png.exists() or not webp.exists():
        from PIL import Image
        pix = page.get_pixmap(dpi=300, colorspace=fitz.csGRAY)
        pix.save(png)
        with Image.open(png) as im:
            im.save(webp, lossless=True, method=6)
    manifest["pages"].append({"number": n, "width": page.rect.width, "height": page.rect.height, "originalText": page.get_text(sort=True)})
    print(f"Rendered {n}/{len(doc)}", flush=True)
shutil.copyfile(args.pdf, assets / "jsc-telephone-directory-2002.pdf")
(args.cache / "manifest.json").write_text(json.dumps(manifest, indent=2))
print("All pages rendered and source preserved.")
