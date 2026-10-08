import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/lib/types";
import { PublicHeader } from "@/components/PublicHeader";
import { GoldenRecordHero } from "@/components/GoldenRecordHero";
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

const creatorLinks = [
  {
    icon: "youtube",
    network: "YouTube",
    handle: "@Stryker336",
    href: "https://www.youtube.com/user/Stryker336",
  },
  {
    icon: "github",
    network: "GitHub",
    handle: "@JimWas",
    href: "https://github.com/JimWas",
  },
  {
    icon: "x",
    network: "X",
    handle: "@jimwashkau",
    href: "https://x.com/jimwashkau",
  },
  {
    icon: "instagram",
    network: "Instagram",
    handle: "@jimwashkau",
    href: "https://www.instagram.com/jimwashkau",
  },
  {
    icon: "linkedin",
    network: "LinkedIn",
    handle: "Jim Washkau",
    href: "https://linkedin.com/in/jimwashkau",
  },
  {
    icon: "website",
    network: "Jim's Helmets",
    handle: "jimshelmets.org",
    href: "https://jimshelmets.org/",
  },
] as const;

type CreatorIconName = (typeof creatorLinks)[number]["icon"];

function CreatorIcon({ name }: { name: CreatorIconName }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
  } as const;

  switch (name) {
    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.65 4.6 12 4.6 12 4.6s-5.65 0-7.5.5a3 3 0 0 0-2.1 2.1C1.9 9.05 1.9 12 1.9 12s0 2.95.5 4.8a3 3 0 0 0 2.1 2.1c1.85.5 7.5.5 7.5.5s5.65 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.85.5-4.8.5-4.8s0-2.95-.5-4.8Z" fill="currentColor" />
          <path d="m10 15.2 5.2-3.2L10 8.8v6.4Z" fill="#080e1b" />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps} fill="currentColor">
          <path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.57.1.78-.25.78-.55v-2.2c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.63 0-1.25.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.8 10.8 0 0 1 5.7 0C15.04 5.3 16 5.61 16 5.61c.62 1.57.23 2.73.11 3.02.73.8 1.17 1.81 1.17 3.06 0 4.37-2.68 5.34-5.22 5.62.41.36.77 1.05.77 2.12v3.02c0 .3.21.66.79.55A11.4 11.4 0 0 0 12 .8Z" />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path d="M4 3.5h4.7l3.9 5.2 4.7-5.2H20l-6.15 7.1L20.4 20.5h-4.7l-4.37-5.83-5.05 5.83H3.6l6.48-7.73L4 3.5Zm3.35 1.8 9.25 13.4h1.45L8.8 5.3H7.35Z" fill="currentColor" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...commonProps} stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.25" />
          <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps} fill="currentColor">
          <rect x="3" y="9" width="4" height="12" rx=".5" />
          <circle cx="5" cy="5" r="2.25" />
          <path d="M10 9h3.85v1.65h.05c.54-1.02 1.85-2.1 3.8-2.1 4.06 0 4.8 2.67 4.8 6.14V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H10V9Z" />
        </svg>
      );
    case "website":
      return (
        <svg {...commonProps} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.4 9h17.2M3.4 15h17.2M12 3c2.1 2.45 3.2 5.45 3.2 9s-1.1 6.55-3.2 9c-2.1-2.45-3.2-5.45-3.2-9S9.9 5.45 12 3Z" />
        </svg>
      );
  }
}

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
    label: "Video Comic",
    title: "Curiosity Noir: The Wrong Landing",
    description: "Watch Curiosity descend into an imagined 1920s New York, then follow its first mystery through film-noir comic panels.",
    href: "/curiosity-noir",
    isNew: true
  },
  {
    type: "editorial",
    label: "Megastructure",
    title: "An Orbital Ring for Humanity",
    description: "See how an actively supported ring could turn orbit into shared transportation, energy, research, and disaster-response infrastructure.",
    href: "/orbital-ring",
    isNew: true
  },
  {
    type: "editorial",
    label: "Archive Case 002",
    title: "Could the Shuttle Have Saved Skylab?",
    description: "Follow NASA's funded race to reawaken, reboost, and reuse Skylab—and the schedule gap that doomed the rescue.",
    href: "/foia-requests/skylab-rescue",
    isNew: true
  },
  {
    type: "editorial",
    label: "Concept Study",
    title: "Beyond Super Heavy: The Atomizer",
    description: "A speculative architecture with 39 detachable propulsion pods, sequential staging, and autonomous swarm recovery.",
    href: "/starship-k1-atomizer",
    isNew: true
  },
  {
    type: "editorial",
    label: "Engineering",
    title: "Curiosity Rover, Piece by Piece",
    description: "Explore the rover’s wheels, arm, power, computers, and 10 science instruments—then see how the Sky Crane delivered it to Mars.",
    href: "/curiosity-rover-sky-crane",
    isNew: true
  },
  {
    type: "editorial",
    label: "FOIA Archive",
    title: "The Salyut 7 Retrieval File",
    description: "Read NASA request 26-00719-F-JSC, its no-records determination, and an orbital-mechanics check of the Space Shuttle capture theory.",
    href: "/foia-requests",
    isNew: true
  },
  {
    type: "editorial",
    label: "How-To",
    title: "Request NASA Records with FOIA",
    description: "Choose the right NASA office, define a searchable set of records, control fees, copy a proven request structure, and track the response.",
    href: "/nasa-foia-request-guide",
    isNew: true
  },
  {
    type: "editorial",
    label: "History",
    title: "Wernher von Braun: Space Legacy",
    description: "Explore the engineering leadership behind Explorer 1, Marshall, and Saturn V—and the Nazi-era forced labor history that makes his legacy impossible to simplify.",
    href: "/wernher-von-braun",
    isNew: true
  },
  {
    type: "editorial",
    label: "Featured",
    title: "Ion Propulsion to Deep Space",
    description: "Compare chemical and nuclear-electric propulsion, explore continuous-thrust routes, and see what it could take to carry humans to Mars and Europa.",
    href: "/ion-propulsion",
    isNew: true
  },
  {
    type: "editorial",
    label: "Learn",
    title: "Live From Mars",
    description: "Could someone livestream from Mars? Follow the delayed signal from a surface camera to relay orbiters, Earth antennas, and viewers at home.",
    href: "/mars-livestream",
    isNew: true
  },
  {
    type: "editorial",
    label: "Learn",
    title: "Nuclear Asteroid Defense",
    description: "How a nuclear stand-off pulse could move a dangerous asteroid, why fragmentation is risky, and why early detection remains Earth's best defense.",
    href: "/nuclear-asteroid-defense",
    isNew: true
  },
  {
    type: "editorial",
    label: "Learn",
    title: "Space Hibernation",
    description: "What torpor really is, why mission designers care, what NASA is studying, and why humans are not ready to sleep to Mars.",
    href: "/space-hibernation",
    isNew: true
  },
  {
    type: "interactive",
    label: "Badge Maker",
    title: "Dream NASA Role ID",
    description: "Create and download an honorary mission badge for the NASA role you would choose.",
    href: "/dream-nasa-role-id",
    isNew: true
  },
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
    title: "Golden Record Decoder",
    description: "Translate six mysterious symbols, then create and save your own message to the universe.",
    href: "/golden-record",
    isNew: true
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
          <div className="hero__aside">
            <div className="hero__portrait">
              <Image src={content.hero.portraitImage} alt={content.hero.title} fill priority className="cover-image" />
            </div>
            <aside className="creator-signal" aria-labelledby="creator-signal-title">
              <div className="creator-signal__header">
                <div className="creator-signal__portrait">
                  <img
                    src="/images/jim-washkau-social.jpg"
                    alt="Jim Washkau"
                  />
                  <span>Active</span>
                </div>
                <div>
                  <span className="creator-signal__eyebrow">Creator signal</span>
                  <h3 id="creator-signal-title">Find Jim Washkau</h3>
                  <p>Follow the projects and active transmissions behind NasaEmployees.com.</p>
                </div>
              </div>
              <div className="creator-signal__links">
                {creatorLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="creator-signal__link"
                    aria-label={`${item.network}: ${item.handle}`}
                  >
                    <span className="creator-signal__mark" aria-hidden="true">
                      <CreatorIcon name={item.icon} />
                    </span>
                    <span>
                      <strong>{item.network}</strong>
                      <small>{item.handle}</small>
                    </span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <GoldenRecordHero />

      <section className="home-noir" aria-labelledby="home-noir-title">
        <Image src="/images/curiosity-noir-hero.jpg" alt="Fictional noir comic art of Curiosity on a rainy New York street" fill sizes="(max-width: 760px) 100vw, 1320px" className="home-noir__image" />
        <div className="home-noir__shade" aria-hidden="true" />
        <div className="home-noir__copy">
          <span>NEW WEB VIDEO COMIC · CHAPTER ONE</span>
          <h3 id="home-noir-title">The city that<br />wasn&apos;t Mars.</h3>
          <p>Curiosity lands in an imagined 1920s New York. Watch two short films and follow the rover&apos;s first mystery in a film-noir comic story.</p>
          <Link href="/curiosity-noir" className="button home-noir__button">Enter Curiosity Noir →</Link>
        </div>
        <span className="home-noir__caption">Fictional alternate-history story · AI-generated imagery and video</span>
      </section>

      <section className="home-ring" aria-labelledby="home-ring-title">
        <Image
          src="/images/orbital-ring-hero.png"
          alt="Concept illustration of an orbital ring circling Earth above the atmosphere"
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className="home-ring__image"
        />
        <div className="home-ring__shade" aria-hidden="true" />
        <div className="home-ring__copy">
          <span>FEATURED PLANETARY INFRASTRUCTURE</span>
          <h3 id="home-ring-title">The Ring That Could Open the Sky.</h3>
          <p>Explore how an actively supported ring around Earth could make space travel, global transport, clean energy, and research available on a new scale.</p>
          <div className="home-ring__facts" aria-label="Orbital ring concept highlights">
            <div><strong>One ring</strong><span>AROUND EARTH</span></div>
            <div><strong>Moving core</strong><span>ACTIVE SUPPORT</span></div>
            <div><strong>Shared access</strong><span>HUMAN BENEFIT</span></div>
          </div>
          <Link href="/orbital-ring" className="button home-ring__button">Explore the Earth Ring →</Link>
        </div>
        <span className="home-ring__caption">AI-generated concept • No orbital ring currently exists</span>
      </section>

      <section className="home-ion-hero" aria-labelledby="home-ion-hero-title">
        <Image
          src="/images/ion-propulsion-transport.png"
          alt="Concept rendering of a nuclear-electric crew transport firing blue ion thrusters in deep space"
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className="home-ion-hero__image"
        />
        <div className="home-ion-hero__shade" />
        <div className="home-ion-hero__copy">
          <span className="home-ion-hero__eyebrow">Featured exploration concept</span>
          <h3 id="home-ion-hero-title">Beyond Chemical Rockets</h3>
          <p>
            See how nuclear-electric ion propulsion could move massive human
            spacecraft toward Mars, Jupiter, and Europa with sustained,
            fuel-efficient thrust.
          </p>
          <div className="home-ion-hero__metrics" aria-label="Ion propulsion highlights">
            <div><strong>~10×</strong><span>exhaust velocity</span></div>
            <div><strong>Months</strong><span>of steady thrust</span></div>
            <div><strong>Mars → Europa</strong><span>interactive routes</span></div>
          </div>
          <Link href="/ion-propulsion" className="button home-ion-hero__button">
            Explore Ion Propulsion
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <span className="home-ion-hero__caption">AI-generated mission concept • Not a current NASA vehicle</span>
      </section>

      <section className="home-atomizer" aria-labelledby="home-atomizer-title">
        <Image
          src="/images/starship-k1-ascent-hero.webp"
          alt="Speculative modular launch vehicle shedding reusable engine pods above Earth"
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className="home-atomizer__image"
        />
        <div className="home-atomizer__shade" aria-hidden="true" />
        <div className="home-atomizer__copy">
          <span>NEW INDEPENDENT PROPULSION STUDY</span>
          <h3 id="home-atomizer-title">Beyond<br />Super Heavy.</h3>
          <p>Explore a speculative launch architecture that replaces one giant booster with detachable engine-and-tank modules.</p>
          <div className="home-atomizer__facts" aria-label="Atomizer concept facts">
            <div><strong>39</strong><span>PROPULSION PODS</span></div>
            <div><strong>Sequential</strong><span>STAGING</span></div>
            <div><strong>Swarm</strong><span>RECOVERY</span></div>
          </div>
          <Link href="/starship-k1-atomizer" className="button home-atomizer__button">Explore the Atomizer Concept →</Link>
        </div>
        <span className="home-atomizer__caption">Independent concept • Not affiliated with or proposed by SpaceX</span>
      </section>

      <section className="home-curiosity" aria-labelledby="home-curiosity-title">
        <Image
          src="/images/curiosity-sky-crane-hero.webp"
          alt="Concept visualization of the Curiosity rover descending beneath its Sky Crane on Mars"
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className="home-curiosity__image"
        />
        <div className="home-curiosity__shade" aria-hidden="true" />
        <div className="home-curiosity__copy">
          <span>NEW MARS ENGINEERING FIELD GUIDE</span>
          <h3 id="home-curiosity-title">Curiosity,<br />piece by piece.</h3>
          <p>Explore the one-ton rover from wheels to laser—and the rocket-powered Sky Crane that lowered it onto Mars.</p>
          <div className="home-curiosity__facts" aria-label="Curiosity mission facts">
            <div><strong>899 kg</strong><span>LANDED ROVER</span></div>
            <div><strong>10</strong><span>INSTRUMENTS</span></div>
            <div><strong>8</strong><span>DESCENT ENGINES</span></div>
          </div>
          <Link href="/curiosity-rover-sky-crane" className="button home-curiosity__button">Open the Technical Breakdown →</Link>
        </div>
        <span className="home-curiosity__caption">AI-generated engineering visualization • Not a historical photograph</span>
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

      <section className="home-foia" aria-labelledby="home-foia-title">
        <div className="home-foia__copy">
          <span className="home-foia__eyebrow">New public-records guide</span>
          <h3 id="home-foia-title">How to request NASA records with FOIA.</h3>
          <p>Turn a research question into a precise records request. Find the right office, set a fee limit, use a copyable template, and understand what happens after submission.</p>
          <Link href="/nasa-foia-request-guide" className="button home-foia__button">Open the FOIA Guide <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-foia__checklist" aria-label="FOIA request checklist">
          <span>REQUEST CHECKLIST</span>
          <ol>
            <li><b>01</b>Find the records</li>
            <li><b>02</b>Choose the NASA office</li>
            <li><b>03</b>Define dates and custodians</li>
            <li><b>04</b>Set fees or request a waiver</li>
            <li><b>05</b>Submit and save the tracking number</li>
          </ol>
        </div>
      </section>

      <section className="home-foia-file" aria-labelledby="home-foia-file-title">
        <div className="home-foia-file__index"><span>CASE FILE</span><strong>002</strong><small>PUBLIC ARCHIVE</small></div>
        <div className="home-foia-file__copy">
          <span>NEW ARCHIVAL CASE FILE</span>
          <h3 id="home-foia-file-title">Could the Space Shuttle have saved Skylab?</h3>
          <p>Follow NASA&apos;s funded race to reawaken, reboost, and reuse America&apos;s first space station—and the schedule gap that doomed the rescue.</p>
          <Link href="/foia-requests/skylab-rescue">Open the case file <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-foia-file__stamp">CONFIRMED<br />PLAN</div>
      </section>

      <section className="home-foia-file home-foia-file--001" aria-labelledby="home-foia-file-001-title">
        <div className="home-foia-file__index"><span>CASE FILE</span><strong>001</strong><small>26-00719-F-JSC</small></div>
        <div className="home-foia-file__copy">
          <span>FOIA ARCHIVE</span>
          <h3 id="home-foia-file-001-title">Did NASA consider retrieving Salyut 7?</h3>
          <p>The original request, NASA&apos;s no-records determination, a permanently redacted public PDF, and a careful look at what the response—and the orbital mechanics—actually establish.</p>
          <Link href="/foia-requests">Open the case file <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-foia-file__stamp">NO RESPONSIVE<br />RECORDS</div>
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
            <Link href="/dream-nasa-role-id" className="button button--ghost">
              Generate Role ID
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

      <section className="home-vb-hero" aria-labelledby="home-vb-hero-title">
        <Image
          src="/images/von-braun-saturn-ib.jpg"
          alt="Wernher von Braun in profile beside a Saturn IB rocket at Kennedy Space Center in 1968"
          fill
          sizes="(max-width: 760px) 100vw, 1320px"
          className="home-vb-hero__image"
        />
        <div className="home-vb-hero__shade" />
        <div className="home-vb-hero__copy">
          <span className="home-vb-hero__eyebrow">New historical feature</span>
          <h3 id="home-vb-hero-title">The Engineer, the Moonshot, and the Moral Reckoning</h3>
          <p>A visual history of Wernher von Braun’s central role in Explorer 1, Marshall, and Saturn V—told alongside the Nazi past and forced labor that cannot be separated from his legacy.</p>
          <div className="home-vb-hero__dates" aria-label="Featured milestones">
            <span><strong>1958</strong> Explorer 1</span>
            <span><strong>1960</strong> Marshall</span>
            <span><strong>1969</strong> Apollo 11</span>
          </div>
          <Link href="/wernher-von-braun" className="button home-vb-hero__button">
            Explore the Full Legacy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <a className="home-vb-hero__credit" href="https://images.nasa.gov/details/6863092" target="_blank" rel="noreferrer">NASA archive ↗</a>
      </section>

      <PublicFooter
        title={content.footer.title}
        text={content.footer.text}
      />
    </main>
  );
}
