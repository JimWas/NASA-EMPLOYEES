import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";

export const metadata: Metadata = {
  title: "Space FAQs",
  description:
    "Plainspoken answers to weird, practical, and hypothetical space questions, from recycled water to life-support systems."
};

const faqs = [
  {
    question:
      "If astronauts brought a bunch of soda instead of water, then peed it out, could they recycle that into drinking water?",
    shortAnswer:
      "Technically, some of the water could be recovered after it becomes urine. Practically, it is a bad plan.",
    answer: [
      "The International Space Station already recovers water from urine, humidity, and other wastewater. That recovered water is processed, filtered, chemically treated, and checked so it can become safe drinking water again.",
      "But soda is not just water. It carries sugar or sweeteners, acids, flavor compounds, dyes, dissolved carbon dioxide, and sometimes caffeine or minerals. Your body would use some of it, reject some of it, and turn the rest into a more complicated waste stream.",
      "So yes, a life-support system could eventually reclaim water from urine after someone drank soda. But bringing soda instead of water would add mass, create more waste-processing burden, make nutrition and hydration worse, and give engineers a messier problem than simply carrying water and carefully selected beverages.",
      "The astronaut answer: a little soda-like treat might be possible if designed for spaceflight, but using soda as the main water supply would be silly, inefficient, and probably unpopular with the people responsible for keeping everyone alive."
    ],
    takeaway:
      "Spacecraft do not just need liquid. They need clean, predictable, recoverable water."
  }
];

const sourceLinks = [
  {
    label: "NASA: Environmental Control and Life Support Systems",
    href: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/"
  },
  {
    label: "NASA: Water Recovery Milestone on the ISS",
    href: "https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/"
  },
  {
    label: "NASA: Food in Space",
    href: "https://www.nasa.gov/ochmo/food-in-space/"
  }
];

export default function SpaceFaqsPage() {
  return (
    <main className="page-shell page-shell--faqs">
      <PublicHeader
        eyebrow="Space FAQs"
        title="Space FAQs"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Space Drinks", href: "/what-astronauts-drink" },
          { label: "NASA Fundamentals", href: "/nasa-fundamentals" },
          { label: "Mars Relay", href: "/mars-relay" }
        ]}
      />

      <section className="space-faq-hero">
        <div>
          <span className="section__eyebrow">Questions Worth Asking</span>
          <h2>Weird space hypotheticals, answered like a human.</h2>
          <p>
            Space is full of serious engineering, but curiosity often starts
            with strange questions. This collection answers the practical,
            funny, uncomfortable, and surprisingly deep things people wonder
            about living beyond Earth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">First Question</span>
            <h3>Can soda become drinking water after your body is done with it?</h3>
          </div>
          <p>
            Short version: water recovery is real, but life support is happiest
            when the inputs are clean, predictable, and designed for the system.
          </p>
        </div>

        <div className="space-faq-list">
          {faqs.map((faq) => (
            <article key={faq.question} className="space-faq-card">
              <h4>{faq.question}</h4>
              <p className="space-faq-card__short">{faq.shortAnswer}</p>
              {faq.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="space-faq-card__takeaway">
                <span>Takeaway</span>
                <strong>{faq.takeaway}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Why This Matters</span>
          <h3>In space, every ordinary thing becomes a system.</h3>
          <p>
            On Earth, soda is just a drink. In orbit, it becomes mass, packaging,
            gas behavior, nutrition, waste chemistry, crew health, equipment
            risk, and water recovery workload. That is why space questions are
            so useful: they reveal how much hidden infrastructure supports a
            normal human day.
          </p>
          <p>
            The deeper lesson is that survival in space depends less on one
            clever trick and more on a closed-loop ecosystem where every input
            and output has to be understood.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Sources</span>
          <h3>Learn more from NASA</h3>
          <ul className="benefit-list">
            {sourceLinks.map((source) => (
              <li key={source.href}>
                <Link href={source.href}>{source.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Next Questions</span>
          <h3>Keep asking the strange stuff.</h3>
          <p>
            The best space questions usually sound ridiculous for about five
            seconds, then turn into engineering, biology, chemistry, and mission
            design.
          </p>
        </div>
        <div className="footer__links">
          <Link href="/what-astronauts-drink">Space Drinks</Link>
          <Link href="/mars-relay">Mars Relay</Link>
          <Link href="/nasa-fundamentals">NASA Fundamentals</Link>
          <Link href="/">People of NASA</Link>
        </div>
      </footer>
    </main>
  );
}
