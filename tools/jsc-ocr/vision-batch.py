"""Run native Apple Vision sequentially to keep memory bounded."""
import subprocess
import sys
import json
from PIL import Image
import numpy as np
from pathlib import Path
cache, output, binary = map(Path, sys.argv[1:4])
output.mkdir(parents=True, exist_ok=True)
for image in sorted(cache.glob("page-*.png")):
    target = output / f"{image.stem}.json"
    if not target.exists():
        number = int(image.stem.split('-')[-1])
        command = [str(binary), str(image), str(target)]
        if 38 <= number <= 95:
            a = np.asarray(Image.open(image))
            h,w = a.shape[:2]
            left,right = int(w*.4),int(w*.55)
            split = left+int((a[int(h*.12):int(h*.91),left:right]<160).sum(axis=0).argmax())
            tiles=[]
            for x1,x2 in [(0,split),(split+1,w)]:
                cuts=[0]
                for fraction in [.25,.5,.75]:
                    center=int(h*fraction)
                    # Cut on whitespace to keep rows intact.
                    scores=(a[center-20:center+20,x1:x2]<160).sum(axis=1)
                    cuts.append(center-20+int(scores.argmin()))
                cuts.append(h)
                for y1,y2 in zip(cuts,cuts[1:]):tiles.append([x1/w,y1/h,(x2-x1)/w,(y2-y1)/h])
            config=output/f'{image.stem}-tiles.json'
            config.write_text(json.dumps(tiles))
            command.append(str(config))
        subprocess.run(command, check=True, capture_output=True)
    print(image.stem, flush=True)
