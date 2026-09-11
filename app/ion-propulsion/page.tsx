import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { MissionComparison, TrajectoryMap } from "@/components/IonPropulsionExperience";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Ion Propulsion for Mars, Jupiter, and Europa",
  description: "How nuclear-electric ion propulsion could move massive human spacecraft to Mars and the Jovian system with sustained, fuel-efficient thrust.",
  path: "/ion-propulsion",
  image: "/images/ion-propulsion-transport.png",
});

const challenges = [
  {
    number: "01",
    title: "Scale the thrust",
    text: "Today’s flight-proven ion engines are built for robotic spacecraft. Human missions would need arrays of high-power ion or Hall-effect thrusters operating together at megawatt scale.",
  },
  {
    number: "02",
    title: "Shrink the reactor",
    text: "Beyond Mars, sunlight becomes a weak power source. A crewed transport needs a lightweight reactor delivering roughly 1–10 megawatts of electricity, plus conversion and fault-tolerant distribution hardware.",
  },
  {
    number: "03",
    title: "Survive years of operation",
    text: "High-energy plasma slowly erodes thruster surfaces. Grids, channels, cathodes, power electronics, and propellant feeds must run reliably for thousands of hours.",
  },
  {
    number: "04",
    title: "Reject the heat",
    text: "A reactor and its power electronics create waste heat. In vacuum, enormous radiators must shed it without becoming too heavy or vulnerable for the mission.",
  },
];

export default function IonPropulsionPage() {
  return (
    <main className="page-shell page-shell--ion">
      <PublicHeader
        eyebrow="Deep-Space Systems"
        title="Ion Propulsion"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Mars Missions", href: "/mars-unity-mission" },
          { label: "Europa Mission", href: "/europa-hopper-mission" },
          { label: "Space FAQs", href: "/space-faqs" },
        ]}
      />

      <section className="ion-hero">
        <Image
          src="/images/ion-propulsion-transport.png"
          alt="Concept rendering of a nuclear-electric crew transport using blue ion thrusters between Mars and Jupiter"
          fill
          priority
          sizes="(max-width: 760px) 100vw, 1600px"
          className="ion-hero__image"
        />
        <div className="ion-hero__shade" />
        <div className="ion-hero__copy">
          <span className="ion-kicker">Nuclear-electric mission architecture</span>
          <h2>Beyond Chemical Rockets: The Electric Path to Deep Space</h2>
          <p>How ion thrust technology could make human exploration of Mars, Jupiter, and Europa faster, lighter, and more adaptable.</p>
          <div className="ion-hero__actions">
            <Link href="#comparison" className="button button--primary">Compare the Engines</Link>
            <Link href="#trajectory" className="button button--ghost">Trace the Route</Link>
          </div>
        </div>
        <div className="ion-hero__readout" aria-label="Mission concept summary">
          <span>EXHAUST VELOCITY</span><strong>UP TO 50 KM/S</strong>
          <span>THRUST DURATION</span><strong>MONTHS TO YEARS</strong>
          <span>PRIMARY POWER</span><strong>NUCLEAR ELECTRIC</strong>
        </div>
        <span className="ion-hero__caption">AI-generated concept illustration • Not a current NASA vehicle</span>
      </section>

      <section className="ion-thesis">
        <p>01 / THE MISSION EQUATION</p>
        <h3>Chemical rockets win the first ten minutes. Electric propulsion can win the next hundred million kilometers.</h3>
        <div>
          <p>Launch vehicles are unmatched at producing the violent thrust needed to leave Earth. But a deep-space crew vehicle has a different job: move a large, protected habitat for months, make meaningful course changes, and still arrive with enough propulsion to slow down.</p>
          <p>That is where chemical propulsion runs into mass and time. Every extra kilogram of propellant demands still more propellant to accelerate it—the compounding penalty described by the rocket equation.</p>
        </div>
      </section>

      <section className="ion-pressure-grid" aria-label="Limits of chemical-only deep-space missions">
        <article><span>MASS</span><strong>Shielding, water, food, life support, and redundancy turn a crewed vehicle into a heavy payload.</strong></article>
        <article><span>TIME</span><strong>A chemical burn ends in minutes, leaving the ship to coast along a largely fixed transfer orbit.</strong></article>
        <article><span>FLEXIBILITY</span><strong>Once committed, a coasting trajectory offers limited options for major corrections or an early return.</strong></article>
      </section>

      <section className="ion-section ion-section--light" id="comparison">
        <div className="ion-section__intro">
          <span className="ion-kicker ion-kicker--dark">Interactive mission comparison</span>
          <h3>Trade a mountain of fuel for a thread of thrust.</h3>
          <p>Ion engines push gently, but they use propellant with extraordinary efficiency. Move the payload slider to see why that difference compounds as a human spacecraft gets heavier.</p>
        </div>
        <MissionComparison />
      </section>

      <section className="ion-section ion-engine">
        <div className="ion-section__intro">
          <span className="ion-kicker">02 / Inside the thruster</span>
          <h3>No combustion. Just charged atoms moving very, very fast.</h3>
          <p>A propellant such as xenon or argon enters the thruster, becomes ionized, and accelerates through an electric field. A neutralizer adds electrons back to the outgoing beam so the spacecraft does not build up an electric charge.</p>
        </div>

        <div className="thruster-diagram" role="img" aria-label="Four-stage diagram showing gas feed, ionization, grid acceleration, and a neutralized ion beam">
          <div className="thruster-diagram__stage"><span>01</span><i className="thruster-diagram__gas" /><strong>Gas feed</strong><p>Xenon or argon enters in a controlled flow.</p></div>
          <div className="thruster-diagram__stage"><span>02</span><i className="thruster-diagram__plasma" /><strong>Ionize</strong><p>Electrons strip charge from the propellant atoms.</p></div>
          <div className="thruster-diagram__stage"><span>03</span><i className="thruster-diagram__grids" /><strong>Accelerate</strong><p>High-voltage grids drive ions out at extreme speed.</p></div>
          <div className="thruster-diagram__stage"><span>04</span><i className="thruster-diagram__beam" /><strong>Neutralize</strong><p>Electrons rejoin the exhaust to balance the craft.</p></div>
        </div>

        <div className="ion-efficiency">
          <div><span>Chemical exhaust</span><strong>~4.5</strong><small>km/s</small></div>
          <div className="ion-efficiency__line"><i /><b>~10× exhaust velocity</b></div>
          <div><span>Ion exhaust</span><strong>50</strong><small>km/s</small></div>
        </div>
      </section>

      <section className="ion-section ion-nep">
        <div className="ion-nep__mark" aria-hidden="true"><span>NEP</span></div>
        <div>
          <span className="ion-kicker ion-kicker--dark">The power behind the blue plume</span>
          <h3>Nuclear Electric Propulsion keeps working when the Sun fades.</h3>
          <p>A compact reactor produces heat, power conversion turns that heat into electricity, and the electricity drives a cluster of thrusters. The reactor does not heat the propellant directly; it powers the electric fields that accelerate it.</p>
          <div className="ion-nep__flow">
            <span>REACTOR</span><i />
            <span>POWER CONVERSION</span><i />
            <span>THRUSTER ARRAY</span><i />
            <span>CONTINUOUS DELTA-V</span>
          </div>
        </div>
      </section>

      <section className="ion-section ion-mars">
        <div className="ion-mission-heading">
          <span className="ion-kicker">03 / Mission profile</span>
          <h3>Humans to Mars</h3>
          <strong>~3–4 months</strong>
          <small>illustrative nuclear-electric concept</small>
        </div>
        <div className="ion-mars__content">
          <p>A faster transfer could roughly halve a conventional six-to-nine-month trip. That matters because time in deep space means cumulative exposure to galactic cosmic radiation, isolation, and microgravity.</p>
          <div className="ion-mars__table">
            <div><span>Metric</span><b>Chemical</b><b>Nuclear-ion</b></div>
            <div><span>Transit</span><b>~6–9 months</b><b>~3–4 months*</b></div>
            <div><span>Propellant</span><b>Very high mass</b><b>Far lower mass</b></div>
            <div><span>Trajectory</span><b>Narrow coast arc</b><b>Ongoing correction</b></div>
          </div>
          <small>*A mission target, not a demonstrated capability. Actual performance depends on spacecraft mass and available electric power.</small>
        </div>
      </section>

      <section className="ion-section ion-jupiter" id="trajectory">
        <div className="ion-section__intro">
          <span className="ion-kicker">04 / Mars to the Jovian system</span>
          <h3>At Jupiter, arrival is as hard as departure.</h3>
          <p>Reaching the neighborhood is only half the problem. A heavy crewed vessel must shed enormous velocity to enter orbit, then move between moons while minimizing time in Jupiter’s harshest radiation zones.</p>
        </div>
        <TrajectoryMap />
        <div className="ion-jupiter__steps">
          <article><span>01</span><h4>Cross the belt</h4><p>Steady, low thrust continues through the outer Solar System without carrying a chemical stage for every major maneuver.</p></article>
          <article><span>02</span><h4>Brake for Jupiter</h4><p>The ship turns its thrust vector and gradually reduces velocity over weeks rather than demanding one enormous capture burn.</p></article>
          <article><span>03</span><h4>Work the moons</h4><p>Efficient transfers between Callisto, Ganymede, and Europa could keep the main crew habitat farther from the worst radiation whenever possible.</p></article>
        </div>
      </section>

      <section className="ion-section ion-challenges">
        <div className="ion-section__intro">
          <span className="ion-kicker ion-kicker--dark">05 / The gap between concept and crew</span>
          <h3>The physics works. The scale does not—yet.</h3>
          <p>Electric propulsion already flies on satellites and robotic missions. Turning it into a human deep-space transportation system requires several breakthroughs to mature together.</p>
        </div>
        <div className="ion-challenge-list">
          {challenges.map((challenge) => (
            <article key={challenge.number}>
              <span>{challenge.number}</span>
              <h4>{challenge.title}</h4>
              <p>{challenge.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ion-closing">
        <span className="ion-kicker">The hybrid answer</span>
        <h3>Use chemistry to leave Earth. Use electricity to cross the dark.</h3>
        <p>The practical path is not chemical versus ion propulsion. It is a staged system that gives each technology the job it does best—high thrust near planets, extreme efficiency between them.</p>
        <Link href="#comparison" className="button button--primary">Revisit the Mission Model</Link>
      </section>

      <PublicFooter
        title="NASA Employees"
        text="Exploring the technologies, people, and decisions that could shape humanity’s future in space."
      />
    </main>
  );
}
