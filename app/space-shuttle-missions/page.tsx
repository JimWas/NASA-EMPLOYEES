import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { pageMeta } from "@/lib/meta";
import missions from "@/data/space-shuttle-missions.json";

type ShuttleMission = {
  mission: string;
  slug: string;
  link: string;
  year: string | null;
  orbiter: string | null;
  launch: string | null;
  summary: string;
};

const shuttleMissions = missions as ShuttleMission[];

const orbiters = Array.from(
  new Set(shuttleMissions.map((item) => item.orbiter).filter(Boolean))
).length;

const headlineStats = [
  {
    label: "Shuttle missions flown",
    value: String(shuttleMissions.length),
    note: "Official NASA mission archive count from STS-1 through STS-135."
  },
  {
    label: "Operational years",
    value: "1981-2011",
    note: "From Columbia's first test flight to Atlantis on STS-135."
  },
  {
    label: "Orbiters in the manifest",
    value: String(orbiters),
    note: "Columbia, Challenger, Discovery, Atlantis, Endeavour, and Enterprise."
  },
  {
    label: "Mission summaries on this page",
    value: "135",
    note: "Each payload note is condensed from NASA's official mission page."
  }
];

const programPhases = [
  {
    title: "Test flights",
    text: "The first missions proved the basic idea: launch, orbit, reentry, landing, and reflight of a reusable orbiter."
  },
  {
    title: "Satellite deployment and science",
    text: "The Shuttle became a truck, a laboratory, and a servicing platform. It deployed commercial, military, and scientific payloads while flying Spacelab missions."
  },
  {
    title: "Space station assembly",
    text: "Later flights turned the Shuttle into an assembly line for orbit, delivering trusses, modules, solar arrays, logistics, and crews to build and maintain the ISS."
  }
];

const sourceLinks = [
  {
    label: "NASA shuttle mission archive",
    href: "https://www.nasa.gov/mission/space-shuttle-missions/"
  },
  {
    label: "NASA STS-1 mission page",
    href: "https://www.nasa.gov/mission/sts-1/"
  },
  {
    label: "NASA STS-135 mission page",
    href: "https://www.nasa.gov/mission/sts-135/"
  },
  {
    label: "NASA Space Shuttle overview",
    href: "https://www.nasa.gov/space-shuttle/"
  }
];

export const metadata: Metadata = pageMeta({
  title: "Space Shuttle Missions",
  description: "A plain-English archive of all 135 Space Shuttle missions, including flights, orbiters, launch dates, and NASA payload summaries.",
  path: "/space-shuttle-missions",
  image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&h=630&q=80",
});

export default function SpaceShuttleMissionsPage() {
  return (
    <main className="page-shell page-shell--shuttle">
      <PublicHeader
        eyebrow="Program Archive"
        title="Space Shuttle Missions"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "SpaceX Starship", href: "/spacex-starship" },
          { label: "Women at NASA", href: "/women-at-nasa" },
          { label: "Join the Team", href: "/join-the-team" }
        ]}
      />

      <section className="hero hero--compact hero--shuttle">
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Flight archive</span>
            <h2>All 135 shuttle missions, with the payload story kept plain.</h2>
            <p>
              The Space Shuttle flew from 1981 to 2011 and changed what space
              operations looked like: satellite deployment, Spacelab research,
              Hubble servicing, Department of Defense missions, and the
              assembly of the International Space Station. This page puts the
              full mission list in one place with NASA-sourced payload context.
            </p>
            <div className="hero__actions">
              <Link href="#manifest" className="button button--primary">
                View All Missions
              </Link>
              <Link href="#sources" className="button button--ghost">
                Sources
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

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">What the shuttle actually did</span>
            <h3>The program was never just one thing.</h3>
          </div>
          <p>
            It started as a reusable spacecraft experiment and became a
            multi-role orbital workhorse. One flight might carry a commercial
            satellite, another a telescope repair crew, another a Spacelab
            science mission, and another a critical piece of the ISS.
          </p>
        </div>
        <div className="callout-grid">
          {programPhases.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="manifest" className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Mission Manifest</span>
            <h3>Mission by mission, from STS-1 to STS-135.</h3>
          </div>
          <p>
            The payload column below is intentionally plain. It summarizes what
            each flight carried, deployed, serviced, or primarily accomplished,
            based on NASA&apos;s official mission archive. When a mission was
            more about crewed operations than cargo, the summary says that
            directly.
          </p>
        </div>
        <div className="europa-hopper__table-wrap">
          <table className="europa-hopper__table shuttle-manifest__table">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Year</th>
                <th>Orbiter</th>
                <th>Launch</th>
                <th>Payload / key mission</th>
                <th>NASA page</th>
              </tr>
            </thead>
            <tbody>
              {shuttleMissions.map((item) => (
                <tr key={item.mission}>
                  <td>{item.mission}</td>
                  <td>{item.year ?? "See page"}</td>
                  <td>{item.orbiter ?? "See page"}</td>
                  <td>{item.launch ?? "See page"}</td>
                  <td>{item.summary}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      NASA
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="sources" className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Primary NASA references</h3>
          </div>
          <p>
            This page uses NASA&apos;s official shuttle archive and individual
            mission pages as the primary source for the mission list and the
            payload summaries.
          </p>
        </div>
        <div className="resource-grid resource-grid--three">
          {sourceLinks.map((item) => (
            <article key={item.href} className="callout-card">
              <h4>{item.label}</h4>
              <p>{item.href.replace("https://", "")}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                Open Source
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
