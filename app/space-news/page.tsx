import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { SpaceNewsFeed } from "@/components/SpaceNewsFeed";

export const metadata: Metadata = {
  title: "Space News Feed",
  description: "Live space news pulled from NASA, SpaceX, ESA, and more — updated in real time.",
};

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
