import Standings from '@/components/standingsArrays';
import type { Metadata } from 'next';
import { unstable_noStore as noStore } from 'next/cache';

export const metadata: Metadata = {
  title: 'Scores | Freddy Woodz Invitational',
  description:
    'Scores and Standings for Freddy Woodz Invitational Pokemon Showdown Tournament',
};

export default function Scores() {
  noStore();
  return (
    <main className=''>
      <Standings />
    </main>
  );
}
