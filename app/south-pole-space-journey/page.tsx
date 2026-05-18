import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

export const metadata: Metadata = {
  title: "South Pole Space Journey",
  description:
    "A hypothetical learn page exploring what happens if a space shuttle with unlimited fuel flies straight out from Earth's South Pole into space."
};

const directionExplainer = [
  {
    title: "Gravity defines down on Earth",
    text: "When you stand at the South Pole, down means toward Earth's center and up means away from the planet."
  },
  {
    title: "Maps train your brain",
    text: "Most maps put north at the top and south at the bottom, so it feels natural to imagine the South Pole as the bottom edge of the world."
  },
  {
    title: "Space has no universal top or bottom",
    text: "Once you leave Earth, those map directions stop being cosmic rules. They become local ways of describing orientation."
  }
];

const travelStages = [
  {
    title: "Leaving Earth",
    text: "With unlimited fuel, the shuttle would not stay trapped in low orbit. If it points straight away from Earth from the South Pole side, it would keep accelerating outward instead of circling."
  },
  {
    title: "Skipping the Solar System pancake",
    text: "The planets mostly orbit in a relatively flat plane called the ecliptic. A trajectory aimed straight out from the South Pole is more like shooting perpendicular to that pancake than driving through it."
  },
  {
    title: "Entering interstellar space",
    text: "Once the Sun becomes just another bright star behind you, the trip becomes a long drift through the Milky Way's outskirts and then beyond the galaxy itself."
  },
  {
    title: "Crossing into the cosmic web",
    text: "Far beyond nearby stars and dwarf galaxies, the universe starts to read less like a solar system and more like a vast web of galaxies, filaments, and dark voids."
  }
];

const itinerary = [
  {
    stop: "The South Celestial Pole region",
    distance: "roughly hundreds of light-years",
    detail:
      "Your line of travel would point toward the southern sky, near Sigma Octantis, a dim star often nicknamed the South Pole Star."
  },
  {
    stop: "The Magellanic Clouds",
    distance: "about 160,000 to 200,000 light-years",
    detail:
      "These dwarf companion galaxies to the Milky Way sit in the southern sky and become part of the first truly galactic-scale scenery on the route."
  },
  {
    stop: "The Sculptor Void",
    distance: "millions of light-years",
    detail:
      "Past the nearby satellite galaxies you start entering emptier regions where galaxies are sparse and darkness becomes the main landscape."
  },
  {
    stop: "The cosmic web",
    distance: "hundreds of millions to billions of light-years",
    detail:
      "Eventually the emptiness gives way to new galaxy filaments, clusters, and structures that are not part of our local galactic neighborhood."
  },
  {
    stop: "The edge of the observable universe",
    distance: "about 46.5 billion light-years in one direction",
    detail:
      "This is not a wall. It is the limit of how far light has had time to travel to us since the universe began."
  }
];

const takeaways = [
  "If you mean literally down from the South Pole, you crash into Earth. Gravity wins.",
  "If you mean straight out into space from the South Pole side of Earth, you head away from the planet and out of the Solar System.",
  "You do not run into the Sun or most planets because you are leaving the orbital plane instead of traveling through it.",
  "Eventually you do pass things, but they are stars, dwarf galaxies, voids, and cosmic structure, not a hidden planet below the map."
];

const sourceLinks = [
  {
    label: "NASA: How Big is Space?",
    href: "https://www.nasa.gov/science-research/astrophysics/how-big-is-space-we-asked-a-nasa-expert-episode-61"
  },
  {
    label: "NASA: What is the Universe?",
    href: "https://science.nasa.gov/exoplanets/what-is-the-universe/"
  },
  {
    label: "NASA: Large Magellanic Cloud",
    href: "https://science.nasa.gov/asset/hubble/swarm-of-glittering-stars-in-the-large-magellanic-cloud/"
  },
  {
    label: "NASA Swift: Large and Small Magellanic Clouds",
    href: "https://svs.gsfc.nasa.gov/11293/"
  }
];

export default function SouthPoleSpaceJourneyPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Learn"
        title="If You Fly Straight Down from the South Pole"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Space FAQs", href: "/space-faqs" },
          { label: "Europa Hopper", href: "/europa-hopper-mission" }
        ]}
      />

      <section className="hero hero--compact">
        <div className="hero__backdrop">
          <Image
            src="/images/south-pole-cosmic-map.png"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Hypothetical learning subject</span>
            <h2>What if a space shuttle had unlimited fuel and flew straight down from the South Pole?</h2>
            <p>
              It sounds like a map question, but it turns into a gravity
              question, then an orbit question, and finally a universe-scale
              question. The short answer is simple: if you leave Earth from the
              South Pole side and keep going, down stops meaning down and
              becomes out.
            </p>
            <div className="hero__actions">
              <Link href="#short-answer" className="button button--primary">
                Read the Short Answer
              </Link>
              <Link href="#cosmic-road-trip" className="button button--ghost">
                Follow the Route
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="short-answer" className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Short Answer</span>
          <h3>It depends on what you mean by down.</h3>
          <p>
            If you mean literally down while standing at the South Pole, the
            shuttle would head into the ice and toward Earth's center. That is
            what gravity means by down.
          </p>
          <p>
            If you mean straight out from the South Pole side of the planet,
            into the sky that sits over Antarctica, then the shuttle leaves
            Earth, misses most of the Solar System, and heads into deep space.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="/images/south-pole-cosmic-map.png"
            alt="Illustrated route from Earth's South Pole out through interstellar space, the Magellanic Clouds, the Sculptor Void, and toward the observable universe"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Why It Feels Confusing</span>
            <h3>Humans are flat-surface creatures trying to think in spherical gravity.</h3>
          </div>
          <p>
            The question feels slippery because our brains mix together three
            different ideas: the direction gravity pulls, the way globes are
            drawn, and the way empty space actually works.
          </p>
        </div>
        <div className="callout-grid">
          {directionExplainer.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cosmic-road-trip" className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">The Cosmic Road Trip</span>
          <h3>If you aim away from Earth from the South Pole side, the route bends from local to cosmic.</h3>
          <p>
            First you leave the atmosphere. Then you leave Earth orbit. Then
            you leave the Solar System by heading out of the ecliptic instead
            of across it. After that, the destinations stop being planets and
            start becoming stars, dwarf galaxies, dark voids, and the giant
            web-like structure of the universe.
          </p>
          <ul className="benefit-list">
            {travelStages.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="section__visual">
          <Image
            src="/images/south-pole-cosmic-edge.png"
            alt="Concept art of a space shuttle drifting through deep dark space toward the Sculptor Void"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Eventually, Yes</span>
            <h3>You would pass things. Just not the things maps teach you to expect.</h3>
          </div>
          <p>
            The route out of Earth's southern sky is not a straight shot to a
            secret planet. It is more like an elevator ride out of local space
            and into bigger and bigger cosmic structures.
          </p>
        </div>
        <div className="europa-hopper__table-wrap">
          <table className="europa-hopper__table">
            <thead>
              <tr>
                <th>Waypoint</th>
                <th>Approximate distance</th>
                <th>What it means</th>
              </tr>
            </thead>
            <tbody>
              {itinerary.map((item) => (
                <tr key={item.stop}>
                  <td>{item.stop}</td>
                  <td>{item.distance}</td>
                  <td>{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band__image">
          <Image
            src="/images/south-pole-cosmic-edge.png"
            alt=""
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Big Idea</span>
          <h3>Once you leave Earth, down is no longer a place. It is just the last local rule you remember.</h3>
          <p>
            That is the real lesson hiding inside the question. Gravity gives
            direction meaning nearby. But the farther you travel, the more the
            universe stops behaving like a map and starts behaving like a web
            of structures suspended in almost unimaginable emptiness.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Takeaways</span>
            <h3>The clean version to keep in your head</h3>
          </div>
        </div>
        <ul className="benefit-list">
          {takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Reference points for the scale</h3>
          </div>
        </div>
        <ul className="benefit-list">
          {sourceLinks.map((source) => (
            <li key={source.href}>
              <Link href={source.href}>{source.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Learn Pages</span>
          <h3>Good space questions get bigger the longer you follow them.</h3>
          <p>
            A simple South Pole thought experiment turns into a lesson about
            gravity, orbital planes, dwarf galaxies, cosmic voids, and the edge
            of the observable universe.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/space-faqs">Space FAQs</Link>
          <Link href="/what-astronauts-drink">Space Drinks</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
