import type { Metadata } from "next";
import Link from "next/link";
import { ISSDockingSimulator } from "@/components/ISSDockingSimulator";
import { PublicHeader } from "@/components/PublicHeader";

export const metadata: Metadata = {
  title: "ISS Docking Simulator",
  description:
    "Guide a capsule toward the International Space Station using small thruster controls in this simple docking simulator."
};

export default function ISSDockingSimulatorPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Simulator"
        title="ISS Docking"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Mars Relay", href: "/mars-relay" },
          { label: "Starship Game", href: "/starship-game" },
          { label: "Space Drinks", href: "/what-astronauts-drink" }
        ]}
      />

      <section className="section section--game-intro">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Final Approach</span>
            <h3>Guide the capsule into a gentle soft capture.</h3>
          </div>
          <p>
            Docking is a patience game. Use small thruster inputs, watch your
            closing speed, and line up with the port before the capsule reaches
            the station.
          </p>
        </div>
        <ISSDockingSimulator />
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Try another mission</span>
          <h3>From docking to deep-space comms.</h3>
          <p>
            Practice fine control here, then jump into Mars Relay to see why
            mission timing and communication delays matter.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/mars-relay">Mars Relay</Link>
          <Link href="/starship-game">Starship Game</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
