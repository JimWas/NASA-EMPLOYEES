"""Resumable local PaddleOCR-VL transcription. No cloud inference."""
import argparse
import json
import time
from pathlib import Path
from PIL import Image
import mlx.core as mx
from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template

parser = argparse.ArgumentParser()
parser.add_argument("images", nargs="+")
parser.add_argument("--output", type=Path, required=True)
parser.add_argument("--model", default="mlx-community/PaddleOCR-VL-1.6-4bit")
parser.add_argument("--max-tokens", type=int, default=12000)
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)
model, processor = load(args.model)
prompt = apply_chat_template(processor, model.config, "OCR:", num_images=1)
for filename in args.images:
    source = Path(filename)
    target = args.output / f"{source.stem}.json"
    if target.exists():
        continue
    start = time.monotonic()
    result = generate(model, processor, prompt=prompt, image=[str(source)], max_tokens=args.max_tokens, temperature=0.0, verbose=False)
    data = {"engine": args.model, "text": result.text, "generationTokens": result.generation_tokens, "seconds": round(time.monotonic()-start, 2), "truncated": result.generation_tokens >= args.max_tokens}
    target.write_text(json.dumps(data, indent=2))
    print(f"{source.name}: {data['generationTokens']} tokens in {data['seconds']}s", flush=True)
    mx.clear_cache()
