import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import styles from "./page.module.css";

export const metadata: Metadata = pageMeta({
  title: "Curiosity Noir: The City That Wasn't Mars",
  description: "Watch Curiosity arrive in an imagined 1920s New York and follow the first chapter of a film-noir comic video series.",
  path: "/curiosity-noir",
  image: "/images/curiosity-noir-hero.jpg",
});

export default async function CuriosityNoirPage() {
  const content = await readContent();

  return (
    <main className={`page-shell ${styles.page}`}>
      <PublicHeader eyebrow="An imaginary rover serial" title="Curiosity Noir" links={content.site.nav} />

      <section className={styles.hero} aria-labelledby="noir-title">
        <Image src="/images/curiosity-noir-hero.jpg" alt="Comic illustration of Curiosity on a rain-soaked New York street beneath an elevated train" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>A WEB VIDEO SERIAL · CHAPTER ONE</span>
          <h2 id="noir-title">The city that<br /><em>wasn&apos;t Mars.</em></h2>
          <p>A Sky Crane lowers Curiosity into the wrong world: a rain-lashed New York of jazz, steam, and shadows. The rover&apos;s first mission is simple. Find out where it landed.</p>
          <div className={styles.heroActions}>
            <a href="#watch" className={styles.primaryAction}>Watch the first episode <span aria-hidden="true">↗</span></a>
            <a href="#story" className={styles.secondaryAction}>Read the comic story ↓</a>
          </div>
        </div>
        <p className={styles.heroCredit}>Fictional alternate-history story · AI-generated artwork and videos</p>
      </section>

      <div className={styles.marquee} aria-label="Series details">
        <span>NO. 001 / THE WRONG LANDING</span><span>NEW YORK CITY / AN IMAGINED 1920s</span><span>TWO SHORT FILMS / ONE MYSTERY</span>
      </div>

      <section className={styles.opening} id="story">
        <div className={styles.chapterMark}><span>01</span><small>THE ARRIVAL</small></div>
        <div className={styles.openingCopy}>
          <span className={styles.eyebrow}>FROM THE CASEBOOK OF A LOST ROVER</span>
          <h3>It expected red dust. It found rain.</h3>
          <p>The descent computers had prepared for Gale Crater. Instead, the cameras opened on a canyon of brick and steel. Neon trembled in puddles. A train rattled above the avenue. The Sky Crane held steady, paid out its cables, and set six wheels on cobblestone.</p>
          <p>For one suspended second, the street watched the machine. Then the cables snapped free, the descent stage climbed into the fog, and Curiosity was alone.</p>
        </div>
      </section>

      <section className={styles.videoSection} id="watch" aria-labelledby="landing-film-title">
        <div className={styles.videoHeading}><span className={styles.eyebrow}>REEL ONE · 00:10</span><h3 id="landing-film-title">A landing no one could explain.</h3><p>The short opening cut catches the descent, touchdown, and first turn toward the city.</p></div>
        <figure className={styles.videoFrame}>
          <video controls playsInline preload="metadata" poster="/images/curiosity-noir-hero.jpg" aria-label="Fictional video of Curiosity landing on a 1920s New York street">
            <source src="/videos/curiosity-noir-touchdown.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption><span>THE WRONG LANDING</span><span>USER-SUPPLIED FICTIONAL VIDEO</span></figcaption>
        </figure>
      </section>

      <section className={styles.strip} aria-label="Comic story panels">
        <article className={styles.textPanel}><span className={styles.panelNumber}>PANEL 01 / SIGNAL LOST</span><h3>“Earth” was not in the landing plan.</h3><p>No voice came from mission control. The antenna swept the skyline and found only static, music leaking from a basement club, and a city that seemed to have misplaced a century.</p></article>
        <article className={styles.quotePanel}><span>CAMERA LOG / 00:00:17</span><p>Sky: obscured.<br />Surface: wet stone.<br />Human silhouettes: three.<br />Location: impossible.</p></article>
      </section>

      <figure className={styles.artPanel}>
        <Image src="/images/curiosity-noir-clue.jpg" alt="Noir comic art of Curiosity scanning a mysterious mark beside a subway entrance" width={1536} height={1024} sizes="100vw" />
        <figcaption>ORIGINAL COMIC ART · THE FIRST CLUE</figcaption>
      </figure>

      <section className={styles.clueSection}>
        <div className={styles.chapterMark}><span>02</span><small>THE FIRST CLUE</small></div>
        <div><span className={styles.eyebrow}>A CITY WITH ITS OWN GEOLOGY</span><h3>Curiosity followed the tracks.</h3><p>Its wheels turned slowly through the rain. At the subway stairs, the rover&apos;s lamp found a fresh groove cut across the street—too narrow for a car, too straight for a crack. It photographed the mark, scanned the grit, and followed it beneath the elevated railway.</p><p>Every shop window threw back a different reflection. Somewhere in the fog, a stranger kept pace.</p></div>
      </section>

      <section className={styles.videoSection} aria-labelledby="patrol-film-title">
        <div className={styles.videoHeading}><span className={styles.eyebrow}>REEL TWO · 00:20</span><h3 id="patrol-film-title">The street begins to answer.</h3><p>The longer cut follows Curiosity&apos;s first cautious drive through the city, from the fading rocket smoke into the shadows.</p></div>
        <figure className={styles.videoFrame}>
          <video controls playsInline preload="metadata" poster="/images/curiosity-noir-clue.jpg" aria-label="Fictional video of Curiosity exploring a foggy 1920s New York street">
            <source src="/videos/curiosity-noir-arrival.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption><span>THE FIRST DRIVE</span><span>USER-SUPPLIED FICTIONAL VIDEO</span></figcaption>
        </figure>
      </section>

      <section className={styles.finale}>
        <Image src="/images/curiosity-noir-cliffhanger.jpg" alt="Comic illustration of Curiosity facing a lone figure under New York's elevated railway" fill sizes="100vw" className={styles.finaleImage} />
        <div className={styles.finaleShade} aria-hidden="true" />
        <div className={styles.finaleCopy}><span className={styles.eyebrow}>TO BE CONTINUED</span><h3>At the end of the block, someone was waiting.</h3><p>The rover stopped. The figure lifted a small light. Its color matched nothing else in the city—and everything Curiosity remembered of Mars.</p><Link href="/curiosity-rover-sky-crane" className={styles.secondaryAction}>Explore the real Curiosity &amp; Sky Crane →</Link></div>
      </section>

      <aside className={styles.disclaimer}><strong>About this series</strong><p>Curiosity Noir is imaginative fiction. Curiosity actually landed in Gale Crater on Mars in 2012; it never visited New York. These supplied videos and AI-generated comic images are story illustrations, not NASA footage or historical evidence.</p></aside>
      <PublicFooter title="NASA Employees" text="Independent space storytelling, from real missions to clearly labeled imagined worlds." />
    </main>
  );
}
