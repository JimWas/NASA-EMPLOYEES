import { NextResponse } from "next/server";
import { readContent, writeContent } from "@/lib/content";
import { PageContent } from "@/lib/types";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  try {
    const content = (await request.json()) as PageContent;
    await writeContent(content);
    const saved = await readContent();
    return NextResponse.json(saved);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save content." },
      { status: 400 }
    );
  }
}
