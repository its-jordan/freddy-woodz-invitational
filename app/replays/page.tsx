'use client';

import './replays.css';
import Link from 'next/link';
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

  function Nav() {
    const PlayerLinks = PlayerArray.sort((a: any, b: any) =>
      a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
    ).map((player: any, index: any) => {
      if (player.game !== '1') {
        return <></>;
      } else {
        return (
          <Link
            href={`./replays/#${player.player1Id}-${player.player2Id}-1`}
            data-player1={`${player.player1Id}`}
            key={index}>
            <li key={index}>{`${player.player1} vs. ${player.player2}`}</li>
          </Link>
        );
      }
    });
    return PlayerLinks;
  }

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
