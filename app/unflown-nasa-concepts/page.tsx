import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "Unflown NASA Concepts",
  description: "The rockets, spacecraft, and propulsion systems NASA designed, tested, and almost flew — but never launched. Sea Dragon, Project Orion, X-33, DC-X, and more.",
  path: "/unflown-nasa-concepts",
  image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&h=630&q=80",
});

const categories = [
  {
    id: "super-heavy",
    eyebrow: "Category 1",
    title: "Super-Heavy Lift",
    intro:
      "Before NASA settled on the Saturn V and the lunar orbit rendezvous approach, engineers were drawing rockets of almost incomprehensible scale — designed to hurl entire spacecraft toward the Moon in a single shot.",
    vehicles: [
      {
        era: "1962 · Robert Truax / Aerojet",
        name: "Sea Dragon",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Earth and ocean as seen from orbit — Sea Dragon was designed to launch from the sea",
        description:
          "The largest rocket ever seriously designed. Sea Dragon would have been assembled in a shipyard, floated out to sea, and launched vertically from the ocean surface. Its single first-stage engine produced 355.8 meganewtons of thrust — roughly six times the Saturn V.",
        specs: [
          "150 m tall, 23 m diameter",
          "18,143 metric ton gross mass",
          "550 metric tons to LEO",
          "LOX/RP-1 first stage · LH₂/LOX second stage",
          "Ocean-launched — no land infrastructure required",
        ],
        cancelled:
          "NASA's selection of lunar orbit rendezvous for Apollo cut the required payload mass in half, eliminating the need for a rocket this large. Saturn V was sufficient.",
        legacy:
          "Sea Dragon set the outer limit of what chemical propulsion could theoretically achieve. Its ocean-launch concept resurfaces in modern heavy-lift proposals.",
      },
      {
        era: "1958–1964 · NASA",
        name: "Nova",
        image: "https://images-assets.nasa.gov/image/9902050/9902050~medium.jpg",
        imageAlt: "1962 NASA concept art comparing the Nova rocket family to Saturn variants",
        description:
          "The Nova family was NASA's baseline super-heavy for direct ascent — fly a single spacecraft from Earth to the Moon's surface without any orbital rendezvous. Nova 8L, the largest variant, would have stacked eight F-1 engines on the first stage.",
        specs: [
          "Nova C8: 111 m tall, 12.2 m diameter",
          "8 × F-1 engines · 61.9 MN liftoff thrust",
          "~450 metric tons to LEO",
          "Direct ascent — no staging in lunar orbit",
        ],
        cancelled:
          "John Houbolt's lunar orbit rendezvous mode, adopted in 1962, halved the required payload mass. Saturn V could do the job. Nova was never needed.",
        legacy:
          "The F-1 engine development program, driven partly by Nova requirements, produced the most powerful single-chamber rocket engine ever flown — and powered every Saturn V.",
      },
    ],
  },
  {
    id: "nuclear",
    eyebrow: "Category 2",
    title: "Nuclear Propulsion",
    intro:
      "Chemical rockets are fundamentally limited by their exhaust velocity. Nuclear propulsion promised to break that ceiling, offering specific impulse values two to fifteen times better than anything burning hydrogen and oxygen. Three distinct approaches reached serious development.",
    vehicles: [
      {
        era: "1955–1973 · NASA / AEC",
        name: "NERVA / Project Rover",
        image: "https://images-assets.nasa.gov/image/GRC-1964-C-69680/GRC-1964-C-69680~medium.jpg",
        imageAlt: "Technicians manufacturing a nozzle for the Kiwi B-1-B nuclear rocket engine, 1964",
        description:
          "Nuclear Engine for Rocket Vehicle Application. The idea is simple: heat liquid hydrogen with a nuclear reactor instead of combustion and exhaust it through a nozzle. The result is twice the efficiency of the best chemical engine, making Mars missions practical.",
        specs: [
          "XE-Prime engine: 246,663 N thrust · 841 s specific impulse",
          "Chemical engines peak at ~450 s Isp by comparison",
          "22 reactor tests at Jackass Flats, Nevada",
          "$1.4 billion spent over 18 years",
          "Full flight-ready design completed — never flown",
        ],
        cancelled:
          "President Nixon canceled all human Mars mission planning in 1973 due to Vietnam War costs and budget pressures. Without a Mars mission to justify NERVA, Congress ended the program.",
        legacy:
          "The thermal and neutron physics data from Project Rover still guides modern NTP research. NASA's current DRACO program and the proposed Mars transit vehicles are direct descendants.",
      },
      {
        era: "1958–1965 · General Atomics",
        name: "Project Orion",
        image: "https://images-assets.nasa.gov/image/9906382/9906382~medium.jpg",
        imageAlt: "1960s NASA concept illustration of the Project Orion nuclear pulse propulsion system",
        description:
          "Physicist Ted Taylor and Freeman Dyson proposed the most audacious propulsion concept ever seriously funded: detonate nuclear bombs behind a massive pusher plate, absorb the blast with shock absorbers, and ride the pulse to orbit and beyond.",
        specs: [
          "Specific impulse: 2,000–6,000 s depending on bomb yield",
          "Thrust: meganewtons per detonation",
          "4,000-tonne vehicle to Mars in 4 weeks · Saturn in 7 months",
          "400-person deep-space ship was on the drawing board",
        ],
        cancelled:
          "The 1963 Partial Test Ban Treaty prohibited nuclear detonations in the atmosphere, underwater, and in space. Orion was illegal before it could be built.",
        legacy:
          "Freeman Dyson's analysis of Orion shaped decades of thinking about interstellar propulsion. The physics are sound — only politics and treaty law prevent it.",
      },
      {
        era: "2003–2005 · NASA",
        name: "Project Prometheus / JIMO",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Deep space stars — JIMO was designed to explore the outer solar system under nuclear electric power",
        description:
          "Jupiter Icy Moons Orbiter would have been the most capable robotic spacecraft ever designed: a 36,000-kilogram ship powered by a 200-kilowatt fission reactor driving ion and Hall thrusters, capable of orbiting Europa, Ganymede, and Callisto in sequence.",
        specs: [
          "200 kW nuclear electric power · ion / Hall thrusters",
          "Specific impulse: ~7,000 s",
          "36,375 kg spacecraft total mass",
          "Target: Europa, Ganymede, Callisto — all three in one mission",
        ],
        cancelled:
          "Estimated costs exceeded $16 billion. A new NASA administrator deprioritized it in 2005 as too ambitious. The technology had not been proven and the mission scope kept growing.",
        legacy:
          "Solar electric propulsion work from Prometheus fed Dawn, Hayabusa2, and Psyche. Europa Clipper, launched in 2024, is its direct spiritual successor — though solar-powered.",
      },
    ],
  },
  {
    id: "ssto",
    eyebrow: "Category 3",
    title: "Single-Stage-to-Orbit",
    intro:
      "The holy grail of launch vehicle design: a single vehicle that takes off, reaches orbit, and returns with no expendable stages. If it could be done reliably and quickly, it would reduce launch costs by an order of magnitude. Three serious attempts were made — each failed for a different reason.",
    vehicles: [
      {
        era: "1986–1994 · Rockwell / DARPA",
        name: "X-30 NASP",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Earth's atmosphere from orbit — NASP was designed to fly through it at Mach 25 on a single air-breathing pass",
        description:
          "The National Aero-Space Plane would have been an air-breathing scramjet spaceplane: take off from a runway, accelerate to Mach 25 on atmospheric oxygen alone, then burn LOX/LH₂ to reach orbit. A flight from Washington D.C. to Tokyo would take two hours.",
        specs: [
          "Mach 25 air-breathing to orbit · horizontal takeoff and landing",
          "Titanium matrix composite / SiC fiber airframe",
          "Slush liquid hydrogen fuel (higher density than liquid)",
          "$1.7 billion spent · no prototype built",
        ],
        cancelled:
          "Scramjet engines proved far heavier than predicted. The structural mass fraction made reaching orbit thermodynamically impossible with available materials. The entire premise was wrong.",
        legacy:
          "NASP-era scramjet research produced the X-43A, which reached Mach 9.6 in 2004 — still the air-breathing speed record. Hypersonic vehicle design descends directly from this work.",
      },
      {
        era: "1996–2001 · Lockheed Martin / NASA",
        name: "X-33 / VentureStar",
        image: "https://images-assets.nasa.gov/image/9610446/9610446~medium.jpg",
        imageAlt: "NASA X-33 VentureStar small-scale reusable launch vehicle demonstrator",
        description:
          "An 85-percent-complete reusable SSTO lifting body when NASA canceled it. The wedge-shaped vehicle used two linear aerospike engines — nozzles that used the vehicle's body as one wall, adapting automatically to all altitudes — and was designed to fly like an airplane, not a capsule.",
        specs: [
          "2 × XRS-2200 linear aerospike engines",
          "Wedge lifting-body reentry · runway landing",
          "$922M NASA + $357M Lockheed Martin = $1.28B total",
          "85% assembled at cancellation",
        ],
        cancelled:
          "A composite liquid hydrogen tank catastrophically delaminated during cryo-loading in November 1999. Repairing it with metallic tanks added too much mass to reach orbit. The mission-critical innovation had failed.",
        legacy:
          "The XRS-2200 aerospike engine test data remains foundational to nozzle design. The X-33 program proved composite cryogenic tanks require extreme care — a lesson SpaceX Starship relearned with carbon fiber.",
      },
      {
        era: "1991–1996 · McDonnell Douglas / SDIO",
        name: "DC-X Delta Clipper",
        image: "https://images-assets.nasa.gov/image/9500884/9500884~medium.jpg",
        imageAlt: "DC-XA reusable launch vehicle concept illustration, 1995, NASA Marshall Space Flight Center",
        description:
          "A 12-meter autonomous cone that took off vertically, hovered, translated sideways, and landed on its tail. On August 18, 1993, it became the first rocket in history to execute a controlled vertical landing. Its ground crew turned it around for the next flight in 26 hours.",
        specs: [
          "12 m tall · 4 × RL10A-5 throttleable engines · LOX/LH₂",
          "First controlled vertical rocket landing: August 18, 1993",
          "26-hour flight-to-flight turnaround with a crew of 12",
          "Destroyed on 12th flight by landing strut sensor failure",
        ],
        cancelled:
          "Congressional funding was cut before a full-scale version could be built. The program was transferred to NASA, which repainted it and called it DC-XA before losing it to a hard landing.",
        legacy:
          "DC-X is the direct proof-of-concept ancestor of SpaceX Falcon 9 booster recovery and Blue Origin New Shepard. Elon Musk has cited it explicitly as foundational to SpaceX's VTVL approach.",
      },
    ],
  },
  {
    id: "crv",
    eyebrow: "Category 4",
    title: "Crew Return Vehicles",
    intro:
      "Once the ISS was committed to, NASA needed a dedicated lifeboat: a spacecraft capable of returning all seven crew members to Earth autonomously if an emergency struck. Two serious designs were built, both canceled within two years of each other.",
    vehicles: [
      {
        era: "c. 1990 · NASA Langley",
        name: "HL-20 Personnel Launch System",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=900&q=80",
        imageAlt: "Spacecraft descent concept — the HL-20 was a lifting body glider designed to return crews from the ISS",
        description:
          "A sleek lifting body derived from the Soviet BOR-4 reentry vehicle, designed to carry ten people from orbit to a runway landing. It had no main engines — it was purely a glider — and could be launched atop a Titan IV. Students at NC State and NC A&T built a full-scale wooden mockup.",
        specs: [
          "10-person crew · 8.93 m long · 10,430 kg empty mass",
          "Lifting body glider · no main propulsion engines",
          "1.5 G peak reentry load · runway landing",
          "Full-scale mockup built and studied at NASA Langley",
        ],
        cancelled:
          "NASA chose Soyuz as the ISS crew return vehicle. The HL-20 had no path to a funded flight program once that decision was made.",
        legacy:
          "The entire HL-20 aerodynamic database was transferred to Sierra Nevada Corporation. Dream Chaser — scheduled to fly ISS cargo missions — is its direct descendant.",
      },
      {
        era: "1995–2002 · NASA",
        name: "X-38 Crew Return Vehicle",
        image: "https://images-assets.nasa.gov/image/EC01-0339-77/EC01-0339-77~medium.jpg",
        imageAlt: "X-38 vehicle suspended under its 7,500-square-foot parafoil during a 2001 drop test at NASA Dryden",
        description:
          "A seven-person lifting body based on the X-24A research aircraft, designed to detach from the ISS and land autonomously under a 687-square-meter parafoil — the largest parafoil ever built. Vehicle 201 was 90 percent complete and had passed nearly all drop tests from a NASA B-52.",
        specs: [
          "7-person crew · 9.1 m long · X-24A airframe heritage",
          "Drop-tested from NASA B-52 carrier aircraft",
          "687 m² parafoil landing system — largest ever built",
          "V-201 was 90% complete at cancellation",
        ],
        cancelled:
          "In 2002, NASA administrator Sean O'Keefe's 'Core Complete' ISS policy eliminated any non-essential ISS development. The X-38 was deemed discretionary. Over $500M had already been spent.",
        legacy:
          "Parafoil precision-landing research from X-38 fed SpaceX Cargo Dragon's recovery work and military precision-airdrop programs. Boeing CST-100 and Orion inherit its crew-return philosophy.",
      },
    ],
  },
];

const sourceLinks = [
  {
    label: "Winchell Chung — Project Rho: Sea Dragon",
    href: "https://www.projectrho.com/public_html/rocket/realdesigns.php",
  },
  {
    label: "NASA History: NERVA and Nuclear Propulsion",
    href: "https://history.nasa.gov/SP-4217/ch11.htm",
  },
  {
    label: "NASA History: Project Orion",
    href: "https://history.nasa.gov/SP-4801/ch4.htm",
  },
  {
    label: "NASA: X-33 Advanced Technology Demonstrator",
    href: "https://www.nasa.gov/centers-and-facilities/marshall/x-33-advanced-technology-demonstrator/",
  },
  {
    label: "NASA History: DC-X Delta Clipper",
    href: "https://history.nasa.gov/x-33/dc-x.htm",
  },
  {
    label: "NASA Langley: HL-20 Personnel Launch System",
    href: "https://ntrs.nasa.gov/citations/19920007788",
  },
  {
    label: "NASA: X-38 Crew Return Vehicle",
    href: "https://www.nasa.gov/centers-and-facilities/armstrong/x-38-crew-return-vehicle/",
  },
  {
    label: "NASA: Project Prometheus / JIMO",
    href: "https://solarsystem.nasa.gov/resources/519/project-prometheus/",
  },
];

export default function UnflownNasaConceptsPage() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Space Shuttle", href: "/space-shuttle-missions" },
    { label: "SpaceX Starship", href: "/spacex-starship" },
    { label: "Future Mars Colony", href: "/future-mars-colony" },
  ];

  return (
    <main className="page-shell page-shell--unflown">
      <PublicHeader
        eyebrow="History"
        title="Unflown Concepts"
        links={navLinks}
      />

      <section className="hero hero--compact hero--unflown">
        <div className="hero__backdrop">
          <Image
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Research · Design · Cancellation</span>
            <h2>The rockets NASA built on paper — and almost in steel.</h2>
            <p>
              Some of the most extraordinary engineering in NASA&apos;s history
              never left the ground. Budget cuts, treaty obligations, composite
              tank failures, and shifting mission priorities ended programs that
              had already consumed billions of dollars, decades of research, and
              sometimes 90 percent of their development work. This is their
              story.
            </p>
            <div className="hero__actions">
              <Link href="#super-heavy" className="button button--primary">
                See the Concepts
              </Link>
              <Link href="#nuclear" className="button button--ghost">
                Nuclear Propulsion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Why It Matters</span>
            <h3>
              The gap between what NASA designed and what NASA flew is one of
              the most instructive places in aerospace history.
            </h3>
          </div>
          <p>
            These are not failed ideas. Most were technically sound. The
            obstacles that stopped them — politics, cost, treaty law, a single
            composite tank — had nothing to do with the quality of the
            engineering. Understanding what was abandoned, and why, is essential
            context for evaluating what is being built today.
          </p>
        </div>
        <div className="callout-grid">
          <article className="callout-card">
            <h4>Billions spent, nothing launched</h4>
            <p>
              The X-33 cost $1.28B before cancellation. NERVA consumed $1.4B
              over 18 years. The X-38 absorbed over $500M and was 90 percent
              complete. These were serious industrial programs, not concept
              studies.
            </p>
          </article>
          <article className="callout-card">
            <h4>The ideas survived even when the hardware did not</h4>
            <p>
              DC-X&apos;s vertical landing directly inspired SpaceX. The HL-20
              became Dream Chaser. NERVA&apos;s physics data drives modern
              nuclear thermal propulsion research. Cancellation ended the
              programs, not the concepts.
            </p>
          </article>
          <article className="callout-card">
            <h4>Context for today&apos;s ambitious designs</h4>
            <p>
              Starship, Artemis, nuclear thermal engines for Mars — all of these
              have predecessors in this archive. The engineering problems that
              stopped prior programs are the same ones being solved now, with
              better materials, manufacturing, and computers.
            </p>
          </article>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="section section--alt">
          <div className="section-heading">
            <div>
              <span className="section__eyebrow">{cat.eyebrow}</span>
              <h3>{cat.title}</h3>
            </div>
            <p>{cat.intro}</p>
          </div>
          <div className="unflown-vehicles">
            {cat.vehicles.map((v) => (
              <article key={v.name} className="unflown-card">
                <div className="unflown-card__image-wrap">
                  <Image
                    src={v.image}
                    alt={v.imageAlt}
                    fill
                    className="unflown-card__img"
                    sizes="(max-width: 860px) 100vw, 860px"
                  />
                </div>
                <div className="unflown-card__content">
                  <div className="unflown-card__header">
                    <span className="unflown-card__era">{v.era}</span>
                    <h4 className="unflown-card__name">{v.name}</h4>
                  </div>
                  <p className="unflown-card__description">{v.description}</p>
                  <div className="unflown-card__body">
                    <div className="unflown-card__specs">
                      <span className="unflown-card__label">Key specs</span>
                      <ul>
                        {v.specs.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="unflown-card__lower">
                      <div className="unflown-card__cancelled">
                        <span className="unflown-card__label">Why it was cancelled</span>
                        <p>{v.cancelled}</p>
                      </div>
                      <div className="unflown-card__legacy">
                        <span className="unflown-card__label">Modern legacy</span>
                        <p>{v.legacy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="feature-band">
        <div className="feature-band__image">
          <Image
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">The Bigger Picture</span>
          <h3>
            Every ambitious vehicle flying today stands on the engineering of
            vehicles that never flew.
          </h3>
          <p>
            SpaceX did not invent vertical landing. NASA, McDonnell Douglas, and
            the SDIO proved it in 1993. Dream Chaser did not invent the lifting
            body. NASA Langley built the mockup in 1990. Nuclear thermal
            propulsion was not a new idea when Artemis planners reached for it —
            it was validated in a Nevada desert five decades ago. The shelf life
            of good engineering is very long.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Primary references</h3>
          </div>
          <p>
            These sources ground the vehicle descriptions, specifications, and
            cancellation histories in official records, NASA technical reports,
            and aerospace history archives.
          </p>
        </div>
        <div className="source-links">
          {sourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="source-links__item"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <PublicFooter
        title="Engineering That Endures"
        text="The concepts that never flew shaped the vehicles that did — and the ones being built right now."
      />
    </main>
  );
}
