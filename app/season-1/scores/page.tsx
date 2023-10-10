import Standings from '@/components/standingsArrays';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scores | Freddy Woodz Invitational',
  description:
    'Scores and Standings for Freddy Woodz Invitational Pokemon Showdown Tournament',
};

export default function Scores() {
  return (
    <main className=''>
      <Standings />
    </main>
  );
}
