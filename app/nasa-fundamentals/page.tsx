import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "NASA Fundamentals",
  description: "A plain-English guide to how NASA works — its mission, structure, centers, programs, and how it fits into the broader story of human space exploration.",
  path: "/nasa-fundamentals",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80",
});

const principles = [
  {
    title: "Mission before ego",
    text: "NASA exists to advance discovery, strengthen human knowledge, and expand what is possible for humanity. Individual projects, roles, and decisions only matter when they serve that larger mission."
  },
  {
    title: "Safety and rigor are non-negotiable",
    text: "Mission success depends on disciplined engineering, careful review, and the courage to slow down when the facts demand it. At NASA, standards are not bureaucracy. They are protection for lives, missions, and public trust."
  },
  {
    title: "Every choice should serve the long horizon",
    text: "NASA does not work only for the present moment. It makes decisions for future generations of explorers, scientists, citizens, and partners who will build on what is done today."
  }
];

const decisionPoints = [
  "Technical decisions must support mission integrity, not short-term convenience.",
  "Operational decisions must protect people, systems, data, and public confidence.",
  "Communications decisions must preserve clarity, truthfulness, and accountability.",
  "Program decisions must keep the long-term purpose of exploration and discovery in view.",
  "Leadership decisions must reinforce a culture where excellence and responsibility come first."
];

const outcomes = [
  {
    title: "Discovery",
    text: "NASA helps humanity understand Earth, space, and our place in the universe."
  },
  {
    title: "Capability",
    text: "NASA develops the technologies, systems, and knowledge that make future exploration possible."
  },
  {
    title: "Service",
    text: "NASA creates benefits that reach far beyond missions, from science and education to national capability and public inspiration."
  }
];

export default function NasaFundamentalsPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="NASA Fundamentals"
        title="NASA Fundamentals"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "Starship Game", href: "/starship-game" },
          { label: "Admin", href: "/admin" }
        ]}
      />

      <section className="hero hero--compact">
        <div className="hero__backdrop">
          <Image
            src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Mission critical core</span>
            <h2>The ultimate goal is bigger than any single launch, lab, or headline.</h2>
            <p>
              NASA exists to expand human knowledge, push exploration forward,
              protect the integrity of discovery, and create capability that
              serves humanity over the long term. That core purpose has to sit
              underneath every serious decision the organization makes.
            </p>
            <div className="hero__actions">
              <Link href="#core-principles" className="button button--primary">
                Explore the Core
              </Link>
              <Link href="/join-the-team" className="button button--ghost">
                Join the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Ultimate Goal</span>
          <h3>Advance discovery in ways that responsibly shape humanity’s future.</h3>
          <p>
            The organization is not just trying to complete isolated missions.
            It is building a durable foundation for scientific understanding,
            exploration, innovation, and public value. That is why the most
            important work at NASA is not only what gets launched, but how
            decisions are made before anything launches at all.
          </p>
          <p>
            When the mission is understood clearly, shortcuts become easier to
            reject, standards become easier to defend, and long-term value
            becomes easier to prioritize over immediate pressure.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
            alt="Earth seen from space"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section id="core-principles" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Core Principles</span>
            <h3>Why this mission-critical foundation matters</h3>
          </div>
          <p>
            If the fundamental purpose is not constantly reinforced, an
            organization can drift toward speed, optics, or internal comfort.
            NASA cannot afford that drift.
          </p>
        </div>
        <div className="callout-grid">
          {principles.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=80"
            alt="Team reviewing mission systems"
            fill
            className="cover-image"
          />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Decision Standard</span>
          <h3>The mission should be visible inside every important decision.</h3>
          <p>
            This is vital because NASA operates in environments where mistakes
            carry outsized consequences. The organization needs a consistent
            internal compass so teams can judge tradeoffs with discipline, not
            impulse.
          </p>
          <ul className="benefit-list">
            {decisionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What It Protects</span>
            <h3>The reason this emphasis is so important</h3>
          </div>
        </div>
        <div className="resource-grid resource-grid--three">
          {outcomes.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PublicFooter
        title="Mission clarity is not branding. It is operational discipline."
        text="The more clearly NASA defines its ultimate purpose, the better every team can protect quality, safety, truth, and long-term impact."
      />
    </main>
  );
}
