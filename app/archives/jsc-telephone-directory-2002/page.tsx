import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { DirectoryArchive, type ArchivePage } from "@/components/DirectoryArchive";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import archive from "@/content/jsc-directory-2002.json";
import styles from "./archive.module.css";

export const metadata = pageMeta({
  title: "Johnson Space Center Telephone Directory · June 2002",
  description: "Explore the complete 99-page historical JSC telephone directory: searchable employee and organizational listings, maps, original scans, and the source PDF.",
  path: "/archives/jsc-telephone-directory-2002",
});

export default async function JscDirectoryArchivePage() {
  const content = await readContent();
  return <main className={`page-shell ${styles.shell}`}>
    <PublicHeader eyebrow="People of NASA" title="NASA Employees" links={content.site.nav} />
    <div className={styles.breadcrumb}><a href="/">NASA Employees</a><span>/</span><span>Historical archive</span></div>
    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><i /> FROM THE NASA ARCHIVES <span>VOL. 2002 / JSC</span></div>
        <h2>The people<br />behind the <em>mission.</em></h2>
        <p className={styles.subtitle}>Johnson Space Center<br /><strong>Telephone Directory · June 2002</strong></p>
        <p className={styles.intro}>A snapshot of a space center at work. Explore the names, organizations, and places that connected Johnson Space Center at the dawn of the International Space Station era.</p>
        <div className={styles.heroActions}><a href="#directory-reader">Explore the directory <span>↓</span></a><a href="/archives/jsc-2002/jsc-telephone-directory-2002.pdf" target="_blank" rel="noreferrer">View original PDF ↗</a><a href="/archives/jsc-2002/jsc-directory-2002-names-phones.csv" download>Names &amp; phones CSV ↓</a></div>
        <div className={styles.stats}><div><strong>99</strong><span>ORIGINAL PAGES</span></div><div><strong>2002</strong><span>A HISTORICAL SNAPSHOT</span></div><div><strong>JSC</strong><span>HOUSTON, TEXAS</span></div></div>
      </div>
      <figure className={styles.cover}><div className={styles.coverTag}>THE ORIGINAL VOLUME</div><img src="/archives/jsc-2002/page-001.webp" alt="Original cover of the 2002 Johnson Space Center Telephone Directory, illustrated with the International Space Station" width={611} height={790} /><figcaption><span>01 / 99</span> Preserved from the original scan</figcaption></figure>
    </header>
    <div className={styles.historical}><span>ARCHIVAL RECORD</span><p>This is a historical directory, not a current NASA contact service. Phone numbers, emergency procedures, and organizational assignments are reproduced for research.</p></div>
    <DirectoryArchive pages={archive.pages as ArchivePage[]} />
    <section className={styles.about}><span className={styles.kicker}>ABOUT THIS EDITION</span><div><h3>A printed directory, made accessible.</h3><p>This web edition preserves all 99 PDF pages in their original sequence, including introductory material, maps, organizational listings, the alphabetical employee directory, and the classified subject listing. Original page images remain available alongside machine-readable text.</p><p>OCR can misread small type, worn print, and clipped edges. The scans and source PDF are the reference for the original document. No missing characters have been reconstructed as verified facts.</p></div></section>
    <PublicFooter title="NASA Employees" text="Preserving the people, places, and stories behind the mission." />
  </main>;
}
