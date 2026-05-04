import { PublicPage } from "@/components/PublicPage";
import { readContent } from "@/lib/content";

export default async function HomePage() {
  const content = await readContent();
  return <PublicPage content={content} />;
}
