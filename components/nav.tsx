'use client';

import Link from 'next/link';
import { useState } from 'react';

export const navLinks = [
  {
    name: 'SeanBoyQ',
    path: './#208943645',
  },
  {
    name: 'resolamxxy',
    path: './#208943647',
  },
  {
    name: 'dtbaggins',
    path: './#208943648',
  },
  {
    name: 'castleflutes',
    path: './#208943656',
  },
  {
    name: 'Tokotoro',
    path: './#208943657',
  },
  {
    name: 'danknett',
    path: '/#208943667',
  },
  {
    name: 'ifurgat',
    path: '/#208943635',
  },
  {
    name: 'foxish',
    path: '/#208943679',
  },
  {
    name: 'its_jordan',
    path: '/#208943681',
  },
  {
    name: 'Scores',
    path: '/scores',
  },
  {
    name: 'Replays',
    path: '/replays',
  },
  {
    name: 'Discord Tiers',
    path: '/meme',
  },
];

function Nav() {
  const [clicked, setClicked] = useState(true);
  return (
    <div className='main-nav-container'>
      <button
        onClick={() => setClicked((current) => !current)}
        className={clicked ? 'main-nav-button clicked' : 'main-nav-button'}>
        <div className='hamburger-icon'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>Teams</div>
      </button>
      <nav className={clicked ? 'main-nav display' : 'main-nav hide'}>
        {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={index}>
              <li key={index}>{link.name}</li>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;
