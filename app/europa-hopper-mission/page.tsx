import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

export const metadata: Metadata = {
  title: "Europa Hopper Mission",
  description:
    "A hypothetical concept page imagining a B-2-like single-stage-to-orbit craft hopping between pre-positioned drone tanker depots on a journey to Europa."
};

const missionChain = [
  {
    title: "Send the tankers first",
    text: "Autonomous propellant ships would leave years in advance, each carrying fuel, power systems, guidance, communications, and enough self-repair capability to survive alone."
  },
  {
    title: "Turn space into a route, not a leap",
    text: "Instead of demanding one impossible all-at-once vehicle, the mission would create a chain of usable waypoints. Each depot becomes a temporary island of energy, fuel, and information."
  },
  {
    title: "Launch the hopper last",
    text: "The crewed or high-value exploration craft would depart only after the route is proven. Its job would not be to carry the whole journey inside itself, but to move elegantly from one prepared node to the next."
  },
  {
    title: "Refuel, check systems, and jump again",
    text: "At every stop the vehicle would replenish propellant, inspect thermal shielding, validate navigation, upload software improvements, and wait for the next safe departure window."
  },
  {
    title: "Arrive ready for Europa operations",
    text: "By the time the craft reaches the Jovian system, it would need to transition from long-range cruise behavior into radiation-hardened operations near one of the most hostile environments in the Solar System."
  }
];

const engineeringRealities = [
  {
    title: "Cryogenic fuel that survives deep time",
    text: "Pre-positioned tankers only work if their propellants can be stored for years with minimal boiloff. That means aggressive thermal control, sun shielding, smart venting, and highly autonomous fault management."
  },
  {
    title: "Autonomous rendezvous far from Earth",
    text: "At Europa distances, crews cannot fly by joystick from mission control. Every rendezvous with a tanker would require onboard navigation, machine vision, fault detection, and enough local judgment to avoid catastrophic mistakes."
  },
  {
    title: "Radiation protection near Jupiter",
    text: "Europa sits inside Jupiter's punishing radiation environment. A real mission would need hard shielding, protected electronics, careful orbital timing, and a brutally honest accounting of crew dose."
  },
  {
    title: "Aerospace elegance plus spacecraft discipline",
    text: "A B-2-like shape suggests atmospheric grace and low-drag efficiency, but deep space punishes every unnecessary kilogram. The concept only works if the craft can be both a beautiful flight system and a ruthless mass-budget machine."
  },
  {
    title: "Logistics with no rescue nearby",
    text: "Every hop assumes the next stone exists and is healthy. The mission would need redundancy, spare depots, repair drones, abort logic, and a route architecture that does not collapse when one asset fails."
  },
  {
    title: "Europa science worth the effort",
    text: "No mission this ambitious should fly for style alone. The destination matters because Europa may hide a global ocean beneath its ice, making it one of the most compelling places in the Solar System to study habitability."
  }
];

const significance = [
  "It treats exploration as preparation and patience, not just heroic launch-day spectacle.",
  "It imagines infrastructure built for future travelers, not only one mission or one generation.",
  "It says humanity can cross impossible distance by cooperating with its earlier self.",
  "It turns fuel depots into an act of trust: we send help ahead for people we have not launched yet.",
  "It frames persistence not as stubbornness, but as the willingness to keep building the next stepping stone."
];

const missionQuestions = [
  "Can single-stage-to-orbit vehicles ever become efficient enough to justify this kind of architecture?",
  "How much autonomy is acceptable when a missed docking could strand the whole mission?",
  "Could tanker depots double as communication relays, sensor nodes, and repair stations?",
  "What combination of nuclear power, solar power, and storage would keep depots alive for years?",
  "How do we design a mission that is visually bold without lying about the extraordinary engineering burden?"
];

const tankerLadder = [
  {
    location: "Low Earth Orbit",
    purpose: "Fully refuel the main ship before departure from Earth.",
    launches: "~5 to 8"
  },
  {
    location: "High Earth / Cis-Lunar Space",
    purpose: "Top off the ship as it pushes beyond Earth gravity and tries to maximize outbound speed.",
    launches: "~15 to 20"
  },
  {
    location: "Deep Space Midcourse",
    purpose: "Intercept the ship between Earth and Jupiter so it still has meaningful braking and maneuvering fuel left.",
    launches: "~80 to 100+"
  },
  {
    location: "Jupiter / Europa Capture",
    purpose: "Provide the propellant needed to slow down enough to enter the Jovian system and begin Europa operations.",
    launches: "~200+"
  }
] as const;

const armadaScenarios = [
  {
    title: "Brute Force Armada",
    travelTime: "13 to 14 months",
    verdict: "Yes, but astronomically expensive.",
    text: "A 300 to 400-launch tanker campaign could keep the ship moving on a fast direct route, but the price is an entire industrial armada launched years in advance."
  },
  {
    title: "Standard Direct Flight",
    travelTime: "2 to 2.5 years",
    verdict: "The future-tech middle ground.",
    text: "A more conventional direct mission without a full tanker highway would likely still be extremely hard, but it avoids the wild multiplication of support launches."
  },
  {
    title: "Gravity Assist Route",
    travelTime: "3 to 5 years",
    verdict: "Great for cargo, terrible for humans.",
    text: "Venus-Earth-Earth or similar slingshot routes let orbital mechanics do the work for free, but they stretch human transit into a multi-year survival problem."
  }
] as const;

const travelComparisons = [
  {
    method: "Speed of Light",
    time: "~33 to 53 minutes",
    realistic: "Physics says no."
  },
  {
    method: "The Expanse style 1G transit",
    time: "~5 to 9 days",
    realistic: "Science fiction."
  },
  {
    method: "Brute Force Starship Armada",
    time: "~13 months",
    realistic: "Yes, but with an immense launch campaign."
  },
  {
    method: "Standard Starship direct mission",
    time: "~2 to 2.5 years",
    realistic: "Possibly the future sweet spot."
  },
  {
    method: "Gravity assist trajectory",
    time: "~3 to 5 years",
    realistic: "Excellent for cargo, punishing for crews."
  }
] as const;

export default function EuropaHopperMissionPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Future Mission Concept"
        title="Europa Hopper Mission"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Mars Unity", href: "/mars-unity-mission" },
          { label: "Mars Relay", href: "/mars-relay" }
        ]}
      />

      <section className="hero hero--compact">
        <div className="hero__backdrop">
          <Image
            src="/images/europa-hopper-concept.png"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Hypothetical architecture</span>
            <h2>A B-2-like space hopper could cross to Europa by stepping from tanker to tanker.</h2>
            <p>
              This page imagines a single-stage-to-orbit craft shaped more like
              a flying wing than a traditional deep-space stack, traveling not
              by one giant throw, but by a patient chain of autonomous fuel
              depots sent ahead like stepping stones on a pond.
            </p>
            <div className="hero__actions">
              <Link href="#mission-chain" className="button button--primary">
                Follow the Route
              </Link>
              <Link href="#why-europa" className="button button--ghost">
                Why Europa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">The Core Idea</span>
          <h3>Do not ask one vehicle to do everything. Ask a whole route to carry the mission.</h3>
          <p>
            In this concept, the graceful winged vehicle is the part people
            remember, but the real breakthrough is logistical humility. Drone
            tankers leave first, spreading out across the long path to Jupiter
            space. Each one waits like a prepared branch, allowing the main
            craft to hop, refuel, recalibrate, and move again.
          </p>
          <p>
            The metaphor is a bird crossing water by touching a series of safe
            stones. The engineering version is less poetic and far harder:
            every stone has to arrive first, remain alive for years, and be
            trustworthy when a crew finally depends on it.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="/images/europa-hopper-concept.png"
            alt="Concept artwork of a B-2-like space hopper refueling from drone tanker depots near Europa with Jupiter in the background"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Concept Media</span>
          <h3>See the stepping-stone route as a living flight concept.</h3>
          <p>
            Your artwork gives the idea a clearer emotional shape: a dark,
            gliding vehicle moving between pre-positioned tankers while Europa
            and Jupiter dominate the horizon. It helps make the architecture
            feel less like abstract logistics and more like a choreographed
            expedition.
          </p>
          <p>
            The image and clip work best as a mission moodboard. They show what
            the route is trying to accomplish: not one impossible burn, but a
            chain of prepared rendezvous that lets the craft keep hopping
            forward into deeper space.
          </p>
        </div>
        <div className="section__visual europa-hopper__video-shell">
          <video
            className="europa-hopper__video"
            controls
            playsInline
            preload="metadata"
            poster="/images/europa-hopper-concept.png"
          >
            <source src="/videos/europa-hopper-concept.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section id="mission-chain" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Mission Chain</span>
            <h3>The journey only works if the infrastructure goes first.</h3>
          </div>
          <p>
            The glamorous craft is the last piece to leave. Everything before
            that is a campaign of freight, timing, fuel management, navigation,
            and quiet reliability.
          </p>
        </div>
        <div className="callout-grid">
          {missionChain.map((step) => (
            <article key={step.title} className="callout-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Rocket Equation</span>
            <h3>The real villain is not distance alone. It is fuel carrying fuel.</h3>
          </div>
          <p>
            To send a Starship-scale vehicle all the way to Europa using a
            continuous trail of autonomous tankers, you are not building a line
            of parked gas stations. You are launching a timed wave of robotic
            depots that each have to arrive at the exact place and speed needed
            for a future rendezvous. Every step outward gets punished by the
            exponential cost of carrying propellant for propellant.
          </p>
        </div>
        <div className="callout-grid">
          <article className="callout-card">
            <h4>Starship propellant capacity</h4>
            <p>Roughly 1,200 metric tons of methane and liquid oxygen.</p>
          </article>
          <article className="callout-card">
            <h4>Earth departure to Jupiter-class transfer</h4>
            <p>On the order of about 6.5 to 9 km/s depending on trajectory and how aggressively you want to travel.</p>
          </article>
          <article className="callout-card">
            <h4>Why the fleet explodes in size</h4>
            <p>Each tanker placed farther out in space needs a sub-fleet behind it just to push it there with useful fuel still left onboard.</p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">The Europa Highway</span>
            <h3>A breadcrumb trail becomes an armada very quickly.</h3>
          </div>
          <p>
            These are hypothetical order-of-magnitude estimates for what a
            stepping-stone architecture might demand if the goal were a fast,
            high-energy human transit instead of a slower gravity-assist route.
          </p>
        </div>
        <div className="europa-hopper__table-wrap">
          <table className="europa-hopper__table">
            <thead>
              <tr>
                <th>Stepping stone</th>
                <th>Purpose</th>
                <th>Support launches from Earth</th>
              </tr>
            </thead>
            <tbody>
              {tankerLadder.map((leg) => (
                <tr key={leg.location}>
                  <td>{leg.location}</td>
                  <td>{leg.purpose}</td>
                  <td>{leg.launches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="europa-hopper__note">
          Add those legs together and the campaign lands in the rough range of
          300 to 400 total Starship tanker launches from Earth for one fast
          Europa mission. Most of those ships never see Europa. They are spent
          building the road for the next ship farther out.
        </p>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">What It Would Take</span>
          <h3>Beautiful ideas only survive if the physics is allowed to be difficult.</h3>
          <p>
            A Europa hopper mission is compelling because it replaces brute
            force with choreography. But choreography is fragile. It depends on
            stable propellant, durable robotics, autonomous rendezvous, and a
            mission architecture that can absorb failure without losing the
            whole story.
          </p>
          <ul className="benefit-list">
            {engineeringRealities.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="section__copy">
          <span id="why-europa" className="section__eyebrow">Why Europa</span>
          <h3>Because one of the Solar System’s best questions may be hiding under ice.</h3>
          <p>
            Europa matters because it may contain a deep subsurface ocean in
            contact with rock, energy, and chemistry that scientists care about
            when they ask whether life could emerge beyond Earth. Reaching it
            is not just about distance. It is about whether humanity is willing
            to build the patient systems needed to approach a profound question
            responsibly.
          </p>
          <p>
            If Mars invites us to think about settlement, Europa invites us to
            think about reverence. It reminds us that exploration can be a form
            of listening.
          </p>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Industrial Scale</span>
          <h3>Could we build that many drone ships?</h3>
          <p>
            Pure ship count is not the craziest part. As of mid-2026, Boeing
            has built more than 12,000 737 aircraft. Against that backdrop, a
            300 to 400-vehicle tanker family sounds less impossible as a
            manufacturing challenge and more impossible as a mission-timing,
            launch-rate, orbital-precision, and propellant-economics challenge.
          </p>
          <p>
            In other words: humanity can manufacture in volume. The harder part
            is building hundreds of space vehicles that must survive launch,
            cryogenic storage, autonomous navigation, and deep-space rendezvous
            with almost no room for schedule slip.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Armada Reality</span>
          <h3>It would look less like a line of ships and more like a moving wave.</h3>
          <p>
            The romantic picture is a neat chain of tankers waiting in the
            dark. The operational picture is messier: months of staggered
            launches, multiple parking orbits, tanker-to-tanker support, deep
            space intercept planning, and a whole campaign designed so the
            actual crewed ship is only launched after the route is already
            proven.
          </p>
          <p>
            That is why gravity assists are so tempting. Orbital mechanics can
            do the heavy lifting for free if you are willing to wait.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Transit Scenarios</span>
            <h3>For humans, travel time changes the moral and technical equation.</h3>
          </div>
          <p>
            People cannot coast forever. Food, water, oxygen, radiation,
            muscle loss, psychology, and zero-G exposure all turn duration into
            one of the mission's biggest design constraints.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          {armadaScenarios.map((scenario) => (
            <article key={scenario.title} className="callout-card">
              <h4>{scenario.title}</h4>
              <p><strong>Travel time:</strong> {scenario.travelTime}</p>
              <p><strong>Realistic for humans?</strong> {scenario.verdict}</p>
              <p>{scenario.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band__image">
          <Image
            src="/images/europa-hopper-concept.png"
            alt=""
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Why It Matters</span>
          <h3>The mission would say something rare about our species: we know how to send help ahead.</h3>
          <p>
            Sending drone tankers first turns exploration into an act of care.
            The mission succeeds because earlier launches prepared the way for
            later lives. That is what makes the concept beautiful. Not the
            bomber silhouette. Not the distance. The idea that civilization can
            think forward, build forward, and leave strength in the dark for
            someone else to find when they need it.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Speed Comparison</span>
            <h3>Europa makes even Mars feel close.</h3>
          </div>
          <p>
            If you stack science fiction, brute-force engineering, and real
            orbital mechanics side by side, Europa becomes a lesson in how
            expensive distance really is.
          </p>
        </div>
        <div className="europa-hopper__table-wrap">
          <table className="europa-hopper__table">
            <thead>
              <tr>
                <th>Propulsion / method</th>
                <th>Travel time to Europa</th>
                <th>Realistic for humans?</th>
              </tr>
            </thead>
            <tbody>
              {travelComparisons.map((item) => (
                <tr key={item.method}>
                  <td>{item.method}</td>
                  <td>{item.time}</td>
                  <td>{item.realistic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Species-Level Questions</span>
            <h3>The concept is really a test of foresight.</h3>
          </div>
          <p>
            Whether or not this exact mission ever flies, it points toward a
            deeper engineering philosophy: future exploration will depend on
            infrastructure, trust, and the willingness to build routes before
            we build legends.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          {missionQuestions.map((question) => (
            <article key={question} className="callout-card">
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What It Reveals</span>
            <h3>Why a strange mission idea can still be deeply human.</h3>
          </div>
        </div>
        <ul className="benefit-list">
          {significance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Distance Pattern</span>
            <h3>Atlantic to Mars to Europa</h3>
          </div>
          <p>
            Christopher Columbus's first Atlantic crossing took about 70 days.
            Mars sits around 6 months away on a typical human-class mission.
            A fast brute-force Europa mission in this concept lands around 13
            months. That rhythm is strange enough to feel poetic.
          </p>
        </div>
        <div className="callout-grid">
          <article className="callout-card">
            <h4>Atlantic Ocean</h4>
            <p>About 3 months in the age of sail.</p>
          </article>
          <article className="callout-card">
            <h4>Mars</h4>
            <p>About 6 months on a typical crew-class transfer.</p>
          </article>
          <article className="callout-card">
            <h4>Europa</h4>
            <p>About 13 months in the fast armada concept.</p>
          </article>
        </div>
        <blockquote className="europa-hopper__quote">
          <p>
            Isn't that ironic. After Mars, Europa is almost double the transit
            time.
          </p>
          <p>Atlantic Ocean: about 3 months. Mars: about 6 months. Europa: about 13 months.</p>
          <p>
            I do not believe in coincidences. I see a pattern: Jupiter and
            Europa start to look less like a destination and more like a future
            gas station with fuel and water waiting to be understood.
          </p>
          <footer>#illphated #nasa</footer>
        </blockquote>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Stepping Stones</span>
          <h3>Progress is sometimes a chain of quiet preparations.</h3>
          <p>
            This Europa concept imagines a future where humanity reaches far
            not because one machine is superhuman, but because many missions
            learned how to support one another across time.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/mars-unity-mission">Mars Unity</Link>
          <Link href="/mars-relay">Mars Relay</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
