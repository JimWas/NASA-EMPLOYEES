import type { Metadata } from "next";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { StarshipOrbitGame } from "@/components/StarshipOrbitGame";

export const metadata: Metadata = {
  title: "Starship Orbit Simulator",
  description:
    "Guide a SpaceX Starship through ascent waypoints and reach parking orbit in a simple, kid-friendly minigame."
};

export default function StarshipOrbitSimulatorPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "SpaceX Starship", href: "/spacex-starship" },
    { label: "ISS Docking", href: "/iss-docking-simulator" },
    { label: "Deep Space Echo", href: "/deep-space-echo" }
  ];

  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Simulator"
        title="Starship Orbit"
        
      />

      <section className="section section--game-intro">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Parking Orbit</span>
            <h3>Hit every ascent waypoint to reach orbit.</h3>
          </div>
          <p>
            This is a simplified ascent game. Tap or press space to boost the
            engines and thread Starship through the planned path until it
            reaches a stable parking orbit.
          </p>
        </div>
        <StarshipOrbitGame />
      </section>

      <PublicFooter
        title="From ascent guidance to docking and deep-space comms."
        text="Try another mission: Practice the climb here, then switch to docking or message-routing games to see a different side of mission operations."
      />
    </main>
  );
}
