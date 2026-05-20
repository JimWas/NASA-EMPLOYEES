import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { DeepSpaceEchoGame } from "@/components/DeepSpaceEchoGame";

export const metadata: Metadata = {
  title: "Deep Space Echo",
  description:
    "Aim a message from Earth toward promising exoplanet targets in this NASA-inspired deep space communication minigame."
};

export default function DeepSpaceEchoPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Minigame"
        title="Deep Space Echo"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Mars Relay", href: "/mars-relay" },
          { label: "ISS Docking", href: "/iss-docking-simulator" },
          { label: "Starship Game", href: "/starship-game" }
        ]}
      />

      <section className="section section--game-intro">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Play</span>
            <h3>Send a signal into the dark and try to hit the right world.</h3>
          </div>
          <p>
            Direct the message, lock the beam, and transmit toward exoplanets
            that scientists often discuss as potentially life-friendly. The
            better your aim and timing, the stronger the score.
          </p>
        </div>
        <DeepSpaceEchoGame />
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">More to Explore</span>
          <h3>From signal travel to alien possibility.</h3>
          <p>
            If you like sending a message beyond Earth, hop into Mars Relay for
            a more practical comms simulation or explore NASA fundamentals to
            see how the real mission fits together.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/mars-relay">Mars Relay</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/space-faqs">Space FAQs</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
