import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Wernher von Braun: NASA Significance and Space Legacy",
  description:
    "A clear-eyed account of Wernher von Braun’s role in Explorer 1, Marshall Space Flight Center, Saturn V, and Apollo—and the human cost that makes his legacy inseparable from Nazi Germany and forced labor.",
  path: "/wernher-von-braun",
  image: "/images/von-braun-saturn-ib.jpg",
});

const nasaImage = (id: string) => `https://images.nasa.gov/details/${id}`;

function ArchiveFigure({
  src,
  alt,
  caption,
  nasaId,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  nasaId: string;
  className?: string;
}) {
  return (
    <figure className={`vb-figure ${className}`}>
      <div className="vb-figure__image">
        <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 720px" className="cover-image" />
      </div>
      <figcaption>
        <span>{caption}</span>
        <a href={nasaImage(nasaId)} target="_blank" rel="noreferrer">NASA image {nasaId} ↗</a>
      </figcaption>
    </figure>
  );
}

export default async function WernherVonBraunPage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--vonbraun">
      <PublicHeader eyebrow="NASA History" title="Wernher von Braun" links={content.site.nav} />

      <section className="vb-hero">
        <Image
          src="/images/von-braun-saturn-ib.jpg"
          alt="Wernher von Braun in profile beside a Saturn IB rocket at Kennedy Space Center in 1968"
          fill
          priority
          sizes="100vw"
          className="vb-hero__image"
        />
        <div className="vb-hero__shade" />
        <div className="vb-hero__copy">
          <span className="vb-kicker">The space legacy • 1912–1977</span>
          <h2>The engineer who helped take America to the Moon—and the legacy history cannot simplify.</h2>
          <p>
            Wernher von Braun turned large rocket programs into working national systems. He also built his early career inside Nazi Germany’s weapons program, whose V-2 production relied on brutal forced labor. Both truths belong in the same record.
          </p>
          <div className="vb-hero__actions">
            <Link href="#legacy" className="button button--primary">Read the Full Legacy</Link>
            <Link href="#reckoning" className="button button--ghost">The Moral Reckoning</Link>
          </div>
        </div>
        <div className="vb-hero__stamp">ARCHIVE / 01</div>
        <a className="vb-hero__credit" href={nasaImage("6863092")} target="_blank" rel="noreferrer">NASA image 6863092 ↗</a>
      </section>

      <section className="vb-fact-rail" aria-label="Wernher von Braun milestones">
        <div><strong>1958</strong><span>Explorer 1 launches</span></div>
        <div><strong>1960–70</strong><span>First director of Marshall</span></div>
        <div><strong>363 FT</strong><span>Saturn V height</span></div>
        <div><strong>1969</strong><span>Apollo 11 reaches the Moon</span></div>
      </section>

      <section className="vb-opening" id="legacy">
        <div className="vb-opening__heading">
          <span className="vb-kicker vb-kicker--ink">01 / Why he mattered at NASA</span>
          <h3>A builder of rockets—and of the organizations required to fly them.</h3>
        </div>
        <div className="vb-opening__body">
          <p className="vb-dropcap">
            Von Braun’s greatest NASA contribution was not a single engine or drawing. It was his ability to align propulsion, structures, guidance, testing, contractors, budgets, and people around one unforgiving objective: a launch vehicle that worked as a complete system.
          </p>
          <p>
            As the first director of NASA’s Marshall Space Flight Center, he led the team responsible for the Saturn launch vehicles. His engineers pushed hardware through full-scale testing and embraced “all-up” flight tests—testing complete stages together—to compress the schedule without surrendering systems discipline.
          </p>
        </div>
      </section>

      <section className="vb-two-truths" aria-labelledby="two-truths-title">
        <div className="vb-two-truths__title">
          <span className="vb-kicker">A legacy held in tension</span>
          <h3 id="two-truths-title">Two truths. Neither cancels the other.</h3>
        </div>
        <article>
          <span>THE ACHIEVEMENT</span>
          <h4>He helped create the launch systems that made the American space age possible.</h4>
          <p>Explorer 1, Mercury-Redstone, the Saturn family, Apollo, and early Skylab planning all bear the imprint of teams he led or helped shape.</p>
        </article>
        <article className="vb-two-truths__dark">
          <span>THE ACCOUNTABILITY</span>
          <h4>His expertise came from a Nazi weapons program built amid terror and forced labor.</h4>
          <p>He joined the Nazi Party and the SS. Thousands of prisoners died producing V-2 weapons at Mittelwerk. Technical brilliance does not erase complicity or suffering.</p>
        </article>
      </section>

      <section className="vb-timeline" aria-labelledby="timeline-title">
        <div className="vb-section-heading">
          <span className="vb-kicker vb-kicker--ink">02 / A consequential chronology</span>
          <h3 id="timeline-title">From wartime rocketry to the lunar launch pad.</h3>
          <p>The arc is not a clean redemption story. It is a record of capability, ambition, institutional choices, and unresolved responsibility.</p>
        </div>
        <div className="vb-timeline__grid">
          <ArchiveFigure
            src="/images/von-braun-surrender.jpg"
            alt="Wernher von Braun surrendering to United States Army personnel in May 1945"
            caption="May 1945: von Braun, his arm in a cast, surrenders to U.S. forces."
            nasaId="6517789"
          />
          <article><time>1945</time><h4>Operation Paperclip</h4><p>The United States moved von Braun and other German specialists into its rocket program. Officials minimized or sanitized parts of their Nazi records, prioritizing strategic advantage as the Cold War began.</p></article>

          <article><time>31 JAN 1958</time><h4>Explorer 1</h4><p>A Juno I launched America’s first satellite. The mission answered Sputnik and returned data that led to the discovery of the Van Allen radiation belts.</p></article>
          <ArchiveFigure
            src="/images/von-braun-explorer-1.jpg"
            alt="William Pickering, James Van Allen, and Wernher von Braun holding a model of Explorer 1"
            caption="Pickering, Van Allen, and von Braun celebrate Explorer 1."
            nasaId="5663627"
          />

          <ArchiveFigure
            src="/images/von-braun-kennedy.jpg"
            alt="Wernher von Braun explains Saturn launch vehicle hardware to President John F Kennedy in 1962"
            caption="Von Braun briefs President Kennedy and Vice President Johnson, 1962."
            nasaId="9801806"
          />
          <article><time>1960–1962</time><h4>Marshall and the lunar decision</h4><p>Von Braun became Marshall’s first director in 1960. His team ultimately accepted lunar-orbit rendezvous, the architecture that let a smaller lander descend while the command module remained in orbit.</p></article>

          <article><time>16 JUL 1969</time><h4>Saturn V launches Apollo 11</h4><p>The 363-foot vehicle produced roughly 7.5 million pounds of thrust at liftoff. Its success carried three astronauts toward the first human landing on another world.</p></article>
          <ArchiveFigure
            src="/images/von-braun-saturn-v-launch.jpg"
            alt="Apollo 11 Saturn V rocket lifting off from Kennedy Space Center in 1969"
            caption="Apollo 11 begins its journey to the Moon."
            nasaId="6900540"
          />
        </div>
      </section>

      <section className="vb-lineage" aria-labelledby="lineage-title">
        <div className="vb-lineage__copy">
          <span className="vb-kicker">03 / Rocket lineage</span>
          <h3 id="lineage-title">A ladder of capability.</h3>
          <p>Each program taught the next one how to manage greater thrust, more complex staging, and higher stakes. The result was not one giant leap in engineering, but a disciplined sequence of increasingly complete systems.</p>
          <div className="vb-lineage__steps">
            <div><strong>REDSTONE</strong><span>Ballistic missile → Mercury launcher</span></div>
            <div><strong>JUNO I</strong><span>Explorer 1 reaches orbit</span></div>
            <div><strong>SATURN I / IB</strong><span>Large clustered stages mature</span></div>
            <div><strong>SATURN V</strong><span>Humans sent toward the Moon</span></div>
          </div>
        </div>
        <ArchiveFigure
          src="/images/von-braun-redstone.jpg"
          alt="A Redstone rocket launches from Cape Canaveral in 1954"
          caption="A Redstone rocket rises from Cape Canaveral, 1954."
          nasaId="5800039"
          className="vb-figure--tower"
        />
      </section>

      <section className="vb-launch-break">
        <Image src="/images/von-braun-saturn-v-launch.jpg" alt="Saturn V launching Apollo 11 through a field of bright exhaust" fill sizes="100vw" className="cover-image" />
        <div className="vb-launch-break__shade" />
        <blockquote>“The rocket worked because an immense human system worked first.”</blockquote>
        <div className="vb-launch-break__numbers">
          <div><strong>6.5M LB</strong><span>vehicle mass at ignition</span></div>
          <div><strong>7.5M LBF</strong><span>liftoff thrust</span></div>
          <div><strong>3 STAGES</strong><span>integrated for lunar flight</span></div>
        </div>
      </section>

      <section className="vb-method" aria-labelledby="method-title">
        <div className="vb-section-heading">
          <span className="vb-kicker vb-kicker--ink">04 / The Marshall method</span>
          <h3 id="method-title">The lasting lesson was systems engineering.</h3>
        </div>
        <div className="vb-method__grid">
          <article><span>01</span><h4>Keep leaders close to hardware</h4><p>Design reviews, test stands, factory floors, and flight data kept management connected to physical reality.</p></article>
          <article><span>02</span><h4>Test the whole machine</h4><p>“All-up” testing exposed interactions that isolated component tests could miss—and saved time in the race to the Moon.</p></article>
          <article><span>03</span><h4>Make interfaces visible</h4><p>Success depended on the boundaries between engines, stages, guidance, ground support, contractors, and mission operations.</p></article>
          <article><span>04</span><h4>Translate vision into milestones</h4><p>Ambition mattered because teams could convert it into testable hardware, schedules, and accountable decisions.</p></article>
        </div>
      </section>

      <section className="vb-public" aria-labelledby="public-title">
        <ArchiveFigure
          src="/images/von-braun-disney.jpg"
          alt="Wernher von Braun, Heinz Haber, and Willy Ley at Walt Disney Studios in 1954"
          caption="Von Braun with Heinz Haber and Willy Ley at Walt Disney Studios, 1954."
          nasaId="9605274"
          className="vb-figure--wide"
        />
        <div className="vb-public__copy">
          <span className="vb-kicker vb-kicker--ink">05 / Selling the future</span>
          <h3 id="public-title">He made spaceflight legible before NASA could make it real.</h3>
          <p>Articles in <em>Collier’s</em> and three Walt Disney television programs turned orbital stations, lunar travel, and Mars expeditions into visual, understandable systems for a mass audience.</p>
          <p>The 1955 broadcast <em>Man in Space</em> reportedly reached about 42 million viewers. That public storytelling helped move rocketry from a specialist pursuit into a national expectation.</p>
        </div>
      </section>

      <section className="vb-reckoning" id="reckoning" aria-labelledby="reckoning-title">
        <div className="vb-reckoning__label"><span>06</span><small>THE RECORD<br />CANNOT BE CROPPED</small></div>
        <div className="vb-reckoning__copy">
          <span className="vb-kicker">The moral reckoning</span>
          <h3 id="reckoning-title">The road to the Moon passed through Mittelbau-Dora.</h3>
          <p className="vb-reckoning__lead">V-2 rockets were produced underground at Mittelwerk by prisoners subjected to starvation, disease, beatings, executions, and lethal working conditions.</p>
          <div className="vb-reckoning__stat"><strong>≈20,000</strong><span>prisoners died in the Mittelbau-Dora camp complex, from roughly 60,000 people deported there.</span></div>
          <p>Von Braun was a Nazi Party member and SS officer. Historians debate the extent of his direct authority over labor conditions, but not that he knew forced labor was being used. A truthful account of his NASA legacy must name the victims and the American decisions that obscured this history.</p>
          <p>Remembering the achievement without the suffering is incomplete. Remembering the suffering does not require denying the engineering achievement. Ethical history has to hold both.</p>
        </div>
        <ArchiveFigure
          src="/images/von-braun-surrender.jpg"
          alt="Wernher von Braun after surrendering to United States forces in 1945"
          caption="Von Braun after surrendering to U.S. forces, May 1945."
          nasaId="6517789"
          className="vb-figure--reckoning"
        />
      </section>

      <section className="vb-beyond" aria-labelledby="beyond-title">
        <div className="vb-section-heading">
          <span className="vb-kicker vb-kicker--ink">07 / Beyond Apollo</span>
          <h3 id="beyond-title">The Moon was a milestone, not his finish line.</h3>
          <p>Von Braun advocated reusable spacecraft, orbital stations, long-duration laboratories, and human missions to Mars. Some proposals were too costly or premature; others anticipated the architecture of later programs.</p>
        </div>
        <div className="vb-beyond__gallery">
          <ArchiveFigure
            src="/images/von-braun-skylab.jpg"
            alt="Wernher von Braun inspecting a Skylab mockup in 1967"
            caption="Inspecting a Skylab mockup, 1967."
            nasaId="7653728"
          />
          <ArchiveFigure
            src="/images/von-braun-apollo-15.jpg"
            alt="Wernher von Braun watches the Apollo 15 launch through binoculars in 1971"
            caption="Watching Apollo 15 launch, 1971."
            nasaId="0302334"
          />
        </div>
      </section>

      <section className="vb-ledger">
        <div>
          <span className="vb-kicker">The legacy ledger</span>
          <h3>What endures</h3>
          <ul>
            <li>Saturn V and the engineering culture that made lunar missions possible</li>
            <li>Marshall Space Flight Center as a center of propulsion and systems expertise</li>
            <li>A model for turning long-range visions into staged, testable programs</li>
            <li>Public communication that made complex space systems understandable</li>
          </ul>
        </div>
        <div>
          <span className="vb-kicker">What must never be excused</span>
          <h3>What the record demands</h3>
          <ul>
            <li>Name the victims of Mittelbau-Dora and the conditions they endured</li>
            <li>Recognize von Braun’s Nazi Party and SS memberships</li>
            <li>Examine how Operation Paperclip concealed compromising histories</li>
            <li>Reject the idea that technological success suspends moral accountability</li>
          </ul>
        </div>
      </section>

      <section className="vb-sources" aria-labelledby="sources-title">
        <div><span className="vb-kicker vb-kicker--ink">Research desk</span><h3 id="sources-title">Continue into the archive.</h3></div>
        <div className="vb-sources__links">
          <a href="https://www.nasa.gov/history/story-of-explorer-1/" target="_blank" rel="noreferrer"><span>NASA History</span>Story of Explorer 1 ↗</a>
          <a href="https://www.nasa.gov/history/60-years-ago-nasa-decides-on-lunar-orbit-rendezvous-for-moon-landing/" target="_blank" rel="noreferrer"><span>NASA History</span>The Lunar-Orbit Rendezvous Decision ↗</a>
          <a href="https://www.pbs.org/wgbh/nova/sputnik/vonbraun.html" target="_blank" rel="noreferrer"><span>PBS / NOVA</span>A Tainted Legacy ↗</a>
          <a href="https://www.pbs.org/wgbh/americanexperience/features/chasing-moon-wernher-von-braun-and-nazis/" target="_blank" rel="noreferrer"><span>American Experience</span>Wernher von Braun and the Nazis ↗</a>
          <a href="https://ntrs.nasa.gov/api/citations/20100027316/downloads/20100027316.pdf" target="_blank" rel="noreferrer"><span>NASA Technical Reports</span>Remembering the Giants: F-1 Engine ↗</a>
          <a href="https://images.nasa.gov/search?q=Wernher%20von%20Braun&page=1&media=image" target="_blank" rel="noreferrer"><span>NASA Image Library</span>Wernher von Braun Archive ↗</a>
        </div>
        <p className="vb-sources__note">Research compiled from the supplied source document. Archival images courtesy of NASA. This site is independent and is not an official NASA publication.</p>
      </section>

      <PublicFooter title="NASA Employees" text="Remembering the people, systems, decisions, and consequences behind humanity’s journey into space." />
    </main>
  );
}
