export const GLYPHS = [
  { id: 'rays', meaning: 'Sun', path: 'M40 25a15 15 0 1 0 0 30a15 15 0 1 0 0-30 M40 8v9 M40 63v9 M8 40h9 M63 40h9 M17 17l7 7 M56 56l7 7 M17 63l7-7 M56 24l7-7' },
  { id: 'waves', meaning: 'Water', path: 'M10 26q8-10 15 0t15 0t15 0t15 0 M10 40q8-10 15 0t15 0t15 0t15 0 M10 54q8-10 15 0t15 0t15 0t15 0' },
  { id: 'shelter', meaning: 'Home', path: 'M12 36L40 12l28 24 M20 30v36h40V30 M33 66V45h14v21' },
  { id: 'sprout', meaning: 'Life', path: 'M40 70V35 M40 46Q12 48 14 18Q42 18 40 46 M40 35Q40 10 65 12Q68 38 40 35 M24 70h32' },
  { id: 'joined', meaning: 'Friendship', path: 'M28 20a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M52 20a10 10 0 1 0 0 20a10 10 0 1 0 0-20 M13 65q0-23 15-23l12 13l12-13q15 0 15 23 M28 47v18 M52 47v18' },
  { id: 'arrow', meaning: 'Travel', path: 'M10 40h57 M48 20l20 20l-20 20 M12 57h17 M8 23h17' },
  { id: 'bowl', meaning: 'Food', path: 'M12 38h56q-3 28-28 28T12 38 M28 29q-8-8 0-16 M40 29q-8-8 0-16 M52 29q-8-8 0-16' },
  { id: 'pulse', meaning: 'Heartbeat', path: 'M8 40h17l8-22l13 43l9-21h17' },
  { id: 'orbit', meaning: 'Earth', path: 'M40 15a25 25 0 1 0 0 50a25 25 0 1 0 0-50 M15 40h50 M40 15q-25 25 0 50q25-25 0-50 M20 25h40 M20 55h40' },
  { id: 'spark', meaning: 'Hope', path: 'M40 8l8 24l24 8l-24 8l-8 24l-8-24l-24-8l24-8Z' },
  { id: 'signal', meaning: 'Greeting', path: 'M40 48a5 5 0 1 0 0 10a5 5 0 1 0 0-10 M26 40q14-15 28 0 M17 30q23-24 46 0 M8 20q32-32 64 0 M40 58v12' },
  { id: 'mountain', meaning: 'Danger', path: 'M40 10L8 68h64Z M40 28v20 M40 57v2' },
] as const;
export type Slot = { glyph: string; meaning: string };
export type GoldenRecord = { version: 1; title: string; slots: Slot[] };
export const MEANINGS = GLYPHS.map(g => g.meaning);
export function shuffled<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}
export function newRecord(): GoldenRecord {
  return { version: 1, title: 'A message from Earth', slots: shuffled(GLYPHS).slice(0, 6).map(g => ({ glyph: g.id, meaning: g.meaning })) };
}
export function parseRecord(value: unknown): GoldenRecord {
  if (!value || typeof value !== 'object') throw new Error('Invalid record');
  const r = value as GoldenRecord;
  if (r.version !== 1 || typeof r.title !== 'string' || r.title.length > 60 || !Array.isArray(r.slots) || r.slots.length !== 6 || !r.slots.every(s => s && GLYPHS.some(g => g.id === s.glyph) && MEANINGS.includes(s.meaning as typeof MEANINGS[number]))) throw new Error('Invalid record');
  return { version: 1, title: r.title, slots: r.slots.map(s => ({ glyph: s.glyph, meaning: s.meaning })) };
}
