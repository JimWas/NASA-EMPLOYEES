import { StarshipGame } from "@/components/StarshipGame";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export default function StarshipGamePage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Honorary Crew", href: "/honorary-nasa-employees" },
    { label: "Join the Team", href: "/join-the-team" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" }
  ];

  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Arcade Mode"
        title="Starship Game"
        links={navLinks}
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

      <PublicFooter
        title="Keep climbing, keep exploring."
        text="Play & Discover: Whether it's a game or a mission, the goal is always to push higher and learn more about the universe around us."
      />
    </main>
  );
}
