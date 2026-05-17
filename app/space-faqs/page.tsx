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
  },
  {
    question: "How many hamburgers can you fit on a resupply mission to the ISS?",
    shortAnswer:
      "A silly-but-reasonable estimate is around 8,000 to 11,000 hamburgers if you devoted a whole large cargo load to burgers. In reality, NASA would never do that.",
    answer: [
      "NASA SpaceX cargo resupply missions commonly carry thousands of pounds of mixed cargo: science, hardware, crew supplies, food, and station equipment. One recent mission overview described more than 6,000 pounds of cargo headed to the station.",
      "If we use 6,000 pounds, that is about 2,720 kilograms. If one packaged hamburger is roughly 0.25 kilograms, the pure mass math gives about 10,800 hamburgers.",
      "But space cargo is not packed like a fast-food bag. You would lose room to packaging, food safety, restraint, inventory, temperature control, and the fact that squishy food does not pack as perfectly as metal bricks. With those real-world losses, a more believable answer is probably several thousand burgers, maybe somewhere around 8,000 to 10,000 if the mission were absurdly burger-focused.",
      "The serious answer is that resupply mass is precious. Every hamburger would compete with experiments, replacement parts, medical supplies, water hardware, clothing, and actual balanced meals. A few special burgers as crew morale food? Fun. An entire cargo Dragon full of burgers? Mission control would like a word."
    ],
    takeaway:
      "By mass, you can imagine thousands of burgers. By mission logic, the correct number is much, much smaller."
  },
  {
    question: "How many hamsters could you put on a Starship to Mars?",
    shortAnswer:
      "By silly mass math, hundreds of thousands. By humane mission design, the answer should be zero unless there is a serious, approved science reason.",
    answer: [
      "SpaceX has described Starship as a vehicle that could carry more than 100 metric tons of cargo to Mars. If you treated that as 100,000 kilograms of payload and assumed one hamster weighs about 0.12 kilograms, the absurd calculator answer is roughly 833,000 hamsters.",
      "But that number is not a real mission answer. Living animals are not cargo bricks. They need breathable air, temperature control, food, water, waste handling, medical monitoring, safe containment, vibration protection, radiation protection, and enough room to avoid suffering.",
      "Once you include humane habitats, life support, food, water, redundancy, veterinary monitoring, and ethical review, the number collapses by orders of magnitude. A responsible mission would not ask how many hamsters can fit. It would ask whether any animal should be sent at all, what scientific purpose justifies it, and how suffering is prevented.",
      "So the fun answer is: by mass, maybe around 800,000. The real answer is: probably none, unless a carefully reviewed biology mission had a strong reason and a life-support system built around animal welfare."
    ],
    takeaway:
      "Space math can be funny. Life support and ethics are where the real answer lives."
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
  },
  {
    label: "NASA: SpaceX CRS-31 Mission Overview",
    href: "https://www.nasa.gov/missions/station/commercial-resupply/spacex-crs/nasa-spacex-31st-commercial-resupply-mission-overview/"
  },
  {
    label: "SpaceX: Starship User Guide",
    href: "https://www.spacex.com/media/starship_users_guide_v1.pdf"
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
            <span className="section__eyebrow">Growing Collection</span>
            <h3>Could that actually work in space?</h3>
          </div>
          <p>
            Short version: sometimes the physics says yes, but the mission
            design says please do not make it weird unless there is a very good
            reason.
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
