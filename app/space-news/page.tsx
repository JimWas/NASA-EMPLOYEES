import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { SpaceNewsFeed } from "@/components/SpaceNewsFeed";

const pageTitle = "Space News Feed";
const pageDescription = "Live space news from NASA, SpaceX, ESA, and more — filter by missions, science, launches, and technology.";
const pageImage = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/space-news" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.nasaemployees.com/space-news",
    siteName: "NASA Employees",
    images: [{ url: pageImage, width: 1200, height: 630, alt: "Space News Feed" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
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
