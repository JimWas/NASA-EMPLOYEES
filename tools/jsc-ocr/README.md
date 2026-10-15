# Local JSC directory conversion

The 99-page source is `03_JSC_2002_06_OCR.pdf`. The webpage is at
`/archives/jsc-telephone-directory-2002` and is linked from the site's Learn menu.
All recognition ran locally on an Apple M2 MacBook Pro with 8 GB unified memory.
No document pages were sent to a cloud OCR service.

## Engines and quality

The primary reading uses **Apple Vision**, accurate English recognition with
language correction disabled. Employee pages are divided at the printed column
rule and into four horizontal tiles per column, with cuts chosen in whitespace.
This avoids Vision's substantial loss of tiny text when recognizing whole pages.
Bounding boxes are mapped back into page coordinates; rows are clustered
geometrically. Text is never completed or corrected using a generative model.

The independent second reading uses **Tesseract 5.5.3 with tessdata_best English**.
It is available from the reader's Text reading selector. Search checks both
readings. Dense employee pages use separate columns and page segmentation mode 6;
other pages use automatic segmentation. The original PDF and lossless, 300-DPI
WebP scans preserve the full source, including graphics and scan defects.

**PaddleOCR-VL 1.6, 4-bit MLX** was also installed and run on this Mac using
`mlx-vlm 0.7.8`. A directory crop generated 641 tokens in 14.86 seconds, but
omitted and duplicated entries and shifted phone/room associations. A whole-page
test reached its 10,000-token limit in 94.93 seconds. Those outputs were excluded
from the final transcription. These are source-specific observations, not a
general ranking of OCR engines. The Apple Vision / Tesseract text is also
machine transcription and has not been fully proofread.

Engine documentation:
- [Apple Vision text recognition](https://developer.apple.com/documentation/vision/recognizing-text-in-images)
- [Tesseract best models](https://github.com/tesseract-ocr/tessdata_best)
- [PaddleOCR-VL MLX model](https://huggingface.co/mlx-community/PaddleOCR-VL-1.6-4bit)

## Reproduce on macOS

Requires Apple's command-line developer tools, Python 3.13, and Tesseract.
Create a virtual environment and install `requirements.txt`. The conversion
scripts use `/private/tmp` for resumable working files by default. Run from
the repository root:

```sh
python3 -m venv tools/jsc-ocr/.venv
tools/jsc-ocr/.venv/bin/pip install -r tools/jsc-ocr/requirements.txt
mkdir -p /private/tmp/jsc-tessdata-best
curl -L --fail https://raw.githubusercontent.com/tesseract-ocr/tessdata_best/main/eng.traineddata -o /private/tmp/jsc-tessdata-best/eng.traineddata
swiftc -module-cache-path /private/tmp/jsc-swift-cache tools/jsc-ocr/vision.swift -o /private/tmp/jsc-vision-tiled
tools/jsc-ocr/.venv/bin/python tools/jsc-ocr/prepare.py /Users/jimwashkau/Downloads/03_JSC_2002_06_OCR.pdf
tools/jsc-ocr/.venv/bin/python tools/jsc-ocr/vision-batch.py /private/tmp/jsc-ocr-pages /private/tmp/jsc-vision-tiled-results /private/tmp/jsc-vision-tiled
tools/jsc-ocr/.venv/bin/python tools/jsc-ocr/baseline.py --output /private/tmp/jsc-best --tessdata /private/tmp/jsc-tessdata-best
tools/jsc-ocr/.venv/bin/python tools/jsc-ocr/export.py
```

Native Vision and MLX require GPU/recognition access and may not run inside a
sandboxed terminal. Checkpoints skip already completed pages; use a new output
directory when changing engines or recognition settings. `export.py` refuses
incomplete OCR unless the explicit preview-only flag is given.

Optional Paddle benchmark:

```sh
tools/jsc-ocr/.venv/bin/pip install mlx-vlm==0.7.8
HF_HOME=/private/tmp/jsc-huggingface tools/jsc-ocr/.venv/bin/python tools/jsc-ocr/paddle.py sample.png --output /private/tmp/jsc-paddle-benchmark
```

The browser never runs OCR. It serves saved text and images and searches locally.
`public/archives/jsc-2002/ocr-provenance.json` records the source and model hashes,
engine versions, raster settings, and the excluded model benchmark. The complete
primary text is downloadable as `transcript.txt`.
