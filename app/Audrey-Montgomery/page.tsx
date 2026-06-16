import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const spotlightStats = [
  { label: "Firm", value: "NASA" },
  { label: "Location", value: "Houston, Texas" },
  { label: "Office", value: "ISS Procurement" },
  { label: "Credential", value: "CPCM" }
];

const coreAccomplishments = [
  {
    title: "Guiding the ISS transition",
    text: "Audrey Montgomery leads procurement work at NASA Johnson Space Center right where the International Space Station's present operations and post-ISS transition strategies meet."
  },
  {
    title: "United States Deorbit Vehicle award",
    text: "She served as the contracting officer on the United States Deorbit Vehicle award to SpaceX, an approximately $843.3 million procurement tied to the safe retirement of the ISS."
  },
  {
    title: "REMIS2 leadership",
    text: "She leads contracting work connected to REMIS2, a multiple-award vehicle with a potential ceiling of $478 million supporting spaceflight hardware, sustaining engineering, payload integration, and research operations."
  },
  {
    title: "Commercial research in low Earth orbit",
    text: "Her portfolio reaches beyond major infrastructure into life science and manufacturing awards that help turn the ISS into a platform for commercially useful research."
  },
  {
    title: "Lunar and future exploration planning",
    text: "The records also connect her office to early forecast and acquisition planning around the Lunar Terrain Vehicle, showing that her work stretches from ISS operations toward future exploration capability."
  },
  {
    title: "Precision under pressure",
    text: "The contracts in her orbit are not small or symbolic. They are high-stakes, technically demanding programs where procurement discipline has to match the seriousness of the mission."
  }
];

const recordHighlights = [
  {
    amount: "$843.3M",
    title: "United States Deorbit Vehicle",
    text: "Award finalized June 26, 2024 for the spacecraft that will help guide the ISS to a controlled end-of-life reentry."
  },
  {
    amount: "$478M",
    title: "REMIS2 ceiling",
    text: "Major support vehicle for engineering services, payload integration, research mission operations, and flight hardware support."
  },
  {
    amount: "$15M",
    title: "BioServe life science platform",
    text: "Supports continuous on-orbit research capability and mission integration for life science payloads in low Earth orbit."
  },
  {
    amount: "$2.9M",
    title: "Single Crystal Diamond award",
    text: "Microgravity manufacturing work focused on highly uniform diamond materials for advanced semiconductor and microchip applications."
  }
];

const featuredPrograms = [
  {
    title: "United States Deorbit Vehicle concept",
    description:
      "A visual concept for the SpaceX vehicle tied to the ISS end-of-life mission, one of the most significant procurements in Audrey Montgomery's portfolio.",
    image: "/images/audrey-usdv-concept.jpg",
    alt: "Concept image of the SpaceX United States Deorbit Vehicle attached near the International Space Station"
  },
  {
    title: "Lunar Terrain Vehicle concept",
    description:
      "A concept rover image representing the Lunar Terrain Vehicle planning work connected to future surface exploration logistics in Audrey Montgomery's forecast portfolio.",
    image: "/images/audrey-ltv-concept.jpeg",
    alt: "Concept image of a NASA lunar terrain vehicle moving through a public event parade"
  }
];

const pathwayPoints = [
  "Mission success depends on people who can translate technical goals into executable, accountable contracts.",
  "Procurement leaders help shape what gets built, who builds it, how risks are managed, and how timelines hold together.",
  "NASA needs mathematicians, business leaders, contracting officers, policy thinkers, and program stewards alongside scientists and engineers.",
  "Audrey Montgomery's career is a reminder that some of the most important people in spaceflight are the ones who make complex missions possible behind the scenes."
];

const timeline = [
  "Supported and helped administer the JOIST contract family during a major ISS operational period.",
  "Helped manage smaller engineering, logistics, and research task orders across Johnson Space Center.",
  "Led industry-facing coordination for REMIS2, including pre-proposal and industry-day engagement.",
  "Finalized the USDV award that will shape the controlled retirement phase of the ISS.",
  "Oversaw research and in-space production awards spanning life science platforms, tissue engineering, and advanced materials."
];

export default function AudreyMontgomeryPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Employee Spotlight"
        title="Audrey Montgomery"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Starship Game", href: "/starship-game" }
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
            Audrey Montgomery stands out as one of the people helping hold the
            mission together where policy, procurement, engineering support,
            and long-horizon operational planning all meet.
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
          <h3>Leading acquisition work behind some of NASA's hardest operational problems.</h3>
          <p>
            Based on the procurement record summary provided for this site,
            Audrey Montgomery serves as a Senior Contracting Officer and
            Procurement Team Lead within the International Space Station
            Procurement Office at NASA Johnson Space Center in Houston.
          </p>
          <p>
            That is not background paperwork. It is mission-shaping work. Her
            portfolio touches station operations, commercial transition
            strategy, major engineering support vehicles, and research awards
            that help low Earth orbit become a place where science and
            manufacturing can keep advancing.
          </p>
        </div>
        <div className="spotlight-quote">
          <p>
            "Some NASA careers are visible on the pad. Others make the pad, the
            program, and the future possible. Audrey Montgomery's work belongs
            in that second category, and it matters enormously."
          </p>
          <span>Audrey Montgomery Spotlight</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Accomplishments</span>
            <h3>A record of stewardship, scale, and trust.</h3>
          </div>
          <p>
            The data paints a picture of a procurement leader trusted with
            complicated programs that affect both the current life of the ISS
            and what comes after it.
          </p>
        </div>
        <div className="callout-grid">
          {coreAccomplishments.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">By the Numbers</span>
            <h3>Real programs, real dollars, real responsibility.</h3>
          </div>
          <p>
            These figures come from the procurement summary you provided and
            help show the scale of the programs under her contracting and
            acquisition leadership.
          </p>
        </div>
        <div className="callout-grid">
          {recordHighlights.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.amount}</h4>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Programs in View</span>
            <h3>Some of the mission hardware and concepts connected to her work.</h3>
          </div>
          <p>
            Procurement leadership can feel abstract until you connect it to the
            actual vehicles, systems, and exploration plans those contracts help
            bring into being.
          </p>
        </div>
        <div className="audrey-program-grid">
          {featuredPrograms.map((item) => (
            <article key={item.title} className="resource-card audrey-program-card">
              <div className="resource-card__image audrey-program-card__image">
                <Image src={item.image} alt={item.alt} fill className="cover-image" />
              </div>
              <div className="resource-card__content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Why Her Work Matters</span>
          <h3>The mission does not move forward on hardware alone.</h3>
          <p>
            NASA needs people who can organize complexity, protect public trust,
            negotiate responsibly, and keep giant programs aligned with mission
            reality.
          </p>
          <p>
            That is worthy of praise. It takes judgment, patience, technical
            understanding, and the ability to carry enormous responsibility
            without seeking the spotlight.
          </p>
          <ul className="benefit-list">
            {pathwayPoints.map((item) => (
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

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Career Arc</span>
            <h3>A procurement path that kept expanding with the mission.</h3>
          </div>
          <p>
            The portfolio history in your PDF shows a progression from support
            contracts and task orders into major infrastructure, scientific
            research, and future-facing mission systems.
          </p>
        </div>
        <ul className="benefit-list">
          {timeline.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <PublicFooter
        title="Recognition grounded in the record."
        text="Source Context: This spotlight was expanded using the procurement summary in your provided PDF, focused on Audrey Montgomery's contracting, acquisition, and mission support record across ISS operations and related exploration programs."
      />
    </main>
  );
}
