import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Could the Space Shuttle Have Saved Skylab? — Case File 002",
  description: "A public-record reconstruction of NASA's real 1977–1979 plan to use the Space Shuttle and a Teleoperator Retrieval System to reboost or safely deorbit Skylab.",
  path: "/foia-requests/skylab-rescue",
  image: "/images/skylab-shuttle-boost-mission.jpg",
});

const timeline = [
  ["FEB 8, 1974", "Skylab 4 raises the station to a 269-by-283-mile orbit before the final crew departs."],
  ["FALL 1977", "Unexpected solar activity accelerates orbital decay; the projected lifetime collapses toward 1979."],
  ["MAR–JUN 1978", "Controllers wake Skylab after four dormant years and place it in a lower-drag attitude."],
  ["JUL 1978", "NASA awards Martin Marietta a $32 million contract to develop the Teleoperator Retrieval System."],
  ["DEC 19, 1978", "NASA cancels the reboost/deorbit mission after the station, Shuttle, and teleoperator schedules no longer align."],
  ["JUL 11, 1979", "Skylab breaks up over the Indian Ocean; debris reaches Western Australia."],
] as const;

const evidence = [
  ["CONFIRMED", "NASA publicly selected the Teleoperator Retrieval System for a Skylab reboost or controlled-deorbit mission."],
  ["FUNDED", "A $32 million development contract called for flight hardware delivery in September 1979."],
  ["TESTED ON ORBIT", "Controllers reactivated Skylab, verified surviving systems, and changed its attitude to extend orbital life."],
  ["PLANNED FOR REUSE", "A contractor study defined refurbishment kits, crew operations, payloads, and a path back to an occupied laboratory."],
] as const;

export default async function SkylabRescueCaseFile() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--skylab-file">
      <PublicHeader eyebrow="Public Records Archive" title="The FOIA Files" links={content.site.nav} />

      <nav className="case-file-switcher" aria-label="Case file navigation">
        <Link href="/foia-requests"><span>001</span>Salyut 7 retrieval theory</Link>
        <Link href="/foia-requests/skylab-rescue" aria-current="page"><span>002</span>Skylab rescue plan</Link>
      </nav>

      <section className="skylab-file-hero">
        <Image
          src="/images/skylab-shuttle-boost-mission.jpg"
          alt="NASA concept art showing a Space Shuttle deploying a propulsion vehicle to boost Skylab"
          fill
          priority
          sizes="100vw"
          className="skylab-file-hero__image"
        />
        <div className="skylab-file-hero__shade" aria-hidden="true" />
        <div className="skylab-file-hero__copy">
          <span className="skylab-file-kicker">CASE FILE 002 • PUBLIC ARCHIVE • CONFIRMED PLAN</span>
          <h2>Could the Space Shuttle have saved Skylab?</h2>
          <p>NASA built a real plan around a remotely piloted spacecraft, an early Shuttle flight, and a race against a station falling faster than expected.</p>
          <div className="skylab-file-hero__actions">
            <Link className="button button--primary" href="#verdict">Read the verdict</Link>
            <a className="button button--ghost" href="https://ntrs.nasa.gov/citations/19790011998" target="_blank" rel="noreferrer">Open the reuse study ↗</a>
          </div>
        </div>
        <aside className="skylab-file-docket" aria-label="Case file summary">
          <span>ARCHIVAL FINDING</span>
          <strong>YES—BUT<br />TIME WON</strong>
          <dl>
            <div><dt>Program</dt><dd>TRS</dd></div>
            <div><dt>Contract</dt><dd>$32 million</dd></div>
            <div><dt>Canceled</dt><dd>Dec. 19, 1978</dd></div>
            <div><dt>Reentry</dt><dd>July 11, 1979</dd></div>
          </dl>
        </aside>
        <span className="skylab-file-hero__caption">NASA concept artwork • Proposed Skylab boost mission • Public domain</span>
      </section>

      <section className="skylab-file-verdict" id="verdict">
        <span className="skylab-file-kicker">THE SHORT ANSWER</span>
        <h3>NASA did more than consider it. The agency studied, funded, and began preparing a rescue architecture.</h3>
        <p>“Save” had two stages: first, attach a propulsion vehicle and move Skylab into a higher storage orbit; later, send Shuttle crews back to inspect, refurbish, and reuse the laboratory. The concept was technically serious. It failed because the rescue vehicle and the Shuttle could not become operational before Skylab&apos;s shrinking orbital lifetime expired.</p>
      </section>

      <section className="skylab-file-evidence" aria-labelledby="evidence-title">
        <div className="skylab-file-heading">
          <span className="skylab-file-kicker">THE DOCUMENTARY RECORD</span>
          <h3 id="evidence-title">Four pieces of evidence turn a proposal into a program.</h3>
        </div>
        <div className="skylab-file-evidence__grid">
          {evidence.map(([label, text], index) => (
            <article key={label}><b>0{index + 1}</b><span>{label}</span><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="skylab-file-machine" aria-labelledby="machine-title">
        <div className="skylab-file-machine__copy">
          <span className="skylab-file-kicker">THE MACHINE</span>
          <h3 id="machine-title">A remote-controlled tug launched from the Shuttle.</h3>
          <p>The Teleoperator Retrieval System was not meant to haul the 169,000-pound station into the Shuttle. It was a reusable free-flying propulsion vehicle. An astronaut could steer it from the orbiter using television images, dock it to Skylab, and command a long burn.</p>
          <div className="skylab-file-specs">
            <div><strong>10.5 ft</strong><span>diameter</span></div>
            <div><strong>11 ft</strong><span>height</span></div>
            <div><strong>2</strong><span>TV cameras</span></div>
            <div><strong>6-DOF</strong><span>attitude control</span></div>
          </div>
          <p className="skylab-file-note">NASA&apos;s design used a central hydrazine propulsion core, optional propellant tanks, autonomous instructions, and manual Shuttle control. Its broader purpose included satellite inspection, stabilization, delivery, and retrieval.</p>
        </div>
        <div className="skylab-file-machine__steps" aria-label="Proposed mission sequence">
          <article><b>01</b><div><strong>DEPLOY</strong><p>Release the TRS from an early Shuttle&apos;s payload bay.</p></div></article>
          <article><b>02</b><div><strong>RENDEZVOUS</strong><p>Fly remotely toward Skylab using onboard guidance and television.</p></div></article>
          <article><b>03</b><div><strong>DOCK</strong><p>Attach at the station and establish a stable combined configuration.</p></div></article>
          <article><b>04</b><div><strong>DECIDE</strong><p>Raise Skylab for later reuse—or command a controlled Pacific reentry.</p></div></article>
        </div>
      </section>

      <section className="skylab-file-timeline" aria-labelledby="timeline-title">
        <div className="skylab-file-heading">
          <span className="skylab-file-kicker">THE CLOSING WINDOW</span>
          <h3 id="timeline-title">Engineering advanced. The calendar collapsed.</h3>
        </div>
        <div className="skylab-file-timeline__track">
          {timeline.map(([date, text]) => <article key={date}><time>{date}</time><i /><p>{text}</p></article>)}
        </div>
      </section>

      <section className="skylab-file-race" aria-labelledby="race-title">
        <div className="skylab-file-race__chart">
          <span>THE SCHEDULE THAT COULD NOT CLOSE</span>
          <div className="skylab-file-race__line"><i /><b style={{ left: "12%" }}>CANCEL<br /><small>DEC 1978</small></b><b style={{ left: "43%" }}>SKYLAB FALLS<br /><small>JUL 1979</small></b><b style={{ left: "50%" }}>TRS DELIVERY<br /><small>SEP 1979</small></b><b style={{ left: "92%" }}>STS-1<br /><small>APR 1981</small></b></div>
        </div>
        <div className="skylab-file-race__copy">
          <span className="skylab-file-kicker">WHY IT FAILED</span>
          <h3 id="race-title">The rescue hardware was due after the station was gone.</h3>
          <p>NASA&apos;s July 1978 contract targeted September 1979 for delivery of the flight hardware. By December, managers judged success unlikely because of uncertainties in Skylab&apos;s systems and lifetime, the Shuttle schedule, and TRS delivery. Skylab reentered two months before that hardware date. Columbia did not make the first Shuttle flight until April 1981—twenty-one months after Skylab fell.</p>
        </div>
      </section>

      <section className="skylab-file-reuse" aria-labelledby="reuse-title">
        <figure>
          <Image src="/images/skylab-departing-view.jpg" alt="Skylab photographed by its final departing crew in February 1974" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <figcaption>Skylab photographed by its final crew, Feb. 8, 1974 • NASA</figcaption>
        </figure>
        <div>
          <span className="skylab-file-kicker">WHAT “SAVED” MEANT</span>
          <h3 id="reuse-title">Not just preventing a crash—putting America&apos;s first station back to work.</h3>
          <p>McDonnell Douglas&apos;s eleven-month reuse study examined every major workshop subsystem, defined refurbishment and resupply kits, and proposed a Shuttle-tended rehabilitation phase. The concept treated Skylab as extra habitable volume for long Shuttle missions, with private quarters, exercise facilities, and existing experiments available to a visiting crew.</p>
          <p>Important obstacles remained. Skylab&apos;s docking system was built for Apollo, its communications needed replacement, aging systems required inspection, and the first Shuttle visits would have been rehabilitation missions—not an immediate return to routine occupation.</p>
          <a href="https://ntrs.nasa.gov/citations/19790011998" target="_blank" rel="noreferrer">Read NASA-CR-161187 ↗</a>
        </div>
      </section>

      <section className="skylab-file-decay" aria-labelledby="decay-title">
        <div>
          <span className="skylab-file-kicker">THE UNSEEN ADVERSARY</span>
          <h3 id="decay-title">Solar activity heated the atmosphere and pulled Skylab down.</h3>
          <p>Skylab&apos;s original lifetime estimates depended on forecasts of the Sun&apos;s 11-year activity cycle. Stronger-than-expected activity heated and expanded the upper atmosphere, increasing drag hundreds of miles above Earth. NASA&apos;s orbital analysis notes that long-range solar-flux values could not be predicted with acceptable confidence.</p>
          <p>Reorienting the station into the End-On-Velocity-Vector attitude reduced drag and added an estimated 3.5 months. It was an impressive intervention, but not enough to bridge the widening schedule gap.</p>
        </div>
        <figure>
          <Image src="/images/skylab-altitude-profile.jpg" alt="NASA chart showing Skylab orbital altitude declining from launch to impact" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <figcaption>Skylab orbital decay from launch to impact • NASA TM-78308</figcaption>
        </figure>
      </section>

      <section className="skylab-file-findings" aria-labelledby="findings-title">
        <div className="skylab-file-heading">
          <span className="skylab-file-kicker">CASE ASSESSMENT</span>
          <h3 id="findings-title">What the archive establishes—and what it does not.</h3>
        </div>
        <div className="skylab-file-findings__grid">
          <article><span>ESTABLISHED</span><p>The reboost/deorbit plan, TRS development contract, on-orbit reactivation, and Skylab reuse studies are documented in public NASA records.</p></article>
          <article><span>NEVER REACHED</span><p>No Shuttle launched toward Skylab, no TRS docked with it, and the first operational rescue objective was never demonstrated in flight.</p></article>
          <article><span>TERMINOLOGY</span><p>NASA called it a retrieval system, but the plan did not involve returning Skylab to Earth. The TRS itself was intended to be recoverable and reusable.</p></article>
          <article><span>VERDICT</span><p>The plan was credible enough to fund and develop. It was not close enough to operational readiness to beat the orbital-decay clock.</p></article>
        </div>
      </section>

      <section className="skylab-file-aftermath">
        <div className="skylab-file-aftermath__copy">
          <span className="skylab-file-kicker">THE FINAL ORBIT</span>
          <h3>NASA could influence where Skylab fell—but could no longer save it.</h3>
          <p>Controllers used attitude changes to select a final orbit that passed mostly over water, then commanded a slow tumble. Skylab broke apart lower than predicted, extending the debris footprint into sparsely populated Western Australia. No injuries were reported.</p>
        </div>
        <figure>
          <Image src="/images/skylab-ground-stations.jpg" alt="NASA chart showing the final Skylab debris footprint across the Indian Ocean and Australia" fill sizes="(max-width: 900px) 100vw, 46vw" />
          <figcaption>Predicted debris footprint for Skylab&apos;s final orbit • NASA</figcaption>
        </figure>
      </section>

      <section className="skylab-file-sources">
        <span className="skylab-file-kicker">PRIMARY SOURCES &amp; RESEARCH NOTES</span>
        <p>This independently researched case file is not a new FOIA request or a NASA determination. It is based on publicly available government records: NASA&apos;s <a href="https://www.nasa.gov/history/45-years-ago-skylab-reenters-earths-atmosphere/" target="_blank" rel="noreferrer">Skylab reentry history</a>; the March 1978 <a href="https://ntrs.nasa.gov/citations/19780011828" target="_blank" rel="noreferrer">Teleoperator Retrieval System announcement</a>; the December 1978 <a href="https://ntrs.nasa.gov/citations/19790011998" target="_blank" rel="noreferrer">Skylab Reuse Study</a>; the <a href="https://ntrs.nasa.gov/citations/19790011999" target="_blank" rel="noreferrer">reuse-study appendixes</a>; NASA&apos;s <a href="https://ntrs.nasa.gov/citations/19810005468" target="_blank" rel="noreferrer">orbital lifetime and decay analysis</a>; the official <a href="https://www.nasa.gov/wp-content/uploads/2023/04/1978.pdf" target="_blank" rel="noreferrer">1978 chronology</a>; and NASA&apos;s <a href="https://www.nasa.gov/mission/sts-1/" target="_blank" rel="noreferrer">STS-1 mission record</a>. Contemporary plans are described as plans, not as completed flight operations.</p>
      </section>

      <PublicFooter title={content.footer.title} text={content.footer.text} />
    </main>
  );
}
