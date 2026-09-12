import type { Metadata } from "next";
import Link from "next/link";
import { FoiaRequestTemplate } from "@/components/FoiaRequestTemplate";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "How to Submit a Freedom of Information Act Request to NASA",
  description: "A practical guide to finding the right NASA FOIA office, describing records precisely, handling fees, submitting a request, tracking it, and appealing a response.",
  path: "/nasa-foia-request-guide",
  image: "/images/og-nasa-foia.png",
});

const steps = [
  {
    number: "01",
    title: "Search before you request",
    text: "FOIA is for existing agency records that are not already public. Check NASA’s website, FOIA e-libraries, Technical Reports Server, History Office, and National Archives first.",
  },
  {
    number: "02",
    title: "Choose the office",
    text: "Send the request to the NASA component most likely to hold the records. If you are unsure—or need searches across multiple centers—send one request to NASA Headquarters and name every center involved.",
  },
  {
    number: "03",
    title: "Describe records, not questions",
    text: "Identify record types, missions, programs, offices, custodians, date ranges, report or contract numbers, and precise keywords. NASA does not have to create a new record, conduct research, or answer a question.",
  },
  {
    number: "04",
    title: "State fees clearly",
    text: "Give your requester category and either a maximum amount you will pay or a supported fee-waiver request. A waiver is based on public benefit—not simply educational intent or inability to pay.",
  },
  {
    number: "05",
    title: "Submit through an official portal",
    text: "Use NASA’s Public Access Link or FOIA.gov. Include your name, email, mailing address, phone number, detailed record description, fee category, and fee limit or waiver request. Never include a Social Security number.",
  },
  {
    number: "06",
    title: "Track, respond, and refine",
    text: "Save the acknowledgment and tracking number. Reply promptly if NASA asks for clarification. A narrower search can move faster than a request spanning many custodians, locations, or years.",
  },
] as const;

export default async function NasaFoiaRequestGuidePage() {
  const content = await readContent();

  return (
    <main className="page-shell page-shell--foia">
      <PublicHeader eyebrow="Public Records Guide" title="NASA FOIA" links={content.site.nav} />

      <section className="foia-hero">
        <div className="foia-hero__copy">
          <span className="foia-kicker">Freedom of Information Act • 5 U.S.C. § 552</span>
          <h2>Ask NASA for records—not answers.</h2>
          <p>A precise request gives the FOIA office a searchable path to the documents you want. Use this field guide to define the records, control fees, submit through the right channel, and follow the response.</p>
          <div className="foia-hero__actions">
            <a className="button button--primary" href="https://securefoia.nasa.gov/" target="_blank" rel="noreferrer">Start on NASA’s Portal ↗</a>
            <Link className="button button--ghost" href="#template">Use the Template</Link>
          </div>
          <p className="foia-hero__verified">Guidance checked against NASA and FOIA.gov • September 12, 2026</p>
        </div>
        <div className="foia-hero__console" aria-label="NASA FOIA request essentials">
          <div className="foia-hero__console-top"><span>REQUEST READINESS</span><strong>5 REQUIRED FIELDS</strong></div>
          <ol>
            <li><span>01</span><strong>Contact details</strong></li>
            <li><span>02</span><strong>Records described</strong></li>
            <li><span>03</span><strong>NASA office or center</strong></li>
            <li><span>04</span><strong>Requester fee category</strong></li>
            <li><span>05</span><strong>Fee ceiling or waiver</strong></li>
          </ol>
          <div className="foia-hero__console-bottom"><i />READY WHEN COMPLETE</div>
        </div>
      </section>

      <section className="foia-principle">
        <div><span>FOIA CAN</span><strong>Provide copies of existing, reasonably described NASA agency records.</strong></div>
        <div><span>FOIA CANNOT</span><strong>Require NASA to answer questions, analyze data, explain decisions, or create a new record.</strong></div>
      </section>

      <section className="foia-steps" aria-labelledby="foia-steps-title">
        <div className="foia-section-heading">
          <span className="foia-kicker">The request sequence</span>
          <h3 id="foia-steps-title">Six steps from idea to tracking number.</h3>
          <p>Specificity is the best practical tool a requester has. It helps NASA identify custodians, run useful searches, estimate fees, and place the request in the appropriate processing track.</p>
        </div>
        <div className="foia-steps__grid">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foia-anatomy" aria-labelledby="foia-anatomy-title">
        <div className="foia-anatomy__copy">
          <span className="foia-kicker foia-kicker--dark">A successful real-world structure</span>
          <h3 id="foia-anatomy-title">The STS-51B / STS-51G request, improved.</h3>
          <p>Your successful request did several important things well: it named two missions, gave exact flight windows, listed specific subject areas, addressed fees, requested cited exemptions for any withholding, and asked for appeal instructions.</p>
          <p>For the strongest reusable version, replace “all records” with named record types, likely offices or custodians, a firm date range, and focused search terms. That makes the scope easier to search and price.</p>
          <div className="foia-anatomy__privacy"><strong>Privacy note</strong><span>The public example below omits the personal email address and other unnecessary contact details visible in the supplied screenshot.</span></div>
        </div>
        <div className="foia-email-card">
          <div className="foia-email-card__subject"><span>SUBJECT</span><strong>FOIA Request — STS-51B and STS-51G Mission Records</strong></div>
          <div className="foia-email-card__row"><b>TO</b><span>NASA Headquarters FOIA Office</span></div>
          <div className="foia-email-card__row"><b>SCOPE</b><span>Two named Space Shuttle missions • April–June 1985</span></div>
          <div className="foia-email-card__row"><b>RECORDS</b><span>Mission debriefs, planning records, orbital-tracking records, and defined interagency communications</span></div>
          <div className="foia-email-card__row"><b>SEARCH AIDS</b><span>STS-51B • STS-51G • Salyut 7 • January–July 1985</span></div>
          <div className="foia-email-card__row"><b>FEES</b><span>Category stated • waiver requested • advance notice requested</span></div>
          <div className="foia-email-card__status"><i /><strong>SEARCHABLE STRUCTURE</strong><span>Mission + dates + record types + topics</span></div>
        </div>
      </section>

      <section className="foia-template-section" id="template" aria-labelledby="foia-template-title">
        <div className="foia-section-heading foia-section-heading--light">
          <span className="foia-kicker">Copy, tailor, verify</span>
          <h3 id="foia-template-title">Start with a record-focused request.</h3>
          <p>Delete anything that does not apply, replace every bracketed field, and confirm the current submission requirements on NASA’s official FOIA pages.</p>
        </div>
        <FoiaRequestTemplate />
      </section>

      <section className="foia-specificity" aria-labelledby="specificity-title">
        <div className="foia-section-heading">
          <span className="foia-kicker">Write for the search</span>
          <h3 id="specificity-title">Turn a topic into locatable records.</h3>
        </div>
        <div className="foia-specificity__compare">
          <article className="foia-specificity__weak">
            <span>TOO BROAD</span>
            <blockquote>“Send me all information about the Space Shuttle.”</blockquote>
            <p>No date range, program office, custodian, mission, record type, or useful search boundary.</p>
          </article>
          <article className="foia-specificity__strong">
            <span>SEARCHABLE</span>
            <blockquote>“Mission debriefs and contingency-planning memoranda maintained by the Space Shuttle Program concerning STS-51G, dated January 1 through July 31, 1985.”</blockquote>
            <p>Names the records, responsible program, mission, subject, and date range.</p>
          </article>
        </div>
        <div className="foia-record-grid">
          <div><strong>EMAIL</strong><span>Employee or office, date range, focused keywords</span></div>
          <div><strong>CONTRACT</strong><span>Contract number and specific documents requested</span></div>
          <div><strong>REPORT</strong><span>Title, document ID, author, and publication date</span></div>
          <div><strong>MISSION</strong><span>Mission ID, operational window, office, and record type</span></div>
        </div>
      </section>

      <section className="foia-fees" aria-labelledby="fees-title">
        <div className="foia-fees__intro">
          <span className="foia-kicker">Fees without surprises</span>
          <h3 id="fees-title">Name your category. Set a ceiling.</h3>
          <p>There is no initial filing fee. Charges depend on requester category and the search, review, and duplication work involved. NASA currently says it does not charge when assessable fees are under $50.</p>
          <div className="foia-fees__callout"><strong>A fee waiver needs an argument.</strong><span>Explain how disclosure will significantly improve public understanding of government operations and why the disclosure is not primarily in your commercial interest.</span></div>
        </div>
        <div className="foia-fee-table" role="table" aria-label="NASA FOIA fee categories">
          <div role="row"><span role="columnheader">Requester</span><b role="columnheader">Search</b><b role="columnheader">Review</b><b role="columnheader">Copies</b></div>
          <div role="row"><span role="cell">Commercial</span><b role="cell">Yes</b><b role="cell">Yes</b><b role="cell">Yes</b></div>
          <div role="row"><span role="cell">Education / science</span><b role="cell">No</b><b role="cell">No</b><b role="cell">After 100 pages</b></div>
          <div role="row"><span role="cell">News media</span><b role="cell">No</b><b role="cell">No</b><b role="cell">After 100 pages</b></div>
          <div role="row"><span role="cell">Other</span><b role="cell">After 2 hours</b><b role="cell">No</b><b role="cell">After 100 pages</b></div>
          <small>Fee rules have details and exceptions. Check NASA’s current regulations before relying on a category.</small>
        </div>
      </section>

      <section className="foia-after" aria-labelledby="after-title">
        <div className="foia-after__timeline">
          <span>SUBMIT</span><i /><span>ACKNOWLEDGMENT</span><i /><span>SEARCH</span><i /><span>REVIEW</span><i /><span>RELEASE / DENIAL</span>
        </div>
        <div className="foia-after__copy">
          <span className="foia-kicker foia-kicker--dark">After you click submit</span>
          <h3 id="after-title">A 20-working-day determination is not a 20-day delivery promise.</h3>
          <p>FOIA sets a time for the agency’s determination, but complex searches, consultations, backlogs, clarification, fee issues, and “unusual circumstances” can extend actual processing. Targeted requests usually move more quickly than broad ones.</p>
          <div className="foia-after__cards">
            <article><strong>Tracking</strong><p>Use the assigned request number when asking the service center about status or narrowing options.</p></article>
            <article><strong>Redactions</strong><p>NASA may withhold protected portions under one or more of FOIA’s nine exemptions and should identify the exemption used.</p></article>
            <article><strong>Appeal</strong><p>NASA’s current guidance says an administrative appeal may be filed within 90 days. Include the original request, the response, and why the decision should change.</p></article>
          </div>
        </div>
      </section>

      <section className="foia-submit" aria-labelledby="submit-title">
        <span className="foia-kicker">Ready to request?</span>
        <h3 id="submit-title">Use an official government channel.</h3>
        <p>If you do not know which NASA center holds the records, submit one request to Headquarters for routing. Requests for NASA Office of Inspector General records go directly to OIG.</p>
        <div>
          <a className="button button--primary" href="https://securefoia.nasa.gov/" target="_blank" rel="noreferrer">NASA Public Access Link ↗</a>
          <a className="button button--ghost" href="https://www.foia.gov/" target="_blank" rel="noreferrer">National FOIA Portal ↗</a>
          <a className="button button--ghost" href="https://www.nasa.gov/foia/foia-contacts/" target="_blank" rel="noreferrer">NASA FOIA Contacts ↗</a>
        </div>
      </section>

      <section className="foia-sources" aria-labelledby="foia-sources-title">
        <div><span className="foia-kicker">Official references</span><h3 id="foia-sources-title">Verify before submitting.</h3></div>
        <div>
          <a href="https://www.nasa.gov/foia/foia-guidance/" target="_blank" rel="noreferrer"><span>NASA</span>FOIA Guidance ↗</a>
          <a href="https://www.nasa.gov/foia/foia-contacts/" target="_blank" rel="noreferrer"><span>NASA</span>FOIA Contacts ↗</a>
          <a href="https://www.foia.gov/how-to.html" target="_blank" rel="noreferrer"><span>U.S. Department of Justice</span>How to Make a FOIA Request ↗</a>
          <a href="https://www.foia.gov/faq.html" target="_blank" rel="noreferrer"><span>U.S. Department of Justice</span>FOIA Frequently Asked Questions ↗</a>
          <a href="https://www.ecfr.gov/current/title-14/chapter-V/part-1206" target="_blank" rel="noreferrer"><span>eCFR</span>NASA FOIA Regulations, 14 CFR Part 1206 ↗</a>
        </div>
        <p>This independent educational guide is not legal advice and is not an official NASA publication. Rules, contacts, portals, and fees can change.</p>
      </section>

      <PublicFooter title="NASA Employees" text="Practical guides to the people, programs, records, and public institutions behind space exploration." />
    </main>
  );
}
