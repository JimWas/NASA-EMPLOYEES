import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Space Hibernation: Could Humans Sleep to Mars?",
  description:
    "A clear guide to torpor, therapeutic hypothermia, NASA's STASH research, proposed Mars hibernation habitats, potential benefits, and the major medical risks still unsolved.",
  path: "/space-hibernation",
  image: "/images/space-hibernation-awake.jpg",
});

const stateComparison = [
  {
    state: "Normal sleep",
    metabolism: "Only modestly reduced",
    temperature: "Tightly regulated near normal",
    reality: "Everyday human biology",
  },
  {
    state: "Medical temperature control",
    metabolism: "Reduced as the body is cooled",
    temperature: "Clinically managed for limited periods",
    reality: "Established medicine for selected patients",
  },
  {
    state: "Natural torpor",
    metabolism: "Actively and sometimes deeply suppressed",
    temperature: "Varies widely by species",
    reality: "Routine biology for some animals",
  },
  {
    state: "Human synthetic torpor",
    metabolism: "Would need safe, controlled suppression",
    temperature: "Unknown long-duration target",
    reality: "Research goal, not a current capability",
  },
];

const missionBenefits = [
  {
    title: "Fewer consumables",
    text: "A lower metabolic rate could reduce demand for food, oxygen, water, and waste processing during the long cruise between planets.",
  },
  {
    title: "A smaller habitat",
    text: "Sleeping crew would need less active living space. ESA studies found a hibernation architecture could reduce spacecraft mass by roughly one-third in a conceptual Mars mission.",
  },
  {
    title: "Focused shielding",
    text: "Water, food, and other supplies could be arranged around compact pods, concentrating radiation shielding where the crew spends most of the voyage.",
  },
  {
    title: "Less confinement stress",
    text: "Long periods of isolation, monotony, and interpersonal strain might be reduced, though repeated torpor would create new psychological and medical challenges.",
  },
  {
    title: "Compact artificial gravity",
    text: "A recumbent crew could make a small rotating system more tolerable because sleeping occupants would not move their heads through a strong Coriolis environment.",
  },
  {
    title: "Possible biological protection",
    text: "Hibernating animals show intriguing resistance to muscle loss, bone loss, and radiation injury. Scientists still have to learn whether humans could gain any of those protections.",
  },
];

const inductionPaths = [
  {
    number: "01",
    title: "Targeted temperature management",
    text: "Cooling systems and sedatives can reduce human temperature and metabolism in critical care. Extending that controlled state from hours or days to repeated weeks is unproven.",
    status: "Clinical foundation",
  },
  {
    number: "02",
    title: "Pharmacological triggers",
    text: "Animal studies target brain pathways that regulate heat production, heart rate, and energy use. A reversible drug suitable for healthy astronauts does not yet exist.",
    status: "Preclinical research",
  },
  {
    number: "03",
    title: "Focused ultrasound",
    text: "Researchers have induced torpor-like hypothermia in rodents by stimulating the brain's preoptic area with ultrasound. Translation to people remains a distant question.",
    status: "Early animal evidence",
  },
  {
    number: "04",
    title: "Hibernation-inspired medicine",
    text: "Instead of putting the whole body into torpor, future drugs might copy individual protective mechanisms found in hibernators, such as preserving tissue or controlling inflammation.",
    status: "Promising alternative",
  },
];

const podSystems = [
  ["Temperature", "Closed-loop cooling and warming with redundant sensors"],
  ["Circulation", "Continuous heart rhythm, blood pressure, glucose, and clot monitoring"],
  ["Breathing", "Airway support, oxygen delivery, carbon-dioxide removal, and ventilation"],
  ["Nutrition", "Carefully controlled fluids and nutrients with infection-resistant access"],
  ["Muscle & bone", "Electrical stimulation, loading, or compact artificial gravity"],
  ["Emergency care", "Automatic detection, safe arousal, robotic assistance, and an awake caregiver"],
];

const medicalRisks = [
  {
    title: "The human body does not naturally hibernate",
    text: "Humans lack the evolved switches that let true hibernators cool, suppress metabolism, preserve organs, and wake repeatedly without injury.",
  },
  {
    title: "Infection and immune suppression",
    text: "Lower temperatures can weaken immune responses. Long-term catheters, breathing support, and confined spacecraft systems create additional infection pathways.",
  },
  {
    title: "Clots, bleeding, and immobility",
    text: "Prolonged inactivity and intravenous lines can raise clot risk, while cooling can also alter normal coagulation. Both sides of that balance must be controlled.",
  },
  {
    title: "Heart rhythm during cooling and rewarming",
    text: "Temperature, glucose, and electrolytes affect cardiac stability. Waking a crew member safely may be harder than placing them into a suppressed state.",
  },
  {
    title: "Nutrition and organ function",
    text: "A person still needs energy, fluid, and waste removal. Months of artificial feeding and reduced gut activity have not been validated in healthy people in space.",
  },
  {
    title: "Failures far from Earth",
    text: "A torpor spacecraft must diagnose problems and care for incapacitated people with long communication delays and no nearby hospital.",
  },
];

const roadmap = [
  ["Now", "Understand hibernators", "Study how animals preserve muscle, bone, organs, and DNA while metabolism is suppressed."],
  ["Next", "Validate torpor in microgravity", "Use animal hardware such as the proposed STASH laboratory to learn whether protection survives in space."],
  ["Then", "Prove reversible human protocols", "Establish safe duration, induction, nutrition, monitoring, and rewarming through tightly controlled clinical research on Earth."],
  ["Later", "Test an integrated habitat", "Demonstrate autonomous pods, fault recovery, radiation sheltering, and rotating crew schedules before any deep-space use."],
  ["Only after that", "Consider an operational mission", "Human torpor would need the same evidence, redundancy, and escape planning expected of every life-critical spacecraft system."],
];

const sources = [
  {
    label: "NASA: Studying Torpor in Animals for Space-health in Humans (STASH)",
    href: "https://www.nasa.gov/general/studying-torpor-in-animals-for-space-health-in-humans/",
  },
  {
    label: "NASA NTRS: Advancing Torpor Inducing Transfer Habitats for Human Stasis to Mars",
    href: "https://ntrs.nasa.gov/citations/20180007195",
  },
  {
    label: "NASA: Synthetic Torpor as a Strategy for Survivability",
    href: "https://smd-cms.nasa.gov/wp-content/uploads/2023/05/194_4ed6e97e79c39f2f69c20b8a5d320550_GRIKOYURI.pdf",
  },
  {
    label: "ESA: Hibernating Astronauts Would Need Smaller Spacecraft",
    href: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Hibernating_astronauts_would_need_smaller_spacecraft",
  },
  {
    label: "ESA Exploration Science: Hibernation and Torpor",
    href: "https://explorationscience.esa.int/topical-teams/hibernation-and-torpor/",
  },
  {
    label: "Frontiers: Scientific Validity of Synthetic Torpor for Radiation Research",
    href: "https://www.frontiersin.org/journals/space-technologies/articles/10.3389/frspt.2024.1471001/full",
  },
];

export default function SpaceHibernationPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Future Mars Colony", href: "/future-mars-colony" },
    { label: "Space Food", href: "/what-astronauts-eat" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
  ];

  return (
    <main className="page-shell page-shell--hibernation">
      <PublicHeader eyebrow="Human Spaceflight" title="Space Hibernation" links={navLinks} />

      <section className="hibernation-hero">
        <Image
          src="/images/space-hibernation-awake.jpg"
          alt="Concept illustration of a traveler inside a medical torpor pod during a voyage to Mars"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 1400px"
          className="hibernation-hero__image"
        />
        <div className="hibernation-hero__shade" />
        <div className="hibernation-hero__content">
          <span className="section__eyebrow">The Long Journey Problem</span>
          <h2>Could astronauts hibernate their way to Mars?</h2>
          <p>
            Perhaps one day, but not today. Scientists are studying whether a
            controlled torpor-like state could lower metabolism, protect the
            body, and shrink the systems needed for long voyages. Human space
            hibernation has never been demonstrated.
          </p>
          <div className="hero__actions">
            <Link href="#what-it-is" className="button button--primary">Start With the Science</Link>
            <Link href="#research" className="button button--ghost">See Real Research</Link>
          </div>
        </div>
        <span className="hibernation-hero__caption">Concept illustration • Not current spacecraft or medical technology</span>
      </section>

      <section className="hibernation-truth" aria-label="Current status of space hibernation">
        <div><span>Established</span><strong>Short-duration medical temperature control</strong></div>
        <div><span>Under study</span><strong>Animal torpor, tissue protection, and habitat concepts</strong></div>
        <div><span>Not achieved</span><strong>Safe long-duration human torpor in space</strong></div>
      </section>

      <section className="section hibernation-definition" id="what-it-is">
        <div className="section__copy">
          <span className="section__eyebrow">First: It Is Not Sleep</span>
          <h3>Torpor is an actively regulated low-energy state.</h3>
          <p>
            Sleep changes awareness. Torpor changes the operating level of the
            entire body: metabolism slows, temperature can fall, heart and
            breathing rates decline, and energy use drops. Natural hibernation
            is a repeating pattern of long torpor bouts and brief arousals.
          </p>
          <p>
            Synthetic torpor means trying to induce part of that biology in a
            species that does not normally hibernate. It is also different from
            cryogenic freezing: the person remains alive, perfused, monitored,
            and metabolically active at a lower level.
          </p>
        </div>
        <figure className="hibernation-portrait">
          <Image
            src="/images/space-hibernation-torpor.jpg"
            alt="Concept illustration of a traveler resting inside a monitored torpor pod"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
            className="cover-image"
          />
          <figcaption>Concept illustration • A real system would require continuous intensive-care-level monitoring.</figcaption>
        </figure>
      </section>

      <section className="section section--alt hibernation-comparison">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Four Different States</span>
            <h3>“Sleeping to Mars” compresses several very different ideas.</h3>
          </div>
          <p>The distinction matters because only the first two have been experienced by people.</p>
        </div>
        <div className="hibernation-table" role="table" aria-label="Comparison of sleep, medical cooling, natural torpor, and synthetic torpor">
          <div className="hibernation-table__row hibernation-table__head" role="row">
            <span role="columnheader">State</span><span role="columnheader">Metabolism</span><span role="columnheader">Temperature</span><span role="columnheader">Where it stands</span>
          </div>
          {stateComparison.map((item) => (
            <div className="hibernation-table__row" role="row" key={item.state}>
              <strong role="cell">{item.state}</strong><span role="cell">{item.metabolism}</span><span role="cell">{item.temperature}</span><span role="cell">{item.reality}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section hibernation-benefits">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Why Mission Designers Care</span>
            <h3>Change the crew's biology and the whole spacecraft changes.</h3>
          </div>
          <p>These are potential system benefits from research studies, not promises for a future mission.</p>
        </div>
        <div className="hibernation-benefit-grid">
          {missionBenefits.map((benefit, index) => (
            <article key={benefit.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{benefit.title}</h4>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hibernation-research" id="research">
        <div className="hibernation-research__visual">
          <Image
            src="/images/space-hibernation-stash.jpg"
            alt="Infrared NASA research image of a hibernating ground squirrel curled inside a test chamber"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="cover-image"
          />
          <span>NASA / Ashley Hermans and Ryan Sprenger</span>
        </div>
        <div className="hibernation-research__copy">
          <span className="section__eyebrow">The Real Experiment</span>
          <h3>STASH starts with animals, not people.</h3>
          <p>
            NASA-funded researchers proposed the Studying Torpor in Animals for
            Space-health in Humans laboratory to make hibernation research
            possible in microgravity. The hardware is designed to fit within an
            ISS biological incubator and support both natural hibernators and
            non-hibernating laboratory animals.
          </p>
          <ul>
            <li>Cooling as low as 4°C for animal studies</li>
            <li>Oxygen and carbon-dioxide measurements to track metabolism</li>
            <li>Continuous body temperature, heart rate, breathing, and ventilation data</li>
            <li>Tests of muscle, bone, radiation, and hibernation-inspired treatments</li>
          </ul>
          <p className="hibernation-status-note">
            STASH is a research concept and development path. It is not a human hibernation pod or an operational Mars system.
          </p>
        </div>
      </section>

      <section className="section hibernation-architecture">
        <div className="section__copy">
          <span className="section__eyebrow">A Different Spacecraft</span>
          <h3>A torpor habitat trades living space for medical complexity.</h3>
          <p>
            ESA compared a conventional Mars habitat with a smaller hibernation
            module and estimated roughly one-third lower spacecraft mass in its
            concept study. SpaceWorks studied rotating schedules in which crew
            members would spend limited periods in medically induced torpor
            rather than one uninterrupted six-month sleep.
          </p>
          <p>
            The apparent simplicity of a row of pods is deceptive. Every pod is
            also an intensive-care room, radiation shelter, life-support node,
            restraint system, exercise countermeasure, and emergency escape problem.
          </p>
        </div>
        <figure className="hibernation-habitat-figure">
          <Image
            src="/images/space-hibernation-habitat.jpg"
            alt="ESA comparison of a standard Mars habitation module with a smaller hibernation-based module"
            width={1200}
            height={675}
          />
          <figcaption>ESA concept comparison: conventional habitat at left, hibernation-based equivalent at right.</figcaption>
        </figure>
      </section>

      <section className="section section--alt hibernation-paths">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">How Could Torpor Be Induced?</span>
            <h3>There is no approved astronaut hibernation drug.</h3>
          </div>
          <p>Researchers are testing several pathways, each at a very different level of maturity.</p>
        </div>
        <div className="hibernation-path-grid">
          {inductionPaths.map((path) => (
            <article key={path.title}>
              <div><span>{path.number}</span><small>{path.status}</small></div>
              <h4>{path.title}</h4>
              <p>{path.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section hibernation-pod">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Inside a Real Pod</span>
            <h3>The pod would have to keep doing the work the crew cannot.</h3>
          </div>
          <p>A viable system would need hospital-grade care with spacecraft-grade autonomy and redundancy.</p>
        </div>
        <div className="hibernation-pod-grid">
          {podSystems.map(([title, text]) => (
            <article key={title}><strong>{title}</strong><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="hibernation-warning">
        <div className="hibernation-warning__heading">
          <span className="section__eyebrow">The Hard Part</span>
          <h3>Entering torpor is only useful if every crew member wakes healthy.</h3>
          <p>Most of the remaining barriers are biological and medical, not cinematic pod design.</p>
        </div>
        <div className="hibernation-risk-list">
          {medicalRisks.map((risk) => (
            <article key={risk.title}><h4>{risk.title}</h4><p>{risk.text}</p></article>
          ))}
        </div>
      </section>

      <section className="section hibernation-roadmap">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">A Responsible Roadmap</span>
            <h3>From a curled-up squirrel to a crewed Mars mission is a long chain of proof.</h3>
          </div>
        </div>
        <div className="hibernation-roadmap__track">
          {roadmap.map(([phase, title, text]) => (
            <article key={phase}><span>{phase}</span><div><h4>{title}</h4><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="hibernation-closing">
        <Image
          src="/images/space-hibernation-torpor.jpg"
          alt="Concept illustration of a monitored traveler in torpor during a Mars voyage"
          fill
          sizes="1400px"
          className="cover-image"
        />
        <div className="hibernation-closing__shade" />
        <div className="hibernation-closing__copy">
          <span className="section__eyebrow">The Honest Answer</span>
          <h3>Space hibernation is plausible enough to study and dangerous enough not to rush.</h3>
          <p>
            The goal is not to imitate science fiction. It is to discover whether
            biology can become part of the spacecraft: lowering demand, preserving
            health, and helping humans survive journeys that currently ask too much
            of both bodies and machines.
          </p>
        </div>
      </section>

      <section className="section hibernation-sources">
        <div className="section-heading">
          <div><span className="section__eyebrow">Research Further</span><h3>Primary and professional sources</h3></div>
          <p>This page distinguishes current medicine and laboratory evidence from proposed mission architecture.</p>
        </div>
        <div className="resource-links">
          {sources.map((source) => (
            <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{source.label}<span>↗</span></a>
          ))}
        </div>
      </section>

      <PublicFooter
        title="NasaEmployees.com"
        text="Space hibernation remains experimental. The future begins by being honest about what we know, what we hope, and what must still be proven."
      />
    </main>
  );
}
