'use client';

import Link from 'next/link';
// @ts-ignore
import Data from '../data/replays.yaml';
// @ts-ignore
import Players from '../data/players.yaml';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NameSplit(e: string) {
  const player = e;
  if (player === 'ifurgat') {
    return 'iFurgat';
  } else if (player === 'resolamxxy') {
    return 'resolamxxy';
  } else if (player === 'seanboyq') {
    return 'SeanBoyQ';
  } else if (player === 'tokotoro') {
    return 'Tokotoro';
  } else if (player === 'castleflutes') {
    return 'Castleflutes';
  } else if (player === 'danknett') {
    return 'Danknett';
  } else if (player === 'its_jordan') {
    return 'its_jordan';
  } else if (player === 'foxish') {
    return 'Foxish';
  } else if (player === 'dtbaggins') {
    return 'DTBaggins';
  } else {
    return player;
  }
}

function Nav() {
  const pathname = usePathname();

  const [nav, setNav] = useState(false);
  const replayData = Data;
  return (
    <div className='nav-links-container'>
      <button
        className={
          nav
            ? 'nav-button-mobile closed hide'
            : 'nav-button-mobile closed show'
        }
        onClick={() => {
          setNav(true);
        }}>
        Open Nav 🠞
      </button>
      <nav className={nav ? 'navigation visible' : 'navigation hidden'}>
        <button
          className='nav-button-mobile open'
          onClick={() => {
            setNav(false);
          }}>
          🠜 Close Nav
        </button>
        <Link
          href='./'
          className={pathname == `/` ? 'nav-header active' : 'nav-header'}>
          Teams
        </Link>
        {Players.map((player: any, index: any) => {
          return (
            <Link
              // @ts-ignore
              href={`./#${player.player}`}
              key={index}
              data-player={player.player}>
              {NameSplit(player.player)}
            </Link>
          );
        })}
        <div className='nav-divider'></div>
        <ul className='replays-dropdown-container'>
          <Link
            href='./replays'
            className={
              pathname == `/replays`
                ? 'replays-dropdown-header active'
                : 'replays-dropdown-header'
            }>
            Replays
          </Link>
          <ul className='replays-dropdown'>
            {replayData
              .sort((a: any, b: any) =>
                a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
              )
              .map((player: any, index: any) => {
                return (
                  <Link
                    href={`./replays#${player.player1}-${player.player2}-${player.game}`}
                    data-player1={`${player.player1}`}
                    className='replay-dropdown-link'
                    key={index}>
                    {player.player1.charAt(0).toUpperCase() +
                      player.player1.slice(1)}{' '}
                    vs.{' '}
                    {player.player2.charAt(0).toUpperCase() +
                      player.player2.slice(1)}{' '}
                    - G{player.game}
                  </Link>
                );
              })}
          </ul>
        </ul>
        <Link href='./scores' className={pathname == `/scores` ? 'active' : ''}>
          Scores
        </Link>
        <Link
          href='./playoffs'
          className={pathname == `/playoffs` ? 'active' : ''}>
          Playoffs
        </Link>
        <Link href='./meme' className={pathname == `/meme` ? 'active' : ''}>
          Discord Tiers
        </Link>
        {/* <Link href='./season-1'>Season 1</Link> */}
      </nav>
    </div>
  );
}

export default Nav;
