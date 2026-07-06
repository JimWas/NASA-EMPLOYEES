import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "Jim Washkau",
  description:
    "A profile page for aspiring NASA employee Jim Washkau, highlighting his lifelong interest in space, government contracting experience, and more than a decade of business, marketing, and consulting work.",
  path: "/jim-washkau",
  image: "/images/jim-washkau/mission-control-center.png"
});

const headlineStats = [
  {
    label: "Professional experience",
    value: "10+ years",
    note: "Business, marketing, client strategy, and consulting-style work across agencies, venues, clinics, and public-facing organizations."
  },
  {
    label: "Government contracting",
    value: "GSA + RFPs",
    note: "Supported GSA operations, RFQs, RFP responses, and federal customer coordination including the Library of Congress and VA hospitals."
  },
  {
    label: "Budget ownership",
    value: "$1M+",
    note: "Managed a seven-figure annual marketing budget at Visit Philadelphia and large multi-client campaign spend in later roles."
  }
];

const nasaFitCards = [
  {
    title: "Government process awareness",
    text: "Jim has worked around procurement, federal customers, RFQs, RFPs, pricing coordination, and the kind of detail-heavy documentation that matters in public-sector work."
  },
  {
    title: "Cross-functional coordination",
    text: "His background includes keeping vendors, agencies, internal teams, and clients aligned across deadlines, deliverables, and changing priorities."
  },
  {
    title: "Communications under responsibility",
    text: "Marketing and consulting work taught him how to explain complicated work clearly, protect trust, and stay organized when money, timing, and public visibility are all on the line."
  },
  {
    title: "Mission-facing business discipline",
    text: "NASA needs more than engineers and astronauts. It also needs people who can manage operations, support contracts, communicate well, and help ambitious programs move cleanly from idea to execution."
  }
];

const experienceTimeline = [
  {
    role: "Digital Marketing Manager",
    organization: "Sisu Aesthetic Clinic",
    dates: "2023 to 2024",
    text: "Led paid advertising implementation, worked with outside vendors, negotiated contracts, and helped keep campaign execution moving inside a small in-house team."
  },
  {
    role: "Campaign Manager / Strategic Account Manager",
    organization: "SRAX",
    dates: "2021 to 2022",
    text: "Managed a portfolio of more than 20 clients, coordinated an international team of marketers, and oversaw hundreds of campaigns per month with more than $300,000 in monthly spend."
  },
  {
    role: "Social Media Marketing Manager",
    organization: "Visit Philadelphia",
    dates: "2015 to 2020",
    text: "Managed a marketing budget above $1 million annually, supported tourism growth, coordinated across departments and vendors, and helped produce measurable booking growth."
  },
  {
    role: "Digital Marketing Manager",
    organization: "The Mann Center for the Performing Arts",
    dates: "2014 to 2015",
    text: "Handled the web presence, digital campaigns, fundraising support, design needs, and database work for a major outdoor venue with many internal and external stakeholders."
  },
  {
    role: "Government Administrator and Sales / Marketing Assistant",
    organization: "Swets Information Services",
    dates: "2012 to 2014",
    text: "Oversaw GSA-related operations, scouted RFQs, supported RFP responses, worked with publishers on pricing and order issues, and served federal customers including the Library of Congress and Veterans Administration hospitals."
  }
];

const whyNasaPoints = [
  "A long-running personal interest in space, launches, exploration, and the people behind the missions.",
  "A practical understanding that NASA is not only astronauts and rockets. It is also contracts, coordination, communications, budgets, schedules, and public trust.",
  "A belief that supporting the mission can happen from many professional angles, including procurement, partnerships, strategy, operations support, and storytelling."
];

const sourceNotes = [
  "Career timeline and work details are based on the resume provided by Jim Washkau.",
  "This page presents Jim as an aspiring NASA employee and mission-aligned professional, not as a current NASA employee or official representative."
];

export default function JimWashkauPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Women at NASA", href: "/women-at-nasa" },
    { label: "Join the Team", href: "/join-the-team" },
    { label: "Honorary Crew", href: "/honorary-nasa-employees" }
  ];

  return (
    <main className="page-shell page-shell--jim">
      <PublicHeader
        eyebrow="Aspiring NASA Employee"
        title="Jim Washkau"
        links={navLinks}
      />

      <section className="spotlight-hero">
        <div className="spotlight-hero__image">
          <Image
            src="/images/jim-washkau/mission-control-center.png"
            alt="Jim Washkau standing at NASA Mission Control Center"
            fill
            priority
            className="cover-image"
          />
        </div>
        <div className="spotlight-hero__copy">
          <span className="section__eyebrow">Aspiring NASA Employee</span>
          <h2>Jim Washkau</h2>
          <p>
            Jim Washkau has carried an interest in space for years and brings a
            practical professional background that could support NASA from the
            business side of the mission. His experience includes government
            contracting exposure, more than a decade of marketing and
            consulting-style work, vendor coordination, budget ownership, and
            the kind of organized follow-through large programs depend on.
          </p>
          <div className="hero__actions">
            <Link href="#why-nasa" className="button button--primary">
              Why NASA
            </Link>
            <Link href="#experience" className="button button--ghost">
              Relevant Experience
            </Link>
          </div>
          <div className="spotlight-stat-grid">
            {headlineStats.map((item) => (
              <article key={item.label} className="stat-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-nasa" className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Why NASA</span>
          <h3>For Jim, the draw is not just the spectacle of space. It is the seriousness of the mission.</h3>
          <p>
            NASA represents a kind of work that asks people to think beyond
            themselves. It is technical, public, disciplined, and generational.
            That matters to Jim because his interest in space has always been
            tied not only to rockets and destinations, but to the people,
            systems, and decisions that make difficult things possible.
          </p>
          <p>
            His path into the mission is not through claiming to be something he
            is not. It is through offering the skills he has actually built:
            government-facing process experience, business judgment,
            communications discipline, and the ability to help complex work stay
            aligned.
          </p>
          <ul className="benefit-list">
            {whyNasaPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__visual">
          <Image
            src="/images/jim-washkau/historic-mission-control.png"
            alt="Jim Washkau inside historic mission control"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">NASA Fit</span>
            <h3>Experience that translates to the real work around the mission.</h3>
          </div>
          <p>
            NASA needs extraordinary technical talent, but it also needs people
            who can coordinate stakeholders, support federal processes, keep
            programs organized, and communicate clearly when the work gets
            complicated.
          </p>
        </div>
        <div className="callout-grid">
          {nasaFitCards.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Career Background</span>
          <h3>A career built around clients, budgets, vendors, deadlines, and trust.</h3>
          <p>
            Across healthcare, tourism, live events, SaaS-style advertising, and
            government-adjacent work, Jim has spent years helping organizations
            move strategy into execution. That includes campaign leadership,
            stakeholder management, procurement-adjacent coordination, and
            solving practical problems when multiple teams have to stay aligned.
          </p>
          <p>
            The environment changed from role to role, but the pattern stayed
            consistent: understand what needs to happen, keep people organized,
            communicate clearly, and help the work land.
          </p>
        </div>
        <div className="jim-timeline">
          {experienceTimeline.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="jim-timeline__item">
              <span>{item.dates}</span>
              <h4>{item.role}</h4>
              <strong>{item.organization}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Space Interest</span>
            <h3>This is not a recent branding exercise. Space has been part of the story for a long time.</h3>
          </div>
          <p>
            The strongest throughline in Jim&apos;s page is simple: the interest
            is real. It shows up in childhood imagination, present-day visits to
            NASA spaces, and the personal habit of going outside and looking up.
          </p>
        </div>
        <div className="jim-gallery">
          <article className="jim-gallery__card">
            <div className="jim-gallery__image">
              <Image
                src="/images/jim-washkau/space-journey-collage.png"
                alt="Jim Washkau collage showing childhood and later space-related moments"
                fill
                className="cover-image"
              />
            </div>
            <div className="jim-gallery__copy">
              <h4>From childhood fascination to adult follow-through</h4>
              <p>
                The interest in space has stayed steady across time, not as an
                abstract idea but as something personal and motivating.
              </p>
            </div>
          </article>
          <article className="jim-gallery__card">
            <div className="jim-gallery__image">
              <Image
                src="/images/jim-washkau/telescope.jpg"
                alt="Jim Washkau using a telescope at night"
                fill
                className="cover-image"
              />
            </div>
            <div className="jim-gallery__copy">
              <h4>Looking up is part of the habit</h4>
              <p>
                Space interest is not only professional ambition here. It is
                also curiosity, observation, and a real desire to stay connected
                to the sky itself.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="feature-band jim-feature-band">
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Closing Thought</span>
          <h3>NASA needs people who can help complex work hold together.</h3>
          <p>
            Jim Washkau&apos;s page is really about that idea. The mission needs
            astronauts, engineers, and scientists, but it also needs people who
            can support public-sector work responsibly, manage details, align
            teams, and help large efforts move with clarity and discipline.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Notes</span>
            <h3>Page context</h3>
          </div>
          <p>
            This page is written as a mission-aligned profile using resume
            information and photos provided locally for this site.
          </p>
        </div>
        <div className="source-links">
          {sourceNotes.map((item) => (
            <div key={item} className="source-links__item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <PublicFooter
        title="Mission-Aligned Talent"
        text="Space programs run on technical excellence, but they also run on people who can organize the work, support the process, and stay faithful to the mission."
      />
    </main>
  );
}
