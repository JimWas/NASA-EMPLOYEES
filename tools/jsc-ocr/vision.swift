import Foundation
import Vision
import ImageIO

// Native, offline OCR. Bounding boxes use a normalized top-left origin.
let arguments = CommandLine.arguments
guard arguments.count >= 3 else {
    fatalError("Usage: vision INPUT_IMAGE OUTPUT_JSON [TILES_JSON]")
}
let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.recognitionLanguages = ["en-US"]
request.usesLanguageCorrection = false // Preserve names, room IDs and mail codes.
request.minimumTextHeight = 0.003
guard let source = CGImageSourceCreateWithURL(URL(fileURLWithPath: arguments[1]) as CFURL, nil),
      let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else { fatalError("Cannot read image") }
let tiles: [[Double]] = arguments.count > 3 ? try JSONSerialization.jsonObject(with: Data(contentsOf: URL(fileURLWithPath: arguments[3]))) as! [[Double]] : [[0,0,1,1]]
var lines: [[String: Any]] = []
for tile in tiles {
  let rect = CGRect(x: tile[0] * Double(image.width), y: tile[1] * Double(image.height), width: tile[2] * Double(image.width), height: tile[3] * Double(image.height))
  guard let cropped = image.cropping(to: rect) else { continue }
  let handler = VNImageRequestHandler(cgImage: cropped)
  try handler.perform([request])
  lines += (request.results ?? []).compactMap { observation in
    guard let candidate = observation.topCandidates(1).first else { return nil }
    let box = observation.boundingBox
    return ["text": candidate.string, "confidence": candidate.confidence,
            "box": [tile[0] + box.minX * tile[2], tile[1] + (1 - box.maxY) * tile[3], box.width * tile[2], box.height * tile[3]]]
  }
}
let data = try JSONSerialization.data(withJSONObject: ["engine": "Apple Vision", "revision": request.revision, "lines": lines], options: [.prettyPrinted, .sortedKeys])
try data.write(to: URL(fileURLWithPath: arguments[2]), options: .atomic)
print("Recognized \(lines.count) lines")
