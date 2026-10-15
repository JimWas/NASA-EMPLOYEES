"""Lossless local Tesseract baseline, by column for the employee listings."""
import argparse
import json
import subprocess
import os
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument("--cache", type=Path, default=Path("/private/tmp/jsc-ocr-pages"))
parser.add_argument("--output", type=Path, default=Path("/private/tmp/jsc-tesseract"))
parser.add_argument("--tessdata", type=Path)
parser.add_argument("--workers", type=int, default=2)
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)
def process(number):
    target = args.output / f"page-{number:03}.json"
    if target.exists():
        return
    image = Image.open(args.cache / f"page-{number:03}.png")
    crops = [image]
    if 38 <= number <= 95:
        # Use the printed vertical column divider, allowing for shifted scans.
        import numpy as np
        a = np.asarray(image)
        h, w = a.shape[:2]
        left, right = int(w*.40), int(w*.55)
        counts = (a[int(h*.12):int(h*.91), left:right] < 160).sum(axis=0)
        split = left + int(counts.argmax())
        crops = [image.crop((0, 0, split, h)), image.crop((split+1, 0, w, h))]
    columns = []
    for index, crop in enumerate(crops):
        png = args.output / f"working-{number}-{index}.png"
        crop.save(png)
        command = ["tesseract", str(png), "stdout", "--psm", "6" if len(crops)>1 else "3", "-l", "eng", "-c", "preserve_interword_spaces=1"]
        if args.tessdata:
            command.extend(["--tessdata-dir", str(args.tessdata)])
        result = subprocess.run(command, check=True, capture_output=True, text=True, env={**os.environ, "OMP_THREAD_LIMIT":"1"})
        columns.append(result.stdout.strip())
        png.unlink()
    target.write_text(json.dumps({"engine":"Tesseract 5 / tessdata_best English" if args.tessdata else "Tesseract 5 / LSTM", "columns":columns, "text":"\n\n".join(columns)}, indent=2))
    print(f"Tesseract {number}/99: {sum(len(c) for c in columns)} characters", flush=True)
with ThreadPoolExecutor(max_workers=args.workers) as pool:
    list(pool.map(process, range(1, 100)))
