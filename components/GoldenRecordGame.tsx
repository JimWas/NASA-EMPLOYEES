'use client';
import { useEffect, useRef, useState } from 'react';
import { GLYPHS, MEANINGS, GoldenRecord, newRecord, parseRecord, shuffled } from '@/lib/golden-record';
import s from './GoldenRecordGame.module.css';
const STORAGE = 'golden-record-library-v1';
function Glyph({ id }: { id: string }) {
  return <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={GLYPHS.find(g => g.id === id)?.path} /></svg>;
}
export function GoldenRecordGame() {
  const [record, setRecord] = useState<GoldenRecord>({version:1,title:'A message from Earth',slots:GLYPHS.slice(0,6).map(g=>({glyph:g.id,meaning:g.meaning}))});
  const [mode, setMode] = useState<'decode'|'create'|'reveal'>('decode');
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(6).fill(''));
  const [other, setOther] = useState<string[]>(Array(6).fill(''));
  const [options, setOptions] = useState<string[][]>([]);
  const [library, setLibrary] = useState<GoldenRecord[]>([]);
  const [notice, setNotice] = useState('');
  const [ready, setReady] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLHeadingElement>(null);
  function begin(r: GoldenRecord) {
    setRecord(r); setMode('decode'); setActive(0); setAnswers(Array(6).fill('')); setOther(Array(6).fill(''));
    setOptions(r.slots.map(slot => shuffled([slot.meaning,...shuffled(MEANINGS.filter(m=>m!==slot.meaning)).slice(0,3)])));
  }
  useEffect(() => {
    let r = newRecord();
    if (location.hash.startsWith('#record=')) {
      try { r = parseRecord(JSON.parse(decodeURIComponent(location.hash.slice(8)))); setNotice('Incoming record loaded. Its intended meanings stay hidden until the reveal.'); }
      catch { setNotice('That challenge link could not be opened. Here is a new record instead.'); }
    }
    begin(r);
    try { const stored: unknown = JSON.parse(localStorage.getItem(STORAGE) || '[]'); if (Array.isArray(stored)) setLibrary(stored.slice(0,20).map(parseRecord)); }
    catch { setNotice('Your saved collection could not be read. You can still play and download records.'); }
    setReady(true);
  }, []);
  const completed = answers.filter((a,i)=>a && (a!=='Something else' || other[i].trim())).length;
  const score = record.slots.filter((slot,i)=>slot.meaning.toLowerCase()===(answers[i]==='Something else'?other[i].trim():answers[i]).toLowerCase()).length;
  function save() {
    const next = [record, ...library.filter(r=>JSON.stringify(r)!==JSON.stringify(record))].slice(0,20);
    try { localStorage.setItem(STORAGE,JSON.stringify(next)); setLibrary(next); setNotice('Saved on this device. Download a copy to keep it elsewhere.'); }
    catch { setNotice('This browser could not save the record. Use Download record to keep a copy.'); }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(record,null,2)],{type:'application/json'}));
    const a = document.createElement('a'); a.href=url; a.download='my-golden-record.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); setNotice('Record downloaded. Use Open record to play it again.');
  }
  async function share() {
    const url = `${location.origin}${location.pathname}#record=${encodeURIComponent(JSON.stringify(record))}`;
    try { await navigator.clipboard.writeText(url); setNotice('Challenge link copied. Send it to a friend to test your symbols.'); }
    catch { setNotice('Copy this challenge link: '+url); }
  }
  function create() { setMode('create'); setActive(0); setNotice('Choose a symbol and the meaning you want it to carry. You have six spaces.'); }
  function move(i:number) { setActive(i); panelRef.current?.focus(); }
  function advance(nextAnswers: string[]) {
    // Search forward, wrapping around to any skipped or unfinished symbol.
    for (let offset = 1; offset < 6; offset++) {
      const index = (active + offset) % 6;
      if (!nextAnswers[index] || (nextAnswers[index] === 'Something else' && !other[index].trim())) {
        move(index);
        return;
      }
    }
    setNotice('All six symbols interpreted. Reveal the message when you are ready.');
  }
  function chooseAnswer(choice: string) {
    const nextAnswers = answers.map((value, index) => index === active ? choice : value);
    setAnswers(nextAnswers);
    if (choice !== 'Something else') advance(nextAnswers);
  }
  return <div className={s.experience}>
    <section className={s.intro}><span className={s.eyebrow}>VOYAGER INSPIRED · CAN YOU READ IT?</span><h2>Across the universe.<br/><em>Does your message make it?</em></h2><p>Six symbols. No shared language. Translate a message from Earth, then make one of your own.</p><div className={s.tabs}><button aria-pressed={mode!=='create'} onClick={()=>begin(newRecord())} disabled={!ready}>Decode a record</button><button aria-pressed={mode==='create'} onClick={create} disabled={!ready}>Create my own ↗</button></div></section>
    <div className={s.workspace}>
      <section className={s.recordSide} aria-label="Your six-symbol record"><div className={s.micro}>INTERSTELLAR MESSAGE / {mode==='create'?'OUTGOING':'INCOMING'}</div><div className={s.disc}>
        <div className={s.hub} aria-hidden="true" />
        {record.slots.map((slot,i)=><button key={i} className={`${s.engraving} ${active===i?s.selected:''}`} style={{left:`${50+30*Math.sin(i*Math.PI/3)}%`,top:`${50-30*Math.cos(i*Math.PI/3)}%`}} aria-label={`Symbol ${i+1}${mode!=='create'&&answers[i]?' — answered':''}`} aria-pressed={active===i} onClick={()=>move(i)}><Glyph id={slot.glyph}/><span>{String(i+1).padStart(2,'0')}{mode!=='create'&&answers[i]?' · ✓':''}</span></button>)}
      </div><p className={s.recordTitle}>{record.title || 'Untitled record'}</p><p className={s.caption}>An imagined message, inspired by the Voyager Golden Record.</p><div className={s.dots}>{record.slots.map((_,i)=><button key={i} className={active===i?s.current:''} aria-label={`Go to symbol ${i+1}`} onClick={()=>move(i)}>{i+1}</button>)}</div></section>
      <section className={s.panel}>
        <div className={s.micro}>{mode==='create'?'RECORD STUDIO':mode==='reveal'?'TRANSLATION REPORT':`DECODER / ${completed} OF 6 INTERPRETED`}</div>
        {mode==='decode'&&<><div className={s.progress}><div style={{width:`${completed/6*100}%`}}/></div><h3 ref={panelRef} tabIndex={-1}>What does symbol {active+1} mean?</h3><p>Trust your interpretation. The sender’s meaning is hidden until you finish.</p><div className={s.bigGlyph}><Glyph id={record.slots[active].glyph}/></div><div className={s.choices}>{[...(options[active]||[]),'Something else','I don’t know'].map(choice=><button key={choice} aria-pressed={answers[active]===choice} className={answers[active]===choice?s.chosen:''} onClick={()=>chooseAnswer(choice)}>{choice}<span>{answers[active]===choice?'●':'○'}</span></button>)}</div>{answers[active]==='Something else'&&<form onSubmit={e=>{e.preventDefault();if(other[active].trim())advance(answers);}}><label className={s.field}>Your interpretation<input maxLength={60} value={other[active]} onChange={e=>setOther(a=>a.map((v,i)=>i===active?e.target.value:v))} placeholder="What do you see?"/></label><button className={s.primary} type="submit" disabled={!other[active].trim()}>Confirm interpretation →</button></form>}<div className={s.actions}><button disabled={active===0} onClick={()=>move(active-1)}>← Back</button><button onClick={()=>move((active+1)%6)}>Next symbol →</button></div><button className={s.primary} disabled={completed!==6} onClick={()=>{setMode('reveal');setNotice('Translations revealed. Different readings are a chance to improve the message.');}}>Reveal the message {completed<6?`(${completed}/6)`:'↗'}</button></>}
        {mode==='create'&&<><h3 ref={panelRef} tabIndex={-1}>What will you tell the universe?</h3><p>Give each symbol an intended meaning. A friend will try to read it without these clues.</p><label className={s.field}>Record name<input maxLength={60} value={record.title} onChange={e=>setRecord({...record,title:e.target.value})}/></label><label className={s.field}>Symbol {active+1} means<select value={record.slots[active].meaning} onChange={e=>setRecord({...record,slots:record.slots.map((slot,i)=>i===active?{...slot,meaning:e.target.value}:slot)})}>{MEANINGS.map(m=><option key={m}>{m}</option>)}</select></label><p className={s.small}>Choose its engraving. Could this shape mean something else?</p><div className={s.palette}>{GLYPHS.map((g,i)=><button key={g.id} aria-label={`Choose engraving ${i+1}`} aria-pressed={record.slots[active].glyph===g.id} className={record.slots[active].glyph===g.id?s.chosen:''} onClick={()=>setRecord({...record,slots:record.slots.map((slot,j)=>j===active?{...slot,glyph:g.id}:slot)})}><Glyph id={g.id}/></button>)}</div><div className={s.actions}><button disabled={active===0} onClick={()=>move(active-1)}>← Previous</button><button onClick={()=>move((active+1)%6)}>Next space →</button></div><button className={s.primary} onClick={save}>Save my Golden Record</button><div className={s.actions}><button onClick={share}>Copy challenge link ↗</button><button onClick={()=>{begin(record);setNotice('Pass the screen to a friend. Your intended meanings are now hidden.');}}>Test on a friend</button></div><p className={s.small}>Challenge links carry the record itself. Answers are hidden during play, but this is a friendly experiment, not a secret code.</p></>}
        {mode==='reveal'&&<><h3>{score} of 6 meanings made it through.</h3><p>{score===6?'You and the sender found a shared language. Could someone else read it differently?':'A symbol can tell two different stories. Where did your interpretations diverge?'}</p><div className={s.results}>{record.slots.map((slot,i)=><div key={i}><div className={s.resultGlyph}><Glyph id={slot.glyph}/></div><div><span>YOU READ</span><strong>{answers[i]==='Something else'?other[i]:answers[i]}</strong><span>SENDER MEANT</span><strong>{slot.meaning}</strong></div><b aria-label={slot.meaning.toLowerCase()===(answers[i]==='Something else'?other[i].trim():answers[i]).toLowerCase()?'Same meaning':'Different interpretation'}>{slot.meaning.toLowerCase()===(answers[i]==='Something else'?other[i].trim():answers[i]).toLowerCase()?'✓':'↔'}</b></div>)}</div><p className={s.small}>This tests one human’s interpretation. It cannot tell us what an extraterrestrial civilization would understand.</p><button className={s.primary} onClick={create}>Remix this record ↗</button><div className={s.actions}><button onClick={()=>begin(newRecord())}>New mystery record</button><button onClick={save}>Keep this record</button></div></>}
      </section>
    </div>
    <section className={s.printSummary}><h3>{mode==='decode'?'Can you translate this message?':'The message inside'}</h3>{record.slots.map((slot,i)=><p key={i}>{i+1}. {mode==='decode'?'________________________':slot.meaning}</p>)}<p>Invented symbols inspired by Voyager. nasaemployees.com/golden-record</p></section>
    <div className={s.toolbox}><div><span className={s.eyebrow}>YOUR MISSION ARCHIVE</span><h3>Keep a message. Pass it on.</h3><p>Saved records stay in this browser. Download a portable copy to reopen on another device.</p></div><div className={s.actions}><button onClick={download}>↓ Download record</button><button onClick={()=>importRef.current?.click()}>↑ Open record</button><button onClick={()=>window.print()}>Print keepsake</button></div><input ref={importRef} type="file" accept=".json,application/json" hidden onChange={async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>10000)throw new Error();begin(parseRecord(JSON.parse(await file.text())));setNotice('Record opened. Translate it, or choose Create my own to edit.');}catch{setNotice('That file is not a valid six-symbol Golden Record. Choose a record downloaded from this game.');}e.target.value='';}}/></div>
    <p className={s.notice} role="status">{notice}</p>
    {library.length>0&&<section className={s.archive} aria-label="Saved records">{library.map((r,i)=><button key={i} onClick={()=>{begin(r);setNotice('Saved record opened.');}}><span>◎</span><strong>{r.title||'Untitled record'}</strong><small>6 symbols · Open →</small></button>)}</section>}
    <section className={s.context}><span className={s.eyebrow}>THE REAL MESSAGE FROM EARTH</span><h3>Voyager carried a record. You carry a perspective.</h3><p>The actual Voyager Golden Record contains images, sounds, music, and greetings. Its cover includes scientific instructions for playing and decoding it. The symbols in this game are invented: explore how meaning travels, then discover the real artifact.</p><a href="https://science.nasa.gov/mission/voyager/golden-record-cover/" target="_blank" rel="noreferrer">Explore the real Voyager cover at NASA ↗</a></section>
  </div>;
}
