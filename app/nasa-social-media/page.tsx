import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = pageMeta({
  title: "NASA on Social Media: Every Official Channel",
  description: "The complete directory of official NASA accounts on X, Instagram, YouTube, TikTok, Facebook, LinkedIn, and more — including every NASA center.",
  path: "/nasa-social-media",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=630&q=80",
});

type Account = {
  handle: string;
  url: string;
  description?: string;
};

type PlatformGroup = {
  platform: string;
  icon: string;
  color: string;
  accounts: Account[];
};

type CenterGroup = {
  name: string;
  location: string;
  abbr: string;
  accounts: { platform: string; handle: string; url: string }[];
};

const mainPlatforms: PlatformGroup[] = [
  {
    platform: "X / Twitter",
    icon: "𝕏",
    color: "#1a1a1a",
    accounts: [
      { handle: "@NASA", url: "https://x.com/NASA", description: "Main NASA account. Launches, discoveries, missions." },
      { handle: "@NASAArtemis", url: "https://x.com/NASAArtemis", description: "The Artemis Moon program." },
      { handle: "@NASAMoon", url: "https://x.com/NASAMoon", description: "Lunar science and exploration." },
      { handle: "@NASAMars", url: "https://x.com/NASAMars", description: "Mars missions and exploration." },
      { handle: "@NASAHubble", url: "https://x.com/NASAHubble", description: "Hubble Space Telescope." },
      { handle: "@NASAWebb", url: "https://x.com/NASAWebb", description: "James Webb Space Telescope." },
      { handle: "@NASAEarth", url: "https://x.com/NASAEarth", description: "Earth science and satellite imagery." },
      { handle: "@NASASun", url: "https://x.com/NASASun", description: "Heliophysics and solar science." },
      { handle: "@NASAUniverse", url: "https://x.com/NASAUniverse", description: "Astrophysics and the cosmos." },
      { handle: "@NASASolarSystem", url: "https://x.com/NASASolarSystem", description: "Planetary science across the solar system." },
      { handle: "@NASA_Astronauts", url: "https://x.com/NASA_Astronauts", description: "The astronaut corps." },
      { handle: "@ISS_Research", url: "https://x.com/ISS_Research", description: "Science aboard the International Space Station." },
      { handle: "@Space_Station", url: "https://x.com/Space_Station", description: "International Space Station updates." },
    ],
  },
  {
    platform: "Instagram",
    icon: "📷",
    color: "#833ab4",
    accounts: [
      { handle: "@nasa", url: "https://www.instagram.com/nasa/", description: "100M+ followers. The best NASA photography." },
      { handle: "@nasahubble", url: "https://www.instagram.com/nasahubble/", description: "Hubble images." },
      { handle: "@nasawebb", url: "https://www.instagram.com/nasawebb/", description: "Webb telescope imagery." },
      { handle: "@nasaearth", url: "https://www.instagram.com/nasaearth/", description: "Earth from orbit." },
      { handle: "@iss", url: "https://www.instagram.com/iss/", description: "Life aboard the ISS." },
    ],
  },
  {
    platform: "YouTube",
    icon: "▶",
    color: "#ff0000",
    accounts: [
      { handle: "NASA", url: "https://www.youtube.com/nasa", description: "10M+ subscribers. Live launches, documentaries, mission coverage." },
      { handle: "NASA JPL", url: "https://www.youtube.com/NASAJPL", description: "Jet Propulsion Laboratory — Mars rovers and deep space." },
      { handle: "NASA Goddard", url: "https://www.youtube.com/NASAGoddard", description: "Earth science and astrophysics visualizations." },
      { handle: "NASA Johnson", url: "https://www.youtube.com/NASAJohnsonSpace", description: "Human spaceflight and ISS content." },
      { handle: "NASA Kennedy", url: "https://www.youtube.com/NASAKennedy", description: "Launch operations and history." },
      { handle: "NASA Armstrong", url: "https://www.youtube.com/NASAArmstrong", description: "Flight research and aeronautics." },
    ],
  },
  {
    platform: "Facebook",
    icon: "f",
    color: "#1877f2",
    accounts: [
      { handle: "NASA", url: "https://www.facebook.com/NASA", description: "Main NASA page." },
      { handle: "NASA Hubble", url: "https://www.facebook.com/NASAHubble", description: "Hubble Space Telescope." },
      { handle: "NASA Webb", url: "https://www.facebook.com/NASAWebb", description: "James Webb Space Telescope." },
      { handle: "NASA Earth", url: "https://www.facebook.com/NASAEarth", description: "Earth science content." },
      { handle: "NASA Moon", url: "https://www.facebook.com/NASAMoon", description: "Lunar exploration." },
      { handle: "International Space Station", url: "https://www.facebook.com/ISS", description: "ISS updates." },
    ],
  },
  {
    platform: "TikTok",
    icon: "♪",
    color: "#010101",
    accounts: [
      { handle: "@nasa", url: "https://www.tiktok.com/@nasa", description: "Short-form space content, astronaut life, launches." },
    ],
  },
  {
    platform: "LinkedIn",
    icon: "in",
    color: "#0a66c2",
    accounts: [
      { handle: "NASA", url: "https://www.linkedin.com/company/nasa/", description: "Careers, innovation, and institutional news." },
    ],
  },
  {
    platform: "Snapchat",
    icon: "👻",
    color: "#fffc00",
    accounts: [
      { handle: "@nasa", url: "https://www.snapchat.com/add/nasa", description: "Behind-the-scenes NASA content." },
    ],
  },
  {
    platform: "Flickr",
    icon: "⬤",
    color: "#ff0084",
    accounts: [
      { handle: "NASA Commons", url: "https://www.flickr.com/photos/nasacommons", description: "High-resolution public domain NASA photography archive." },
    ],
  },
  {
    platform: "Tumblr",
    icon: "t",
    color: "#36465d",
    accounts: [
      { handle: "NASA", url: "https://nasa.tumblr.com", description: "Long-form imagery and mission storytelling." },
    ],
  },
  {
    platform: "SoundCloud",
    icon: "☁",
    color: "#ff5500",
    accounts: [
      { handle: "NASA", url: "https://soundcloud.com/nasa", description: "Space sounds, mission audio, and recordings." },
    ],
  },
  {
    platform: "Twitch",
    icon: "◆",
    color: "#9146ff",
    accounts: [
      { handle: "NASA", url: "https://www.twitch.tv/nasa", description: "Live streams of launches and events." },
    ],
  },
  {
    platform: "GIPHY",
    icon: "GIF",
    color: "#00d473",
    accounts: [
      { handle: "NASA", url: "https://giphy.com/nasa", description: "Official NASA GIFs and animations." },
    ],
  },
];

const centers: CenterGroup[] = [
  {
    name: "Johnson Space Center",
    location: "Houston, Texas",
    abbr: "JSC",
    accounts: [
      { platform: "X", handle: "@NASA_Johnson", url: "https://x.com/NASA_Johnson" },
      { platform: "Instagram", handle: "@nasajohnson", url: "https://www.instagram.com/nasajohnson/" },
      { platform: "Facebook", handle: "NASA Johnson", url: "https://www.facebook.com/NASAJohnsonSpaceCenter" },
      { platform: "YouTube", handle: "NASA Johnson", url: "https://www.youtube.com/NASAJohnsonSpace" },
    ],
  },
  {
    name: "Kennedy Space Center",
    location: "Cape Canaveral, Florida",
    abbr: "KSC",
    accounts: [
      { platform: "X", handle: "@NASAKennedy", url: "https://x.com/NASAKennedy" },
      { platform: "Instagram", handle: "@nasakeedy", url: "https://www.instagram.com/nasakeedy/" },
      { platform: "Facebook", handle: "NASA Kennedy", url: "https://www.facebook.com/NASAKennedy" },
      { platform: "YouTube", handle: "NASA Kennedy", url: "https://www.youtube.com/NASAKennedy" },
    ],
  },
  {
    name: "Jet Propulsion Laboratory",
    location: "Pasadena, California",
    abbr: "JPL",
    accounts: [
      { platform: "X", handle: "@NASAJPL", url: "https://x.com/NASAJPL" },
      { platform: "Instagram", handle: "@nasajpl", url: "https://www.instagram.com/nasajpl/" },
      { platform: "Facebook", handle: "NASA JPL", url: "https://www.facebook.com/NASAJPL" },
      { platform: "YouTube", handle: "NASA JPL", url: "https://www.youtube.com/NASAJPL" },
    ],
  },
  {
    name: "Goddard Space Flight Center",
    location: "Greenbelt, Maryland",
    abbr: "GSFC",
    accounts: [
      { platform: "X", handle: "@NASAGoddard", url: "https://x.com/NASAGoddard" },
      { platform: "Instagram", handle: "@nasagoddard", url: "https://www.instagram.com/nasagoddard/" },
      { platform: "Facebook", handle: "NASA Goddard", url: "https://www.facebook.com/NASAGoddard" },
      { platform: "YouTube", handle: "NASA Goddard", url: "https://www.youtube.com/NASAGoddard" },
    ],
  },
  {
    name: "Marshall Space Flight Center",
    location: "Huntsville, Alabama",
    abbr: "MSFC",
    accounts: [
      { platform: "X", handle: "@NASA_Marshall", url: "https://x.com/NASA_Marshall" },
      { platform: "Instagram", handle: "@nasa_marshall", url: "https://www.instagram.com/nasa_marshall/" },
      { platform: "Facebook", handle: "NASA Marshall", url: "https://www.facebook.com/NASAMarshall" },
    ],
  },
  {
    name: "Ames Research Center",
    location: "Silicon Valley, California",
    abbr: "ARC",
    accounts: [
      { platform: "X", handle: "@NASAAmes", url: "https://x.com/NASAAmes" },
      { platform: "Instagram", handle: "@nasaames", url: "https://www.instagram.com/nasaames/" },
      { platform: "Facebook", handle: "NASA Ames", url: "https://www.facebook.com/NASAAmes" },
    ],
  },
  {
    name: "Armstrong Flight Research Center",
    location: "Edwards, California",
    abbr: "AFRC",
    accounts: [
      { platform: "X", handle: "@NASAArmstrong", url: "https://x.com/NASAArmstrong" },
      { platform: "Instagram", handle: "@nasaarmstrong", url: "https://www.instagram.com/nasaarmstrong/" },
      { platform: "Facebook", handle: "NASA Armstrong", url: "https://www.facebook.com/NASAArmstrong" },
      { platform: "YouTube", handle: "NASA Armstrong", url: "https://www.youtube.com/NASAArmstrong" },
    ],
  },
  {
    name: "Langley Research Center",
    location: "Hampton, Virginia",
    abbr: "LaRC",
    accounts: [
      { platform: "X", handle: "@NASALangley", url: "https://x.com/NASALangley" },
      { platform: "Instagram", handle: "@nasalangley", url: "https://www.instagram.com/nasalangley/" },
      { platform: "Facebook", handle: "NASA Langley", url: "https://www.facebook.com/NASALangley" },
    ],
  },
  {
    name: "Stennis Space Center",
    location: "Bay St. Louis, Mississippi",
    abbr: "SSC",
    accounts: [
      { platform: "X", handle: "@NASAStennis", url: "https://x.com/NASAStennis" },
      { platform: "Instagram", handle: "@nasastennis", url: "https://www.instagram.com/nasastennis/" },
      { platform: "Facebook", handle: "NASA Stennis", url: "https://www.facebook.com/NASAStennis" },
    ],
  },
  {
    name: "Glenn Research Center",
    location: "Cleveland, Ohio",
    abbr: "GRC",
    accounts: [
      { platform: "X", handle: "@NASAGlenn", url: "https://x.com/NASAGlenn" },
      { platform: "Facebook", handle: "NASA Glenn", url: "https://www.facebook.com/NASAGlenn" },
    ],
  },
];

const podcasts = [
  {
    title: "Houston, We Have a Podcast",
    description: "The official podcast of the Johnson Space Center. Astronauts, engineers, and mission stories told by the people who lived them.",
    url: "https://www.nasa.gov/podcasts/houston-we-have-a-podcast/",
  },
  {
    title: "NASA's Curious Universe",
    description: "Science stories for everyone. Each episode explores a different corner of the universe with the scientists who study it.",
    url: "https://www.nasa.gov/podcasts/curious-universe/",
  },
  {
    title: "The Invisible Network Podcast",
    description: "The story of NASA's Deep Space Network — the global antenna system that keeps communication alive across billions of miles.",
    url: "https://www.nasa.gov/podcasts/",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Join the Team", href: "/join-the-team" },
  { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
  { label: "Women at NASA", href: "/women-at-nasa" },
];

export default function NASASocialMediaPage() {
  return (
    <main className="page-shell page-shell--social">
      <PublicHeader
        eyebrow="Connect"
        title="NASA Social Media"
        links={navLinks}
      />

      {/* Hero */}
      <section className="social-hero">
        <div className="social-hero__copy">
          <span className="pill">Official Channels</span>
          <h2>NASA is on every platform. Here is where to find them.</h2>
          <p>
            NASA runs more than 100 official social media accounts across
            platforms — main agency accounts, telescope-specific channels,
            mission accounts, and individual centers. This is the complete
            directory of verified official channels.
          </p>
          <div className="social-hero__stats">
            <div className="social-hero__stat">
              <strong>100M+</strong>
              <span>Instagram followers</span>
            </div>
            <div className="social-hero__stat">
              <strong>47M+</strong>
              <span>X / Twitter followers</span>
            </div>
            <div className="social-hero__stat">
              <strong>10M+</strong>
              <span>YouTube subscribers</span>
            </div>
            <div className="social-hero__stat">
              <strong>100+</strong>
              <span>Official accounts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main platforms */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Official Accounts</span>
            <h3>Every platform NASA is on</h3>
          </div>
          <p>
            All accounts listed are official NASA channels. NASA&apos;s main
            @NASA handle on X is one of the largest government accounts in the
            world.
          </p>
        </div>
        <div className="social-platforms">
          {mainPlatforms.map((group) => (
            <div key={group.platform} className="social-platform-block">
              <div className="social-platform-block__header">
                <span
                  className="social-platform-block__icon"
                  style={{ background: group.color }}
                >
                  {group.icon}
                </span>
                <h3>{group.platform}</h3>
              </div>
              <div className="social-account-list">
                {group.accounts.map((acct) => (
                  <a
                    key={acct.url}
                    href={acct.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-account-card"
                  >
                    <span className="social-account-card__handle">{acct.handle}</span>
                    {acct.description && (
                      <span className="social-account-card__desc">{acct.description}</span>
                    )}
                    <span className="social-account-card__arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Centers */}
      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">NASA Centers</span>
            <h3>Every center has its own presence</h3>
          </div>
          <p>
            Each of NASA&apos;s ten major field centers runs its own social
            media accounts covering the specific work, people, and missions at
            that location.
          </p>
        </div>
        <div className="social-centers-grid">
          {centers.map((center) => (
            <article key={center.abbr} className="social-center-card">
              <div className="social-center-card__header">
                <span className="social-center-card__abbr">{center.abbr}</span>
                <div>
                  <h4>{center.name}</h4>
                  <span className="social-center-card__location">{center.location}</span>
                </div>
              </div>
              <div className="social-center-card__accounts">
                {center.accounts.map((acct) => (
                  <a
                    key={acct.url}
                    href={acct.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-center-card__link"
                  >
                    <span className="social-center-card__platform">{acct.platform}</span>
                    <span className="social-center-card__handle">{acct.handle}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Podcasts */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Podcasts</span>
            <h3>NASA stories in audio</h3>
          </div>
          <p>NASA runs several official podcasts covering human spaceflight, science, and the people behind the missions.</p>
        </div>
        <div className="callout-grid">
          {podcasts.map((pod) => (
            <a
              key={pod.title}
              href={pod.url}
              target="_blank"
              rel="noreferrer"
              className="callout-card callout-card--link"
            >
              <h4>{pod.title}</h4>
              <p>{pod.description}</p>
              <span className="social-listen-link">Listen ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Stay Connected</span>
            <h3>Follow the mission in real time</h3>
          </div>
          <p>
            NASA posts launch coverage, breaking discoveries, and crew updates
            across all platforms. Following multiple accounts gives you the
            most complete picture of what is happening.
          </p>
        </div>
        <div className="hero__actions">
          <a
            href="https://www.nasa.gov/social-media/"
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            NASA Official Social Page
          </a>
          <Link href="/space-news" className="button button--ghost">
            Space News Feed
          </Link>
        </div>
      </section>

      <PublicFooter
        title="NasaEmployees.com"
        text="This is an unofficial fan directory. All social media links point to official NASA-verified accounts."
      />
    </main>
  );
}
