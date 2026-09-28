import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Beyond Super Heavy: The Modular Atomizer Staging Concept",
  description: "A speculative engineering study of Starship K-1 Kayfun: 39 detachable engine-and-tank pods, continuous variable-mass staging, and autonomous swarm recovery.",
  path: "/starship-k1-atomizer",
  image: "/images/starship-k1-ascent-hero.webp",
});

const podAnatomy = [
  ["01", "Propellant cell", "A dedicated methane-and-oxygen reservoir isolates each pod from the rest of the cluster."],
  ["02", "Engine & turbomachinery", "Each module carries a complete propulsion path instead of sharing one booster-wide feed system."],
  ["03", "Sealed docking collar", "Structural latches and self-closing fluid and data ports must separate cleanly under load."],
  ["04", "Recovery avionics", "Guidance, navigation, communications, batteries, and fault logic turn every released pod into a small spacecraft."],
  ["05", "Entry protection", "A deployable interface cover and local thermal protection shield the vulnerable mating surface during return."],
  ["06", "Control & landing", "Grid fins, reaction controls, landing legs, and reserve propellant guide an autonomous terminal burn."],
] as const;

const ascentSteps = [
  ["T+00", "All pods online", "The core and 39 perimeter modules leave the pad as one tightly controlled propulsion cluster."],
  ["MAX-Q", "Hold the geometry", "No separation occurs through peak aerodynamic pressure; throttling protects the modular joints and outer ring."],
  ["RING 1", "First symmetric release", "The earliest depleted group shuts down, seals its interfaces, and receives a clean outward impulse."],
  ["RING 2", "Mass falls with thrust", "Later pairs or rings depart only when guidance can preserve balance, clearance, and acceptable acceleration."],
  ["MECO", "Core continues", "The orbital vehicle completes ascent without hauling the released pods or their empty tanks to full orbital speed."],
  ["RETURN", "The swarm splits", "Each pod follows its own protected entry corridor toward a dedicated landing or catch zone."],
] as const;

const tradeoffs = [
  ["Mass efficiency", "Discard depleted tankage earlier in ascent.", "Every pod duplicates tanks, valves, avionics, thermal protection, controls, and landing hardware."],
  ["Fault isolation", "A failing module might be shut down and released.", "One bad separation can strike the core, another pod, or a critical aerodynamic surface."],
  ["Maintenance", "Swap and service propulsion modules independently.", "Thirty-nine flight articles create inspection, certification, spares, and configuration-control work."],
  ["Recovery", "Small units could use distributed landing zones.", "Dozens of simultaneous hypersonic returns multiply range, weather, telemetry, and airspace demands."],
  ["Manufacturing", "Repeat one standardized module at high volume.", "High part count and precision mating surfaces can overwhelm savings from repetition."],
] as const;

export default async function StarshipK1AtomizerPage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--atomizer">
      <PublicHeader eyebrow="Independent Propulsion Study" title="Starship K-1 Atomizer" links={content.site.nav} />

      <section className="atomizer-hero">
        <Image
          src="/images/starship-k1-ascent-hero.webp"
          alt="Speculative stainless-steel orbital vehicle shedding autonomous engine pods in symmetric pairs above Earth"
          fill
          priority
          sizes="100vw"
          className="atomizer-hero__image"
        />
        <div className="atomizer-hero__shade" aria-hidden="true" />
        <div className="atomizer-hero__copy">
          <span className="atomizer-kicker">K-1 / CONCEPT STUDY / NOT A SPACEX DESIGN</span>
          <h2>Beyond<br />Super Heavy.</h2>
          <p>What if a booster were not one giant stage, but a ring of detachable propulsion modules—each able to separate, survive, navigate, and land on its own?</p>
          <div className="atomizer-hero__actions">
            <Link href="#architecture" className="button atomizer-button">Open the Architecture</Link>
            <Link href="#flight" className="button button--ghost">Watch the Swarm</Link>
          </div>
        </div>
        <dl className="atomizer-hero__readout">
          <div><dt>OUTER PODS</dt><dd>39</dd></div>
          <div><dt>STAGING MODE</dt><dd>SEQUENTIAL</dd></div>
          <div><dt>RECOVERY</dt><dd>AUTONOMOUS</dd></div>
        </dl>
        <span className="atomizer-hero__caption">AI-generated independent concept visualization • Not affiliated with or proposed by SpaceX</span>
      </section>

      <section className="atomizer-disclaimer">
        <strong>CONCEPT BOUNDARY</strong>
        <p>“Starship K-1 Kayfun” is an independent thought experiment created for this site. SpaceX’s real Starship architecture uses a reusable Starship upper stage and a monolithic Super Heavy booster powered by 33 Raptor engines. The 39-pod system below has not been proposed, tested, or endorsed by SpaceX.</p>
      </section>

      <section className="atomizer-thesis">
        <div>
          <span className="atomizer-kicker atomizer-kicker--dark">THE QUESTION</span>
          <h3>Can a rocket shed mass continuously instead of staging all at once?</h3>
        </div>
        <div className="atomizer-thesis__copy">
          <p>Conventional launch vehicles concentrate propellant, structure, engines, and avionics into a small number of large stages. That keeps interfaces manageable, but the entire first stage remains attached until one planned separation event.</p>
          <p>The Atomizer concept divides that lower stage into many self-contained propulsion cells. As selected pods empty, they detach symmetrically instead of remaining dead mass. The upper vehicle keeps climbing with fewer engines, less tankage, and a changing mass distribution.</p>
          <p>That is the promise. The price is transforming one booster into a coordinated fleet of forty flight computers, forty propulsion systems, and thirty-nine high-energy separation events.</p>
        </div>
      </section>

      <section className="atomizer-baseline" aria-labelledby="baseline-title">
        <div className="atomizer-section-heading">
          <span className="atomizer-kicker">01 / ARCHITECTURE RESET</span>
          <h3 id="baseline-title">Two ways to organize the same impossible job.</h3>
        </div>
        <div className="atomizer-baseline__grid">
          <article>
            <span>REAL-WORLD BASELINE</span>
            <h4>Starship + Super Heavy</h4>
            <div className="atomizer-stack atomizer-stack--conventional" aria-hidden="true"><i /><i /></div>
            <dl><div><dt>Lower stage</dt><dd>One integrated booster</dd></div><div><dt>Booster engines</dt><dd>33 Raptors</dd></div><div><dt>Primary separation</dt><dd>One hot-stage event</dd></div><div><dt>Recovery problem</dt><dd>One 72-meter booster</dd></div></dl>
          </article>
          <article>
            <span>SPECULATIVE ALTERNATIVE</span>
            <h4>K-1 modular perimeter</h4>
            <div className="atomizer-stack atomizer-stack--modular" aria-hidden="true"><i /><b /><b /><b /><b /><b /><b /></div>
            <dl><div><dt>Lower stage</dt><dd>39 removable pods</dd></div><div><dt>Pod systems</dt><dd>Tank + engine + avionics</dd></div><div><dt>Primary separation</dt><dd>Multiple balanced releases</dd></div><div><dt>Recovery problem</dt><dd>39 independent returns</dd></div></dl>
          </article>
        </div>
      </section>

      <section className="atomizer-architecture" id="architecture" aria-labelledby="architecture-title">
        <div className="atomizer-section-heading atomizer-section-heading--light">
          <span className="atomizer-kicker atomizer-kicker--dark">02 / THE ATOMIZER LOGIC</span>
          <h3 id="architecture-title">A rocket engine becomes a tiny reusable stage.</h3>
          <p>The inspiration is modular fluid machinery: isolated chambers, repeatable interfaces, and serviceable assemblies. In a launch vehicle, every neat mechanical boundary becomes a severe cryogenic, structural, aerodynamic, and software problem.</p>
        </div>
        <figure className="atomizer-supplied-visual">
          <Image
            src="/images/starship-k1-supplied-concept.webp"
            alt="Supplied concept artwork showing a stainless-steel K-1 orbital vehicle and detachable propulsion modules above Earth"
            width={2400}
            height={1309}
            sizes="(max-width: 760px) 100vw, 1400px"
          />
          <figcaption><span>SUPPLIED CONCEPT ART</span><p>This early four-module visualization establishes the design language. The proposed architecture described here expands the perimeter to 39 conceptual pods.</p></figcaption>
        </figure>
        <div className="atomizer-pod-grid">
          {podAnatomy.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="atomizer-flight" id="flight" aria-labelledby="flight-title">
        <div className="atomizer-flight__copy">
          <span className="atomizer-kicker">03 / MISSION ANIMATION</span>
          <h3 id="flight-title">One ascent.<br />Thirty-nine descents.</h3>
          <p>The supplied animation follows the concept from clustered flight through pod separation, entry, terminal burns, and distributed landings.</p>
          <p>It is a visualization, not a simulated trajectory. A credible design would need six-degree-of-freedom analysis, plume interaction models, debris-clearance envelopes, thermal analysis, and range-safety constraints before a sequence like this could be claimed feasible.</p>
        </div>
        <figure className="atomizer-video">
          <video controls playsInline preload="metadata" poster="/images/starship-k1-swarm-recovery.webp">
            <source src="/videos/starship-k1-atomizer-concept.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption><span>K-1 CONCEPT SEQUENCE</span><span>00:10 • SUPPLIED ANIMATION</span></figcaption>
        </figure>
      </section>

      <section className="atomizer-ascent" aria-labelledby="ascent-title">
        <div className="atomizer-section-heading">
          <span className="atomizer-kicker">04 / VARIABLE-MASS ASCENT</span>
          <h3 id="ascent-title">Staging becomes a sequence, not a moment.</h3>
        </div>
        <div className="atomizer-ascent__timeline">
          {ascentSteps.map(([time, title, text], index) => (
            <article key={time}><span>{time}</span><b>{String(index + 1).padStart(2, "0")}</b><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
        <aside className="atomizer-equation">
          <span>DESIGN INTENT</span>
          <strong>less inert mass ↑</strong>
          <i>does not automatically mean</i>
          <strong>linear acceleration ↑</strong>
          <p>Guidance would still limit acceleration, dynamic pressure, structural load, plume interaction, and propellant margins. The real benefit must be demonstrated by a complete mass and trajectory model.</p>
        </aside>
      </section>

      <section className="atomizer-recovery" aria-labelledby="recovery-title">
        <Image src="/images/starship-k1-swarm-recovery.webp" alt="Speculative swarm of autonomous engine pods landing on widely separated coastal pads" fill sizes="100vw" className="atomizer-recovery__image" />
        <div className="atomizer-recovery__shade" aria-hidden="true" />
        <div className="atomizer-recovery__copy">
          <span className="atomizer-kicker">05 / SWARM LOGISTICS</span>
          <h3 id="recovery-title">Recovery scales sideways.</h3>
          <p>A single returning booster creates one major guidance and range-safety problem. Thirty-nine small vehicles create a distributed air-traffic system: separate corridors, weather decisions, landing pads, telemetry links, reserves, and abort zones.</p>
          <div className="atomizer-recovery__metrics"><div><strong>39</strong><span>ENTRY SOLUTIONS</span></div><div><strong>39</strong><span>LANDING BURNS</span></div><div><strong>1</strong><span>COORDINATED RANGE</span></div></div>
        </div>
        <span className="atomizer-recovery__caption">AI-generated operational visualization • Vehicles and landing range are conceptual</span>
      </section>

      <section className="atomizer-tradeoffs" aria-labelledby="tradeoffs-title">
        <div className="atomizer-section-heading atomizer-section-heading--light">
          <span className="atomizer-kicker atomizer-kicker--dark">06 / THE ENGINEERING LEDGER</span>
          <h3 id="tradeoffs-title">Every kilogram saved buys a new failure mode.</h3>
        </div>
        <div className="atomizer-tradeoffs__table" role="table" aria-label="Advantages and engineering challenges">
          <div className="atomizer-tradeoffs__head" role="row"><span role="columnheader">Claimed advantage</span><span role="columnheader">Why it matters</span><span role="columnheader">What it costs</span></div>
          {tradeoffs.map(([advantage, value, cost]) => <div role="row" key={advantage}><strong role="cell">{advantage}</strong><p role="cell">{value}</p><p role="cell">{cost}</p></div>)}
        </div>
      </section>

      <section className="atomizer-gates" aria-labelledby="gates-title">
        <div>
          <span className="atomizer-kicker">07 / GO OR NO-GO</span>
          <h3 id="gates-title">What must be proven first?</h3>
        </div>
        <ol>
          <li><b>01</b><span><strong>Close the mass budget.</strong> Do early jettisons save more mass than duplicated tanks, controls, heat shields, and recovery systems add?</span></li>
          <li><b>02</b><span><strong>Survive max-q.</strong> Can dozens of outer interfaces carry bending, vibration, acoustic, and thermal loads without opening drag-producing gaps?</span></li>
          <li><b>03</b><span><strong>Separate without contact.</strong> Can pods clear the vehicle through plume fields and transonic flow after any single actuator or engine failure?</span></li>
          <li><b>04</b><span><strong>Protect the seals.</strong> Can cryogenic connectors close reliably, remain aerodynamically smooth, and survive reentry heating?</span></li>
          <li><b>05</b><span><strong>Recover the fleet.</strong> Can the range safely track, communicate with, and land dozens of modules in changing winds and weather?</span></li>
        </ol>
      </section>

      <section className="atomizer-verdict">
        <span className="atomizer-kicker">THE VERDICT</span>
        <h3>Elegant topology.<br />Brutal systems problem.</h3>
        <p>The Atomizer concept attacks a real launch-vehicle penalty: carrying empty structure after its useful work is done. But it trades a small number of large, mature interfaces for dozens of tanks, seals, computers, reentry vehicles, and landing events. Until a detailed mass model shows a positive margin, modular staging remains a provocative architecture—not a shortcut around the rocket equation.</p>
        <Link href="#architecture" className="button atomizer-button">Revisit the Pod Design</Link>
      </section>

      <section className="atomizer-sources">
        <span className="atomizer-kicker">BASELINE REFERENCE</span>
        <p>Current Starship and Super Heavy specifications are drawn from SpaceX’s published vehicle overview. K-1 quantities, mechanisms, and flight sequences are independent speculative assumptions for this concept study.</p>
        <a href="https://new.spacex.com/vehicles/starship" target="_blank" rel="noreferrer">SpaceX • Starship vehicle overview ↗</a>
      </section>

      <PublicFooter title="NASA Employees" text="Exploring the machines, people, and independent ideas that could reshape access to space." />
    </main>
  );
}
