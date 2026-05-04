import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

const spotlightStats = [
  { label: "Firm", value: "NASA" },
  { label: "Location", value: "Houston, Texas" },
  { label: "Office", value: "ISS Procurement" }
];

const accomplishments = [
  {
    title: "ISS procurement leadership",
    text: "Leads acquisition professionals supporting International Space Station research and integration at NASA Johnson Space Center."
  },
  {
    title: "United States Deorbit Vehicle",
    text: "Serves as the Contracting Officer in charge of the approximately $1B United States Deorbit Vehicle procurement."
  },
  {
    title: "Complex procurement expertise",
    text: "Has supported some of the agency's most complex procurements through policy work, source evaluation board advising, and contracting officer responsibilities."
  },
  {
    title: "REMIS 2",
    text: "Served as Contracting Officer for Research Engineering and Manufacturing Integration Services 2."
  },
  {
    title: "Lunar Terrain Vehicle",
    text: "Supported Lunar Terrain Vehicle procurement work as part of NASA's broader exploration capability."
  },
  {
    title: "Professional credentials",
    text: "Holds CPCM credentials, with an academic background that includes mathematics and business administration."
  }
];

const pathways = [
  "Procurement and acquisition roles help mission teams turn technical needs into executable contracts.",
  "Policy, evaluation, and advisory work can shape high-value decisions before hardware ever launches.",
  "Business, mathematics, operations, and public service skills can all connect to mission-critical NASA work.",
  "Career paths at NASA include both technical exploration roles and the people who make complex programs possible."
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
            Procurement Team Lead in the International Space Station Procurement
            Office at NASA Johnson Space Center, where she supports research,
            integration, and major mission procurements.
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
          <span className="section__eyebrow">Featured Bio</span>
          <h3>Leading acquisition work behind mission-critical programs.</h3>
          <p>
            Audrey Montgomery, CPCM, is a Procurement Team Lead in the
            International Space Station Procurement Office at NASA Johnson Space
            Center in Houston, Texas. She leads a team of acquisition
            professionals in support of ISS research and integration.
          </p>
          <p>
            She also serves as the Contracting Officer in charge of the
            approximately $1B United States Deorbit Vehicle procurement, a major
            acquisition connected to the future of low Earth orbit operations.
          </p>
        </div>
        <div className="spotlight-quote">
          <p>
            "Mission success depends on the people who make complex programs
            possible, from research integration to high-stakes procurement."
          </p>
          <span>Audrey Montgomery Spotlight</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Accomplishments</span>
            <h3>Procurement leadership across complex NASA programs.</h3>
          </div>
          <p>
            Her work spans team leadership, policy advising, source evaluation
            board support, and contracting officer responsibilities for major
            agency procurements.
          </p>
        </div>
        <div className="callout-grid">
          {accomplishments.map((item) => (
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
          <h3>Mission work needs acquisition, policy, and business expertise.</h3>
          <p>
            Audrey's path shows that NASA careers are not limited to astronauts,
            scientists, or engineers. Procurement professionals help translate
            mission needs into contracts, partnerships, and accountable program
            execution.
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
