import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";
import { MemoriamIndex } from "@/components/MemoriamIndex";
import { readContent } from "@/lib/content";
import { pageMeta } from "@/lib/meta";
import memorial from "@/content/memoriam/entries.json";
import styles from "./memoriam.module.css";

export const metadata = pageMeta({title: "In Memoriam", description: "Remembering the people of spaceflight through the MSOA In Memoriam list. Browse names and dates preserved from the May 1, 2026 source spreadsheet.", path: "/memoriam"});

export default async function MemoriamPage() {
  const content = await readContent();
  return <main className={`page-shell ${styles.shell}`}>
    <PublicHeader eyebrow="People of NASA" title="NASA Employees" links={content.site.nav} />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#archives">Archives</Link><span>/</span><span>In Memoriam</span></nav>
    <header className={styles.hero}>
      <span className={styles.eyebrow}>IN REMEMBRANCE · THE PEOPLE OF SPACEFLIGHT</span>
      <h1>In Memoriam<span>Behind every mission,<br />a lifetime of dedication.</span></h1>
      <p>We remember the people whose lives and work helped make spaceflight possible. This index preserves their names as a starting point for honoring the individual stories behind our shared history.</p>
      <a className={styles.browse} href="#remembrance-index">Find a name <span aria-hidden="true">↓</span></a>
      <div className={styles.heroFoot}><span>{memorial.entries.length} names remembered</span><span>Source list updated {memorial.sourceUpdated}</span></div>
    </header>
    <aside className={styles.credit} aria-labelledby="source-title"><div><span className={styles.eyebrow}>WITH CREDIT TO MSOA</span><h2 id="source-title">Preserved through a community’s care.</h2></div><div><p>This index is based on the <em>In Memoriam</em> spreadsheet compiled by the <a href={memorial.sourceUrl} target="_blank" rel="noreferrer">Manned Spaceflight Operations Association (MSOA)</a>. We gratefully acknowledge their work keeping these names and spaceflight history alive.</p><a href={memorial.sourceUrl} target="_blank" rel="noreferrer">Visit the MSOA website <span aria-hidden="true">↗</span></a></div></aside>
    <MemoriamIndex entries={memorial.entries} />
    <section className={styles.about}><div><span className={styles.eyebrow}>A LIVING REMEMBRANCE</span><h2>Names today.<br />Life stories to come.</h2></div><div><p>Over time, we hope to add individual tributes documenting the lives, contributions, and memories behind these names. For now, this page presents the source index; individual biographies have not yet been added.</p><p>Names and dates follow the MSOA spreadsheet. Partial and approximate dates remain as recorded; a missing date means the source did not provide one. Two exact repeated listings are shown once, representing all {memorial.sourceRowCount} source listings.</p><p>This is an independent NASAEMPLOYEES.COM presentation of the source list.</p></div></section>
    <PublicFooter title="NASA Employees" text="Remembering the people behind the mission." />
  </main>;
}
