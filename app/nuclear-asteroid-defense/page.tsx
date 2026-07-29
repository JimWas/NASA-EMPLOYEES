import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Nuclear Asteroid Defense: Deflect, Disrupt, or Destroy?",
  description:
    "How NASA and national laboratories study nuclear stand-off deflection and disruption as last-resort responses to a dangerous asteroid, and why early detection remains the best defense.",
  path: "/nuclear-asteroid-defense",
  image: "/images/planetary-defense-nuclear-hero.jpg",
});

const responseOptions = [
  {
    number: "01",
    title: "Kinetic impactor",
    status: "Demonstrated",
    text: "Crash an uncrewed spacecraft into the asteroid. The spacecraft transfers momentum, while rock thrown from the impact can add an extra push. NASA's DART mission proved this can change an asteroid's motion.",
    bestFor: "Long warning time and a target that can be moved with one or more impactors.",
  },
  {
    number: "02",
    title: "Gravity tractor",
    status: "Concept",
    text: "Hover a spacecraft near the asteroid and let the tiny gravitational attraction between them slowly pull the object onto a safer path. It is precise, but the force is extremely small.",
    bestFor: "A well-understood object found many years or decades before impact.",
  },
  {
    number: "03",
    title: "Surface ablation",
    status: "Concept",
    text: "Heat a patch of the surface with concentrated light or other directed energy. Escaping vapor acts like a small rocket plume and gradually changes the asteroid's velocity.",
    bestFor: "Long-duration missions where a sustained, controlled push is possible.",
  },
  {
    number: "04",
    title: "Nuclear stand-off",
    status: "Simulated",
    text: "Detonate a nuclear explosive near, not inside, the asteroid. Radiation rapidly heats and vaporizes a thin surface layer. The escaping material pushes the remaining body in the opposite direction.",
    bestFor: "A large object, limited warning time, or a case beyond the practical reach of kinetic impactors.",
  },
];

const decisionFactors = [
  ["Warning time", "Years of lead time let a tiny nudge grow into a large miss distance. Short warning time demands a much stronger and riskier intervention."],
  ["Size and mass", "A larger body has more momentum and may require far more delivered energy to alter its path."],
  ["Structure", "A solid rock, metal-rich body, porous object, and loose rubble pile can respond very differently to the same intervention."],
  ["Spin and shape", "Rotation changes where energy lands and how ejecta leaves the surface. Irregular shape complicates navigation and modeling."],
  ["Orbit certainty", "Mission planners must know the future impact path precisely enough to avoid merely moving the impact point somewhere else on Earth."],
  ["Launch opportunity", "The response has to be built, launched, navigated, and delivered before the remaining intervention window closes."],
];

const nuclearApproaches = [
  {
    title: "Stand-off deflection",
    tag: "Most controllable nuclear concept",
    text: "A device would detonate at a distance from the surface. In vacuum there is no atmospheric blast wave. Instead, radiation heats a shallow layer of the asteroid so quickly that material blows away. That ejecta supplies the reaction force that changes the asteroid's velocity.",
  },
  {
    title: "Surface or near-surface burst",
    tag: "Stronger coupling, more uncertainty",
    text: "Moving the energy source closer can transfer more energy into the body, but also drives stronger shock waves and raises the chance of uncontrolled fragmentation. Target composition and geometry become critical.",
  },
  {
    title: "Disruption",
    tag: "Emergency last resort",
    text: "If warning time is too short to create a clean miss, models examine breaking the object apart and dispersing the pieces. Success would require fragments to miss Earth or become small enough to reduce the damage. A partial disruption could make the hazard worse.",
  },
];

const responseSequence = [
  ["Find", "Survey telescopes discover the object and collect enough observations to calculate its orbit."],
  ["Confirm", "Independent teams refine the impact probability and determine whether Earth is truly at risk."],
  ["Characterize", "Radar, spectroscopy, thermal measurements, and ideally reconnaissance constrain the object's size, mass, spin, composition, and structure."],
  ["Model", "Teams compare outcomes across uncertain target properties and multiple response methods."],
  ["Choose", "National and international leaders select a response only after technical, legal, and humanitarian review."],
  ["Deliver", "One or more spacecraft intercept the target, then observers verify the actual trajectory change."],
  ["Follow up", "If the first intervention is insufficient, a prepared second mission adds more deflection while time remains."],
];

const sources = [
  {
    label: "NASA Science: Planetary Defense Overview",
    href: "https://science.nasa.gov/planetary-defense-overview/",
  },
  {
    label: "NASA: DART Data Validates Kinetic Impact",
    href: "https://www.nasa.gov/science-research/planetary-science/nasas-dart-data-validates-kinetic-impact-as-planetary-defense-method/",
  },
  {
    label: "NASA: How DART Changed Dimorphos",
    href: "https://www.nasa.gov/missions/dart/nasa-study-asteroids-orbit-shape-changed-after-dart-impact/",
  },
  {
    label: "NASA: Nuclear Devices for Planetary Defense",
    href: "https://ntrs.nasa.gov/citations/20205008370",
  },
  {
    label: "LLNL: New Nuclear Deflection Simulations",
    href: "https://www.llnl.gov/article/50716/new-nuclear-deflection-simulations-advance-planetary-defense-against-asteroid-threats",
  },
  {
    label: "LLNL: Planetary Defense Research",
    href: "https://space-science.llnl.gov/research/planetary-defense",
  },
  {
    label: "LLNL: Nuclear Impulse Study for Bennu",
    href: "https://www.llnl.gov/article/45731/nuclear-impulse-could-deflect-massive-asteroid",
  },
  {
    label: "U.S. Department of State: Outer Space Treaty",
    href: "https://2001-2009.state.gov/t/ac/trt/5181.htm",
  },
];

export default function NuclearAsteroidDefensePage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
    { label: "Ground Lasers", href: "/ground-laser-propulsion" },
    { label: "Space FAQs", href: "/space-faqs" },
  ];

  return (
    <main className="page-shell page-shell--planetary-defense">
      <PublicHeader eyebrow="Protecting Earth" title="Nuclear Asteroid Defense" links={navLinks} />

      <section className="defense-hero">
        <Image
          src="/images/planetary-defense-nuclear-hero.jpg"
          alt="Concept illustration of a stand-off nuclear energy pulse heating the surface of an asteroid while Earth remains in the distance"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 1500px"
          className="defense-hero__image"
        />
        <div className="defense-hero__shade" />
        <div className="defense-hero__content">
          <span className="section__eyebrow">A Last-Resort Planetary Defense Concept</span>
          <h2>Do not blow it up. Make it miss.</h2>
          <p>
            If a large asteroid were confirmed to be heading toward Earth, the
            safest outcome would usually come from changing its arrival time by
            a few minutes, years before impact. Nuclear energy could provide an
            unusually powerful push when the object is too large or the warning
            time is too short for a conventional spacecraft.
          </p>
          <div className="hero__actions">
            <Link href="#decision" className="button button--primary">See the Decision</Link>
            <Link href="#nuclear-method" className="button button--ghost">How It Would Work</Link>
          </div>
        </div>
        <span className="defense-hero__caption">AI-generated concept illustration • Not an operational NASA mission</span>
      </section>

      <section className="defense-status" aria-label="Current status of asteroid defense methods">
        <div><span>Proven in space</span><strong>Kinetic impact changed Dimorphos&apos; orbit</strong></div>
        <div><span>Modeled, not tested</span><strong>Nuclear deflection and disruption</strong></div>
        <div><span>Best defense</span><strong>Find the threat as early as possible</strong></div>
      </section>

      <section className="section defense-opening">
        <div className="section__copy">
          <span className="section__eyebrow">The Central Idea</span>
          <h3>Earth does not need the asteroid gone. It needs the asteroid somewhere else.</h3>
          <p>
            Earth moves roughly one planetary diameter along its orbit in about
            seven minutes. If an intervention makes a threatening asteroid
            reach the crossing point early or late, the two bodies never meet.
            With enough lead time, a velocity change too small to notice at
            first can accumulate into a miss measured in thousands of kilometers.
          </p>
          <p>
            That is why planetary defense begins with detection, tracking, and
            characterization. The earlier a real threat is found, the gentler,
            simpler, and more testable the response can be.
          </p>
        </div>
        <aside className="defense-principle">
          <span>Mission principle</span>
          <strong>A small push today can become a safe miss years from now.</strong>
          <p>Nuclear disruption is not the first move. It is the option researchers study for the scenarios where less destructive tools may no longer be enough.</p>
        </aside>
      </section>

      <section className="section section--alt defense-options" id="decision">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">A Ladder of Responses</span>
            <h3>Use the least disruptive method that can reliably prevent impact.</h3>
          </div>
          <p>No single technique works for every asteroid. The choice depends on what is coming and how much time remains.</p>
        </div>
        <div className="defense-option-grid">
          {responseOptions.map((option) => (
            <article key={option.title}>
              <div><span>{option.number}</span><small>{option.status}</small></div>
              <h4>{option.title}</h4>
              <p>{option.text}</p>
              <strong>Best fit</strong>
              <p>{option.bestFor}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section defense-dart">
        <div className="defense-dart__number">33:15</div>
        <div className="defense-dart__copy">
          <span className="section__eyebrow">The Demonstrated Baseline</span>
          <h3>DART proved that humanity can deliberately change an asteroid&apos;s motion.</h3>
          <p>
            NASA&apos;s DART spacecraft struck the 170-meter moonlet Dimorphos
            in 2022. Later analysis found its orbit around Didymos became 33
            minutes and 15 seconds shorter. DART was a controlled test on an
            object that posed no danger to Earth. It validated kinetic impact,
            not nuclear deflection.
          </p>
        </div>
      </section>

      <section className="defense-nuclear" id="nuclear-method">
        <div className="defense-nuclear__heading">
          <span className="section__eyebrow">How the Nuclear Push Works</span>
          <h3>In vacuum, the useful force is not a Hollywood blast wave.</h3>
        </div>
        <div className="defense-nuclear__steps">
          <article><span>01</span><h4>Detonate nearby</h4><p>A stand-off device releases energy at a carefully chosen distance from the asteroid rather than burrowing into it.</p></article>
          <article><span>02</span><h4>Heat the surface</h4><p>Radiation deposits energy in a thin layer of material on the illuminated side.</p></article>
          <article><span>03</span><h4>Create ejecta</h4><p>The heated material vaporizes and rushes away from the asteroid at high speed.</p></article>
          <article><span>04</span><h4>Change the path</h4><p>The escaping material produces an equal and opposite impulse, nudging the remaining asteroid onto a new trajectory.</p></article>
        </div>
        <p className="defense-nuclear__note">
          The difficult part is prediction: composition, porosity, shape, spin, and internal structure all change how the energy couples into the target.
        </p>
      </section>

      <section className="section defense-approaches">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Three Nuclear Outcomes</span>
            <h3>Deflection preserves one body. Disruption creates many.</h3>
          </div>
        </div>
        <div className="defense-approach-list">
          {nuclearApproaches.map((approach, index) => (
            <article key={approach.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{approach.tag}</small><h4>{approach.title}</h4><p>{approach.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="defense-fragmentation">
        <Image
          src="/images/planetary-defense-fragmentation.jpg"
          alt="Concept illustration showing an asteroid breaking into many pieces after an energetic intervention"
          fill
          sizes="1400px"
          className="cover-image"
        />
        <div className="defense-fragmentation__shade" />
        <div className="defense-fragmentation__copy">
          <span className="section__eyebrow">Why “Destroy It” Is Dangerous</span>
          <h3>Turning one known threat into a cloud of uncertain threats is not automatically a win.</h3>
          <p>
            A disruption mission would have to disperse fragments far enough,
            early enough, and in directions that keep them from striking Earth.
            Large pieces could retain nearly the original trajectory. Smaller
            pieces may still reach the atmosphere. Every fragment adds a new
            tracking and consequence problem.
          </p>
        </div>
        <span className="defense-fragmentation__caption">AI-generated concept illustration • Fragmentation shown for explanation, not prediction</span>
      </section>

      <section className="section section--alt defense-factors">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What Determines the Plan?</span>
            <h3>The asteroid decides the engineering problem.</h3>
          </div>
          <p>Mission planners would evaluate ranges of outcomes because many target properties remain uncertain until close observation.</p>
        </div>
        <div className="defense-factor-grid">
          {decisionFactors.map(([title, text]) => (
            <article key={title}><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section defense-concept-board">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Strategy Board</span>
            <h3>Planetary defense is a portfolio, not a single superweapon.</h3>
          </div>
          <p>These supplied illustrations visualize the broad families of responses discussed on this page.</p>
        </div>
        <div className="defense-concept-board__grid">
          <figure>
            <Image
              src="/images/planetary-defense-strategies-nonnuclear.jpg"
              alt="AI concept infographic comparing laser ablation and gravity tractor asteroid defense ideas"
              width={1120}
              height={1500}
            />
            <figcaption>AI-generated concept infographic • Not a NASA publication or an official mission design</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/planetary-defense-strategies-nuclear.jpg"
              alt="AI concept infographic comparing kinetic impactors and nuclear ablation"
              width={1120}
              height={1500}
            />
            <figcaption>AI-generated concept infographic • Not a NASA publication or an official mission design</figcaption>
          </figure>
        </div>
      </section>

      <section className="section defense-sequence">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What a Real Response Requires</span>
            <h3>The mission begins long before any spacecraft launches.</h3>
          </div>
        </div>
        <div className="defense-sequence__track">
          {responseSequence.map(([phase, text], index) => (
            <article key={phase}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h4>{phase}</h4><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="defense-governance">
        <div>
          <span className="section__eyebrow">A Planetary Decision</span>
          <h3>No nation should make this choice in isolation.</h3>
        </div>
        <div>
          <p>
            Launching a nuclear explosive into space would cross technical,
            diplomatic, legal, security, and environmental boundaries. Existing
            treaties restrict nuclear weapons in outer space and nuclear
            explosions in space. A real emergency would demand transparent
            international coordination, shared tracking data, clear civilian
            control, and a lawful authorization process.
          </p>
          <p>
            The destination of a partially successful deflection matters too.
            Preventing one impact must not shift risk from one population to
            another. Planetary defense is literally a problem of public trust at
            planetary scale.
          </p>
        </div>
      </section>

      <section className="section defense-sources">
        <div className="section-heading">
          <div><span className="section__eyebrow">Research Further</span><h3>Primary and professional sources</h3></div>
          <p>This page explains public research at a high level and does not provide weapon design or deployment instructions.</p>
        </div>
        <div className="resource-links">
          {sources.map((source) => (
            <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label}<span>↗</span></a>
          ))}
        </div>
      </section>

      <PublicFooter
        title="NasaEmployees.com"
        text="The most powerful planetary-defense technology is time: find the threat early, understand it well, and use the smallest reliable push."
      />
    </main>
  );
}
