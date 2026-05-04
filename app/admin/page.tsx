import { AdminClient } from "@/components/AdminClient";
import { readContent } from "@/lib/content";

export default async function AdminPage() {
  const content = await readContent();
  return <AdminClient initialContent={content} />;
}
