import { promises as fs } from "fs";
import path from "path";
import { PageContent } from "@/lib/types";

const contentPath = path.join(process.cwd(), "content", "site-content.json");

export async function readContent(): Promise<PageContent> {
  const file = await fs.readFile(contentPath, "utf-8");
  return JSON.parse(file) as PageContent;
}

export async function writeContent(content: PageContent) {
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, JSON.stringify(content, null, 2));
}
