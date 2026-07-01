# Changelog

All notable changes to NasaEmployees.com are recorded here, newest first.

---

## 2026-06-30

### Added
- **NASA Social Media directory** — complete listing of every official NASA account across X, Instagram, YouTube, Facebook, TikTok, LinkedIn, Snapchat, Flickr, Tumblr, SoundCloud, Twitch, GIPHY, Threads, Pinterest, Reddit, and Spotify
- **Programs & Divisions section** on social media page — groups telescopes, NASA en Español, education outreach, and agency operations accounts
- **Silver Snoopy Award page** — full history, award criteria, 7-criteria card grid, timeline from 1961, Apollo 10 feature, Charles Schulz section, and image gallery
- NASA en Español accounts (X, Instagram, Facebook, YouTube)
- Wallops Flight Facility added to NASA Centers
- Glenn Research Center Instagram added

### Fixed
- Mobile navigation rewritten from `<details>/<summary>` to hamburger + slide-in drawer — eliminates the 3-tap problem on touch devices
- What's New section layout and color variables corrected (title/subtitle stacking, dark background text colors)
- Footer site name font size locked down — was rendering at ~2rem+ due to CSS cascade
- NASA logo added beside site name in footer wordmark

---

## 2026-06-29

### Added
- **Unflown NASA Concepts page** — 10 vehicles across 4 categories (heavy lift, nuclear propulsion, reusable launch, crew return): Sea Dragon, Nova, Saturn V-NERVA, Project Orion, X-33 VentureStar, DC-X Delta Clipper, X-38 Crew Return Vehicle, HL-20 Personnel Launch System, Altair Lunar Lander, and Constellation Ares V

### Fixed
- Broken NASA CDN images replaced (X-33 and DC-X switched to Unsplash; NERVA, Project Orion, X-38 served locally from `/public/images/unflown/`)
- Vehicle card aspect ratio changed from 16:7 to 16:9
- Click-to-expand added to vehicle images (opens full-res in new tab)
- What's New section CSS block added — was missing entirely from `globals.css`
- Removed all em dashes site-wide

---

## 2026-06-26

### Added
- **Space News Feed page** — live articles from NASA, SpaceX, ESA, and more via the Spaceflight News API, with category filter pills
- OG / Twitter Card metadata added to all pages via shared `pageMeta()` helper

### Fixed
- Space News filter pill contrast on light section background
- Dark background override for NASA Logo History page social card

---

## 2026-06-18

### Added
- **NASA Logo History page** — hypothetical decade-by-decade redesign infographic spanning the Atomic Age to the Interstellar Era
- NASA Logo History added to Interactive nav, Discover More homepage block, and footer

---

## 2026-06-17

### Fixed
- ISS map tracker: added ISS logo icon, fixed unstable YouTube live stream URLs
- Build error: restored missing `links` prop on `PublicHeader`
- `PublicFooter` refactored to fetch global navigation dynamically — removes per-page `links` prop

---

## 2026-06-15

### Added
- **ISS Live Multi-Viewer** — real-time telemetry, crew data, and multiple live stream feeds
- Interactive ISS tracker map with real-time orbital position (Leaflet)

### Fixed
- Overlapping dropdown menus fixed using HTML `details name` attribute
- ISS Tracker consolidated into ISS Live page
- SSR ReferenceError in ISSTracker resolved

---

## 2026-06-15

### Changed
- Starship Orbit Simulator refactored to Flappy Bird–style mechanics with improved mobile UI

---

## 2026-05-26

### Fixed
- Starship Orbit Game mobile controls

---

## 2026-05-25

### Added
- **Starship Orbit Simulator** — guide a Starship through ascent waypoints to reach parking orbit

---

## 2026-05-24

### Added
- **Space Shuttle Missions archive page**
- Starship program page
- Audrey Montgomery standalone profile page

### Fixed
- X (Twitter) card metadata URLs

---

## 2026-05-20

### Added
- **Women at NASA page** — celebrates women across science, engineering, leadership, and spaceflight
- **Deep Space Echo game** — aim a signal toward distant worlds and see if it holds across the cosmos

---

## 2026-05-19

### Added
- **Future Mars Colony concept page**
- **South Pole Space Journey page**

---

## 2026-05-18

### Added
- **Europa Hopper Mission concept page**

---

## 2026-05-17

### Added
- **Space FAQs page** — plainspoken answers to weird space hypotheticals (hamburger resupply, hamster on Starship, etc.)
- **Mars Unity Mission concept page**

### Fixed
- Header dropdown clipping
- Condensed header navigation into dropdowns

---

## 2026-05-16

### Changed
- Header navigation condensed into dropdown groups

---

## 2026-05-14

### Added
- **ISS Docking Simulator** — guide a capsule into soft capture with thruster controls
- **Mars Relay AI Simulator** — simulate deep-space message delay and AI-assisted packet optimization

---

## 2026-05-13

### Added
- **What Astronauts Drink page** — how water, coffee, juice, and rehydrated drinks work in microgravity

---

## 2026-05-11

### Added
- Privacy policy page

### Fixed
- Footer navigation updated

---

## 2026-05-09

### Added
- **Honorary NASA Employees feature** — users can add themselves to the honorary crew with a dream role, persisted in Neon database
- Honorary crew featured on homepage

---

## 2026-05-08

### Added
- Official NASA employee profiles in the Faces of NASA gallery
- Sitemap and robots.txt routes

### Fixed
- SEO metadata updated
- Conflicting www redirect removed

---

## 2026-05-06

### Added
- Vercel Analytics

---

## 2026-05-05

### Changed
- Homepage section typography alignment
- Life at NASA and mission copy updated

---

## 2026-05-04

### Added
- **Audrey Montgomery employee spotlight page**
- Initial Next.js website launch
