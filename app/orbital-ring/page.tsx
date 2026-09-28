import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Earth's Orbital Ring: A Transportation System for Humanity",
  description: "How an actively supported orbital ring could connect Earth to space, move people and freight globally, deliver clean energy, and become shared infrastructure for humanity.",
  path: "/orbital-ring",
  image: "/images/orbital-ring-hero.png",
});

const benefits = [
  ["01", "Space for ordinary people", "Electric climbers could replace the violent first minutes of a rocket launch with controlled rail-like travel to a platform above most of the atmosphere."],
  ["02", "Planet-scale mobility", "A continuous track around Earth could move passengers and freight between distant regions without requiring millions of high-thrust flights through the lower atmosphere."],
  ["03", "Clean orbital power", "Solar farms above clouds and weather could generate continuously for long periods, with power routed to the surface through tether stations."],
  ["04", "Climate and disaster response", "Large-scale observation, communications, power delivery, and rapid cargo movement could strengthen early warning and emergency relief worldwide."],
  ["05", "A larger space economy", "Low-cost, high-throughput transport could make orbital manufacturing, research, repair, recycling, and large habitats accessible beyond a handful of governments."],
  ["06", "A bridge to the Solar System", "Higher rings and electromagnetic launch tracks could give spacecraft velocity before release, reducing the propellant needed for the Moon and deep space."],
] as const;

const challenges = [
  ["Mass before momentum", "Even a minimal ring would require extraordinary quantities of material in orbit. The first system is the hardest; only then could cheap lift help expand the network."],
  ["Active control, always", "This is dynamic infrastructure, not a passive bridge. Sensors, magnetic bearings, power electronics, and control systems must stabilize it continuously."],
  ["Heat and electrical loss", "The rotor, magnetic suspension, power conversion, and surface transmission all create waste heat that must be managed at planetary scale."],
  ["Failure containment", "A credible design needs segmentation, redundant counter-rotating elements, safe tether release, debris avoidance, and graceful shutdown modes."],
  ["Governance before monopoly", "Routes, stations, energy, safety rules, and pricing would affect every nation. International access and oversight cannot be added as an afterthought."],
] as const;

export default async function OrbitalRingPage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--orbital-ring">
      <PublicHeader eyebrow="Civilization-Scale Infrastructure" title="Earth Ring" links={content.site.nav} />

      <section className="ring-hero">
        <Image src="/images/orbital-ring-hero.png" alt="Concept illustration of a vast orbital ring encircling Earth with tether elevators descending to cities" fill priority sizes="100vw" className="ring-hero__image" />
        <div className="ring-hero__shade" aria-hidden="true" />
        <div className="ring-hero__copy">
          <span className="ring-kicker">A planetary public-works thought experiment</span>
          <h2>The Ring That Could Open the Sky</h2>
          <p>An actively supported belt around Earth could turn orbit from a destination reached by rockets into a transportation layer used by everyone.</p>
          <div className="ring-hero__actions">
            <Link className="button button--primary" href="#how-it-works">See how it works</Link>
            <Link className="button button--ghost" href="#humanity">Explore the benefits</Link>
          </div>
        </div>
        <div className="ring-hero__readout" aria-label="Orbital ring concept figures">
          <div><span>CONCEPT ALTITUDE</span><strong>~80 KM+</strong></div>
          <div><span>INNER ROTOR</span><strong>~8 KM/S+</strong></div>
          <div><span>EARTH CIRCUMFERENCE</span><strong>~40,000 KM</strong></div>
        </div>
        <span className="ring-hero__caption">AI-generated concept visualization • No orbital ring currently exists</span>
      </section>

      <section className="ring-thesis">
        <span className="ring-kicker ring-kicker--ink">THE BIG IDEA</span>
        <h3>Not a ring that simply orbits Earth. A stationary world above us, held up by something racing inside it.</h3>
        <div>
          <p>An orbital ring separates two jobs. A fast inner rotor carries the momentum needed to remain aloft. Around it, a magnetically suspended outer structure can stay nearly fixed relative to the ground.</p>
          <p>Speeding the rotor beyond ordinary orbital velocity creates surplus outward force. The stationary sheath, platforms, elevators, and payloads press inward through gravity; magnetic bearings transfer forces between the two without physical contact.</p>
        </div>
        <figure className="ring-thesis__visual">
          <Image src="/images/orbital-ring-inner-rotor.png" alt="Concept cutaway of a fast inner rotor moving inside the stationary outer shell of an orbital ring above Earth" fill sizes="(max-width: 720px) 100vw, 82vw" />
          <figcaption>AI-generated concept visualization of the moving rotor and stationary sheath</figcaption>
        </figure>
      </section>

      <section className="ring-mechanics" id="how-it-works" aria-labelledby="ring-mechanics-title">
        <div className="ring-mechanics__image">
          <Image src="/images/orbital-ring-active-support.png" alt="Cutaway concept showing a high-speed rotor magnetically suspended inside the stationary shell of an orbital ring" fill sizes="(max-width: 800px) 100vw, 58vw" />
          <span>AI-generated engineering visualization</span>
        </div>
        <div className="ring-mechanics__copy">
          <span className="ring-kicker">ACTIVE SUPPORT</span>
          <h3 id="ring-mechanics-title">Momentum becomes structure.</h3>
          <p>The idea does not require a magical material strong enough to hang from geostationary orbit. It substitutes continuous motion, magnetic suspension, and active control for impossible tensile strength.</p>
          <ol>
            <li><b>01</b><div><strong>Build the rotor</strong><span>Join many segments into a continuous loop around Earth.</span></div></li>
            <li><b>02</b><div><strong>Accelerate it</strong><span>Electromagnetic drives push the inner mass stream to orbital speed and beyond.</span></div></li>
            <li><b>03</b><div><strong>Float the sheath</strong><span>Magnetic bearings keep the outer structure separated from the moving rotor.</span></div></li>
            <li><b>04</b><div><strong>Lower the tethers</strong><span>Angled cables anchor stations, damp oscillations, carry power, and guide elevator vehicles.</span></div></li>
          </ol>
        </div>
      </section>

      <section className="ring-benefits" id="humanity" aria-labelledby="ring-benefits-title">
        <div className="ring-section-heading">
          <span className="ring-kicker ring-kicker--ink">A NEW COMMONS ABOVE EARTH</span>
          <h3 id="ring-benefits-title">The greatest benefit is not one faster spacecraft. It is shared capacity.</h3>
          <p>Rockets move individual missions. An orbital ring would be infrastructure: a continuously available network designed to move people, cargo, energy, and information at enormous volume.</p>
        </div>
        <div className="ring-benefits__grid">
          {benefits.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="ring-humanity">
        <Image src="/images/orbital-ring-humanity.png" alt="Concept of families, workers, researchers, and cargo using a public orbital elevator station in a green coastal city" fill sizes="100vw" />
        <div className="ring-humanity__shade" aria-hidden="true" />
        <div className="ring-humanity__copy">
          <span className="ring-kicker">THE HUMAN TEST</span>
          <h3>Does it serve billions—or only the people who own the gates?</h3>
          <p>Its civilizational promise depends on broad access: interoperable stations, transparent pricing, public safety standards, open scientific use, and routes that connect regions historically left outside major infrastructure networks.</p>
        </div>
        <span className="ring-humanity__caption">AI-generated public-infrastructure concept</span>
      </section>

      <section className="ring-video" aria-labelledby="ring-video-title">
        <div className="ring-video__copy">
          <span className="ring-kicker">FEATURED CONTEXT</span>
          <h3 id="ring-video-title">Isaac Arthur: Orbital Rings</h3>
          <p>Isaac Arthur’s episode provides the conceptual foundation for this page, exploring active support, tethered transit, high-throughput launch, global travel, layered rings, and far-future extensions toward the Moon.</p>
          <a href="https://www.youtube.com/watch?v=LMbI6sk-62E" target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
        </div>
        <a
          className="ring-video__frame"
          href="https://www.youtube.com/watch?v=LMbI6sk-62E"
          target="_blank"
          rel="noreferrer"
          aria-label="Watch Orbital Rings by Isaac Arthur on YouTube"
        >
          <Image
            src="/images/orbital-rings-isaac-arthur.jpg"
            alt="Orbital Rings by Isaac Arthur video"
            fill
            sizes="(max-width: 1000px) 100vw, 58vw"
          />
          <span className="ring-video__play" aria-hidden="true">▶</span>
          <span className="ring-video__watch">Watch the full episode</span>
        </a>
      </section>

      <section className="ring-launch" aria-labelledby="ring-launch-title">
        <div>
          <span className="ring-kicker">FROM ELEVATOR TO LAUNCH TRACK</span>
          <h3 id="ring-launch-title">The ring gets you high. A moving vehicle on the ring gets you fast.</h3>
          <p>A station fixed over Earth is not itself in orbit. A vehicle released from it would fall. But a magnetic track running around the planetary circumference could accelerate craft gradually, using Earth’s gravity to offset part of the felt turning force.</p>
        </div>
        <div className="ring-launch__numbers">
          <article><strong>~8</strong><span>KM/S</span><p>rough low-Earth orbital speed</p></article>
          <article><strong>~11</strong><span>KM/S</span><p>Earth escape speed near the surface</p></article>
          <article><strong>360°</strong><span>TRACK</span><p>release toward a chosen trajectory</p></article>
        </div>
        <small>These values describe idealized physics, not the performance of a designed or funded transportation system.</small>
      </section>

      <section className="ring-moon">
        <div className="ring-moon__image">
          <Image src="/images/orbital-ring-earth-moon.png" alt="Speculative network of orbital rings, transfer stations, and spacecraft extending from Earth toward the Moon" fill sizes="(max-width: 1000px) 100vw, 60vw" />
        </div>
        <div className="ring-moon__copy">
          <span className="ring-kicker ring-kicker--ink">A NETWORK, NOT A MONUMENT</span>
          <h3>One ring makes launch cheaper. Many rings could make the Solar System feel connected.</h3>
          <p>Rings at different inclinations and altitudes could exchange passengers and freight. Higher structures could add launch velocity or receive arriving spacecraft. Far-future networks might connect to lunar tether systems without demanding one impossible cable between Earth and Moon.</p>
          <div className="ring-moon__route" aria-label="Conceptual route from Earth to the Moon"><span>EARTH</span><i /><span>LOW RING</span><i /><span>HIGH RING</span><i /><span>MOON</span></div>
          <small>AI-generated long-range concept • Highly speculative</small>
        </div>
      </section>

      <section className="ring-challenges" aria-labelledby="ring-challenges-title">
        <div className="ring-section-heading ring-section-heading--light">
          <span className="ring-kicker">THE HONEST ENGINEERING LEDGER</span>
          <h3 id="ring-challenges-title">Known physics does not mean near-term construction.</h3>
          <p>The concept is compelling precisely because it does not require antigravity. It still asks civilization to master a continuous machine longer than Earth’s circumference.</p>
        </div>
        <div className="ring-challenges__list">
          {challenges.map(([title, text], index) => (
            <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="ring-governance">
        <span className="ring-kicker ring-kicker--ink">THE CONDITION FOR HUMAN BENEFIT</span>
        <h3>A planetary ring needs planetary legitimacy.</h3>
        <div>
          <p>Infrastructure that crosses every longitude cannot be treated as an ordinary private facility. Its failure risks, orbital traffic rules, energy markets, ground corridors, and access policies would affect people who never board it.</p>
          <p>The humane version would be governed like a global commons: internationally inspected, environmentally accountable, resistant to weaponization, and built with enforceable guarantees that scientific, humanitarian, and developing-world access remain part of the mission.</p>
        </div>
        <figure className="ring-governance__visual">
          <Image src="/images/orbital-ring-public-commons.png" alt="Concept of people from many backgrounds using a public orbital-ring transit terminal with a space elevator and the ring above" fill sizes="(max-width: 720px) 100vw, 82vw" />
          <figcaption>AI-generated vision of a publicly accessible orbital-ring station</figcaption>
        </figure>
      </section>

      <section className="ring-sources">
        <span>CONTEXT &amp; FURTHER READING</span>
        <p>This page is an independent educational exploration, not a NASA proposal. It draws on Isaac Arthur’s <a href="https://isaacarthur.net/video/orbital-rings/" target="_blank" rel="noreferrer">Orbital Rings episode</a>, Paul Birch’s foundational <a href="https://www.orionsarm.com/fm_store/OrbitalRings-III.pdf" target="_blank" rel="noreferrer">orbital-ring papers</a>, and a modern <a href="https://www.project-atlantis.com/wp-content/uploads/2023/07/TetheredRingPaper.pdf" target="_blank" rel="noreferrer">techno-economic assessment of actively supported structures</a>. Numeric examples are illustrative and depend on architecture, altitude, payload, materials, and control assumptions.</p>
      </section>

      <PublicFooter title="NASA Employees" text="Independent ideas about the infrastructure that could make space part of everyday human life." />
    </main>
  );
}
