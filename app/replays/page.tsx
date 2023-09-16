'use client';

import './replays.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Replays() {
  const [clicked, setClicked] = useState(true);

  const PlayerArray = [
    {
      player1: 'its_jordan',
      player2: 'castleflutes',
      game: '1',
      player1Id: '208943681',
      player2Id: '208943656',
    },
    {
      player1: 'castleflutes',
      player2: 'seanboyq',
      game: '1',
      player1Id: '208943656',
      player2Id: '208943645',
    },
    {
      player1: 'castleflutes',
      player2: 'seanboyq',
      game: '2',
      player1Id: '208943656',
      player2Id: '208943645',
    },
    {
      player1: 'castleflutes',
      player2: 'seanboyq',
      game: '3',
      player1Id: '208943656',
      player2Id: '208943645',
    },
    {
      player1: 'its_jordan',
      player2: 'danknett',
      game: '1',
      player1Id: '208943681',
      player2Id: '208943667',
    },
    {
      player1: 'its_jordan',
      player2: 'danknett',
      game: '2',
      player1Id: '208943681',
      player2Id: '208943667',
    },
    {
      player1: 'danknett',
      player2: 'tokotoro',
      game: '1',
      player1Id: '208943667',
      player2Id: '208943657',
    },
    {
      player1: 'danknett',
      player2: 'tokotoro',
      game: '2',
      player1Id: '208943667',
      player2Id: '208943657',
    },
    {
      player1: 'dtbaggins',
      player2: 'castleflutes',
      game: '1',
      player1Id: '208943648',
      player2Id: '208943656',
    },
    {
      player1: 'dtbaggins',
      player2: 'castleflutes',
      game: '2',
      player1Id: '208943648',
      player2Id: '208943656',
    },
    {
      player1: 'resolamxxy',
      player2: 'dtbaggins',
      game: '1',
      player1Id: '208943647',
      player2Id: '208943648',
    },
    {
      player1: 'resolamxxy',
      player2: 'dtbaggins',
      game: '2',
      player1Id: '208943647',
      player2Id: '208943648',
    },
    {
      player1: 'foxish',
      player2: 'dtbaggins',
      game: '1',
      player1Id: '208943679',
      player2Id: '208943648',
    },
    {
      player1: 'castleflutes',
      player2: 'ifurgat',
      game: '1',
      player1Id: '208943656',
      player2Id: '208943635',
    },
    {
      player1: 'castleflutes',
      player2: 'ifurgat',
      game: '2',
      player1Id: '208943656',
      player2Id: '208943635',
    },
    {
      player1: 'castleflutes',
      player2: 'ifurgat',
      game: '3',
      player1Id: '208943656',
      player2Id: '208943635',
    },
    {
      player1: 'dtbaggins',
      player2: 'ifurgat',
      game: '1',
      player1Id: '208943648',
      player2Id: '208943635',
    },
    {
      player1: 'dtbaggins',
      player2: 'ifurgat',
      game: '2',
      player1Id: '208943648',
      player2Id: '208943635',
    },
    {
      player1: 'tokotoro',
      player2: 'its_jordan',
      game: '1',
      player1Id: '208943657',
      player2Id: '208943681',
    },
    {
      player1: 'tokotoro',
      player2: 'its_jordan',
      game: '2',
      player1Id: '208943657',
      player2Id: '208943681',
    },
    {
      player1: 'seanboyq',
      player2: 'resolamxxy',
      game: '1',
      player1Id: '208943645',
      player2Id: '208943647',
    },
    {
      player1: 'seanboyq',
      player2: 'resolamxxy',
      game: '2',
      player1Id: '208943645',
      player2Id: '208943647',
    },
    {
      player1: 'seanboyq',
      player2: 'tokotoro',
      game: '1',
      player1Id: '208943645',
      player2Id: '208943657',
    },
    {
      player1: 'seanboyq',
      player2: 'tokotoro',
      game: '2',
      player1Id: '208943645',
      player2Id: '208943657',
    },
    {
      player1: 'seanboyq',
      player2: 'tokotoro',
      game: '3',
      player1Id: '208943645',
      player2Id: '208943657',
    },
    {
      player1: 'ifurgat',
      player2: 'resolamxxy',
      game: '1',
      player1Id: '208943635',
      player2Id: '208943647',
    },
    {
      player1: 'ifurgat',
      player2: 'resolamxxy',
      game: '2',
      player1Id: '208943635',
      player2Id: '208943647',
    },
    {
      player1: 'dtbaggins',
      player2: 'danknett',
      game: '3',
      player1Id: '208943648',
      player2Id: '208943667',
    },
    {
      player1: 'dtbaggins',
      player2: 'danknett',
      game: '1',
      player1Id: '208943648',
      player2Id: '208943667',
    },
    {
      player1: 'dtbaggins',
      player2: 'danknett',
      game: '2',
      player1Id: '208943648',
      player2Id: '208943667',
    },
  ];

  function Nav() {
    const PlayerLinks = PlayerArray.sort((a, b) =>
      a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
    ).map((player, index) => {
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
        {PlayerArray.sort((a, b) =>
          a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
        ).map((element, index) => {
          return (
            <div
              id={`${element.player1Id}-${element.player2Id}-${element.game}`}
              key={index}
              className='replay-container'
              data-player-1={element.player1}
              data-player-2={element.player2}
              data-game={element.game}>
              <div className='replay-heading'>
                {element.player1.charAt(0).toUpperCase().replace('I', 'i') +
                  element.player1.slice(1).replace('q', 'Q')}{' '}
                vs.{' '}
                {element.player2.charAt(0).toUpperCase().replace('I', 'i') +
                  element.player2.slice(1).replace('q', 'Q')}{' '}
                - Game {element.game}
              </div>
              <div className='showdown-iframe-container'>
                <iframe
                  src={`./replays/${element.player1}-${element.player2}-${element.game}.html`}
                  width='1100px'
                  height='1100px'
                  loading='lazy'></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
