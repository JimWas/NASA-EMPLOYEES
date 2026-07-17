import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/lib/types";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

type Props = {
  content: PageContent;
};

const honoraryRoleCards = [
  {
    eyebrow: "Human Exploration",
    title: "Moon Habitat Builder",
    description: "Design safe places for explorers to live and work beyond Earth.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Earth & Climate",
    title: "Planet Protector",
    description: "Study Earth from space so people can protect life at home.",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Technology",
    title: "Deep Space Signal Keeper",
    description: "Keep missions connected as they travel farther into the unknown.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

type WhatsNewType = "new" | "game" | "interactive" | "infographic" | "editorial";

const whatsNewItems: {
  type: WhatsNewType;
  label: string;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
}[] = [
  {
    type: "editorial",
    label: "Learn",
    title: "Ground-Based Laser Propulsion",
    description: "How laser arrays on Earth could push light sails, energize spacecraft, and open faster routes through the Solar System.",
    href: "/ground-laser-propulsion",
    isNew: true
  },
  {
    type: "editorial",
    label: "Profile",
    title: "Jim Washkau",
    description: "A new aspiring NASA employee profile connecting space interest, government contracting exposure, and mission-aligned business experience.",
    href: "/jim-washkau",
    isNew: true
  },
  {
    type: "interactive",
    label: "Directory",
    title: "NASA Social Media",
    description: "Every official NASA account on X, Instagram, YouTube, TikTok, Facebook and more — plus all 10 NASA centers.",
    href: "/nasa-social-media",
    isNew: true
  },
  {
    type: "editorial",
    label: "Recognition",
    title: "Silver Snoopy Award",
    description: "The honor NASA astronauts give to the people who keep them alive. Only 1% qualify each year. The pin has actually been to space.",
    href: "/silver-snoopy-award",
    isNew: true
  },
  {
    type: "editorial",
    label: "History",
    title: "Unflown NASA Concepts",
    description: "Sea Dragon. Project Orion. X-33. DC-X. The rockets and spacecraft NASA designed, tested, and almost flew but never launched.",
    href: "/unflown-nasa-concepts",
    isNew: true
  },
  {
    type: "new",
    label: "Live Feed",
    title: "Space News Feed",
    description: "Real-time articles from NASA, SpaceX, ESA, and more. Filtered by mission, science, launches, and technology.",
    href: "/space-news",
    isNew: true
  },
  {
    type: "infographic",
    label: "Infographic",
    title: "NASA Logo Through the Decades",
    description: "What if NASA redesigned their logo every decade? Ten eras, one iconic mark.",
    href: "/nasa-logo-history",
    isNew: true
  },
  {
    type: "interactive",
    label: "Interactive",
    title: "ISS Live Tracker",
    description: "Watch the International Space Station pass over Earth in real time with live telemetry.",
    href: "/iss-live",
    isNew: true
  },
  {
    type: "game",
    label: "Simulator",
    title: "ISS Docking Simulator",
    description: "Guide a capsule into soft capture using thruster controls and careful alignment.",
    href: "/iss-docking-simulator",
    isNew: false
  },
  {
    type: "game",
    label: "Simulator",
    title: "Starship Orbit Simulator",
    description: "Fly a Starship through ascent and hit every waypoint needed to reach parking orbit.",
    href: "/starship-orbit-simulator",
    isNew: false
  },
  {
    type: "interactive",
    label: "Interactive",
    title: "Mars Relay AI",
    description: "Simulate deep-space message delay, signal travel, and AI-assisted packet optimization.",
    href: "/mars-relay",
    isNew: false
  },
  {
    type: "game",
    label: "Game",
    title: "Deep Space Echo",
    description: "Aim a message toward distant worlds and see if your signal holds across the cosmos.",
    href: "/deep-space-echo",
    isNew: false
  },
  {
    type: "editorial",
    label: "Editorial",
    title: "Europa Hopper Mission",
    description: "A deep dive into the concept of a hopper exploring the icy moon of Jupiter.",
    href: "/europa-hopper-mission",
    isNew: false
  }
];

const whatsNewTypeStyles: Record<WhatsNewType, { accent: string; bg: string }> = {
  new:         { accent: "#e43f2f", bg: "rgba(228,63,47,0.12)" },
  game:        { accent: "#22d3a0", bg: "rgba(34,211,160,0.10)" },
  interactive: { accent: "#4488ff", bg: "rgba(68,136,255,0.10)" },
  infographic: { accent: "#f5a623", bg: "rgba(245,166,35,0.10)" },
  editorial:   { accent: "#b98fff", bg: "rgba(185,143,255,0.10)" }
};

function RichText({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function MosaicProfile({ item }: { item: PageContent["gallery"]["items"][number] }) {
  const content = (
    <>
      <div className="mosaic-card__image">
        <Image src={item.image} alt={item.name} fill className="cover-image" />
      </div>
      <div className="mosaic-card__meta">
        <h4>{item.name}</h4>
        <p>{item.role}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} target="_blank" rel="noreferrer" className="mosaic-card">
        {content}
      </Link>
    );
  }

  return <article className="mosaic-card">{content}</article>;
}

export function PublicPage({ content }: Props) {
  return (
    <main className="page-shell page-shell--home">
      <div className="home-page-atmosphere" aria-hidden="true">
        <Image
          src={content.hero.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="home-page-atmosphere__image"
        />
      </div>

      <PublicHeader
        eyebrow={content.site.eyebrow}
        title={content.site.pageTitle}
        links={content.site.nav}
      />

      <section className="hero">
        <div className="hero__backdrop">
          <Image src={content.hero.backgroundImage} alt="" fill priority className="hero__bg-image" />
        </div>
        <div className="hero__content">
          <div className="hero__copy">
            <span className="pill">{content.site.badge}</span>
            <h2>{content.hero.title}</h2>
            <p>{content.hero.subtitle}</p>
            <div className="hero__actions">
              <Link href={content.hero.primaryCta.href} className="button button--primary">
                {content.hero.primaryCta.label}
              </Link>
              <Link href={content.hero.secondaryCta.href} className="button button--ghost">
                {content.hero.secondaryCta.label}
              </Link>
            </div>
            <dl className="stat-grid">
              {content.hero.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__portrait">
            <Image src={content.hero.portraitImage} alt={content.hero.title} fill priority className="cover-image" />
          </div>
        </div>
      </section>


      {/* ── What's New ── */}
      <section className="whats-new" aria-labelledby="whats-new-title">
        <div className="whats-new__header">
          <div className="whats-new__title-group">
            <span className="section__eyebrow">Site Updates</span>
            <h3 id="whats-new-title">What&rsquo;s New</h3>
          </div>
          <p className="whats-new__subtitle">
            The latest pages, games, and interactive experiences added to the site.
          </p>
        </div>
        <div className="whats-new__track">
          {whatsNewItems.map((item) => {
            const style = whatsNewTypeStyles[item.type];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="wn-card"
                style={{
                  "--wn-accent": style.accent,
                  "--wn-bg": style.bg
                } as React.CSSProperties}
              >
                <div className="wn-card__top">
                  <span className="wn-card__type-badge">{item.label}</span>
                  {item.isNew && (
                    <span className="wn-card__new-badge" aria-label="New">
                      NEW
                    </span>
                  )}
                </div>
                <h4 className="wn-card__title">{item.title}</h4>
                <p className="wn-card__desc">{item.description}</p>
                <div className="wn-card__footer">
                  <span className="wn-card__cta">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-honorary" aria-labelledby="home-honorary-title">
        <div className="home-honorary__copy">
          <span className="section__eyebrow">Honorary NASA Employees</span>
          <h3 id="home-honorary-title">Add your dream role to the mission.</h3>
          <p>
            Students, kids, adults, and lifelong dreamers can add themselves to
            the honorary crew and share the NASA role they would choose to help
            preserve life and keep the light on for future generations.
          </p>
          <div className="hero__actions">
            <Link href="/honorary-nasa-employees" className="button button--primary">
              Join the Honorary Crew
            </Link>
            <Link href="/honorary-nasa-employees#join-honorary-crew" className="button button--ghost">
              Add a Dream Role
            </Link>
          </div>
        </div>
        <div className="home-honorary__cards">
          {honoraryRoleCards.map((card) => (
            <article key={card.title} className="home-honorary__card">
              <div
                className="home-honorary__card-image"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(6, 10, 16, 0.12), rgba(6, 10, 16, 0.68)), url(${card.image})` }}
                aria-hidden="true"
              />
              <div className="home-honorary__card-copy">
                <span>{card.eyebrow}</span>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="mission" className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">What We Do</span>
          <h3>{content.mission.title}</h3>
          <RichText html={content.mission.bodyHtml} />
          <div className="callout-grid">
            {content.mission.callouts.map((callout) => (
              <article key={callout.title} className="callout-card">
                <h4>{callout.title}</h4>
                <p>{callout.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section__visual">
          <Image src={content.mission.image} alt={content.mission.title} fill className="cover-image" />
        </div>
      </section>

      <section id="culture" className="section section--split section--alt">
        <div className="section__visual">
          <Image src={content.culture.image} alt={content.culture.title} fill className="cover-image" />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Life at NASA</span>
          <h3>{content.culture.title}</h3>
          <RichText html={content.culture.bodyHtml} />
          <ul className="benefit-list">
            {content.culture.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="explore" className="feature-band">
        <div className="feature-band__image">
          <Image src={content.explore.image} alt={content.explore.title} fill className="cover-image" />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">{content.explore.eyebrow}</span>
          <h3>{content.explore.title}</h3>
          <p>{content.explore.text}</p>
        </div>
      </section>

      <section id="resources" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Discover More</span>
            <h3>{content.resources.title}</h3>
          </div>
        </div>
        <div className="resource-grid">
          {content.resources.cards.map((card) => (
            <Link key={card.title} href={card.href} className="resource-card">
              <div className="resource-card__image">
                <Image src={card.image} alt={card.title} fill className="cover-image" />
              </div>
              <div className="resource-card__content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PublicFooter
        title={content.footer.title}
        text={content.footer.text}
      />
    </main>
  );
}
