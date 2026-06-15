import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { ISSLiveClient } from "@/components/ISSLiveClient";

export const metadata: Metadata = {
  title: "ISS Live Multi-Viewer",
  description: "Real-time ISS live streams and station telemetry."
};

export default function ISSLivePage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Mission Operations"
        title="ISS Live Multi-Viewer"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "ISS Docking", href: "/iss-docking-simulator" },
        ]}
      />
      <ISSLiveClient />
    </main>
  );
}
