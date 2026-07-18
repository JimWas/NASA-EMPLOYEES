import type { Metadata } from "next";
import { DreamRoleBadgeClient } from "@/components/DreamRoleBadgeClient";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Dream NASA Role ID Badge Generator",
  description: "Create and download an honorary Dream NASA Role ID badge for the mission you would choose to help humanity explore, learn, and protect life.",
  path: "/dream-nasa-role-id",
  image: "/images/dream-role-badge-preview.png"
});

export default function DreamNasaRoleIdPage() {
  return (
    <main className="page-shell dream-badge-page">
      <PublicHeader
        eyebrow="Honorary NASA Employees"
        title="Dream Role ID"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" }
        ]}
      />

      <DreamRoleBadgeClient />

      <section className="dream-badge-trust" aria-label="About the honorary badge">
        <div>
          <span className="section__eyebrow">Made for Imagination</span>
          <h3>A keepsake for the future you can picture.</h3>
        </div>
        <p>
          This fan-made experience celebrates curiosity and public service. It is
          not affiliated with NASA and does not create employment, access, or an official credential.
        </p>
      </section>

      <PublicFooter
        title="NasaEmployees.com"
        text="Every mission starts when someone can imagine their place in it."
      />
    </main>
  );
}
