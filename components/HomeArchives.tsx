import Image from "next/image";
import Link from "next/link";
import styles from "./HomeArchives.module.css";

export function HomeArchives() {
  return (
    <section id="archives" className={styles.section} aria-labelledby="home-archives-title">
      <header className={styles.heading}>
        <div><span>Historical records</span><h3 id="home-archives-title">Archives</h3></div>
        <p>Original documents and directories from NASA&apos;s past, preserved for browsing and research.</p>
      </header>
      <article className={styles.entry}>
        <Link href="/archives/jsc-telephone-directory-2002" className={styles.cover} aria-label="Browse the 2002 Johnson Space Center telephone directory">
          <Image src="/archives/jsc-2002/page-001.webp" alt="Cover of the Johnson Space Center Telephone Directory" width={88} height={114} sizes="88px" />
        </Link>
        <div className={styles.copy}>
          <span className={styles.meta}>Johnson Space Center · June 2002 · 99 pages</span>
          <h4><Link href="/archives/jsc-telephone-directory-2002">Johnson Space Center Telephone Directory</Link></h4>
          <p>Search historical employee and organization listings, compare the text with original scans, or download the names and phone numbers.</p>
          <div className={styles.links}>
            <Link href="/archives/jsc-telephone-directory-2002">Browse directory <span aria-hidden="true">→</span></Link>
            <a href="/archives/jsc-2002/jsc-directory-2002-names-phones.csv" download>Download CSV <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </article>
    </section>
  );
}
