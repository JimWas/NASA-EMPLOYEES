import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Curiosity Rover & Sky Crane: Technical Breakdown",
  description: "Explore Curiosity piece by piece—from its rocker-bogie wheels and science instruments to the flying Sky Crane that lowered the rover onto Mars.",
  path: "/curiosity-rover-sky-crane",
  image: "/images/curiosity-sky-crane-hero.webp",
});

const landingSequence = [
  ["01", "Atmospheric entry", "The aeroshell meets Mars at about 5.9 km/s, using drag and its heat shield to shed most of the spacecraft’s energy."],
  ["02", "Supersonic parachute", "A 21.5-meter disk-gap-band parachute deploys while the vehicle is still moving faster than sound."],
  ["03", "Radar lock", "The heat shield drops away, exposing a Ka-band radar that measures altitude and velocity above the landing site."],
  ["04", "Powered descent", "The backshell separates. Eight throttleable engines slow the descent stage and steer it toward a safe touchdown point."],
  ["05", "Sky Crane", "At roughly 18.6 meters, Curiosity descends on three bridles while its wheels unfold into landing position."],
  ["06", "Touchdown & flyaway", "The wheels take the rover’s weight. Cables are cut, and the descent stage climbs away to crash at a safe distance."],
] as const;

const roverSystems = [
  ["The body", "Warm Electronics Box", "Curiosity’s structural core protects computers, power distribution, and instruments from Mars’s cold and dust."],
  ["The legs", "Rocker-bogie suspension", "Six independently driven wheels and a passive linkage keep the chassis comparatively level over rocks and trenches."],
  ["The eyes", "Remote sensing mast", "At about 2.1 meters high, the mast carries Mastcam, ChemCam, navigation cameras, and weather sensors."],
  ["The hand", "Five-joint robotic arm", "A 2.1-meter arm places a drill, camera, spectrometer, brush, and sample-processing hardware against Martian targets."],
  ["The heart", "MMRTG power", "A radioisotope generator supplied about 110 watts at the start of the mission and continues working through day, night, and winter."],
  ["The brain", "Dual flight computers", "Two radiation-hardened RAD750 computers provide a primary and backup command system for surface operations."],
] as const;

const instruments = [
  ["Mastcam", "Color and stereo imaging"],
  ["ChemCam", "Laser spectroscopy at a distance"],
  ["APXS", "Elemental chemistry by X-ray"],
  ["MAHLI", "Hand-lens close-up imaging"],
  ["CheMin", "Mineral identification by diffraction"],
  ["SAM", "Organic compounds and atmospheric gases"],
  ["RAD", "Surface radiation environment"],
  ["DAN", "Subsurface hydrogen and water clues"],
  ["REMS", "Weather and ultraviolet monitoring"],
  ["MARDI", "Descent imaging during landing"],
] as const;

export default async function CuriosityRoverSkyCranePage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--curiosity">
      <PublicHeader eyebrow="Mars Engineering Field Guide" title="Curiosity & Sky Crane" links={content.site.nav} />

      <section className="curiosity-hero">
        <Image
          src="/images/curiosity-sky-crane-hero.webp"
          alt="Concept visualization of the Curiosity rover suspended beneath its powered descent stage during the Sky Crane maneuver on Mars"
          fill
          priority
          sizes="100vw"
          className="curiosity-hero__image"
        />
        <div className="curiosity-hero__shade" aria-hidden="true" />
        <div className="curiosity-hero__copy">
          <span className="curiosity-kicker">MSL / GALE CRATER / SOL 0</span>
          <h2>Curiosity,<br />piece by piece.</h2>
          <p>Inside the one-ton science rover—and the rocket-powered Sky Crane that became part spacecraft, part landing gear, then flew away forever.</p>
          <div className="curiosity-hero__actions">
            <Link href="#anatomy" className="button button--primary">Explore the Rover</Link>
            <Link href="#landing" className="button button--ghost">Replay the Landing</Link>
          </div>
        </div>
        <dl className="curiosity-hero__stats">
          <div><dt>LANDED MASS</dt><dd>899 <small>kg</small></dd></div>
          <div><dt>SCIENCE INSTRUMENTS</dt><dd>10</dd></div>
          <div><dt>SKY CRANE BRIDLE</dt><dd>7.5 <small>m</small></dd></div>
          <div><dt>TOUCHDOWN SPEED</dt><dd>0.75 <small>m/s</small></dd></div>
        </dl>
        <span className="curiosity-hero__caption">AI-generated engineering visualization • Not a historical photograph</span>
      </section>

      <section className="curiosity-thesis">
        <span className="curiosity-kicker curiosity-kicker--dark">THE SYSTEM, NOT JUST THE ROVER</span>
        <h3>To land Curiosity, engineers briefly turned the rover and its descent stage into one flying machine.</h3>
        <div>
          <p>Airbags had worked for smaller Mars rovers, but an 899-kilogram laboratory was too large for that approach. A traditional legged lander would add ramps, structure, and a difficult drive-off sequence.</p>
          <p>The Sky Crane inverted the problem. It used Curiosity’s own wheels as landing gear, placed the rover directly on the surface, and kept rocket exhaust farther from the instruments.</p>
        </div>
      </section>

      <section className="curiosity-architecture" aria-labelledby="architecture-title">
        <div className="curiosity-section-heading">
          <span className="curiosity-kicker">01 / FLIGHT ARCHITECTURE</span>
          <h3 id="architecture-title">Four machines. One trip to the surface.</h3>
        </div>
        <div className="curiosity-stage-grid">
          <article><span>01</span><strong>Cruise stage</strong><p>Power, communications, navigation, thermal control, and trajectory corrections during the flight from Earth.</p><b>539 kg fueled</b></article>
          <article><span>02</span><strong>Aeroshell</strong><p>Heat shield, backshell, and parachute protect and decelerate the spacecraft through the Martian atmosphere.</p><b>4.5 m diameter</b></article>
          <article><span>03</span><strong>Descent stage</strong><p>Radar, computers, hydrazine tanks, and eight engines control the final powered flight above the ground.</p><b>390 kg propellant</b></article>
          <article><span>04</span><strong>Curiosity rover</strong><p>The mobile laboratory arrives wheels-down, ready to communicate, drive, image, drill, and analyze.</p><b>899 kg landed</b></article>
        </div>
      </section>

      <section className="curiosity-video" id="landing" aria-labelledby="landing-title">
        <div className="curiosity-video__copy">
          <span className="curiosity-kicker">02 / WATCH THE MECHANISM</span>
          <h3 id="landing-title">The final handoff</h3>
          <p>The descent stage holds a steady vertical speed while a winch pays out three load-bearing bridles. The rover’s wheels unfold, the suspension becomes the landing gear, and touchdown is detected through a change in engine demand.</p>
          <p>After the rover confirms weight-on-wheels, pyrotechnic cutters sever the bridles and electrical umbilical. The stage immediately pitches away and spends its remaining propellant reaching a safe crash site.</p>
        </div>
        <figure className="curiosity-video__frame">
          <video controls playsInline preload="metadata" poster="/images/curiosity-sky-crane-hero.webp">
            <source src="/videos/curiosity-sky-crane.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption><span>SKY CRANE SEQUENCE</span><span>00:10 • SUPPLIED ANIMATION</span></figcaption>
        </figure>
      </section>

      <section className="curiosity-sequence" aria-labelledby="sequence-title">
        <div className="curiosity-section-heading curiosity-section-heading--light">
          <span className="curiosity-kicker">03 / ENTRY, DESCENT & LANDING</span>
          <h3 id="sequence-title">From 5.9 kilometers per second to wheels stopped.</h3>
        </div>
        <div className="curiosity-sequence__track">
          {landingSequence.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><i aria-hidden="true" /><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="curiosity-anatomy" id="anatomy" aria-labelledby="anatomy-title">
        <div className="curiosity-section-heading">
          <span className="curiosity-kicker">04 / ROVER ANATOMY</span>
          <h3 id="anatomy-title">A field laboratory built to move.</h3>
          <p>Curiosity combines the mobility of a rover, the reach of a robotic arm, and laboratory instruments that would normally fill a room.</p>
        </div>
        <figure className="curiosity-exploded">
          <Image
            src="/images/curiosity-rover-exploded-concept.webp"
            alt="Stylized exploded concept illustration of Curiosity rover components"
            width={2400}
            height={1309}
            sizes="(max-width: 760px) 100vw, 1400px"
          />
          <figcaption>AI-generated concept illustration supplied with the research • Component positions and embedded labels are illustrative, not a technical drawing</figcaption>
        </figure>
        <div className="curiosity-system-grid">
          {roverSystems.map(([eyebrow, title, text], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")} / {eyebrow}</span><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="curiosity-science" aria-labelledby="science-title">
        <div className="curiosity-science__intro">
          <span className="curiosity-kicker">05 / SCIENCE PAYLOAD</span>
          <h3 id="science-title">Ten instruments.<br />One central question.</h3>
          <p>Could ancient Mars have supported microbial life? Curiosity reads the planet from orbit-scale context down to minerals, molecules, radiation, and weather.</p>
        </div>
        <div className="curiosity-instruments">
          {instruments.map(([name, purpose], index) => (
            <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><p>{purpose}</p></article>
          ))}
        </div>
      </section>

      <section className="curiosity-crane" aria-labelledby="crane-title">
        <div className="curiosity-section-heading curiosity-section-heading--light">
          <span className="curiosity-kicker">06 / SKY CRANE UNDER THE HOOD</span>
          <h3 id="crane-title">A disposable precision aircraft.</h3>
        </div>
        <div className="curiosity-crane__diagram">
          <div className="curiosity-crane__core"><span>DESCENT<br />STAGE</span><i /></div>
          <article><span>PROPULSION</span><strong>8 × MR-80B engines</strong><p>Four canted pairs throttle to brake, hover, translate, and fly away.</p></article>
          <article><span>NAVIGATION</span><strong>Ka-band radar</strong><p>Six antenna beams measure range and velocity relative to the ground.</p></article>
          <article><span>LOWERING</span><strong>3 bridles + umbilical</strong><p>A powered winch lowers the rover while maintaining data and electrical connections.</p></article>
          <article><span>SEPARATION</span><strong>Cut, climb, dispose</strong><p>Touchdown releases the suspended load; cutters fire and the stage diverts away.</p></article>
        </div>
      </section>

      <section className="curiosity-decision">
        <div>
          <span className="curiosity-kicker curiosity-kicker--dark">THE DESIGN DECISION</span>
          <h3>Why not airbags?</h3>
          <p>Airbags must survive impact while protecting the payload and then settle in a safe orientation. At Curiosity’s scale, their volume, strength, and rebound loads became impractical.</p>
        </div>
        <div>
          <span className="curiosity-kicker curiosity-kicker--dark">THE PAYOFF</span>
          <h3>Why wheels-down?</h3>
          <p>No landing legs. No deployment ramp. No drive-off maneuver. The rover touched Mars already in its surface configuration and began operating from the place it landed.</p>
        </div>
      </section>

      <section className="curiosity-sources">
        <span className="curiosity-kicker">PRIMARY REFERENCES</span>
        <h3>Go deeper into the engineering.</h3>
        <div>
          <a href="https://www.jpl.nasa.gov/news/press_kits/MSLLanding.pdf" target="_blank" rel="noreferrer">JPL • MSL Landing Press Kit ↗</a>
          <a href="https://science.nasa.gov/mission/msl-curiosity/" target="_blank" rel="noreferrer">NASA Science • Curiosity Mission ↗</a>
          <a href="https://ntrs.nasa.gov/api/citations/20100021927/downloads/20100021927.pdf" target="_blank" rel="noreferrer">NASA NTRS • Sample Acquisition System ↗</a>
          <a href="https://ntrs.nasa.gov/api/citations/20140003460/downloads/20140003460.pdf" target="_blank" rel="noreferrer">NASA NTRS • Ground Contact Model ↗</a>
        </div>
        <p>This field guide synthesizes the supplied technical research with NASA and JPL source material. Values are rounded for readability.</p>
      </section>

      <section className="curiosity-closing">
        <span className="curiosity-kicker">THE LASTING LEGACY</span>
        <h3>The wildest part worked exactly once—then became the blueprint.</h3>
        <p>Curiosity landed in Gale Crater on August 6, 2012. The same basic Sky Crane architecture later delivered Perseverance, proving that a daring one-time maneuver could become a repeatable way to place heavy rovers on Mars.</p>
        <Link href="#landing" className="button button--primary">Watch the Landing Again</Link>
      </section>

      <PublicFooter title="NASA Employees" text="Exploring the machines, people, and decisions that make the impossible operational." />
    </main>
  );
}
