import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { pageMeta } from "@/lib/meta";
import { ISSLiveClient } from "@/components/ISSLiveClient";

export const metadata: Metadata = pageMeta({
  title: "ISS Live Multi-Viewer",
  description: "Real-time ISS live streams and station telemetry — watch Earth from the International Space Station right now.",
  path: "/iss-live",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80",
});

export default function ISSLivePage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "ISS Docking", href: "/iss-docking-simulator" },
  ];

  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Mission Operations"
        title="ISS Live Multi-Viewer"
        links={navLinks}
      />
      <ISSLiveClient />
      <PublicFooter
        title="Explore Orbit"
        text="The International Space Station represents the largest international cooperative project in history."
      />
    </main>
  );
}
