import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { SpaceNewsFeed } from "@/components/SpaceNewsFeed";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Space News Feed",
  description: "Live space news from NASA, SpaceX, ESA, and more — filter by missions, science, launches, and technology.",
  path: "/space-news",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80",
});

export default function SpaceNewsPage() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "ISS Live", href: "/iss-live" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
  ];

  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Live Updates"
        title="Space News"
        links={navLinks}
      />
      <SpaceNewsFeed />
      <PublicFooter
        title="Stay Current"
        text="Real-time articles from NASA, SpaceX, ESA, and the global space community."
      />
    </main>
  );
}
