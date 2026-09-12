import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "The FOIA Files: NASA Request 26-00719-F-JSC",
  description: "A documented look at a NASA FOIA request about the Salyut 7 retrieval theory, NASA's no-records determination, and what the orbital mechanics say.",
  path: "/foia-requests",
});

const events = [
  ["FEB 1985", "Salyut 7 loses power and ground contact, beginning an uncontrolled drift."],
  ["APR 29–MAY 6", "STS-51B flies Spacelab 3 in a 57°-inclination orbit."],
  ["JUN 6–8", "Soyuz T-13 launches, docks manually, and begins restoring Salyut 7."],
  ["JUN 17–24", "STS-51G flies communications satellites and Spartan 1 at 28.45° inclination."],
] as const;

export default async function FoiaRequestsPage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--foia-files">
      <PublicHeader eyebrow="Public Records Archive" title="The FOIA Files" links={content.site.nav} />

      <section className="foia-files-hero">
        <Image
          src="/images/foia-salyut7-shuttle-hero.jpg"
          alt="Concept illustration of a Space Shuttle approaching the disabled Salyut 7 space station above Earth"
          fill
          priority
          sizes="100vw"
          className="foia-files-hero__image"
        />
        <div className="foia-files-hero__shade" aria-hidden="true" />
        <div className="foia-files-hero__copy">
          <span className="foia-files-kicker">CASE FILE 001 • NASA • CLOSED</span>
          <h2>Did NASA consider using a Space Shuttle to retrieve Salyut 7?</h2>
          <p>A request built around a Cold War spaceflight theory, NASA&apos;s unusually fast no-records determination, and the difference between an archival result and an engineering verdict.</p>
          <div className="foia-files-hero__actions">
            <a className="button button--primary" href="/documents/foia-26-00719-f-jsc-initial-determination-redacted.pdf" target="_blank">Read the redacted determination ↗</a>
            <Link className="button button--ghost" href="#verdict">Jump to the verdict</Link>
          </div>
        </div>
        <aside className="foia-files-status" aria-label="FOIA case summary">
          <span>INITIAL DETERMINATION</span>
          <strong>NO RESPONSIVE<br />RECORDS</strong>
          <dl>
            <div><dt>Tracking</dt><dd>26-00719-F-JSC</dd></div>
            <div><dt>Requested</dt><dd>April 11, 2026</dd></div>
            <div><dt>Determined</dt><dd>April 15, 2026</dd></div>
            <div><dt>Search began</dt><dd>April 15, 2026</dd></div>
          </dl>
        </aside>
        <span className="foia-files-hero__caption">AI-generated visualization of an unverified theory • Not a historical photograph</span>
      </section>

      <section className="foia-files-thesis" id="verdict">
        <span>THE SHORT ANSWER</span>
        <h3>The response neither confirms the theory nor fully tests it.</h3>
        <p>NASA found no responsive records in the two repositories and keyword combinations named in its letter. That is meaningful negative evidence. It is not proof that no one in NASA, the military, or the intelligence community ever discussed the idea. Separately, the actual Shuttle missions&apos; orbital planes, propulsion limits, payloads, and timing make a literal capture extraordinarily implausible.</p>
      </section>

      <section className="foia-files-timeline" aria-labelledby="foia-timeline-title">
        <div className="foia-files-heading">
          <span className="foia-files-kicker">THE 1985 WINDOW</span>
          <h3 id="foia-timeline-title">The dates overlap. The orbits do not.</h3>
        </div>
        <div className="foia-files-timeline__track">
          {events.map(([date, text]) => <article key={date}><time>{date}</time><i /><p>{text}</p></article>)}
        </div>
      </section>

      <section className="foia-files-request" aria-labelledby="request-title">
        <div className="foia-files-heading">
          <span className="foia-files-kicker">THE REQUEST</span>
          <h3 id="request-title">A good first request—with room for a second pass.</h3>
        </div>
        <div className="foia-files-request__grid">
          <article>
            <span>WHAT WORKED</span>
            <ul>
              <li>Named STS-51B and STS-51G and supplied a January–July 1985 window.</li>
              <li>Asked for identifiable record types: reports, internal communications, debriefs, and planning documents.</li>
              <li>Specified orbital tracking, retrieval, proximity operations, Salyut 7, and NASA–DoD communications.</li>
              <li>Addressed fees, partial denials, exemptions, and appeal rights.</li>
            </ul>
          </article>
          <article>
            <span>WHAT LIMITED THE SEARCH</span>
            <ul>
              <li>“All records” was broad, but no offices, programs, record systems, or individual custodians were named.</li>
              <li>The terminology did not include likely variants such as DOS-6, Salut 7, intercept, rendezvous, recovery, salvage, or inspection.</li>
              <li>The theory could implicate records outside NASA, especially defense, intelligence, diplomatic, or National Archives holdings.</li>
              <li>The request paired each mission term with topic terms, which may miss records that discussed the station without naming a flight.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="foia-files-response" aria-labelledby="response-title">
        <div className="foia-files-response__copy">
          <span className="foia-files-kicker">NASA&apos;S FORMAL ANSWER</span>
          <h3 id="response-title">A defined search, not a government-wide conclusion.</h3>
          <p>The determination says NASA searched the Shuttle Knowledge Console and NASA Technical Reports Server. It combined “STS-51B” or “STS-51G” with “foreign,” “satellite retrieval,” “proximity operations,” and “Salyut-7.” No responsive records were located.</p>
          <p>The request was received April 13; the searches began April 15; and the letter is dated April 15. That two-day path is consistent with a focused archive search. The letter does not describe searches of Headquarters executive files, JSC program-office records, Mission Operations holdings, named custodians, DoD liaison files, or records held by another agency.</p>
          <div className="foia-files-response__note"><strong>Important distinction</strong><span>No FOIA exemption was used here. NASA said it found nothing responsive in the search it described; it did not say records were found and withheld.</span></div>
        </div>
        <figure className="foia-files-document">
          <div className="foia-files-document__image">
            <Image src="/images/foia-26-00719-determination-redacted.png" alt="First page of NASA FOIA determination 26-00719-F-JSC with postal address permanently redacted" fill sizes="(max-width: 900px) 90vw, 42vw" />
          </div>
          <figcaption><span>3-page initial determination</span><a href="/documents/foia-26-00719-f-jsc-initial-determination-redacted.pdf" target="_blank">Open redacted PDF ↗</a></figcaption>
        </figure>
      </section>

      <section className="foia-files-mechanics" aria-labelledby="mechanics-title">
        <div className="foia-files-heading foia-files-heading--light">
          <span className="foia-files-kicker">THE ORBITAL-MECHANICS CHECK</span>
          <h3 id="mechanics-title">The literal capture scenario runs into a wall of delta-v.</h3>
          <p>This calculation is an inference from NASA&apos;s published mission inclinations and Shuttle propulsion data—not a statement contained in the FOIA response.</p>
        </div>
        <div className="foia-files-orbits">
          <article><span>SALYUT 7</span><strong>51.6°</strong><p>orbital inclination</p></article>
          <article><span>STS-51B</span><strong>57.0°</strong><p>5.4° plane mismatch</p></article>
          <article><span>STS-51G</span><strong>28.45°</strong><p>23.15° plane mismatch</p></article>
        </div>
        <div className="foia-files-equation">
          <div><span>STS-51B PLANE CHANGE</span><strong>≈ 725 m/s</strong><small>2v sin(Δi/2), using ≈7.7 km/s orbital speed</small></div>
          <b>VS.</b>
          <div><span>SHUTTLE OMS CAPABILITY</span><strong>≈ 305 m/s</strong><small>published total delta velocity with a 65,000-lb payload</small></div>
        </div>
        <p className="foia-files-mechanics__conclusion">The estimated plane change alone exceeds the cited OMS budget by more than two times—before rendezvous, capture, departure, and landing requirements. STS-51B also carried Spacelab 3 in its payload bay. STS-51G&apos;s plane mismatch was far larger. Observation or contingency discussion is a different, less demanding claim, but this response supplies no evidence for it.</p>
      </section>

      <section className="foia-files-meaning" aria-labelledby="meaning-title">
        <div className="foia-files-heading">
          <span className="foia-files-kicker">WHAT I THINK</span>
          <h3 id="meaning-title">A fascinating lead, but not a substantiated operation.</h3>
        </div>
        <div className="foia-files-meaning__grid">
          <article><span>SUPPORTED</span><p>NASA performed the specific repository and keyword searches described in its letter and reported no responsive records.</p></article>
          <article><span>NOT ESTABLISHED</span><p>The response does not establish that every relevant NASA office—or any DoD, intelligence, diplomatic, or archival system—was searched.</p></article>
          <article><span>ENGINEERING VIEW</span><p>Using either named mission to physically capture Salyut 7 is inconsistent with the available plane-change budget and mission configuration.</p></article>
          <article><span>BOTTOM LINE</span><p>The documentary theory should remain labeled unverified. The strongest next step is a series of smaller, custodian-specific requests.</p></article>
        </div>
      </section>

      <section className="foia-files-next" aria-labelledby="next-title">
        <div>
          <span className="foia-files-kicker">NEXT SEARCH PATH</span>
          <h3 id="next-title">Turn one broad theory into several narrow searches.</h3>
        </div>
        <ol>
          <li><b>01</b><span><strong>NASA Headquarters + JSC</strong> Name the Shuttle Program, Flight Design and Dynamics, Mission Operations, and DoD-liaison custodians.</span></li>
          <li><b>02</b><span><strong>Expand the vocabulary</strong> Search Salyut 7, Salyut-7, Salut 7, DOS-6, intercept, rendezvous, retrieval, recovery, salvage, inspection, and foreign orbital object.</span></li>
          <li><b>03</b><span><strong>Separate the agencies</strong> Request potentially responsive records directly from defense, intelligence, diplomatic, and archival custodians rather than expecting NASA to hold them.</span></li>
        </ol>
      </section>

      <section className="foia-files-sources">
        <span className="foia-files-kicker">PRIMARY SOURCES &amp; NOTES</span>
        <p>The case analysis uses the supplied request email, NASA&apos;s April 15 determination, and NASA&apos;s follow-up email. Orbital data and mission context come from NASA&apos;s <a href="https://www.nasa.gov/wp-content/uploads/2023/04/1985.pdf?emrc=f61c57" target="_blank" rel="noreferrer">1985 chronology</a>, <a href="https://www.nasa.gov/mission/sts-51g/" target="_blank" rel="noreferrer">STS-51G mission record</a>, <a href="https://ntrs.nasa.gov/api/citations/19950016829/downloads/19950016829.pdf" target="_blank" rel="noreferrer">Salyut history</a>, <a href="https://ntrs.nasa.gov/api/citations/19990041784/downloads/19990041784.pdf" target="_blank" rel="noreferrer">Soviet mission chronology</a>, and <a href="https://ntrs.nasa.gov/citations/19850008634" target="_blank" rel="noreferrer">Shuttle OMS technical data</a>. Calculations are approximate and clearly identified as analysis.</p>
      </section>

      <PublicFooter title={content.footer.title} text={content.footer.text} />
    </main>
  );
}
