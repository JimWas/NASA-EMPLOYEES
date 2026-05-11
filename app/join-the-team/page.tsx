import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

const pathways = [
  {
    title: "Apply for open roles",
    text: "Engineers, communicators, analysts, designers, technicians, educators, and operations specialists all help missions move forward."
  },
  {
    title: "Start with internships and fellowships",
    text: "Students and early-career contributors can begin through internships, research programs, and fellowship tracks."
  },
  {
    title: "Support through partner programs",
    text: "Contractors, university teams, and nonprofit collaborators help build tools, research, education, and community impact."
  },
  {
    title: "Contribute as an engaged citizen",
    text: "Everyday people can join public science projects, attend events, use NASA educational resources, and help inspire future explorers."
  }
];

const waysToContribute = [
  "Explore career openings and identify skills that match mission needs.",
  "Join internships, fellowships, and apprenticeships if you are a student or early in your career.",
  "Take part in community science, outreach, and public engagement programs.",
  "Use NASA learning resources to build skills in STEM, research, writing, design, and operations.",
  "Share mission stories, mentor others, and help widen access to aerospace careers."
];

const nextSteps = [
  {
    title: "Build relevant skills",
    text: "Technical work matters, but so do communication, project management, operations, education, and public service."
  },
  {
    title: "Follow mission areas",
    text: "Earth science, spaceflight, robotics, aeronautics, software, media, and policy each open different paths into the work."
  },
  {
    title: "Stay connected",
    text: "Track NASA careers, center updates, events, and educational programs to spot the right opening or collaboration point."
  }
];

export default function JoinTheTeamPage() {
  return (
    <main className="page-shell page-shell--join">
      <PublicHeader
        eyebrow="Join the Team"
        title="Join the Team"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Starship Game", href: "/starship-game" }
        ]}
      />

      <section className="hero hero--compact hero--join">
        <div className="hero__backdrop">
          <Image
            src="/images/NASA-ILLPHATED.jpg"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">For everyday contributors</span>
            <h2>There is more than one way to help move the mission forward.</h2>
            <p>
              Not everyone joins through the same door. Some people apply for jobs,
              some start with internships, some contribute through research and
              partner programs, and others support exploration through education,
              outreach, and community science.
            </p>
            <div className="hero__actions">
              <Link href="https://www.nasa.gov/careers/" className="button button--primary">
                Explore NASA Careers
              </Link>
              <Link href="#pathways" className="button button--ghost">
                See Pathways
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Pathways In</span>
            <h3>How everyday people can join and contribute</h3>
          </div>
          <p>
            This page is meant to make the journey feel approachable by showing
            multiple ways people can participate in the work around NASA.
          </p>
        </div>
        <div className="callout-grid">
          {pathways.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Ways to Contribute</span>
          <h3>Contribution goes beyond a single job title.</h3>
          <p>
            People contribute through engineering, storytelling, education,
            logistics, software, design, operations, research, administration,
            and community engagement. The most important starting point is
            finding where your strengths connect to a mission need.
          </p>
          <ul className="benefit-list">
            {waysToContribute.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section__visual">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="People collaborating on technical work"
            fill
            className="cover-image"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Next Steps</span>
            <h3>A practical way to get started</h3>
          </div>
        </div>
        <div className="resource-grid resource-grid--three">
          {nextSteps.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Take the next step</span>
          <h3>Start where you are.</h3>
          <p>
            Whether you are applying for a role, building experience, or looking
            for ways to support the mission, there is a path forward from here.
          </p>
        </div>
        <div className="footer__links">
          <Link href="https://www.nasa.gov/careers/">Careers</Link>
          <Link href="/">People of NASA</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
