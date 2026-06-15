import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { ISSTracker } from "@/components/ISSTracker";

export const metadata: Metadata = {
  title: "ISS Live Tracker",
  description: "Real-time tracking of the International Space Station."
};

export default function ISSTrackerPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Mission Operations"
        title="ISS Live Tracker"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "ISS Live", href: "/iss-live" },
        ]}
      />
      <ISSTracker />
    </main>
  );
}
