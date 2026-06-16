import Image from "next/image";
import Link from "next/link";
import { HonoraryEmployeesClient } from "@/components/HonoraryEmployeesClient";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

const principles = [
  {
    title: "Imagine a role",
    text: "Choose the job you would want if you could help NASA protect life, explore wisely, and serve the future."
  },
  {
    title: "Name the mission",
    text: "Connect your dream to Earth, space science, robotics, operations, education, technology, or public service."
  },
  {
    title: "Carry the light",
    text: "Write a short promise for how your work would help those who come after us."
  }
];

export default function HonoraryNasaEmployeesPage() {
  return (
    <main className="page-shell">
      <PublicHeader
        eyebrow="Honorary NASA Employees"
        title="Honorary NASA Employees"
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Employee Spotlights", href: "/Audrey-Montgomery" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "Starship Game", href: "/starship-game" }
        ]}
      />

      <section className="hero hero--compact">
        <div className="hero__backdrop">
          <Image
            src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Dream Roles</span>
            <h2>Put yourself in the mission.</h2>
            <p>
              Students, kids, adults, and lifelong dreamers can imagine the NASA
              role they would choose and the promise they would make to help
              preserve life and keep the light on.
            </p>
            <div className="hero__actions">
              <Link href="#join-honorary-crew" className="button button--primary">
                Add Yourself
              </Link>
              <Link href="/nasa-fundamentals" className="button button--ghost">
                Read the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">How It Works</span>
            <h3>Honorary employees start with imagination and responsibility.</h3>
          </div>
          <p>
            This is a safe, playful way for visitors to see themselves in
            mission work without submitting private personal information.
          </p>
        </div>
        <div className="callout-grid">
          {principles.map((principle) => (
            <article key={principle.title} className="callout-card">
              <h4>{principle.title}</h4>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <HonoraryEmployeesClient />

      <PublicFooter
        title="Every mission starts with a dream and a promise."
        text="The Next Generation: The honorary crew represents the future of exploration. Whether you are a student, educator, or lifelong explorer, there is a place for your passion in NASA’s work."
        links={[
          { label: "Back to People of NASA", href: "/" },
          { label: "Employee Spotlights", href: "/Audrey-Montgomery" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Join the Team", href: "/join-the-team" },
          { label: "Starship Game", href: "/starship-game" }
        ]}
      />
    </main>
  );
}
