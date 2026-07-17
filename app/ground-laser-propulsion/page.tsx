import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "Ground-Based Laser Propulsion",
  description:
    "Learn how powerful laser arrays on Earth could push light sails, heat propellant, and help future spacecraft travel faster without carrying a massive energy source onboard.",
  path: "/ground-laser-propulsion",
  image: "/images/ground-laser-propulsion.png",
});

const propulsionMethods = [
  {
    number: "01",
    title: "Push a reflective light sail",
    text: "Photons carry momentum. When a laser beam reflects from an extremely light sail, it gives the sail a tiny push. Hold the beam on target and those tiny pushes keep adding speed without the probe burning propellant.",
    status: "Laboratory-tested physics; full mission systems remain experimental",
  },
  {
    number: "02",
    title: "Heat propellant from far away",
    text: "A laser-thermal spacecraft would still carry a light propellant such as hydrogen, but the energy that heats it could come from a distant laser. The hot gas expands through a nozzle and produces much more thrust than photon pressure alone.",
    status: "Studied and tested in components; not an operational flight system",
  },
  {
    number: "03",
    title: "Beam power to an electric engine",
    text: "A receiving spacecraft could convert laser light into electricity and use that power to run a high-efficiency ion engine. The craft still carries propellant, but it does not have to carry the large power plant that energizes it.",
    status: "A serious deep-space architecture studied by NASA researchers",
  },
];

const missionLadder = [
  {
    step: "Near Earth",
    title: "Measure a tiny orbit change",
    text: "A first demonstration could illuminate a very light spacecraft and verify that photon pressure produces a measurable, controlled change in its orbit.",
  },
  {
    step: "Inner Solar System",
    title: "Send small probes quickly",
    text: "Lightweight science craft could receive acceleration near Earth, then coast toward asteroids, Mars, Venus, or difficult solar-observation orbits.",
  },
  {
    step: "Outer Solar System",
    title: "Reach distant targets sooner",
    text: "More powerful beam systems could give robotic probes higher departure speeds for missions to the giant planets, Kuiper Belt, heliopause, or solar gravitational lens region.",
  },
  {
    step: "Interstellar Precursor",
    title: "Push tiny probes toward another star",
    text: "The most ambitious concepts use vast phased arrays and wafer-scale spacecraft. They are not ready today, but they offer a physics-based path toward meaningful fractions of light speed.",
  },
];

const engineeringChallenges = [
  {
    title: "Atmosphere",
    text: "Air bends and blurs light. A ground array would need excellent weather, a high site, adaptive optics, and real-time correction to keep many laser elements focused together.",
  },
  {
    title: "Aim",
    text: "The target may be small, fast, and thousands of kilometers away. Tracking errors that look microscopic on the ground can make the beam miss completely in space.",
  },
  {
    title: "Heat",
    text: "A sail must reflect almost all incoming energy. Even a small amount of absorption can overheat, warp, or destroy an ultrathin material.",
  },
  {
    title: "Power",
    text: "Useful systems may require enormous electrical power, energy storage, cooling, and large numbers of precisely synchronized laser emitters.",
  },
  {
    title: "Safety",
    text: "Any high-power beam needs strict exclusion zones, aircraft and satellite coordination, automatic shutdown logic, cybersecurity, and international rules.",
  },
  {
    title: "Braking",
    text: "A beam near Earth is good at sending a probe away. Slowing down at a distant destination is harder and may require a second beam, a solar sail maneuver, magnetic braking, or a high-speed flyby instead of orbit entry.",
  },
];

const sourceLinks = [
  {
    label: "NASA: DEEP IN Directed Energy Propulsion for Interstellar Exploration",
    href: "https://www.nasa.gov/general/deep-in-directed-energy-propulsion-for-interstellar-exploration/",
  },
  {
    label: "NASA: Directed Energy Interstellar Study",
    href: "https://www.nasa.gov/general/directed-energy-interstellar-study/",
  },
  {
    label: "NASA JPL: Sail Technology Beamed to Future Space Exploration",
    href: "https://www.jpl.nasa.gov/news/sail-technology-beamed-to-future-space-exploration/",
  },
  {
    label: "NASA NTRS: Ground-to-orbit laser-sail demonstration study",
    href: "https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20160012066.pdf",
  },
  {
    label: "NASA NTRS: Directed-energy propulsion for deep-space missions",
    href: "https://ntrs.nasa.gov/citations/20210013815",
  },
  {
    label: "NASA NTRS: NASA's laser-propulsion project",
    href: "https://ntrs.nasa.gov/citations/19820059260",
  },
];

export default function GroundLaserPropulsionPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
    { label: "Unflown Concepts", href: "/unflown-nasa-concepts" },
    { label: "Space FAQs", href: "/space-faqs" },
  ];

  return (
    <main className="page-shell page-shell--laser-propulsion">
      <PublicHeader
        eyebrow="Future Propulsion"
        title="Ground-Based Lasers"
        links={navLinks}
      />

      <section className="laser-hero">
        <Image
          src="/images/ground-laser-propulsion.png"
          alt="Concept illustration of a ground-based laser array directing a beam toward a reflective light-sail spacecraft above Earth"
          fill
          priority
          className="cover-image"
        />
        <div className="laser-hero__overlay">
          <span className="section__eyebrow">Concept, Not Current Mission</span>
          <h2>What if the spacecraft could leave its engine on Earth?</h2>
          <p>
            A ground-based laser array could send energy to a spacecraft from
            far away. That beam might push a mirror-like sail, heat propellant,
            or power an electric engine, letting a future probe carry less fuel
            and gain speed for much longer than a brief rocket burn.
          </p>
          <div className="hero__actions">
            <Link href="#how-it-works" className="button button--primary">
              See How It Works
            </Link>
            <Link href="#mission-ladder" className="button button--ghost">
              Explore Future Missions
            </Link>
          </div>
        </div>
        <span className="laser-hero__caption">
          Original concept illustration. A laser beam would normally be invisible in the vacuum of space.
        </span>
      </section>

      <section className="section section--split" id="how-it-works">
        <div className="section__copy">
          <span className="section__eyebrow">The Short Answer</span>
          <h3>Light has no rest mass, but it still carries momentum.</h3>
          <p>
            When photons strike and reflect from a surface, they transfer a
            small amount of momentum. The force is tiny: an ideal mirror pushed
            by a one-megawatt beam would receive only about 0.0067 newtons of
            thrust. That is roughly the weight of a small paper clip on Earth.
          </p>
          <p>
            But space has almost no drag. If the spacecraft is extremely light
            and the beam keeps pushing, acceleration accumulates. A system that
            feels weak for one second can become powerful over minutes, hours,
            or longer.
          </p>
        </div>
        <div className="laser-equation" aria-label="Simple photon propulsion relationship">
          <span>Ideal reflected-light thrust</span>
          <strong>Force ≈ 2 × laser power ÷ speed of light</strong>
          <p>More beam power and less spacecraft mass mean faster acceleration.</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Three Ways to Use the Beam</span>
            <h3>The laser can push, heat, or power the spacecraft.</h3>
          </div>
          <p>
            “Laser propulsion” is not one engine. It is a family of ideas that
            move the heavy energy source away from the vehicle.
          </p>
        </div>
        <div className="laser-method-grid">
          {propulsionMethods.map((method) => (
            <article className="laser-method" key={method.title}>
              <span className="laser-method__number">{method.number}</span>
              <h4>{method.title}</h4>
              <p>{method.text}</p>
              <small>{method.status}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section laser-process">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">A Laser-Sail Launch</span>
            <h3>Think of it as a carefully aimed push, not a beam carrying the craft.</h3>
          </div>
        </div>
        <div className="laser-process__track">
          {[
            ["1", "Launch", "A conventional rocket first places the sail and probe above most or all of the atmosphere."],
            ["2", "Lock", "Ground telescopes track the sail while adaptive optics correct for moving air."],
            ["3", "Combine", "Many laser emitters act like one larger phased array and focus on the same target."],
            ["4", "Push", "Reflected photons transfer momentum while the sail stays centered and cool."],
            ["5", "Coast", "The beam switches off and the probe continues on its new trajectory."],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt" id="mission-ladder">
        <div className="section__copy">
          <span className="section__eyebrow">Mission Ladder</span>
          <h3>The sensible path begins with tiny orbital changes, not another star.</h3>
          <p>
            The biggest versions of these ideas get the attention, but a real
            program would grow through smaller demonstrations. Each step would
            prove pointing, sail stability, heat control, power delivery, and
            safe operations before the next one becomes credible.
          </p>
        </div>
        <div className="laser-mission-list">
          {missionLadder.map((mission) => (
            <article key={mission.step}>
              <span>{mission.step}</span>
              <h4>{mission.title}</h4>
              <p>{mission.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What Has to Be Solved</span>
            <h3>The physics works. The complete system is the hard part.</h3>
          </div>
          <p>
            No ground laser currently launches operational spacecraft this way.
            Turning the idea into infrastructure would demand advances across
            optics, materials, power, navigation, regulation, and international safety.
          </p>
        </div>
        <div className="callout-grid laser-challenge-grid">
          {engineeringChallenges.map((challenge) => (
            <article className="callout-card" key={challenge.title}>
              <h4>{challenge.title}</h4>
              <p>{challenge.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band laser-feature-band">
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Why It Matters</span>
          <h3>Rockets would still open the door. Beamed energy could change what happens after.</h3>
          <p>
            Chemical rockets are excellent at leaving Earth, but every mission
            must carry the energy and propellant it needs. Laser propulsion asks
            a different question: what becomes possible when a reusable power
            station can keep helping many spacecraft after launch?
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Official Reading</span>
            <h3>NASA studies behind the concept</h3>
          </div>
          <p>
            These sources cover laboratory sail work, ground-to-orbit
            demonstration studies, laser-heated rockets, and advanced directed-energy mission architectures.
          </p>
        </div>
        <div className="source-links">
          {sourceLinks.map((source) => (
            <Link
              key={source.href}
              href={source.href}
              className="source-links__item"
              target="_blank"
              rel="noreferrer"
            >
              {source.label}
            </Link>
          ))}
        </div>
      </section>

      <PublicFooter
        title="The engine does not always have to travel with the spacecraft."
        text="Ground-based laser propulsion imagines shared infrastructure on Earth giving future probes a push toward destinations that conventional missions reach only slowly."
      />
    </main>
  );
}
