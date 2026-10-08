import Link from 'next/link';
import { GLYPHS } from '@/lib/golden-record';
import s from './GoldenRecordHero.module.css';

export function GoldenRecordHero() {
  return (
    <section className={s.hero} aria-labelledby="golden-record-hero-title">
      <div className={s.copy}>
        <span className={s.eyebrow}>NEW INTERACTIVE GAME · VOYAGER INSPIRED</span>
        <h3 id="golden-record-hero-title">Six symbols.<br />One message.<br /><em>Can you read it?</em></h3>
        <p>Become an interstellar translator. Decode a mysterious Golden Record, discover what gets lost in translation, then create and save your own message to the universe.</p>
        <Link href="/golden-record" className={s.cta}>Play Golden Record Decoder <span aria-hidden="true">↗</span></Link>
        <span className={s.caption}>No account needed · Play, create, save & share</span>
      </div>
      <div className={s.art} aria-hidden="true">
        <span className={s.transmission}>INCOMING TRANSMISSION / EARTH</span>
        <svg viewBox="0 0 500 500" fill="none">
          <defs>
            <linearGradient id="home-record-gold" x1="40" y1="20" x2="450" y2="480" gradientUnits="userSpaceOnUse"><stop stopColor="#ffe4a3"/><stop offset=".3" stopColor="#c39448"/><stop offset=".5" stopColor="#f5d68e"/><stop offset=".75" stopColor="#ae7b32"/><stop offset="1" stopColor="#e7bf6d"/></linearGradient>
          </defs>
          <circle cx="250" cy="250" r="235" fill="url(#home-record-gold)" stroke="#f3d48d" strokeWidth="3"/>
          {Array.from({length:52},(_,i)=><circle key={i} cx="250" cy="250" r={30+i*3.8} stroke="#593b16" strokeOpacity=".17" strokeWidth="1"/>)}
          <circle cx="250" cy="250" r="23" fill="#0a1523" stroke="#f5d993" strokeWidth="6"/>
          {GLYPHS.slice(0,6).map((glyph,i)=>{
            const x=250+145*Math.sin(i*Math.PI/3),y=250-145*Math.cos(i*Math.PI/3);
            return <g key={glyph.id} transform={`translate(${x-33} ${y-33})`} stroke="#473117" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><g transform="scale(.825)"><path d={glyph.path}/></g><text x="33" y="83" textAnchor="middle" stroke="none" fill="#473117" fontFamily="monospace" fontSize="11" letterSpacing="2">0{i+1}</text></g>;
          })}
        </svg>
        <span className={s.transmission}>A MESSAGE WITHOUT A SHARED LANGUAGE</span>
      </div>
    </section>
  );
}
