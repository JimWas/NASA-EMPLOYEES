"use client";

import { useMemo, useState } from "react";
import styles from "@/app/memoriam/memoriam.module.css";

type Entry = { id: string; slug: string; firstName: string; lastName: string; passing: string; dateISO: string | null; reviewDate: boolean; sourceRows: number[] };
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function MemoriamIndex({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("");
  const filtered = useMemo(() => {
    const words = normalize(query).split(" ").filter(Boolean);
    return entries.filter(entry => (!letter || entry.lastName.toUpperCase().startsWith(letter)) && words.every(word => normalize(`${entry.firstName} ${entry.lastName}`).includes(word)))
      .sort((a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName));
  }, [entries, query, letter]);
  const groups = alphabet.map(initial => ({ initial, entries: filtered.filter(entry => entry.lastName.toUpperCase().startsWith(initial)) })).filter(group => group.entries.length);
  return <section id="remembrance-index" className={styles.index} aria-labelledby="index-title">
    <div className={styles.indexHeading}><div><span className={styles.eyebrow}>THE REMEMBRANCE INDEX</span><h2 id="index-title">Every name, remembered.</h2></div><p>Browse by surname or search for someone by name.</p></div>
    <div className={styles.tools}>
      <label className={styles.search}>Search names<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="First name or last name" autoComplete="off" /></label>
      <div className={styles.letters} role="group" aria-label="Filter by last-name initial"><button type="button" aria-pressed={letter === ""} onClick={() => setLetter("")}>All</button>{alphabet.map(initial => <button type="button" key={initial} aria-pressed={letter === initial} disabled={!entries.some(entry => entry.lastName.toUpperCase().startsWith(initial))} onClick={() => setLetter(initial)}>{initial}</button>)}</div>
    </div>
    <div className={styles.results}><p role="status" aria-live="polite">{filtered.length.toLocaleString("en-US")} of {entries.length.toLocaleString("en-US")} names{letter ? ` · Surnames beginning with ${letter}` : ""}</p>{(query || letter) && <button type="button" onClick={() => {setQuery("");setLetter("");}}>Clear filters</button>}</div>
    {!filtered.length && <p className={styles.empty}>No names match these filters. Try another name or clear the filters.</p>}
    {groups.map(group => <section key={group.initial} className={styles.group} aria-labelledby={`surname-${group.initial}`}><h3 id={`surname-${group.initial}`}>{group.initial}<span>{group.entries.length} names</span></h3><ul className={styles.names}>{group.entries.map(entry => <li key={entry.id}><span className={styles.name}>{entry.firstName} <strong>{entry.lastName}</strong></span><span className={styles.date}>{entry.dateISO ? <time dateTime={entry.dateISO}>{entry.passing}</time> : entry.passing || "Date not recorded"}{entry.reviewDate && " · Source date needs verification"}</span></li>)}</ul></section>)}
  </section>;
}
