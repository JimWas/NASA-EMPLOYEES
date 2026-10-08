import type { Metadata } from 'next';
import { PublicHeader } from '@/components/PublicHeader';
import { pageMeta } from '@/lib/meta';
import { GoldenRecordGame } from '@/components/GoldenRecordGame';
export const metadata: Metadata = pageMeta({ title: 'Golden Record Decoder', description: 'Translate six mysterious symbols, discover what gets lost in translation, and create a Golden Record of your own.', path: '/golden-record' });
export default function Page() {
  return <main className="page-shell"><PublicHeader eyebrow="An interstellar experiment" title="Golden Record Decoder" links={[{label:'Home',href:'/'},{label:'Deep Space Echo',href:'/deep-space-echo'}]} /><GoldenRecordGame /></main>;
}
