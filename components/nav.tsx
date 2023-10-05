'use client';

import Link from 'next/link';
// @ts-ignore
import Data from '../data/replays.yaml';
import { useState } from 'react';

export const navLinks = [
  {
    name: 'SeanBoyQ',
    path: './#seanboyq',
  },
  {
    name: 'resolamxxy',
    path: './#resolamxxy',
  },
  {
    name: 'DTBaggins',
    path: './#dtbaggins',
  },
  {
    name: 'Castleflutes',
    path: './#castleflutes',
  },
  {
    name: 'Tokotoro',
    path: './#tokotoro',
  },
  {
    name: 'Danknett',
    path: './#danknett',
  },
  {
    name: 'iFurgat',
    path: './#ifurgat',
  },
  {
    name: 'Foxish',
    path: './#foxish',
  },
  {
    name: 'its_jordan',
    path: './#its_jordan',
  },
];

function Nav() {
  const [nav, setNav] = useState(false);
  const replayData = Data;
  return (
    <>
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
        <Link className='nav-header' href='./'>
          Teams
        </Link>
        {navLinks.map((link, index) => {
          return (
            <Link
              // @ts-ignore
              href={link?.path}
              key={index}
              data-player={link?.path.split('#')[1]}>
              {link?.name}
            </Link>
          );
        })}
        <div className='nav-divider'></div>
        <ul className='replays-dropdown-container'>
          <Link className='replays-dropdown-header' href='./replays'>
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
                    data-player1={`${player.player1Id}`}
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
        <Link href='./scores'>Scores</Link>
        <Link href='./meme'>Discord Tiers</Link>
        {/* <Link href='./archive'>Season 1 Archive</Link> */}
      </nav>
    </>
  );
}

export default Nav;
