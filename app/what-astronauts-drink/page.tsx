import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "What Astronauts Drink in Space",
  description: "Learn what astronauts drink in space, how beverages are prepared on the International Space Station, and why water recovery matters for future missions.",
  path: "/what-astronauts-drink",
  image: "/images/space-soda-recycling-loop.png",
});

const drinkTypes = [
  {
    title: "Water",
    text: "Water is the foundation. Astronauts use it for drinking, food preparation, and rehydrating beverage packets."
  },
  {
    title: "Coffee and tea",
    text: "Crew members can drink familiar hot beverages, prepared from sealed packages that receive heated water."
  },
  {
    title: "Juices and flavored drinks",
    text: "Fruit drinks, lemonade, and other powdered beverages help add variety while keeping packaging light."
  },
  {
    title: "Electrolyte-style options",
    text: "Some drinks support hydration and nutrition when schedules are busy, exercise is intense, or mission conditions require it."
  }
];

const processSteps = [
  "A drink starts as a sealed packet or pouch, often with powdered or concentrated ingredients inside.",
  "The astronaut connects the package to the station's water dispenser.",
  "Hot or room-temperature water is added, depending on the drink.",
  "The drink is mixed inside the pouch, then consumed through a straw or special opening."
];

const whyItMatters = [
  {
    title: "No open cups",
    text: "In microgravity, liquids float. Drinks need sealed containers so droplets do not drift into equipment or the cabin."
  },
  {
    title: "Every ounce matters",
    text: "Launching water from Earth is expensive and heavy, so packaging and water use have to be carefully planned."
  },
  {
    title: "Recycling is mission-critical",
    text: "The ISS Water Recovery System helps reclaim and purify water, reducing how much must be delivered from Earth."
  }
];

const sourceLinks = [
  {
    label: "NASA: Space Food Systems",
    href: "https://www.nasa.gov/directorates/esdmd/hhp/space-food-systems/"
  },
  {
    label: "NASA: Food in Space",
    href: "https://www.nasa.gov/ochmo/food-in-space/"
  },
  {
    label: "NASA: Environmental Control and Life Support Systems",
    href: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/"
  },
  {
    label: "NASA: Water Recovery Milestone on the ISS",
    href: "https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/"
  }
];

export default function WhatAstronautsDrinkPage() {
  const navLinks = [
    { label: "Back to People of NASA", href: "/" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
    { label: "Join the Team", href: "/join-the-team" },
    { label: "Honorary Crew", href: "/honorary-nasa-employees" }
  ];

  return (
    <main className="page-shell page-shell--drinks">
      <PublicHeader
        eyebrow="Space Living"
        title="Space Drinks"
        links={navLinks}
      />

      <section className="hero hero--compact hero--drinks">
        <div className="hero__backdrop">
          <Image
            src="/images/NASA-ILLPHATED.jpg"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Life in orbit</span>
            <h2>What do astronauts drink in space?</h2>
            <p>
              Mostly water, plus familiar drinks like coffee, tea, lemonade,
              juice, and other powdered beverages. The surprising part is not
              the menu. It is the system: every drink has to work in
              microgravity, protect equipment, and conserve water for the crew.
            </p>
            <div className="hero__actions">
              <Link href="#drink-menu" className="button button--primary">
                See the Drinks
              </Link>
              <Link href="#water-recovery" className="button button--ghost">
                Water Recovery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="drink-menu" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Short Answer</span>
            <h3>Astronaut drinks are ordinary choices in extraordinary packaging.</h3>
          </div>
          <p>
            Space drinks are designed around safety, storage, weight, and
            microgravity. The liquid cannot slosh around in an open cup, so
            beverages are usually prepared and consumed from sealed pouches.
          </p>
        </div>
        <div className="callout-grid">
          {drinkTypes.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt" id="how-it-works">
        <div className="section__copy">
          <span className="section__eyebrow">How It Works</span>
          <h3>The drink is built inside the package.</h3>
          <p>
            Instead of pouring liquid into a glass, astronauts add water to a
            pouch. That keeps the drink contained, lets the crew mix it safely,
            and prevents floating droplets from becoming a problem.
          </p>
          <ul className="benefit-list">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"
            alt="Earth seen from space"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section id="water-recovery" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Why Water Matters</span>
            <h3>Drinks in space are really a life-support story.</h3>
          </div>
          <p>
            The International Space Station does not treat water as disposable.
            Water is collected, processed, purified, and reused so astronauts can
            live farther from constant resupply.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          {whyItMatters.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">The Big Idea</span>
          <h3>Space drinks show how small comforts depend on serious engineering.</h3>
          <p>
            A pouch of coffee on orbit may feel ordinary, but it depends on
            spacecraft life support, food science, packaging design, crew
            routines, and water recovery. That is the everyday beauty of NASA
            work: even simple human needs become mission systems.
          </p>
          <p>
            The more NASA learns to recover water and support crews in orbit,
            the better prepared future explorers will be for the Moon, Mars, and
            longer missions beyond Earth.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Sources</span>
          <h3>Learn more from NASA</h3>
          <ul className="benefit-list">
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <Link href={source.href}>{source.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PublicFooter
        title="Hydration for Discovery"
        text="Every drop of water recycled on the ISS is a step toward sustainable exploration of the Moon, Mars, and beyond."
      />
    </main>
  );
}
