import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "SpaceX Starship",
  description:
    "A plain-English overview of SpaceX Starship's integrated flight tests, Super Heavy booster reuse, and the payloads Starship has officially deployed so far."
};

const headlineStats = [
  {
    label: "Integrated launches through Flight 12",
    value: "12",
    note: "SpaceX's launch schedule lists the twelfth integrated test on May 21, 2026."
  },
  {
    label: "Officially confirmed payload deploys",
    value: "16",
    note: "Two successful demos of eight Starlink simulators each on Flights 10 and 11."
  },
  {
    label: "Unique Super Heavy boosters flown",
    value: "11",
    note: "Flight 9 was the first booster reflight; the rest have been fresh boosters."
  },
  {
    label: "Starships produced",
    value: "36+",
    note: "SpaceX said on May 12, 2026 that it had produced more than three dozen Starships."
  }
];

const generationCards = [
  {
    title: "Flights 1 to 6",
    text: "These built the basics: first integrated liftoff, first hot-stage separation, first full-duration Starship ascent, first propellant transfer demo, first controlled reentries, first soft splashdowns, and the first in-space Raptor relight."
  },
  {
    title: "Flights 7 to 11",
    text: "This stretch introduced second-generation Starships, repeated booster catches, the first Super Heavy reflight, and the first successful payload deployments from Starship."
  },
  {
    title: "Flight 12 and beyond",
    text: "SpaceX framed Flight 12 as the debut of Starship V3, Super Heavy V3, Raptor 3, and a new launch pad. It marks the transition from proving the basics to pushing toward higher reuse and bigger payload operations."
  }
];

const flightTimeline = [
  {
    flight: "Flight 1",
    date: "April 20, 2023",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First ever integrated Starship and Super Heavy launch. Reached about 39 km but did not complete stage separation.",
    payload: "No deploy"
  },
  {
    flight: "Flight 2",
    date: "November 18, 2023",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First full-duration Super Heavy ascent burn, first successful hot-stage separation, and first Starship to reach outer space.",
    payload: "No deploy"
  },
  {
    flight: "Flight 3",
    date: "March 14, 2024",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First full-duration Starship ascent burn, first payload-door test in space, first propellant transfer demo, and first reentry from space.",
    payload: "No deploy"
  },
  {
    flight: "Flight 4",
    date: "June 6, 2024",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First controlled Super Heavy splashdown and first controlled Starship splashdown after a full reentry profile.",
    payload: "No deploy"
  },
  {
    flight: "Flight 5",
    date: "October 13, 2024",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First successful catch of a Super Heavy booster by Mechazilla.",
    payload: "No deploy"
  },
  {
    flight: "Flight 6",
    date: "November 19, 2024",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "Catch was waved off, but the booster still soft-splashed successfully. Starship completed the first in-space relight of a Raptor engine.",
    payload: "No deploy"
  },
  {
    flight: "Flight 7",
    date: "January 16, 2025",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "First second-generation Starship flight and second successful booster catch. Upper stage was lost during ascent.",
    payload: "No deploy"
  },
  {
    flight: "Flight 8",
    date: "March 6, 2025",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "Third successful booster catch. Upper stage was lost during ascent after an engine anomaly.",
    payload: "No deploy"
  },
  {
    flight: "Flight 9",
    date: "May 27, 2025",
    starship: "New upper stage",
    booster: "Reflown booster from Flight 7",
    milestone:
      "First ever Super Heavy reflight. Booster was lost during landing burn; Starship reached coast phase but could not deploy payload.",
    payload: "0 deployed; payload bay door failed to open"
  },
  {
    flight: "Flight 10",
    date: "August 26, 2025",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "Every major objective was met, including the first successful payload deployment from Starship and the second in-space Raptor relight.",
    payload: "8 Starlink simulators deployed"
  },
  {
    flight: "Flight 11",
    date: "October 13, 2025",
    starship: "New upper stage",
    booster: "New booster",
    milestone:
      "Final flight of the second-generation Starship and first-generation Super Heavy, with every major objective achieved.",
    payload: "8 Starlink simulators deployed"
  },
  {
    flight: "Flight 12",
    date: "May 21, 2026",
    starship: "New V3 upper stage",
    booster: "New V3 booster",
    milestone:
      "Debut of Starship V3, Super Heavy V3, Raptor 3, and the new Pad 2 architecture. SpaceX listed the mission as the next big step toward faster reuse.",
    payload: "22 simulators were planned; official post-flight deployment result was not yet published when this page was assembled on May 23, 2026"
  }
];

const payloadLedger = [
  {
    mission: "Flight 3",
    result: "Payload door opened and closed in space.",
    whyItMatters:
      "This was the first time SpaceX demonstrated that Starship could mechanically prepare for a future deploy mission."
  },
  {
    mission: "Flight 4",
    result: "No hardware deploy. SpaceX described the payload as data.",
    whyItMatters:
      "The mission was focused on reentry, control, and splashdown rather than releasing objects from the payload bay."
  },
  {
    mission: "Flight 9",
    result: "Eight Starlink simulator satellites were planned, but none deployed.",
    whyItMatters:
      "The payload bay door failed to open, which forced SpaceX to skip the deploy demo."
  },
  {
    mission: "Flight 10",
    result: "Eight Starlink simulators deployed successfully.",
    whyItMatters:
      "This was the first successful payload demonstration from Starship."
  },
  {
    mission: "Flight 11",
    result: "Eight Starlink simulators deployed successfully.",
    whyItMatters:
      "This proved the Flight 10 result was repeatable, not a one-off."
  },
  {
    mission: "Flight 12",
    result: "SpaceX planned to deploy 22 Starlink simulators, including two meant to image the heat shield.",
    whyItMatters:
      "As of May 23, 2026, SpaceX had not yet posted the same kind of post-flight writeup it had published for Flights 10 and 11, so this page keeps Flight 12's payload outcome explicitly pending."
  }
];

const vehicleNotes = [
  "SpaceX's public Starship pages track flights by test number and generation more than by a single public serial ledger.",
  "Every integrated launch through Flight 12 has used a fresh Starship upper stage; SpaceX has not yet publicly documented an upper-stage reflight in the integrated campaign.",
  "The first and only publicly documented Super Heavy reflight so far was Flight 9, which reused the booster from Flight 7.",
  "That means Starship has flown 12 upper stages across 12 integrated launches, while Super Heavy has flown 11 unique boosters across those same launches."
];

const sourceLinks = [
  {
    label: "SpaceX Content Hub flight list",
    href: "https://www.spacex.com/content"
  },
  {
    label: "SpaceX Updates: Introducing Starship V3",
    href: "https://www.spacex.com/updates/"
  },
  {
    label: "SpaceX Flight 10 page",
    href: "https://www.spacex.com/launches/starship-flight-10"
  },
  {
    label: "SpaceX Flight 11 page",
    href: "https://www.spacex.com/launches/starship-flight-11"
  },
  {
    label: "SpaceX Flight 12 page",
    href: "https://www.spacex.com/launches/starship-flight-12"
  },
  {
    label: "NASA OIG report referencing Starship flight campaign",
    href: "https://oig.nasa.gov/wp-content/uploads/2026/03/final-report-ig-26-004-nasas-management-of-the-human-landing-system-contracts.pdf"
  }
];

export default function SpaceXStarshipPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
    { label: "Deep Space Echo", href: "/deep-space-echo" },
    { label: "Join the Team", href: "/join-the-team" }
  ];

  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Launch Systems"
        title="SpaceX Starship"
        links={navLinks}
      />

      <section className="hero hero--compact hero--starship">
        <div className="hero__backdrop">
          <Image
            src="/images/starship/starship-stack.png"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Program tracker</span>
            <h2>What Starship has actually done so far, in plain English.</h2>
            <p>
              Starship is still a flight-test program, which means the story is
              not just about launches. It is about what each flight proved:
              stage separation, controlled reentry, booster catches, in-space
              relights, first reuse, and the first real payload deployment
              demos. This page pulls those milestones into one place.
            </p>
            <div className="hero__actions">
              <Link href="#timeline" className="button button--primary">
                Flight Timeline
              </Link>
              <Link href="#payloads" className="button button--ghost">
                Payloads So Far
              </Link>
            </div>
            <dl className="stat-grid starship-stat-grid">
              {headlineStats.map((item) => (
                <div key={item.label} className="stat-card starship-stat-card">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                  <p>{item.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">On Site</span>
          <h3>Starship already feels different in person than it does online.</h3>
          <p>
            One of the interesting things about Starship is how quickly it
            shifts from internet spectacle to physical industrial object when
            you are actually near it. The stack, the tower, the tank farm, the
            coastline, and the scale of the hardware all make the program feel
            more real and more unfinished at the same time.
          </p>
          <p>
            That is part of the honest story here. Starship is not a museum
            piece yet. It is an active, changing flight system being pushed in
            public view.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="/images/starship/starship-beach.png"
            alt="Starship stack seen from the beach near Starbase"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Big Picture</span>
            <h3>Starship is moving from “can this even work?” to “can this work repeatedly?”</h3>
          </div>
          <p>
            The early flights were about surviving ascent, separation, and
            reentry. The later flights shifted toward catching boosters,
            reflying boosters, deploying payloads, and pushing toward the kind
            of fast turnaround that would make the system economically and
            operationally meaningful.
          </p>
        </div>
        <div className="callout-grid">
          {generationCards.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__visual">
          <Image
            src="/images/starship/starship-sunset-selfie.png"
            alt="Visitor photo at Starbase beside the Starship launch tower at sunset"
            fill
            className="cover-image"
          />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Why People Care</span>
          <h3>Part of Starship's pull is that it feels like future hardware you can actually go stand next to.</h3>
          <p>
            Rockets usually arrive in public memory as finished icons. Starship
            is happening in a stranger way. People can watch the vehicles
            evolve in almost real time, see the tower catches, follow the
            redesigns, and visit the edge of the program while it is still
            becoming itself.
          </p>
          <p>
            That does not make the vehicle successful by itself, of course. But
            it does explain why the program feels unusually personal to so many
            people watching it.
          </p>
        </div>
      </section>

      <section id="timeline" className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Every Integrated Launch</span>
            <h3>Here is the campaign flight by flight.</h3>
          </div>
          <p>
            This table tracks the integrated Starship and Super Heavy campaign
            through Flight 12. Where SpaceX has published post-flight pages, the
            milestones are phrased from those summaries. For Flight 12, the
            launch schedule and mission page confirm the launch date and planned
            test objectives, but SpaceX had not yet published the same style of
            post-flight recap when this page was assembled on May 23, 2026.
          </p>
        </div>
        <div className="europa-hopper__table-wrap">
          <table className="europa-hopper__table">
            <thead>
              <tr>
                <th>Flight</th>
                <th>Date</th>
                <th>Starship</th>
                <th>Super Heavy</th>
                <th>Key milestone</th>
                <th>Payload result</th>
              </tr>
            </thead>
            <tbody>
              {flightTimeline.map((item) => (
                <tr key={item.flight}>
                  <td>{item.flight}</td>
                  <td>{item.date}</td>
                  <td>{item.starship}</td>
                  <td>{item.booster}</td>
                  <td>{item.milestone}</td>
                  <td>{item.payload}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Visual Milestones</span>
            <h3>A few images help anchor what the text is describing.</h3>
          </div>
          <p>
            This page mixes real Starbase imagery with one concept-style image
            because Starship lives in both worlds right now: a real launch
            system under test, and a cultural object people keep projecting
            futures onto.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          <article className="resource-card starship-gallery-card">
            <div className="resource-card__image">
              <Image
                src="/images/starship/starship-stack.png"
                alt="Starship stacked on the launch tower"
                fill
                className="cover-image"
              />
            </div>
            <div className="resource-card__content">
              <h4>Stacked at Starbase</h4>
              <p>The cleanest view of the integrated vehicle and tower as an actual launch system.</p>
            </div>
          </article>
          <article className="resource-card starship-gallery-card">
            <div className="resource-card__image">
              <Image
                src="/images/starship/starship-beach.png"
                alt="Starship seen from the beach at Starbase"
                fill
                className="cover-image"
              />
            </div>
            <div className="resource-card__content">
              <h4>Viewed from the coast</h4>
              <p>Starship is a beach rocket as much as a factory rocket. The location shapes the feeling of the whole program.</p>
            </div>
          </article>
          <article className="resource-card starship-gallery-card">
            <div className="resource-card__image">
              <Image
                src="/images/starship/starship-carrier-concept.png"
                alt="Concept artwork of Starship launching beside an aircraft carrier"
                fill
                className="cover-image"
              />
            </div>
            <div className="resource-card__content">
              <h4>Projected into myth</h4>
              <p>Not a real mission photo, but a good reminder that Starship also lives in public imagination, not just flight logs.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Ships and Boosters</span>
          <h3>There is one important difference between Starship reuse and booster reuse so far.</h3>
          <p>
            SpaceX has already crossed the line into booster reuse, but not yet
            upper-stage reuse in the integrated campaign. That matters because
            the booster is the part that has to come back, survive, and be
            ready to launch again on a much tighter rhythm.
          </p>
          <ul className="benefit-list">
            {vehicleNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Why That Matters</span>
          <h3>Reusable heavy lift only becomes real when it stops being ceremonial.</h3>
          <p>
            A reusable system is not just a rocket that can survive once. It is
            a system that can come back, get checked, refueled, re-stacked, and
            trusted again. Flight 9 mattered because it moved Starship from
            “catching is possible” to “reuse is beginning.”
          </p>
          <p>
            That is also why Flight 12 is such a hinge point. SpaceX described
            it as the beginning of the V3 era, with redesigned vehicles,
            Raptor 3, and a new pad intended to support a much more mature
            version of the program.
          </p>
        </div>
      </section>

      <section id="payloads" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Payloads Deployed by Starship</span>
            <h3>So far, Starship has officially confirmed 16 successful payload deployments.</h3>
          </div>
          <p>
            These have not been customer satellites yet. They have been Starlink
            simulators used to prove that Starship can open its payload bay,
            release objects in space, and keep flying. That may sound modest,
            but it is one of the most important transitions from test article to
            working launch vehicle.
          </p>
        </div>
        <div className="callout-grid">
          {payloadLedger.map((item) => (
            <article key={item.mission} className="callout-card">
              <h4>{item.mission}</h4>
              <p>
                <strong>{item.result}</strong>
              </p>
              <p>{item.whyItMatters}</p>
            </article>
          ))}
        </div>
        <p className="europa-hopper__note">
          As of <strong>May 23, 2026</strong>, the clearly documented total is
          still <strong>16 successfully deployed Starlink simulators</strong> on
          Flights 10 and 11. Flight 12 had a published plan to deploy 22 more,
          but this page avoids counting them until SpaceX publishes the
          corresponding post-flight result.
        </p>
      </section>

      <section className="feature-band feature-band--starship">
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Plain Truth</span>
          <h3>Starship is no longer just a promise, but it is not yet a routine transport system either.</h3>
          <p>
            It has now shown first launch, first separation, first reentry,
            first splashdowns, first catch, first reflight, and first payload
            deployments. The next threshold is consistency: flying often enough,
            reusing enough hardware, and delivering enough real payload mass
            that the system stops feeling experimental and starts feeling
            dependable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Primary references used for this page.</h3>
          </div>
          <p>
            SpaceX updates and launch pages were used for the flight-by-flight
            record. The NASA OIG report was useful for the program-level
            summary of how the generations and recent milestones fit together.
          </p>
        </div>
        <div className="callout-grid">
          {sourceLinks.map((item) => (
            <article key={item.href} className="callout-card">
              <h4>{item.label}</h4>
              <p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.href}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <PublicFooter
        title="From test flights to operational reality."
        text="The campaign continues: Track the progress of Starship as it moves from experimental flights to a dependable heavy-lift system."
        links={navLinks}
      />
    </main>
  );
}
