import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

const spotlightStats = [
  { label: "Featured Spotlight", value: "Audrey Montgomery" },
  { label: "Focus", value: "People, mission, pathways" },
  { label: "Updated", value: "Always featured" }
];

const storyPoints = [
  {
    title: "Mission-facing work",
    text: "Audrey's spotlight anchors the page around the people who help translate NASA's purpose into daily action, public trust, and practical progress."
  },
  {
    title: "Human pathway",
    text: "The profile is designed to help visitors see a real person behind the agency and imagine their own route into mission-driven work."
  },
  {
    title: "Career signal",
    text: "The page connects the spotlight to next steps, resources, and broader ways people can explore NASA careers and public engagement."
  }
];

const pathways = [
  "Explore roles that connect communication, operations, engineering, science, and public service.",
  "Use employee stories to understand what mission work feels like from the inside.",
  "Follow NASA career resources, internships, fellowships, and public programs.",
  "Look for the skills, habits, and values that show up across successful mission teams."
];

export default function EmployeeSpotlightsPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Employee Spotlights"
        title="Employee Spotlights"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Starship Game", href: "/starship-game" },
          { label: "Admin", href: "/admin" }
        ]}
      />

      <section className="spotlight-hero">
        <div className="spotlight-hero__image">
          <Image
            src="/images/audrey-montgomery.png"
            alt="Audrey Montgomery"
            fill
            priority
            className="cover-image"
          />
        </div>
        <div className="spotlight-hero__copy">
          <span className="pill">Main Spotlight</span>
          <h2>Audrey Montgomery</h2>
          <p>
            Audrey Montgomery is the permanent featured profile for this
            spotlight page, giving visitors a clear human entry point into the
            people, stories, and pathways behind NASA careers.
          </p>
          <div className="hero__actions">
            <Link href="/join-the-team" className="button button--primary">
              Explore Pathways
            </Link>
            <Link href="https://www.nasa.gov/careers/" className="button button--ghost">
              NASA Careers
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="spotlight-stat-grid">
          {spotlightStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Featured Profile</span>
          <h3>Stories make the mission easier to understand.</h3>
          <p>
            A strong employee spotlight does more than introduce a name. It
            gives visitors a way to understand NASA through a person: the work,
            the decisions, the service, and the paths that can bring new people
            into the mission.
          </p>
          <p>
            Audrey stays in the main spotlight so the page always opens with a
            consistent, recognizable featured profile.
          </p>
        </div>
        <div className="spotlight-quote">
          <p>
            "The mission becomes more approachable when visitors can connect it
            to real people, real work, and real pathways."
          </p>
          <span>Audrey Montgomery Spotlight</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What Visitors Learn</span>
            <h3>Spotlights connect people to possibility.</h3>
          </div>
          <p>
            This page can grow into a larger story hub while keeping Audrey as
            the always-on featured profile.
          </p>
        </div>
        <div className="callout-grid">
          {storyPoints.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Pathways</span>
          <h3>Turn interest into a next step.</h3>
          <p>
            Employee stories are most useful when they help visitors move from
            curiosity to action. These prompts point people toward career
            discovery, skills, programs, and practical ways to get involved.
          </p>
          <ul className="benefit-list">
            {pathways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Earth at night from orbit"
            fill
            className="cover-image"
          />
        </div>
      </section>
    </main>
  );
}
