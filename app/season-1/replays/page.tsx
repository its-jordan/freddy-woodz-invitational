'use client';
// @ts-ignore
import Data from '@/data/replays.yaml';
import dynamic from 'next/dynamic';

const Replay = dynamic(() => import('@/components/replay'), {
  loading: () => (
    <div className='loading'>
      <p>Loading...</p>
    </div>
  ),
});

export default function Replays() {
  const PlayerArray = Data;

  return (
    <main className='mb-16 mt-0 replay-main'>
      {/* <nav className={'replay-nav display'}>{Nav()}</nav> */}
      <div className='replays-wrapper'>
        {PlayerArray.sort((a: any, b: any) =>
          a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
        ).map((element: any, index: any) => {
          return <Replay element={element} index={index} key={index} />;
        })}
      </div>
    </main>
  );
}
