import Link from "next/link";
import { StarshipGame } from "@/components/StarshipGame";
import { PublicHeader } from "@/components/PublicHeader";

export default function StarshipGamePage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Arcade Mode"
        title="Starship Game"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" }
        ]}
      />

      <section className="section section--game-intro">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Play</span>
            <h3>Flappy Bird, but with a Starship twist</h3>
          </div>
          <p>
            This mini-game turns the site into something a little more playful:
            guide a SpaceX Starship upward while weaving through obstacles and
            chasing a new high score.
          </p>
        </div>
        <StarshipGame />
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Play & Discover</span>
          <h3>Keep climbing, keep exploring.</h3>
          <p>
            Whether it's a game or a mission, the goal is always to push higher
            and learn more about the universe around us.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/">People of NASA</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/join-the-team">Join the Team</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
