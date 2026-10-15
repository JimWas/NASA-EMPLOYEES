"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "@/app/archives/jsc-telephone-directory-2002/archive.module.css";

export type ArchivePage = {
  number: number;
  title: string;
  section: string;
  text: string;
  engine: string;
  columns: string[];
  alternateColumns?: string[];
  alternateText?: string;
  reviewNote?: string;
};

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return <>{parts.map((part, index) => part.toLowerCase() === query.toLowerCase() ? <mark key={index}>{part}</mark> : part)}</>;
}

export function DirectoryArchive({ pages }: { pages: ArchivePage[] }) {
  const [number, setNumber] = useState(1);
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"read" | "scan" | "compare">("compare");
  const [all, setAll] = useState(false);
  const [engine, setEngine] = useState<"primary" | "alternate">("primary");
  useEffect(() => {
    const sync = () => {
      const match = window.location.hash.match(/^#page-(\d+)$/);
      if (match) setNumber(Math.min(pages.length, Math.max(1, Number(match[1]))));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pages.length]);
  const page = pages[number - 1];
  const columns = engine === "alternate" && page.alternateColumns ? page.alternateColumns : page.columns;
  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return [];
    return pages.filter(p => p.text.toLocaleLowerCase().includes(term) || p.alternateText?.toLocaleLowerCase().includes(term)).map(p => {
      const source = p.text.toLocaleLowerCase().includes(term) ? p.text : p.alternateText!;
      const index = source.toLocaleLowerCase().indexOf(term);
      return { page: p, engine: source === p.text ? "primary" as const : "alternate" as const, snippet: source.slice(Math.max(0, index - 65), index + term.length + 110).replace(/\s+/g, " ") };
    });
  }, [pages, query]);
  const sections = useMemo(() => pages.filter((p, i) => i === 0 || p.section !== pages[i - 1].section), [pages]);
  function go(value: number) {
    const next = Math.min(pages.length, Math.max(1, value));
    setNumber(next);
    window.history.replaceState(null, "", `#page-${next}`);
  }
  return (
    <section className={styles.archive} id="directory-reader" aria-label="Historical directory reader">
      <div className={styles.searchBar}>
        <div><span className={styles.kicker}>SEARCH THE COMPLETE DIRECTORY</span><label className={styles.search}><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search a name, organization, building, or phone number…" aria-label="Search all 99 pages" />{query && <button onClick={() => setQuery("")} aria-label="Clear search">×</button>}</label></div>
        <p>99 pages.<br /><strong>One searchable record.</strong></p>
      </div>
      {query.trim() && <div className={styles.results} aria-live="polite"><h3>{results.length} matching {results.length === 1 ? "page" : "pages"}</h3>{results.length === 0 && <p>No exact matches. Try a surname or a shorter term; errors in the original scan can affect search.</p>}<div className={styles.resultGrid}>{results.map(({ page: p, snippet, engine: resultEngine }) => <button key={p.number} onClick={() => { go(p.number); setEngine(resultEngine); setAll(false); }} aria-current={p.number === number ? "page" : undefined}><span>PDF {String(p.number).padStart(2, "0")} · {p.section}</span><p><Highlight text={snippet} query={query.trim()} /></p></button>)}</div></div>}
      <div className={styles.readerLayout}>
        <aside className={styles.sidebar}>
          <span className={styles.kicker}>IN THIS VOLUME</span>
          <nav aria-label="Directory sections">{sections.map(p => <button key={p.section} aria-current={page.section === p.section ? "page" : undefined} onClick={() => { go(p.number); setAll(false); }}><span>{p.section}</span><small>{String(p.number).padStart(2, "0")}</small></button>)}</nav>
          <div className={styles.sidebarNote}><strong>A moment in NASA history.</strong><p>Published listings, offices, and contact details reflect the source document. They are not current contact information.</p></div>
          <a href="/archives/jsc-2002/jsc-directory-2002-names-phones.csv" download>Download names &amp; phones (CSV) ↓</a>
          <a href="/archives/jsc-2002/transcript.txt" download>Download full text ↓</a>
          <a href="/archives/jsc-2002/jsc-telephone-directory-2002.pdf" target="_blank" rel="noreferrer">Original PDF ↗</a>
        </aside>
        <div className={styles.reader}>
          <div className={styles.toolbar}>
            <label>PDF page <select value={number} onChange={e => { go(Number(e.target.value)); setAll(false); }}>{pages.map(p => <option key={p.number} value={p.number}>{p.number} / {pages.length} — {p.title}</option>)}</select></label>
            <div className={styles.tabs} role="group" aria-label="Reading view">{([['read', 'Text'], ['scan', 'Scan'], ['compare', 'Compare']] as const).map(([key, label]) => <button key={key} aria-pressed={view === key} onClick={() => { setView(key); setAll(false); }}>{label}</button>)}</div>
          </div>
          <div className={styles.pageHeading}><div><span className={styles.kicker}>{page.section}</span><h3>{page.title}</h3></div><span className={styles.pageNumber}>{String(number).padStart(2, "0")}<small> / 99</small></span></div>
          {view !== "scan" && <label className={styles.engineChoice}>Text reading <select value={engine} onChange={e => setEngine(e.target.value as "primary" | "alternate")}><option value="primary">Apple Vision · local OCR</option><option value="alternate">Tesseract · English best</option></select></label>}
          {page.reviewNote && <p className={styles.reviewNote}>{page.reviewNote}</p>}
          <div className={`${styles.pageBody} ${view === "compare" ? styles.compare : ""}`}>
            {view !== "scan" && <article className={styles.transcript} aria-label={`Transcription of PDF page ${number}`}><div className={styles.paperLabel}>SEARCHABLE TRANSCRIPTION</div>{columns.map((column, i) => <div className={styles.textColumn} key={i}>{columns.length > 1 && <h4>Column {i + 1}</h4>}{page.section === "Employee directory" && engine === "primary" ? <div className={styles.tableScroll}><table className={styles.directoryTable}><thead><tr>{["Phone", "Name", "Bldg.", "Room", "Mail code"].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead><tbody>{column.split("\n").map((line, row) => { const cells = line.split(/\s{2,}/); return cells.length === 5 ? <tr key={row}>{cells.map((cell, col) => <td key={col}><Highlight text={cell} query={query.trim()} /></td>)}</tr> : <tr key={row}><td colSpan={5}><Highlight text={line} query={query.trim()} /></td></tr>; })}</tbody></table></div> : <pre><Highlight text={column} query={query.trim()} /></pre>}</div>)}{!page.text.trim() && <p>This page contains a graphic or map. Consult the original scan for the complete visual record.</p>}</article>}
            {view !== "read" && <figure className={styles.scan}><a href={`/archives/jsc-2002/page-${String(number).padStart(3, "0")}.webp`} target="_blank" rel="noreferrer" aria-label={`Open full-resolution scan of page ${number}`}><img src={`/archives/jsc-2002/page-${String(number).padStart(3, "0")}.webp`} alt={`Original scan, PDF page ${number}: ${page.title}`} width={850} height={1100} /></a><figcaption>Original page · Select to enlarge ↗</figcaption></figure>}
          </div>
          <div className={styles.pager}><button disabled={number === 1} onClick={() => go(number - 1)}>← Previous page</button><span>PDF page {number} of {pages.length}</span><button disabled={number === pages.length} onClick={() => go(number + 1)}>Next page →</button></div>
          <p className={styles.ocrNote}>Machine-transcribed historical material. Check names, numbers, and unclear text against the scan. PDF page numbers include the cover and may differ from printed page numbers.</p>
          <button className={styles.fullToggle} onClick={() => setAll(!all)} aria-expanded={all}>{all ? "Hide" : "Read"} the complete 99-page transcription {all ? "−" : "+"}</button>
          {all && <div className={styles.fullText}>{pages.map(p => <section key={p.number}><h3>PDF page {p.number} · {p.title}</h3><pre><Highlight text={p.text} query={query.trim()} /></pre></section>)}</div>}
        </div>
      </div>
    </section>
  );
}
