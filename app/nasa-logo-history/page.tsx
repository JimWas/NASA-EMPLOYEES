import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "NASA Logo Through the Decades",
  description: "What if NASA redesigned their logo to match the design language of each decade? A hypothetical visual journey from the Atomic Age of the 1950s to the interstellar elegance of the 2060s.",
  path: "/nasa-logo-history",
  image: "/images/NASA-LOGO-DECADES-ERAS.png",
});

const eras = [
  {
    decade: "1950s",
    slug: "1950s",
    theme: "Atomic Age",
    tags: ["Atomic Age", "Googie", "Sputnik Era"],
    accent: "#e87a3c",
    bg: "linear-gradient(135deg, #f5ede0 0%, #e8d5b0 100%)",
    textColor: "#1a1008",
    description:
      "Born alongside the space race itself, a 1950s NASA logo would borrow from the optimistic Googie aesthetic: bold geometric shapes, starburst motifs, and the sweep of atomic-era confidence. Think drive-in diners meets rocket science.",
    designDetails: [
      "Triangular \"meatball\" forms inspired by retro-futurist architecture",
      "Star and orbit elements echoing Sputnik's launch shock",
      "High-contrast ink colors on cream backgrounds",
      "Swooping trajectories that felt like the future arriving fast"
    ],
    culturalContext:
      "NASA was founded in 1958, just months after Sputnik changed everything. Design culture was racing as fast as the rockets: optimistic, bold, and unafraid to dream large."
  },
  {
    decade: "1960s",
    slug: "1960s",
    theme: "Psychedelic Space Age",
    tags: ["Psychedelic", "Space Age", "Apollo Era"],
    accent: "#c94adf",
    bg: "linear-gradient(135deg, #2d0a3a 0%, #5c1a7a 100%)",
    textColor: "#f5d6ff",
    description:
      "The Apollo era collided with counterculture. A 1960s NASA logo would pulse with swirling purples, warm oranges, and bubbly groovy lettering. Space was psychedelic in both the literal cosmos and the cultural moment.",
    designDetails: [
      "Bubbly, inflated letterforms straight from Haight-Ashbury",
      "Swirling planet forms with warm-cool color contrast",
      "Groovy roundness replacing rigid geometry",
      "Colors that feel like looking at Jupiter through a lava lamp"
    ],
    culturalContext:
      "Apollo 11 landed in 1969. The decade was defined by radical optimism. Civil rights, the Summer of Love, and humanity taking its first steps on another world all coexisted in the same cultural moment."
  },
  {
    decade: "1970s",
    slug: "1970s",
    theme: "Retro Futurism",
    tags: ["Retro Futurism", "Earth Tones", "Space Exploration"],
    accent: "#c9882a",
    bg: "linear-gradient(135deg, #2a1800 0%, #5c3310 100%)",
    textColor: "#f5e4c8",
    description:
      "The 1970s were NASA's workhorse decade: Space Shuttle development, Voyager launches, Viking on Mars. Design embraced warm earth tones, rounded rectangles, and a confident retro-futurism that still feels warmly nostalgic.",
    designDetails: [
      "Rounded rectangle \"TV screen\" frames echoing consumer electronics",
      "Warm amber, burnt sienna, and chocolate brown palettes",
      "Bold sans-serif wordmarks with slight beveling",
      "Earthy optimism; space felt achievable, practical, workmanlike"
    ],
    culturalContext:
      "The real NASA \"Worm\" logo arrived in 1975. This was the era of Earth Day, energy crises, and a grounded confidence. Space was becoming routine, and design reflected that maturity."
  },
  {
    decade: "1980s",
    slug: "1980s",
    theme: "Memphis Design & Neon",
    tags: ["Memphis Design", "Neon Colors", "Tech Optimism"],
    accent: "#ff2d9b",
    bg: "linear-gradient(135deg, #0a0a1f 0%, #1a0a30 100%)",
    textColor: "#ffe0f5",
    description:
      "MTV, Max Headroom, neon tubes, and Memphis Group design: the 1980s were maximalist to the extreme. A NASA logo of this era would burst with hot pink brushstrokes, geometric grids, and electrified typography that screamed technological optimism.",
    designDetails: [
      "Gestural brushstroke letterforms in hot pink and cyan",
      "Memphis-style geometric accents: triangles, lightning bolts, dots",
      "Neon color grids evoking early computer graphics",
      "Pattern-mixing: leopard print meets wireframe grid"
    ],
    culturalContext:
      "The Space Shuttle was operational and Challenger's tragedy in 1986 was still processing. The culture oscillated between extreme techno-optimism and anxious reflection, and design leaned hard into the optimistic end of that dial."
  },
  {
    decade: "1990s",
    slug: "1990s",
    theme: "Digital Age & Grunge",
    tags: ["Digital Age", "Grunge Textures", "New Frontiers"],
    accent: "#6b4dff",
    bg: "linear-gradient(135deg, #080820 0%, #120830 100%)",
    textColor: "#d0c8ff",
    description:
      "The internet arrived and grunge conquered. A 1990s NASA logo would feel raw, pixelated, textured. Digital artifacts meeting cosmic ambition. Early Photoshop, galaxy textures, and the raw excitement of an interconnected world discovering space data online for the first time.",
    designDetails: [
      "Pixelated galaxy textures as background elements",
      "Distressed letterforms with grunge texture overlays",
      "Deep space blues contrasting with saturated red swooshes",
      "A feeling of screens, static, and infinite digital frontier"
    ],
    culturalContext:
      "The Hubble Space Telescope (repaired 1993), Mars Pathfinder (1997), and the dawn of NASA.gov all happened in this decade. Space went digital, and it felt raw and new and thrilling."
  },
  {
    decade: "2000s",
    slug: "2000s",
    theme: "Y2K Futurism",
    tags: ["Y2K Futurism", "Metallic Look", "Global Reach"],
    accent: "#c0c8d8",
    bg: "linear-gradient(135deg, #0c1220 0%, #1a2035 100%)",
    textColor: "#e8eef8",
    description:
      "Chrome, bevels, lens flares, and a world wired together. The 2000s aesthetic was gleaming, metallic, and globally connected. NASA's logo in this era would shine like polished titanium: confident, slick, and optimistic about the tech-enabled future.",
    designDetails: [
      "Highly reflective metallic chrome letterforms",
      "Lens flares and specular highlights on orbital elements",
      "Global grid wireframe backgrounds suggesting connectivity",
      "Sleek, beveled geometry that looks rendered in early 3D software"
    ],
    culturalContext:
      "The International Space Station was being assembled, SpaceX was founded (2002), and design moved to hyper-polished 3D rendering. Everything looked like it could be a movie poster."
  },
  {
    decade: "2010s",
    slug: "2010s",
    theme: "Flat Design & Minimalism",
    tags: ["Minimalism", "Flat Design", "Digital First"],
    accent: "#2b7fff",
    bg: "linear-gradient(135deg, #f0f4ff 0%, #dce8ff 100%)",
    textColor: "#0a1a3a",
    description:
      "iOS 7 killed skeuomorphism and flat design ruled the decade. A 2010s NASA logo would be clean, unadorned, and perfectly circular: optimized for app icons, social media avatars, and retina displays. Bold blue, clean white, disciplined geometry.",
    designDetails: [
      "Pure flat color fills with no gradients or shadows",
      "Perfect circular badge format optimized for app icons",
      "Clean geometric sans-serif wordmark at maximum legibility",
      "Minimal swoosh element reduced to its essential line"
    ],
    culturalContext:
      "The iPhone transformed design standards. NASA's Mars rovers, the Curiosity landing (2012), and growing private spaceflight meant the brand needed to work everywhere, from a 32px icon to a billboard."
  },
  {
    decade: "2020s",
    slug: "2020s",
    theme: "App Icon Era",
    tags: ["App Icon Era", "Clean & Bold", "Accessible"],
    accent: "#4488ff",
    bg: "linear-gradient(135deg, #0d1c3a 0%, #1a2d5a 100%)",
    textColor: "#e0eaff",
    description:
      "Rounded rectangles were everywhere. The superellipse became the universal container for brand identity. A 2020s NASA logo lives inside a rounded rectangle app icon, bold and accessible, ready for dark mode, AR overlays, and the spatial computing era just around the corner.",
    designDetails: [
      "Superellipse (squircle) container format matching iOS/Android app standards",
      "Rich navy background with high-contrast white wordmark",
      "Subtle star-field depth within the badge",
      "Accessibility-first contrast ratios built into every version"
    ],
    culturalContext:
      "Artemis planning, SpaceX's Crew Dragon carrying astronauts, and design tools like Figma making brand systems more systematic than ever. Every pixel is intentional."
  },
  {
    decade: "2040s",
    slug: "2040s",
    theme: "Holographic UI",
    tags: ["Holographic UI", "Translucent", "Data-Driven"],
    accent: "#00d4ff",
    bg: "linear-gradient(135deg, #000814 0%, #001a2c 100%)",
    textColor: "#b0f0ff",
    description:
      "Speculative but not far: holographic interfaces, translucent OLED panels, and data-driven identity systems. A 2040s NASA logo would be luminous, animated, and contextually aware, shifting between mission data overlays and public-facing clarity depending on who's looking.",
    designDetails: [
      "Translucent holographic sphere with light refraction effects",
      "Data readout overlays: coordinates, mission status, telemetry",
      "Neon blue and electric teal on pure black backgrounds",
      "Identity that exists in 3D space, not just on flat surfaces"
    ],
    culturalContext:
      "By the 2040s, humans may be living on the Moon or approaching Mars. Design will need to work in spacesuits, habitat displays, and planetary surface environments. The logo becomes infrastructure."
  },
  {
    decade: "2060s",
    slug: "2060s",
    theme: "Interstellar Era",
    tags: ["Interstellar Era", "Elegant & Timeless", "Beyond Earth"],
    accent: "#d4af6a",
    bg: "linear-gradient(135deg, #000005 0%, #05030f 100%)",
    textColor: "#e8dfc8",
    description:
      "Beyond the solar system, beyond the urgency of proving ourselves, the 2060s NASA logo would achieve something rare: quiet confidence. Elegant gold lettering against the infinite black, a swoosh that could be a galaxy arm, and typography refined to its most essential and timeless form.",
    designDetails: [
      "Thin, luminous gold letterforms on absolute black",
      "Swoosh element evoking a spiral galaxy arm at cosmic scale",
      "Cinematic lens light spilling from behind a curved planet",
      "Typographic restraint; nothing to prove, everything to explore"
    ],
    culturalContext:
      "By 2060, NASA may be a multi-planetary agency overseeing habitats across the solar system. The logo no longer needs to announce itself. It simply is. Like ESA's clean mark or CERN's understated identity, prestige speaks quietly."
  }
];

const eraColors: Record<string, { ring: string; glow: string }> = {
  "1950s": { ring: "#e87a3c", glow: "rgba(232, 122, 60, 0.4)" },
  "1960s": { ring: "#c94adf", glow: "rgba(201, 74, 223, 0.4)" },
  "1970s": { ring: "#c9882a", glow: "rgba(201, 136, 42, 0.4)" },
  "1980s": { ring: "#ff2d9b", glow: "rgba(255, 45, 155, 0.4)" },
  "1990s": { ring: "#6b4dff", glow: "rgba(107, 77, 255, 0.4)" },
  "2000s": { ring: "#c0c8d8", glow: "rgba(192, 200, 216, 0.4)" },
  "2010s": { ring: "#2b7fff", glow: "rgba(43, 127, 255, 0.4)" },
  "2020s": { ring: "#4488ff", glow: "rgba(68, 136, 255, 0.4)" },
  "2040s": { ring: "#00d4ff", glow: "rgba(0, 212, 255, 0.4)" },
  "2060s": { ring: "#d4af6a", glow: "rgba(212, 175, 106, 0.4)" }
};

export default function NasaLogoHistoryPage() {
  return (
    <main className="page-shell nasa-logo-history">
      <PublicHeader
        eyebrow="Design & Identity"
        title="NASA Employees"
        links={[
          { label: "Home", href: "/" },
          { label: "Honorary Crew", href: "/honorary-nasa-employees" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Join the Team", href: "/join-the-team" }
        ]}
      />

      {/* ── Hero ── */}
      <section className="nlh-hero">
        <div className="nlh-hero__stars" aria-hidden="true" />
        <div className="nlh-hero__content">
          <span className="pill">Hypothetical Design Study</span>
          <h2 className="nlh-hero__headline">
            What if NASA redesigned their&nbsp;logo<br />
            <em>every&nbsp;decade?</em>
          </h2>
          <p className="nlh-hero__sub">
            A visual thought experiment: ten eras of design culture, each re-interpreted
            through the iconic NASA wordmark, from the Atomic Age optimism of the 1950s
            to the quiet interstellar elegance of the 2060s.
          </p>
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <a href="#infographic" className="button button--primary">
              Explore the Infographic
            </a>
            <a href="#era-deep-dive" className="button button--ghost">
              Dive Into Each Era
            </a>
          </div>
        </div>
        <div className="nlh-hero__orbit" aria-hidden="true">
          <div className="nlh-hero__orbit-ring nlh-hero__orbit-ring--1" />
          <div className="nlh-hero__orbit-ring nlh-hero__orbit-ring--2" />
          <div className="nlh-hero__orbit-ring nlh-hero__orbit-ring--3" />
          <div className="nlh-hero__orbit-dot" />
        </div>
      </section>

      {/* ── Infographic Showcase ── */}
      <section id="infographic" className="nlh-infographic">
        <div className="nlh-infographic__header">
          <span className="section__eyebrow">The Full Infographic</span>
          <h3>Ten Decades. One Icon. Infinite Interpretations.</h3>
          <p>
            Each era's design language leaves a distinct fingerprint on the NASA wordmark,
            a testament to how cultural moments shape the visual identity of even the most
            mission-critical organizations.
          </p>
        </div>
        <div className="nlh-infographic__frame">
          <div className="nlh-infographic__glow" aria-hidden="true" />
          <Image
            src="/images/NASA-LOGO-DECADES-ERAS.png"
            alt="NASA logo redesigned for each decade from the 1950s to the 2060s: a visual infographic showing Atomic Age, Psychedelic, Retro Futurism, Memphis, Digital Grunge, Y2K Metallic, Flat Design, App Icon, Holographic, and Interstellar design styles"
            width={900}
            height={1200}
            className="nlh-infographic__image"
            priority
          />
          <div className="nlh-infographic__caption">
            <span>From 1950s Atomic Age to 2060s Interstellar, a hypothetical visual journey</span>
          </div>
        </div>
        {/* Decade timeline nav */}
        <div className="nlh-timeline" aria-label="Decade navigation">
          {eras.map((era) => (
            <a
              key={era.decade}
              href={`#era-${era.slug}`}
              className="nlh-timeline__dot"
              style={{
                "--dot-color": eraColors[era.decade]?.ring ?? "#888",
                "--dot-glow": eraColors[era.decade]?.glow ?? "rgba(136,136,136,0.3)"
              } as React.CSSProperties}
              title={`${era.decade}: ${era.theme}`}
            >
              <span className="nlh-timeline__label">{era.decade}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Era Deep Dives ── */}
      <section id="era-deep-dive" className="nlh-eras">
        <div className="nlh-eras__header">
          <span className="section__eyebrow">Era by Era</span>
          <h3>The Design Story Behind Each Decade</h3>
          <p>
            Design doesn't happen in a vacuum. Every aesthetic choice is a reflection of
            the culture, technology, and anxieties of its moment. Here's what each decade
            would have brought to NASA's most recognizable mark.
          </p>
        </div>

        <div className="nlh-era-list">
          {eras.map((era, index) => (
            <article
              key={era.decade}
              id={`era-${era.slug}`}
              className={`nlh-era-card ${index % 2 === 1 ? "nlh-era-card--alt" : ""}`}
            >
              {/* Card accent bar */}
              <div
                className="nlh-era-card__accent"
                style={{ background: era.accent }}
                aria-hidden="true"
              />

              <div className="nlh-era-card__body">
                {/* Decade badge */}
                <div className="nlh-era-card__decade-wrap">
                  <div
                    className="nlh-era-card__decade-badge"
                    style={{
                      background: era.bg,
                      color: era.textColor,
                      boxShadow: `0 0 40px ${eraColors[era.decade]?.glow ?? "transparent"}, inset 0 1px 0 rgba(255,255,255,0.15)`
                    }}
                  >
                    <span className="nlh-era-card__decade-year">{era.decade}</span>
                    <span className="nlh-era-card__decade-theme">{era.theme}</span>
                    <div className="nlh-era-card__tags">
                      {era.tags.map((tag) => (
                        <span
                          key={tag}
                          className="nlh-era-card__tag"
                          style={{ borderColor: era.accent, color: era.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="nlh-era-card__content">
                  <div className="nlh-era-card__copy">
                    <span
                      className="nlh-era-card__eyebrow"
                      style={{ color: era.accent }}
                    >
                      {era.decade} · {era.theme}
                    </span>
                    <h4 className="nlh-era-card__title">{era.theme}</h4>
                    <p className="nlh-era-card__description">{era.description}</p>
                  </div>

                  <div className="nlh-era-card__details">
                    <div className="nlh-era-card__design-details">
                      <span className="nlh-era-card__detail-label">Design Language</span>
                      <ul className="nlh-era-card__detail-list">
                        {era.designDetails.map((detail) => (
                          <li key={detail}>
                            <span
                              className="nlh-era-card__bullet"
                              style={{ color: era.accent }}
                              aria-hidden="true"
                            >
                              ◆
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="nlh-era-card__cultural">
                      <span className="nlh-era-card__detail-label">Cultural Context</span>
                      <p>{era.culturalContext}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Index number */}
              <div
                className="nlh-era-card__index"
                aria-hidden="true"
                style={{ color: eraColors[era.decade]?.ring ?? "#888" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Closing Thought ── */}
      <section className="nlh-closing">
        <div className="nlh-closing__inner">
          <span className="section__eyebrow">The Takeaway</span>
          <h3>Identity is a mirror of its moment.</h3>
          <p>
            NASA's real logo history, from the "meatball" to the "worm" and back again,
            already tells a story of institutional values colliding with design trends.
            This hypothetical thought experiment reveals something deeper: that even the
            most mission-driven organizations are cultural artifacts. Every curve, color,
            and letterform is a snapshot of what we believed the future looked like,
            at that exact moment in time.
          </p>
          <div className="nlh-closing__cta-row">
            <Link href="/nasa-fundamentals" className="button button--primary">
              Explore NASA Fundamentals
            </Link>
            <Link href="/honorary-nasa-employees" className="button button--ghost">
              Join the Honorary Crew
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter
        title="Design tells the story that words can't."
        text="From Googie to holographic, the NASA logo is a time capsule of human ambition."
      />
    </main>
  );
}
