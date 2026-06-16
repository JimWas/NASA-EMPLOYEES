import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "Women at NASA",
  description:
    "A learn page about the importance of women at NASA and in space, from historic pioneers to the scientists, engineers, leaders, and astronauts shaping the future."
};

const whyItMatters = [
  {
    title: "Space needs the full range of human talent",
    text: "Exploration gets better when more people bring different experience, insight, discipline, and imagination to hard problems."
  },
  {
    title: "NASA is bigger than astronauts",
    text: "The mission depends on women in engineering, science, medicine, flight operations, procurement, software, communications, education, and leadership."
  },
  {
    title: "Representation changes the future",
    text: "When girls and young women can see themselves in the work, the future talent pool grows stronger and the mission gains more builders."
  }
];

const milestones = [
  {
    era: "Hidden Figures era",
    title: "Katherine Johnson, Dorothy Vaughan, Mary Jackson, and Christine Darden",
    text: "Women mathematicians and engineers helped shape the calculations, analysis, and technical foundations that made early NASA missions possible."
  },
  {
    era: "Astronaut breakthrough",
    title: "Sally Ride",
    text: "In 1983, Sally Ride became the first American woman in space, showing that women belonged not only in the control room and lab, but also on the flight deck."
  },
  {
    era: "Barrier-breaking exploration",
    title: "Mae Jemison, Judith Resnik, Eileen Collins, Ellen Ochoa, Peggy Whitson",
    text: "Women continued breaking barriers as astronauts, commanders, scientists, and long-duration spaceflight leaders."
  },
  {
    era: "The present and next era",
    title: "Christina Koch, Jessica Meir, and today's NASA workforce",
    text: "Women now help define modern spaceflight, from all-woman spacewalk milestones to the daily ground work that keeps science missions and human spaceflight moving."
  }
];

const nasaTodayRoles = [
  "Flight directors and mission controllers coordinating high-stakes operations.",
  "Engineers designing spacecraft, habitats, robotics, power systems, and life support.",
  "Scientists studying Earth, Mars, the Moon, climate, astronomy, and planetary systems.",
  "Medical and human-performance teams protecting crews in space.",
  "Program, procurement, operations, and integration leaders keeping complex missions on track.",
  "Educators, communicators, and public servants making sure discovery reaches the people it is meant to serve."
];

const womenInSpace = [
  {
    title: "Human spaceflight should reflect humanity",
    text: "If space is part of our future, then women must be fully present in that future as explorers, designers, decision-makers, and leaders."
  },
  {
    title: "Mission design gets stronger",
    text: "Better crews and better systems come from designing for real human diversity instead of assuming one kind of body, one kind of background, or one kind of career path."
  },
  {
    title: "The meaning is practical and cultural",
    text: "It matters operationally because teams improve when they draw from more talent. It matters culturally because children understand what is possible by seeing who is trusted with the mission."
  }
];

const futureNeeds = [
  "Girls who love science and math",
  "Students drawn to medicine, biology, climate, and research",
  "Engineers, coders, builders, designers, and pilots",
  "Operators who stay calm when systems get complicated",
  "Leaders who can hold responsibility for the long arc of the mission"
];

const sourceLinks = [
  {
    label: "NASA: Women at NASA",
    href: "https://www.nasa.gov/women-at-nasa/"
  },
  {
    label: "NASA: Women's History Month",
    href: "https://www.nasa.gov/people-of-nasa/special-observances/womens-history-month/"
  },
  {
    label: "NASA: Inspiring Women in Leadership",
    href: "https://www.nasa.gov/missions/station/inspiring-women-in-leadership-meet-three-female-space-station-engineers/"
  },
  {
    label: "NASA History: Women at NASA",
    href: "https://www.nasa.gov/wp-content/uploads/static/history/women_at_nasa.html"
  },
  {
    label: "NASA: Mae Jemison, First African American Woman in Space",
    href: "https://www.nasa.gov/?p=428989"
  }
];

export default function WomenAtNasaPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Future Mars Colony", href: "/future-mars-colony" },
    { label: "South Pole Journey", href: "/south-pole-space-journey" },
    { label: "Join the Team", href: "/join-the-team" }
  ];

  return (
    <main className="page-shell page-shell--women">
      <PublicHeader
        eyebrow="Learn"
        title="Women at NASA"
        links={navLinks}
      />

      <section className="women-hero">
        <div className="women-hero__backdrop" />
        <div className="women-hero__content">
          <div className="women-hero__copy">
            <span className="section__eyebrow">Learn</span>
            <h2>Women help carry the mission forward.</h2>
            <p>
              Women have never been a side note in NASA&apos;s story. They have
              helped build the math, engineering, science, leadership, and
              courage that make exploration possible, and they continue to shape
              what comes next in space.
            </p>
            <div className="hero__actions">
              <Link href="#why-it-matters" className="button button--primary">
                Why It Matters
              </Link>
              <Link href="#women-today" className="button button--ghost">
                Women at NASA Today
              </Link>
            </div>
          </div>
          <aside className="women-hero__aside">
            <span>Core idea</span>
            <strong>
              NASA is strongest when the mission draws from the full range of
              human intelligence, discipline, and imagination.
            </strong>
            <p>
              Women belong in the lab, the control room, the workshop, the crew
              office, the leadership table, and the future of space itself.
            </p>
          </aside>
        </div>
      </section>

      <section id="why-it-matters" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Why It Matters</span>
            <h3>Space exploration is not fully human unless humanity is fully present in it.</h3>
          </div>
          <p>
            This is not just about fairness as an abstract principle. It is
            about how we build better missions, solve harder problems, and make
            sure the future of exploration is wide enough to include the people
            it is meant to serve.
          </p>
        </div>
        <div className="callout-grid">
          {whyItMatters.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">History</span>
          <h3>Women helped build NASA long before many people were taught their names.</h3>
          <p>
            NASA&apos;s history includes mathematicians, engineers, pilots,
            astronauts, scientists, technicians, and leaders who did essential
            work while often fighting to be taken seriously at all. That history
            matters because it shows that women were always part of the mission,
            even when public memory made them harder to see.
          </p>
          <p>
            The story is not one breakthrough and then everything became easy.
            It is a long chain of people opening doors, proving excellence under
            pressure, and making it harder for the next generation to be denied
            a place at the table.
          </p>
        </div>
        <div className="women-timeline">
          {milestones.map((item) => (
            <article key={item.title} className="women-timeline__item">
              <span>{item.era}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="women-today" className="section section--split">
        <div className="section__visual">
          <Image
            src="/images/audrey-montgomery.png"
            alt="Audrey Montgomery, a NASA procurement leader featured on the site"
            fill
            className="cover-image"
          />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Women at NASA Today</span>
          <h3>The work is not only visible in astronaut photos. It is everywhere the mission has to hold.</h3>
          <p>
            Today, women at NASA help make the agency real in the most practical
            sense. They write software, run analysis, guide programs, manage
            mission risk, support astronauts, direct science, coordinate
            procurement, and keep giant moving systems from coming apart.
          </p>
          <p>
            That is part of why this matters so much: women at NASA are not just
            symbols of progress. They are part of the reason the work gets done.
          </p>
          <ul className="benefit-list">
            {nasaTodayRoles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Women in Space</span>
            <h3>Who goes to space shapes what space becomes.</h3>
          </div>
          <p>
            Human spaceflight is not only a technical program. It is also a
            statement about who humanity trusts to explore, discover, lead, and
            imagine on its behalf.
          </p>
        </div>
        <div className="callout-grid">
          {womenInSpace.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band women-feature-band">
        <div className="feature-band__overlay">
          <span className="section__eyebrow">The Future Needs</span>
          <h3>The next era of NASA will need women in every layer of the mission.</h3>
          <p>
            Some will become astronauts. Many more will become the people who
            design the vehicles, run the stations, protect the crews, grow the
            science, and decide what future systems are worth building.
          </p>
          <ul className="benefit-list">
            {futureNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Closing Thought</span>
            <h3>Women at NASA are important because the mission is too large to belong to only part of humanity.</h3>
          </div>
          <p>
            The deeper we go into space, the more honest we have to be about
            who the future is for. NASA works best when it reflects the
            intelligence, courage, and commitment of the whole human family.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Official NASA reading</h3>
          </div>
          <p>
            These NASA sources ground the page in the agency&apos;s own history,
            observances, and current examples of women leading across missions.
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
        title="Inspiring Excellence"
        text="The contribution of women at NASA is not just history—it is the foundation of our future in the stars."
        links={navLinks}
      />
    </main>
  );
}
