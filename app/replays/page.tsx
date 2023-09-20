'use client';

import './replays.css';
import Link from 'next/link';
import { useState } from 'react';
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
  const [clicked, setClicked] = useState(false);

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
      <button
        onClick={() => setClicked((current) => !current)}
        className={clicked ? 'nav-button clicked' : 'nav-button'}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className={clicked ? 'replay-nav display' : 'replay-nav hide'}>
        {Nav()}
      </nav>
      <div
        className={
          clicked ? 'notice replay-notice-clicked' : 'notice replay-notice'
        }>
        Games may not be in actual play order.
      </div>
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
