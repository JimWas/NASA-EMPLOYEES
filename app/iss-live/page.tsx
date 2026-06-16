import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { ISSLiveClient } from "@/components/ISSLiveClient";

export const metadata: Metadata = {
  title: "ISS Live Multi-Viewer",
  description: "Real-time ISS live streams and station telemetry."
};

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
        
      />
      <ISSLiveClient />
      <PublicFooter
        title="Explore Orbit"
        text="The International Space Station represents the largest international cooperative project in history."
      />
    </main>
  );
}
