import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarsLivestreamDelay } from "@/components/MarsLivestreamDelay";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Could Someone Livestream From Mars?",
  description: "How a future Mars livestream could travel through relay orbiters to Earth, why it would always be delayed, and what infrastructure it would require.",
  path: "/mars-livestream",
  image: "/images/mars-livestream-hero.jpg",
});

const signalSteps = [
  ["1", "Camera", "A crew member records video inside a habitat or through a surface-suit camera."],
  ["2", "Mars network", "Local antennas send compressed video to a communications tower or nearby relay orbiter."],
  ["3", "Relay orbiter", "An orbiter stores the stream, then forwards it toward Earth when geometry and bandwidth allow."],
  ["4", "Deep Space Network", "Large antennas on Earth receive the faint radio signal and route the data onto terrestrial networks."],
  ["5", "Viewer", "The stream is decoded, buffered, and delivered like online video, only minutes behind Mars."],
];

const infrastructure = [
  ["Cameras built for Mars", "Dust, radiation, cold, low power, and limited repair access make ordinary broadcast gear a poor fit."],
  ["Serious compression", "High-quality video would be compressed aggressively so every useful bit can survive the narrow interplanetary link."],
  ["A Mars relay constellation", "Several orbiters could provide longer coverage windows and avoid depending on one spacecraft passing overhead."],
  ["Store-and-forward networking", "If a link drops, the network keeps the missing pieces and sends them later instead of losing the whole program."],
  ["More Earth antennas", "Receiving continuous human-mission video would compete with science and navigation traffic, so Earth needs added capacity."],
  ["Local production", "Mars crews would switch cameras, add captions, and package the program locally because Earth cannot direct them in real time."],
];

const interruptions = [
  "Mars rotates, so a surface station may lose direct sight of Earth or a relay orbiter.",
  "The Sun can interfere when Earth and Mars pass to opposite sides of it.",
  "Dust, hardware faults, power limits, and competing mission data can reduce quality.",
  "The stream would use buffering and recorded segments to stay watchable through short outages.",
];

const sources = [
  ["NASA Mars Relay Network", "https://science.nasa.gov/mars/mars-relay-network/"],
  ["NASA Mars Telecommunications Network", "https://www.nasa.gov/directorates/esdmd/nasa-draws-on-industry-for-mars-telecommunications-network/"],
  ["NASA Delay/Disruption Tolerant Networking", "https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/"],
  ["NASA Mars Communications Disruption and Delay", "https://www.nasa.gov/wp-content/uploads/2024/01/mars-communications-disruption-and-delay.pdf"],
];

export default function MarsLivestreamPage() {
  return (
    <main className="page-shell page-shell--mars-live">
      <PublicHeader
        eyebrow="Interplanetary Media"
        title="Live From Mars"
        links={[
          { label: "People of NASA", href: "/" },
          { label: "Mars Relay", href: "/mars-relay" },
          { label: "Future Mars Colony", href: "/future-mars-colony" },
          { label: "Space FAQs", href: "/space-faqs" },
        ]}
      />

      <section className="mars-live-hero">
        <Image src="/images/mars-livestream-hero.jpg" alt="Concept of an astronaut broadcasting from Mars beside a camera and communications antenna" fill priority className="cover-image" />
        <div className="mars-live-hero__shade" />
        <div className="mars-live-hero__copy">
          <span className="section__eyebrow">Could it happen?</span>
          <h2>Yes. Mars could livestream to Earth.</h2>
          <p>
            It would look live and continue like a broadcast, but it could never
            be instant. Every image must cross millions of kilometers at the
            speed of light.
          </p>
          <div className="hero__actions">
            <Link href="#delay" className="button button--primary">Try the Delay</Link>
            <Link href="#signal-path" className="button button--ghost">Follow the Signal</Link>
          </div>
        </div>
      </section>

      <section className="mars-live-truth" aria-label="Mars livestream facts">
        <div><strong>3-22.4 min</strong><span>one-way light delay</span></div>
        <div><strong>Not instant</strong><span>but still a continuous stream</span></div>
        <div><strong>Radio relay</strong><span>Mars orbiters bridge the distance</span></div>
      </section>

      <section className="mars-live-intro" id="delay">
        <div>
          <span className="section__eyebrow">The honest answer</span>
          <h3>Earth would watch Mars in the recent past.</h3>
          <p>
            A host on Mars could speak continuously while viewers on Earth watch
            continuously. What changes is conversation: even at the closest
            practical distance, an Earth viewer cannot ask a question and hear
            the answer for several minutes.
          </p>
          <p>
            That makes a Mars broadcast closer to a live field report with a very
            long delay than a video call. The people on Mars would direct the show.
          </p>
        </div>
        <MarsLivestreamDelay />
      </section>

      <section className="mars-live-path" id="signal-path">
        <div className="mars-live-heading">
          <span className="section__eyebrow">Signal path</span>
          <h3>Five handoffs between Mars and your screen.</h3>
        </div>
        <div className="mars-live-path__track">
          {signalSteps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span><h4>{title}</h4><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mars-live-now">
        <figure>
          <Image src="/images/mars-unity-mission.jpg" alt="Concept artwork of Mars spacecraft and rovers gathered on the surface" fill className="cover-image" />
        </figure>
        <div>
          <span className="section__eyebrow">What exists today</span>
          <h3>Mars already sends pictures and science home this way.</h3>
          <p>
            Rovers commonly send data upward to orbiters, which forward it to
            Earth. NASA says rover-to-orbiter links can reach about 2 megabits per
            second, but coverage, Earth-facing capacity, and mission schedules
            make that very different from continuous high-definition video.
          </p>
          <p>
            A human settlement would need the same basic architecture at a much
            larger scale: more relays, more bandwidth, more antennas, and a
            network designed to recover gracefully from interruptions.
          </p>
        </div>
      </section>

      <section className="mars-live-infrastructure">
        <div className="mars-live-heading">
          <span className="section__eyebrow">What we would build</span>
          <h3>A broadcast system made for another planet.</h3>
        </div>
        <div className="mars-live-infrastructure__grid">
          {infrastructure.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="mars-live-experience">
        <div>
          <span className="section__eyebrow">What viewers experience</span>
          <h3>It feels live until someone tries to talk back.</h3>
        </div>
        <ol>
          <li><strong>8:00 on Mars</strong><span>The host welcomes Earth and begins the program.</span></li>
          <li><strong>8:13 on Earth</strong><span>At a mid-range delay, viewers receive that opening.</span></li>
          <li><strong>8:38 on Mars</strong><span>The earliest reply to an Earth question reaches the host.</span></li>
        </ol>
        <p>For interviews, Earth would send questions ahead. Mars would answer them in its own time.</p>
      </section>

      <section className="mars-live-interruptions">
        <div>
          <span className="section__eyebrow">When the picture breaks</span>
          <h3>Space weather and orbital geometry still get a vote.</h3>
        </div>
        <ul>{interruptions.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="mars-live-conclusion">
        <span className="section__eyebrow">The first sign-on</span>
        <h3>“Good morning, Earth. This is Mars.”</h3>
        <p>
          The remarkable part would not be perfect picture quality. It would be
          seeing another human world speak for itself, knowing every frame crossed
          interplanetary space to reach us.
        </p>
      </section>

      <section className="mars-live-sources">
        <span className="section__eyebrow">Official reading</span>
        <h3>Continue with NASA.</h3>
        <div>{sources.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label}<span aria-hidden="true">↗</span></a>)}</div>
      </section>

      <PublicFooter title="NasaEmployees.com" text="A practical look at how people, infrastructure, and patience could carry a human voice between worlds." />
    </main>
  );
}
