import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "Future Mars Colony",
  description: "A simple, realistic look at what an early Mars colony could actually look like, how it would make power and food, and how people might live there day to day.",
  path: "/future-mars-colony",
  image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&h=630&q=80",
});

const colonyPhases = [
  {
    title: "1. Robots arrive first",
    text: "Before people land, cargo ships, construction robots, and scouting rovers would set up power, communications, landing zones, and the first stores of water, oxygen, and spare parts."
  },
  {
    title: "2. The first crew lands small",
    text: "The first human settlement would probably feel more like a remote polar research base than a city. Think dozens of people, not thousands, living inside connected pressurized modules."
  },
  {
    title: "3. The base grows into a village",
    text: "Once power, water, and life-support become dependable, the colony could add workshops, medical rooms, greenhouses, storage tunnels, and larger common spaces."
  }
];

const powerSystems = [
  {
    title: "Solar arrays",
    text: "Mars gets sunlight, so the first colony would likely use large solar fields spread out on the surface. Robots would spend a lot of time cleaning dust and maintaining them."
  },
  {
    title: "Batteries and fuel cells",
    text: "Power collected during bright hours would be stored for night, storms, and emergencies. A Mars base could not afford to go dark just because the weather changed."
  },
  {
    title: "Nuclear surface power",
    text: "For steady base power, a small fission system is one of the most realistic long-term options. NASA is already studying surface fission power because it works even when sunlight is weak or dust is heavy."
  }
];

const lifeSupport = [
  "Water would be recycled constantly. A serious Mars colony would treat every drop as infrastructure, not convenience.",
  "Ice from the ground would be one of the most important local resources. Melted and purified, it could support drinking, farming, and oxygen production.",
  "Oxygen would likely come from splitting water and from machines that process the carbon-dioxide-rich Martian atmosphere, building on ideas NASA has already tested with MOXIE.",
  "Habitats would probably be covered with Martian soil, built into berms, or tucked into rock for radiation and temperature protection."
];

const foodReality = [
  "At first, most calories would still come from shipped food.",
  "Fresh food would start as a supplement: leafy greens, herbs, tomatoes, beans, peppers, and other crops that grow well in controlled environments.",
  "Greenhouses would be indoor systems with LEDs, water recycling, nutrient control, and careful temperature management, not open farms under the Martian sky.",
  "Over time, food production would become larger and more varied, but it would stay closely engineered and closely watched."
];

const dailyLife = [
  {
    title: "Morning",
    text: "Wake-up would probably follow the Martian sol, which is only about 39 minutes longer than a day on Earth. Crews would check base systems before almost anything else."
  },
  {
    title: "Work",
    text: "A lot of the day would be maintenance: air, water, power, seals, filters, software, tools, rovers, and greenhouse systems. Mars life would reward practical people."
  },
  {
    title: "Outside time",
    text: "EVA hours would be planned carefully. Going outside would be more like industrial field work than a casual walk, with dust, suit wear, and limited time always in mind."
  },
  {
    title: "Home life",
    text: "Inside the habitat, people would still want ordinary things: meals together, music, exercise, privacy, jokes, windows or screens, and rituals that make a hard place feel human."
  }
];

const sourceLinks = [
  {
    label: "NASA Mars Facts",
    href: "https://science.nasa.gov/mars/facts/"
  },
  {
    label: "NASA: MOXIE Could Help Future Rockets Launch Off Mars",
    href: "https://www.nasa.gov/solar-system/moxie-could-help-future-rockets-launch-off-mars/"
  },
  {
    label: "NASA: Fission Surface Power",
    href: "https://www.nasa.gov/?p=303270"
  },
  {
    label: "NASA: Growing Plants in Space",
    href: "https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/"
  }
];

export default function FutureMarsColonyPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Mars Unity", href: "/mars-unity-mission" },
    { label: "Space FAQs", href: "/space-faqs" },
    { label: "Join the Team", href: "/join-the-team" }
  ];

  return (
    <main className="page-shell page-shell--mars-colony">
      <PublicHeader
        eyebrow="Future Living"
        title="Future Mars Colony"
        links={navLinks}
      />

      <section className="mars-colony-hero">
        <Image
          src="/images/mars-colony/overview.png"
          alt="Concept artwork of a future Mars colony with habitats, domes, greenhouses, and surface vehicles"
          fill
          priority
          className="cover-image"
        />
        <div className="mars-colony-hero__overlay">
          <span className="section__eyebrow">Learn</span>
          <h2>What a real Mars colony would actually feel like.</h2>
          <p>
            Not a giant open-air city. Not a movie set. A first Mars colony
            would be a careful, power-hungry, maintenance-heavy settlement
            built around survival first, then comfort, then growth.
          </p>
          <div className="hero__actions">
            <Link href="#power" className="button button--primary">
              How It Runs
            </Link>
            <Link href="#daily-life" className="button button--ghost">
              Daily Life
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Start Here</span>
          <h3>A first colony would be closer to Antarctica than Coruscant.</h3>
          <p>
            The early version of Mars settlement would probably look like a
            cluster of pressurized habitats, storage units, work bays,
            communications towers, landing pads, and protected greenhouses.
            Most of it would be built for function, not beauty.
          </p>
          <p>
            People would spend a lot of time indoors. The air outside is too
            thin to breathe, the temperatures swing hard, and the dust gets
            into everything. So the colony would be compact, deliberate, and
            built around dependable systems.
          </p>
        </div>
        <div className="section__visual">
          <Image
            src="/images/mars-colony/fort-hope.png"
            alt="Concept art of the first Mars colony during a dusty workday"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Build Order</span>
            <h3>A Mars colony would arrive in phases, not all at once.</h3>
          </div>
          <p>
            The most realistic version begins with robots and cargo, then adds
            people only after the basics of power, water, shelter, and surface
            mobility are already working.
          </p>
        </div>
        <div className="callout-grid">
          {colonyPhases.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="power" className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Energy</span>
          <h3>Power would be the spine of the whole colony.</h3>
          <p>
            If a Mars settlement cannot make and store enough electricity, it
            cannot support air systems, water purification, communications,
            heating, food growth, computing, or fuel production. Energy comes
            first because almost everything else depends on it.
          </p>
          <div className="callout-grid mars-colony-callout-grid">
            {powerSystems.map((item) => (
              <article key={item.title} className="callout-card">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section__visual">
          <Image
            src="/images/mars-colony/power.png"
            alt="Concept artwork of a Mars settlement using solar arrays and robotic charging systems"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Air and Water</span>
          <h3>Life support would be less glamorous than rockets, and more important.</h3>
          <p>
            A Mars colony would survive by turning local materials into useful
            ones and by recycling obsessively. Water, oxygen, and pressure are
            not amenities there. They are the colony.
          </p>
          <ul className="benefit-list">
            {lifeSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Food</span>
          <h3>People would grow some of their food, but not all of it at first.</h3>
          <p>
            Early Mars farming would be a controlled engineering system. Fresh
            crops would matter for nutrition, morale, and variety, but they
            would supplement shipped staples for a long time before replacing
            them.
          </p>
          <ul className="benefit-list">
            {foodReality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="daily-life" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Day to Day</span>
            <h3>Most Martian life would look ordinary from the inside and extraordinary from the outside.</h3>
          </div>
          <p>
            People would still cook, clean, stretch, repair things, talk to
            loved ones, and try to make a home. The difference is that every
            chore would sit on top of a very unforgiving planet.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          {dailyLife.map((item) => (
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
            src="/images/mars-colony/workday.png"
            alt="Concept artwork of astronauts and rover technology working together on Mars"
            fill
            className="cover-image"
          />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Work Culture</span>
          <h3>Mars would make robots and people partners.</h3>
          <p>
            A real colony would lean heavily on machines for hauling cargo,
            inspecting equipment, scouting routes, cleaning solar panels,
            mapping terrain, and helping with outside work. Human time on Mars
            would be too valuable to waste.
          </p>
          <p>
            The result would be a place where engineers, biologists,
            electricians, medics, software people, mechanics, cooks, and
            planners all matter at once. Mars would not only need explorers. It
            would need a whole town worth of practical talent.
          </p>
        </div>
      </section>

      <section className="feature-band mars-colony-band">
        <div className="feature-band__image">
          <Image
            src="/images/mars-colony/home.png"
            alt="Concept artwork of a child stepping outside a future Mars habitat with an adult nearby"
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">Long View</span>
          <h3>The real sign of success would not be the first landing. It would be ordinary life becoming possible.</h3>
          <p>
            A colony becomes real when it can protect children, store enough
            food and water, survive bad weeks, repair its own damage, and keep
            going without panic. That is when Mars stops being only a mission
            and starts becoming a place people can belong to.
          </p>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">Simple Summary</span>
          <h3>So what would a future Mars colony really look like?</h3>
          <p>
            A buried or shielded settlement with power fields, greenhouses,
            machine shops, recycled water, careful food production, lots of
            maintenance, and people building a normal life in a place that does
            not naturally allow one.
          </p>
          <p>
            It would not feel easy. But it would feel purposeful, technical,
            communal, and deeply human.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">NASA Grounding</span>
          <h3>Real work behind the dream</h3>
          <ul className="benefit-list">
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <Link href={source.href}>{source.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PublicFooter
        title="The Future of Mars"
        text="A real colony is more than just a landing site—it is a sustainable home built on science, engineering, and human persistence."
      />
    </main>
  );
}
