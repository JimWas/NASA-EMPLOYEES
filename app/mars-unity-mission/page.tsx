import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

export const metadata: Metadata = {
  title: "Mars Unity Mission",
  description:
    "A visionary Mars mission concept about uniting rover heritage, Starhopper symbolism, and humanity's perseverance, love, and relentlessness."
};

const missionRequirements = [
  {
    title: "A precise landing architecture",
    text: "A mission like this would need repeatable heavy-cargo landing on Mars, surface navigation, hazard avoidance, and the ability to place equipment close enough to heritage sites without damaging them."
  },
  {
    title: "Long-range surface mobility",
    text: "The rovers are spread across different Martian regions. Unifying their story would require autonomous haulers, scout drones, mapping networks, and patient traverse planning across hostile terrain."
  },
  {
    title: "Power that lasts",
    text: "Mars dust, cold nights, and distance from Earth punish fragile systems. The mission would need durable solar, nuclear, battery, and thermal systems designed to operate for years."
  },
  {
    title: "Communication without panic",
    text: "Every command would cross minutes of signal delay. The crew, robots, and orbiters would need resilient relay networks and enough autonomy to keep working when Earth is only listening."
  },
  {
    title: "Respect for planetary heritage",
    text: "The old rovers are not junk. They are human artifacts. Visiting, preserving, or relocating them would require strict contamination control and a deep respect for what they represent."
  },
  {
    title: "A reason bigger than technology",
    text: "The mission would only be worth doing if it served science, memory, cooperation, and future life. The machines matter because of the human promises they carried."
  }
];

const roverLegacy = [
  "Sojourner proved that a tiny rover could move on another world.",
  "Spirit and Opportunity turned survival into a form of poetry.",
  "Curiosity made Mars feel like a place we could study with patience and confidence.",
  "Perseverance carries the search for ancient life and the first steps toward returning Mars samples.",
  "Ingenuity showed that flight on Mars was not fantasy, but engineering discipline made visible.",
  "Starhopper represents the rough, imperfect test stand energy behind every impossible next step."
];

const milestones = [
  "Map and protect every rover heritage site.",
  "Land cargo, power, habitats, mobility systems, and communication relays.",
  "Create a surface route network connecting the old exploration story to the new one.",
  "Send robots first, then people only when the safety case is honest.",
  "Build a Mars archive where each rover's data, parts, tracks, and story can be preserved.",
  "Use the mission to teach Earth that progress is not one nation, company, or generation. It is a relay."
];

export default function MarsUnityMissionPage() {
  return (
    <main className="page-shell page-shell--mars-unity">
      <PublicHeader
        eyebrow="Future Mars"
        title="Mars Unity"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Mars Relay", href: "/mars-relay" },
          { label: "ISS Docking", href: "/iss-docking-simulator" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" }
        ]}
      />

      <section className="mars-unity-hero">
        <Image
          src="/images/mars-unity-mission.jpg"
          alt="Concept artwork of Starhopper and Mars rovers gathered on the Martian surface"
          fill
          priority
          className="cover-image"
        />
        <div className="mars-unity-hero__overlay">
          <span className="section__eyebrow">Vision Concept</span>
          <h2>One day, Mars may become the place where all our first attempts meet.</h2>
          <p>
            This page imagines a future mission that honors every rover, every
            test article, every failure, and every person who refused to stop
            reaching. Not as conquest. As remembrance, stewardship, and proof
            that humanity can be relentless without losing its tenderness.
          </p>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">The Idea</span>
          <h3>A Mars heritage mission to unify machines, memory, and meaning.</h3>
          <p>
            The image is not a current mission plan. It is a vision: Starhopper
            standing like a weathered monument beside the rover family, with
            the machines of exploration gathered as if Mars itself has become a
            museum of human perseverance.
          </p>
          <p>
            To make something like this real, humanity would first have to learn
            how to land heavy equipment safely, protect historic spacecraft,
            operate across long distances, and build systems that can survive
            years of cold, dust, radiation, delay, and uncertainty.
          </p>
        </div>
        <div className="mars-unity-statement">
          <p>
            The significance is not that metal reached Mars. The significance
            is that love did: love of knowledge, love of future generations,
            love of the fragile light we carry together.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What It Would Take</span>
            <h3>The romantic version only works if the engineering is honest.</h3>
          </div>
          <p>
            A unifying Mars mission would be less like a photo opportunity and
            more like building a durable civilization-grade logistics chain on
            another planet.
          </p>
        </div>
        <div className="callout-grid">
          {missionRequirements.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">The Rover Lineage</span>
          <h3>Each rover is a chapter in humanity learning how not to quit.</h3>
          <ul className="benefit-list">
            {roverLegacy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Mission Path</span>
          <h3>How the concept could become real</h3>
          <ul className="benefit-list">
            {milestones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feature-band mars-unity-band">
        <div className="feature-band__image">
          <Image
            src="/images/mars-unity-mission.jpg"
            alt=""
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Why It Matters</span>
          <h3>It would show that our species is not only clever. We are loyal to meaning.</h3>
          <p>
            We go back because memory matters. We build again because failure
            taught us. We preserve what came before because progress without
            gratitude becomes empty. A mission like this would say that
            exploration is not escape from Earth. It is Earth learning to become
            worthy of the future.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Mars as a Mirror</span>
          <h3>The mission is really about us.</h3>
          <p>
            The rovers, Starhopper, and future crews all point to the same
            truth: humanity is at its best when persistence becomes service.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/mars-relay">Mars Relay</Link>
          <Link href="/iss-docking-simulator">ISS Docking</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
