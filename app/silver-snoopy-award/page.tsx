import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "The Silver Snoopy Award: NASA's Honor for the Unsung Heroes",
  description: "Since 1968, NASA astronauts have personally presented the Silver Snoopy to contractors and employees who go beyond what the job requires to keep crews alive. Only 1% qualify each year.",
  path: "/silver-snoopy-award",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80",
});

const stats = [
  { value: "1968", label: "Year established" },
  { value: "15,000+", label: "Recipients since founding" },
  { value: "1%", label: "Max of eligible workforce per year" },
  { value: "Flown in space", label: "Every sterling silver pin" },
];

const criteria = [
  {
    number: "01",
    title: "Beyond the job description",
    text: "Significant contributions that go above and beyond normal requirements in support of human spaceflight programs.",
  },
  {
    number: "02",
    title: "Single defining achievement",
    text: "A single, standout achievement that directly advances the goals of a human spaceflight program.",
  },
  {
    number: "03",
    title: "Robotic mission support",
    text: "Exemplary support of robotic precursor or companion missions that enable or enhance human spaceflight.",
  },
  {
    number: "04",
    title: "Major cost savings",
    text: "Documented cost savings or cost avoidance that materially benefit a spaceflight program.",
  },
  {
    number: "05",
    title: "Quality, reliability, and safety",
    text: "Program modifications that measurably increase quality, reliability, safety, efficiency, or mission performance.",
  },
  {
    number: "06",
    title: "Operational improvements",
    text: "Operational innovations that enhance team efficiency or mission performance in meaningful ways.",
  },
  {
    number: "07",
    title: "Process breakthroughs",
    text: "Significant process improvements with lasting, positive impact on spaceflight programs.",
  },
];

const awardComponents = [
  {
    icon: "🥈",
    title: "A pin that left Earth",
    text: "The sterling silver lapel pin — hand-drawn by Charles Schulz himself — is flown aboard a NASA mission before it is ever presented. Every recipient holds a piece of hardware that has been to space.",
  },
  {
    icon: "👨‍🚀",
    title: "Presented by an astronaut",
    text: "An active or former NASA astronaut personally presents the award. Not a manager, not a director. The people whose lives depend on your work are the ones who say thank you.",
  },
  {
    icon: "📜",
    title: "Signed mission letter",
    text: "A commendation letter from the presenting astronaut identifies the exact mission on which the pin flew, tying the physical object to a moment in space history.",
  },
  {
    icon: "🖼️",
    title: "Framed certificate",
    text: "A signed, framed certificate and an authenticity letter documenting the pin's complete flight history. A permanent record of what was done and why it mattered.",
  },
];

const roles = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    alt: "Engineer working on hardware",
    role: "Hardware Engineers",
    text: "The technicians who build, wire, and certify the systems that keep crews breathing, flying, and coming home. A single missed torque spec can end a mission. They do not miss.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Circuit board close-up representing software and electronics work",
    role: "Software Developers",
    text: "The programmers who wrote the guidance code for Apollo did it on punch cards. Today their successors work on avionics, life support algorithms, and crew interface systems where every line matters.",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    alt: "Person working at desk representing mission operations",
    role: "Mission Controllers",
    text: "Flight controllers, flight surgeons, and support teams who watch the telemetry feeds during every second of a mission and have the authority to abort if something looks wrong.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    alt: "Quality assurance and inspection work",
    role: "Quality Assurance",
    text: "QA inspectors and safety reviewers who read through test reports and launch readiness data looking for the anomaly everyone else missed. They are often the last line of defense.",
  },
];

const timeline = [
  {
    year: "1961–1966",
    title: "Mercury and Gemini prove the concept",
    text: "NASA's early human spaceflight programs demonstrated that thousands of contractors and civil servants, not just astronauts, determined whether missions succeeded or failed.",
  },
  {
    year: "1967",
    title: "Apollo 1 changes everything",
    text: "The loss of Gus Grissom, Ed White, and Roger Chaffee in a launch pad fire on January 27, 1967 made safety culture a defining mission. NASA needed a way to keep that urgency alive across hundreds of thousands of workers.",
  },
  {
    year: "1968",
    title: "The award is created",
    text: "Al Chop, Director of Public Affairs at the Manned Spacecraft Center, proposed featuring Snoopy as NASA's safety mascot. Charles Schulz personally drew the pin design and the promotional artwork, donating his work at no cost. The award launched the same year.",
  },
  {
    year: "1969",
    title: "Apollo 10 names its lunar module Snoopy",
    text: "In tribute to NASA's beloved safety mascot, the Apollo 10 crew named their lunar module Snoopy and their command module Charlie Brown. The LM descended to within 14.4 km of the lunar surface in the final dress rehearsal before Apollo 11.",
  },
  {
    year: "1969–present",
    title: "The culture takes hold",
    text: "Through Apollo, Skylab, the Space Shuttle era, ISS construction, and beyond, the Silver Snoopy has been presented to workers across every NASA center and hundreds of contractor companies. Since 1968, more than 15,000 people have received it.",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Women at NASA", href: "/women-at-nasa" },
  { label: "Unflown Concepts", href: "/unflown-nasa-concepts" },
  { label: "Join the Team", href: "/join-the-team" },
];

const sourceLinks = [
  { label: "NASA: Silver Snoopy Award official page", href: "https://www.nasa.gov/space-flight-awareness/silver-snoopy-award/" },
  { label: "Wikipedia: Silver Snoopy Award", href: "https://en.wikipedia.org/wiki/Silver_Snoopy_award" },
  { label: "NASA History: Space Flight Awareness Program", href: "https://history.nasa.gov/" },
];

export default function SilverSnoopyAwardPage() {
  return (
    <main className="page-shell page-shell--snoopy">
      <PublicHeader
        eyebrow="Recognition"
        title="Silver Snoopy Award"
        links={navLinks}
      />

      {/* Hero */}
      <section className="snoopy-hero">
        <div className="snoopy-hero__bg">
          <Image
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            className="cover-image"
          />
          <div className="snoopy-hero__overlay" />
        </div>
        <div className="snoopy-hero__content">
          <span className="pill">NASA Safety &amp; Excellence</span>
          <h2>The honor the astronauts give<br className="snoopy-hero__br" /> to the people who save their lives.</h2>
          <p>
            Since 1968, NASA has recognized contractors and civil servants who go
            beyond what the job requires to keep crews alive and missions on track.
            Only 1 percent of eligible workers receive it in any given year. The pin
            they hold has actually been to space.
          </p>
          <div className="hero__actions">
            <Link href="#what-it-is" className="button button--primary">
              What It Is
            </Link>
            <Link href="#timeline" className="button button--ghost">
              The History
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="snoopy-stats">
        {stats.map((s) => (
          <div key={s.label} className="snoopy-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* What it is */}
      <section id="what-it-is" className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">The Award</span>
          <h3>The highest honor the astronaut corps can give to the people behind the mission.</h3>
          <p>
            Most NASA awards come from management. The Silver Snoopy is different.
            It comes from the astronauts themselves. Active and former crew members
            personally nominate and present the award to contractors and civil
            servants who have made an extraordinary contribution to human spaceflight
            safety or mission success.
          </p>
          <p>
            That distinction matters. These are the people whose lives are directly
            at stake. When they say someone went above and beyond to protect a
            mission, it means something different than when an executive says it.
          </p>
          <p>
            The award is not given for years of service, for retirement, or for
            seniority. It recognizes specific contributions. Recent work within the
            last three years is required. It cannot be awarded posthumously. It is
            given once per lifetime.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=900&q=80"
            alt="Rocket launch at night, engines burning"
            fill
            className="cover-image"
          />
        </div>
      </section>

      {/* Award components */}
      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What Recipients Receive</span>
            <h3>A pin that has been to space. Presented in person by an astronaut.</h3>
          </div>
          <p>
            The physical award is unusual. Every piece is deliberately designed to
            connect the recipient to the missions they made possible.
          </p>
        </div>
        <div className="callout-grid callout-grid--four">
          {awardComponents.map((item) => (
            <article key={item.title} className="callout-card snoopy-award-card">
              <div className="snoopy-award-card__icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Full-bleed Apollo 10 image */}
      <section className="snoopy-feature-image">
        <Image
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1800&q=80"
          alt="Deep space stars and cosmos"
          fill
          className="cover-image"
        />
        <div className="snoopy-feature-image__overlay" />
        <div className="snoopy-feature-image__content">
          <span className="section__eyebrow">Apollo 10 · May 1969</span>
          <h3>The crew named their lunar module Snoopy.</h3>
          <p>
            Apollo 10 astronauts Tom Stafford, John Young, and Gene Cernan named
            their lunar module Snoopy and their command module Charlie Brown in
            tribute to NASA's safety mascot. The LM descended to within 14.4
            kilometers of the Moon's surface, closer than any human had ever
            been. One year after the award was created, Snoopy flew to the Moon.
          </p>
        </div>
      </section>

      {/* Criteria */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Seven Criteria</span>
            <h3>Recipients must meet at least two. Most work goes unrecognized. This catches the exceptional.</h3>
          </div>
          <p>
            Eligibility is strict. The award applies to full-time NASA employees
            and contractors. Senior managers at the GS-14/15 supervisory level or
            equivalent are typically excluded. No more than 1 percent of the
            eligible workforce may receive it in any single year.
          </p>
        </div>
        <div className="snoopy-criteria-grid">
          {criteria.map((item) => (
            <article key={item.number} className="snoopy-criterion">
              <span className="snoopy-criterion__number">{item.number}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Who gets it — roles imagery grid */}
      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Who Receives It</span>
            <h3>The people you never see on launch day.</h3>
          </div>
          <p>
            The Silver Snoopy is for the people behind the mission. Not the
            astronauts. Not the directors. The engineers, technicians, programmers,
            quality reviewers, and mission controllers whose names never appear in
            the news.
          </p>
        </div>
        <div className="snoopy-roles-grid">
          {roles.map((r) => (
            <article key={r.role} className="snoopy-role-card">
              <div className="snoopy-role-card__image">
                <Image src={r.image} alt={r.alt} fill className="cover-image" />
                <div className="snoopy-role-card__overlay" />
                <span className="snoopy-role-card__role">{r.role}</span>
              </div>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">History</span>
            <h3>From Apollo 1 to the present day.</h3>
          </div>
          <p>
            The Silver Snoopy was born out of tragedy and built into one of the
            most enduring safety cultures in any engineering organization in history.
          </p>
        </div>
        <div className="snoopy-timeline">
          {timeline.map((item) => (
            <div key={item.year} className="snoopy-timeline__item">
              <div className="snoopy-timeline__year">{item.year}</div>
              <div className="snoopy-timeline__body">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big image break — Charles Schulz */}
      <section className="section section--split section--alt">
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=80"
            alt="Planetary surface representing space exploration"
            fill
            className="cover-image"
          />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Charles Schulz</span>
          <h3>The Peanuts creator drew the pin himself. And donated every bit of it.</h3>
          <p>
            When Al Chop at the Manned Spacecraft Center approached Charles Schulz
            about using Snoopy as NASA's safety mascot, Schulz said yes immediately.
            Then he went further. He personally drew the sterling silver pin design.
            He created the promotional artwork. He worked with United Feature
            Syndicate to grant NASA full use of the character.
          </p>
          <p>
            All of it was donated. No licensing fee. No royalties. Schulz believed
            in what NASA was doing and believed the people who worked there
            deserved something real.
          </p>
          <p>
            The result is a pin that carries the signature of one of the most beloved
            cartoonists in American history and has flown in space. That combination
            has never existed in any other award, from any other organization.
          </p>
        </div>
      </section>

      {/* Image gallery */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Mission Context</span>
            <h3>Every launch is the product of hundreds of thousands of decisions.</h3>
          </div>
          <p>
            The Silver Snoopy exists because NASA understands what the numbers
            really mean. The gap between a successful mission and a catastrophic one
            is often a single decision made by a single person working a late shift
            in a facility most people have never heard of.
          </p>
        </div>
        <div className="snoopy-gallery">
          <div className="snoopy-gallery__item snoopy-gallery__item--tall">
            <Image
              src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80"
              alt="Rocket launch at night"
              fill
              className="cover-image"
            />
            <div className="snoopy-gallery__caption">Every launch rests on years of decisions made by people who will never be on board.</div>
          </div>
          <div className="snoopy-gallery__item">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
              alt="Earth's atmosphere from orbit"
              fill
              className="cover-image"
            />
            <div className="snoopy-gallery__caption">Earth from orbit. Getting here is the job.</div>
          </div>
          <div className="snoopy-gallery__item">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Engineer at work"
              fill
              className="cover-image"
            />
            <div className="snoopy-gallery__caption">Hardware that flies is hardware someone built, checked, and signed off on.</div>
          </div>
          <div className="snoopy-gallery__item">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Electronic components and circuits"
              fill
              className="cover-image"
            />
            <div className="snoopy-gallery__caption">Avionics, life support, guidance. Millions of components, zero tolerance for failure.</div>
          </div>
          <div className="snoopy-gallery__item snoopy-gallery__item--wide">
            <Image
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80"
              alt="Stars and deep space"
              fill
              className="cover-image"
            />
            <div className="snoopy-gallery__caption">The destination. The reason every safety review, every quality check, every late night matters.</div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="snoopy-closing">
        <div className="snoopy-closing__bg">
          <Image
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            className="cover-image"
          />
          <div className="snoopy-closing__overlay" />
        </div>
        <div className="snoopy-closing__content">
          <span className="section__eyebrow">Why It Matters</span>
          <h3>
            15,000 people over 56 years. Each one of them kept someone alive.
          </h3>
          <p>
            The Silver Snoopy does not exist to make employees feel good about
            their jobs. It exists because NASA learned, in the worst possible way,
            that safety culture cannot be assumed. It has to be built, recognized,
            and reinforced over decades.
          </p>
          <p>
            The 1 percent rule is intentional. If the award went to 10 percent of
            the workforce, it would become a participation trophy. At 1 percent, it
            remains a signal: this person did something genuinely extraordinary. The
            workforce notices who gets it. And they understand what it takes.
          </p>
          <p>
            The pin being flown in space before it is presented is not a marketing
            detail. It is a statement. The person receiving it is being told: you
            contributed to this mission. You were part of it, even if you never left
            the ground.
          </p>
          <div className="hero__actions">
            <Link href="https://www.nasa.gov/space-flight-awareness/silver-snoopy-award/" target="_blank" rel="noreferrer" className="button button--primary">
              NASA Official Page
            </Link>
            <Link href="/join-the-team" className="button button--ghost">
              Explore NASA Careers
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="section">
        <ul className="source-links">
          {sourceLinks.map((s) => (
            <li key={s.href} className="source-links__item">
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <PublicFooter
        title="Recognition grounded in consequence."
        text="The Silver Snoopy Award page was written using publicly available information from NASA.gov and Wikipedia. Award criteria, history, and statistics are sourced from NASA's official Space Flight Awareness program documentation."
      />
    </main>
  );
}
