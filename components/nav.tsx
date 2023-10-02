import Link from 'next/link';
// @ts-ignore
import Data from '../data/replays.yaml';

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
    name: 'DTBaggins',
    path: './#208943648',
  },
  {
    name: 'Castleflutes',
    path: './#208943656',
  },
  {
    name: 'Tokotoro',
    path: './#208943657',
  },
  {
    name: 'Danknett',
    path: './#208943667',
  },
  {
    name: 'iFurgat',
    path: './#208943635',
  },
  {
    name: 'Foxish',
    path: './#208943679',
  },
  {
    name: 'its_jordan',
    path: './#208943681',
  },
];

function Nav() {
  const replayData = Data;
  return (
    <nav>
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
                  href={`./replays/#${player.player1Id}-${player.player2Id}-${player.game}`}
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
  );
}

export default Nav;
