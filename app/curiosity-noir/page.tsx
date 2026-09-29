import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import styles from "./page.module.css";

const futureEpisodes = [
  { image: "elevated-train", title: "The last train overhead", description: "An elevated train races past while Curiosity searches the rain-soaked street for its first clue.", position: "center" },
  { image: "jazz-club", title: "Music from below", description: "A saxophone draws the rover toward a basement club—and someone inside notices it watching.", position: "center" },
  { image: "brooklyn-bridge", title: "Across the river", description: "Before dawn, Curiosity follows a faint signal onto the empty span of the Brooklyn Bridge.", position: "center" },
  { image: "evidence-room", title: "The Martian stone", description: "A detective examines the one piece of evidence that could explain the impossible landing.", position: "center" },
  { image: "subway-blackout", title: "The blackout line", description: "Deep below the city, a train approaches as Curiosity searches the flooded tracks.", position: "center" },
  { image: "rooftop-signal", title: "A message through the storm", description: "On a rooftop beside a radio antenna, the rover makes one more attempt to call home.", position: "center" },
  { image: "museum", title: "Bones after midnight", description: "A museum's giant skeleton confronts a machine built to search for ancient life.", position: "center" },
  { image: "coney-island", title: "The red trail", description: "Mysterious red grains lead Curiosity through an abandoned Coney Island after dark.", position: "center" },
  { image: "harbor", title: "The sealed crate", description: "At the fogbound docks, a locked cargo box may hold the answer—or another question.", position: "center" },
] as const;

const creatorReels = [
  { file: "night-drive", title: "The city after touchdown", description: "A longer nocturnal drive through wet streets and curious onlookers.", poster: "Gemini_Generated_Image_z42t6vz42t6vz42t" },
  { file: "alley-encounter-1", title: "The alley encounter · first cut", description: "Curiosity rolls into a narrow street with a stranger in the shadows.", poster: "Gemini_Generated_Image_290y2k290y2k290y" },
  { file: "alley-encounter-2", title: "The alley encounter · second cut", description: "A closer, more suspenseful variation on the meeting.", poster: "Gemini_Generated_Image_p068c2p068c2p068" },
  { file: "alley-encounter-3", title: "The alley encounter · third cut", description: "The street erupts into motion around the rover.", poster: "Gemini_Generated_Image_omczowomczowomcz" },
  { file: "alley-encounter-4", title: "The alley encounter · fourth cut", description: "The encounter leads toward a locked doorway.", poster: "Gemini_Generated_Image_sh7n5esh7n5esh7n" },
  { file: "martian-hole", title: "Something over the city", description: "A surreal arrival appears above the noir skyline.", poster: "Gemini_Generated_Image_4axbmz4axbmz4axb" },
  { file: "mars-landing-alt", title: "The landing that should have been", description: "A contrasting glimpse of Curiosity descending toward Mars.", poster: "3aeea471-0148-4588-9a5b-abf4b249391f" },
  { file: "city-chase-1", title: "Pursuit through the rain · first cut", description: "Curiosity flees down a soaked alley as the city closes in.", poster: "Gemini_Generated_Image_z42t6vz42t6vz42t" },
  { file: "city-chase-2", title: "Pursuit through the rain · second cut", description: "An extended version of the chase with a surprising turn overhead.", poster: "Gemini_Generated_Image_290y2k290y2k290y" },
] as const;

const creatorStills = [
  { file: "3aeea471-0148-4588-9a5b-abf4b249391f", title: "The intended landing" },
  { file: "Gemini_Generated_Image_1bza6q1bza6q1bza", title: "Martian Mecca poster study" },
  { file: "Gemini_Generated_Image_290y2k290y2k290y", title: "The street clock" },
  { file: "Gemini_Generated_Image_4axbmz4axbmz4axb", title: "The sky opens" },
  { file: "Gemini_Generated_Image_6ijds96ijds96ijd", title: "Lost in Martian Mecca" },
  { file: "Gemini_Generated_Image_7vb7rn7vb7rn7vb7", title: "Descent stage study" },
  { file: "Gemini_Generated_Image_ay73wtay73wtay73", title: "The clockwork chamber" },
  { file: "Gemini_Generated_Image_km35bukm35bukm35", title: "Opera of the lost rover" },
  { file: "Gemini_Generated_Image_lslfallslfallslf", title: "The platform" },
  { file: "Gemini_Generated_Image_oex8onoex8onoex8", title: "Beyond the city" },
  { file: "Gemini_Generated_Image_omczowomczowomcz", title: "The clockmaker's window" },
  { file: "Gemini_Generated_Image_p068c2p068c2p068", title: "A stranger approaches" },
  { file: "Gemini_Generated_Image_pi68j7pi68j7pi68", title: "Martian Mecca wide study" },
  { file: "Gemini_Generated_Image_r6r0ukr6r0ukr6r0", title: "Another clockwork world" },
  { file: "Gemini_Generated_Image_sh7n5esh7n5esh7n", title: "The midnight market" },
  { file: "Gemini_Generated_Image_tfd7uqtfd7uqtfd7", title: "Curiosity at the grocery" },
  { file: "Gemini_Generated_Image_z42t6vz42t6vz42t", title: "The rainy avenue" },
] as const;

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
            <a href="#creator-reels" className={styles.secondaryAction}>New reels &amp; art ↓</a>
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

      <section className={styles.futureEpisodes} id="future-episodes" aria-labelledby="future-episodes-title">
        <div className={styles.futureHeading}>
          <div>
            <span className={styles.eyebrow}>THE CASEBOOK IS STILL OPEN</span>
            <h3 id="future-episodes-title">Future episodes of <em>The Adventures of Mars Curiosity</em></h3>
          </div>
          <p>Nine imagined scenes from the city beyond the first two reels. These are story concepts and promotional artwork—not released episodes.</p>
        </div>
        <div className={styles.episodeGrid}>
          {futureEpisodes.map((episode, index) => (
            <article className={styles.episodeCard} key={episode.image}>
              <div className={styles.episodeImage}>
                <Image
                  src={`/images/curiosity-noir-promo-${episode.image}.png`}
                  alt={`Fictional noir artwork of Curiosity: ${episode.description}`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectPosition: episode.position }}
                />
                <span className={styles.episodeNumber}>SCENE {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className={styles.episodeCopy}>
                <h4>{episode.title}</h4>
                <p>{episode.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.futureNote}>Fictional alternate-history concepts · AI-generated artwork</p>
      </section>

      <section className={styles.creatorCollection} id="creator-reels" aria-labelledby="creator-reels-title">
        <div className={styles.creatorHeading}>
          <span className={styles.eyebrow}>FROM THE CREATOR&apos;S CUTTING ROOM</span>
          <h3 id="creator-reels-title">More adventures, more worlds.</h3>
          <p>New videos and image studies expand the imagined Curiosity serial—from rain-swept streets to stranger detours. These are alternate cuts and concept pieces, not chronological episodes.</p>
        </div>
        <figure className={styles.featureReel}>
          <video controls playsInline preload="none" poster="/images/curiosity-noir-creator/Gemini_Generated_Image_1bza6q1bza6q1bza.webp" aria-label="A Stranger Among Men, a fictional Curiosity music video">
            <source src="/videos/curiosity-noir-stranger-among-men.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption><span>FEATURE REEL · A STRANGER AMONG MEN</span><span>USER-SUPPLIED MUSIC VIDEO · 3:02</span></figcaption>
        </figure>
        <div className={styles.creatorSubheading}><span className={styles.eyebrow}>SHORT FILMS &amp; ALTERNATE CUTS</span><p>Choose a reel to play; videos load only when you press play.</p></div>
        <div className={styles.creatorReelGrid}>
          {creatorReels.map((reel) => (
            <figure className={styles.creatorReel} key={reel.file}>
              <video controls playsInline preload="none" poster={`/images/curiosity-noir-creator/${reel.poster}.webp`} aria-label={reel.title}>
                <source src={`/videos/curiosity-noir-${reel.file}.mp4`} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption><strong>{reel.title}</strong><span>{reel.description}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.creatorSubheading}><span className={styles.eyebrow}>STORYBOARDS &amp; POSTER STUDIES</span><p>Every distinct image supplied for the series, including alternate worlds and early poster ideas.</p></div>
        <div className={styles.creatorStillGrid}>
          {creatorStills.map((still) => (
            <figure className={styles.creatorStill} key={still.file}>
              <div className={styles.creatorStillImage}><Image src={`/images/curiosity-noir-creator/${still.file}.webp`} alt={`Fictional Curiosity concept art: ${still.title}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div>
              <figcaption>{still.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.creatorNote}>User-supplied fictional videos and AI-generated artwork · Exact duplicate exports omitted</p>
      </section>

      <aside className={styles.disclaimer}><strong>About this series</strong><p>Curiosity Noir is imaginative fiction. Curiosity actually landed in Gale Crater on Mars in 2012; it never visited New York. These supplied videos and AI-generated comic images are story illustrations, not NASA footage or historical evidence.</p></aside>
      <PublicFooter title="NASA Employees" text="Independent space storytelling, from real missions to clearly labeled imagined worlds." />
    </main>
  );
}
