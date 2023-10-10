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
          href={
            pathname == `/season-1/teams` ||
            `/season-1/scores` ||
            `/season-1/replays` ||
            `/season-1/playoffs`
              ? '../'
              : './'
          }
          className={pathname == `/` ? 'nav-header active' : 'nav-header'}>
          Teams
        </Link>
        {Players.map((player: any, index: any) => {
          return (
            <Link
              // @ts-ignore
              href={
                pathname == `/season-1/teams` ||
                `/season-1/scores` ||
                `/season-1/replays` ||
                `/season-1/playoffs`
                  ? `../#${
                      player.player.charAt(0).toLowerCase() +
                      player.player.slice(1)
                    }`
                  : `./#${
                      player.player.charAt(0).toLowerCase() +
                      player.player.slice(1)
                    }`
              }
              key={index}
              data-player={
                player.player.charAt(0).toLowerCase() + player.player.slice(1)
              }>
              {NameSplit(player.player)}
            </Link>
          );
        })}
        <div className='nav-divider'></div>
        <ul className='replays-dropdown-container'>
          <Link
            href={
              pathname == `/season-1/teams` ||
              `/season-1/scores` ||
              `/season-1/replays` ||
              `/season-1/playoffs`
                ? '../replays'
                : './replays'
            }
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
                    href={
                      pathname == `/season-1/teams` ||
                      `/season-1/scores` ||
                      `/season-1/replays` ||
                      `/season-1/playoffs`
                        ? `../replays#${player.player1}-${player.player2}-${player.game}`
                        : `./replays#${player.player1}-${player.player2}-${player.game}`
                    }
                    data-player1={`${player.player1}`}
                    className='replay-dropdown-link'
                    key={index}>
                    {NameSplit(player.player1)} vs. {NameSplit(player.player2)}{' '}
                    - G{player.game}
                  </Link>
                );
              })}
          </ul>
        </ul>
        <Link
          href={
            pathname == `/season-1/teams` ||
            `/season-1/scores` ||
            `/season-1/replays` ||
            `/season-1/playoffs`
              ? '../scores'
              : './scores'
          }
          className={pathname == `/scores` ? 'active' : ''}>
          Scores
        </Link>
        <Link
          href={
            pathname == `/season-1/teams` ||
            `/season-1/scores` ||
            `/season-1/replays` ||
            `/season-1/playoffs`
              ? '../playoffs'
              : './playoffs'
          }
          className={pathname == `/playoffs` ? 'active' : ''}>
          Playoffs
        </Link>
        <Link
          href={
            pathname == `/season-1/teams` ||
            `/season-1/scores` ||
            `/season-1/replays` ||
            `/season-1/playoffs`
              ? '../meme'
              : './meme'
          }
          className={pathname == `/meme` ? 'active' : ''}>
          Discord Tiers
        </Link>
        {/* <div>
          <div>Season 1</div>
          <div>
            <Link
              href={
                pathname !== `season-1/teams` ||
                `season-1/scores` ||
                `season-1/replays` ||
                `season-1/playoffs`
                  ? '/season-1/teams'
                  : '/season-1/teams'
              }>
              Teams
            </Link>
            <Link
              href={
                pathname !== `season-1/teams` ||
                `season-1/scores` ||
                `season-1/replays` ||
                `season-1/playoffs`
                  ? '/season-1/scores'
                  : '/season-1/scores'
              }>
              Scores
            </Link>
            <Link
              href={
                pathname !== `season-1/teams` ||
                `season-1/scores` ||
                `season-1/replays` ||
                `season-1/playoffs`
                  ? '/season-1/replays'
                  : '/season-1/replays'
              }>
              Replays
            </Link>
            <Link
              href={
                pathname !== `season-1/teams` ||
                `season-1/scores` ||
                `season-1/replays` ||
                `season-1/playoffs`
                  ? '/season-1/playoffs'
                  : '/season-1/playoffs'
              }>
              Playoffs
            </Link>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default Nav;
