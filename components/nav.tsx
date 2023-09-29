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
    path: './#208943667',
  },
  {
    name: 'ifurgat',
    path: './#208943635',
  },
  {
    name: 'foxish',
    path: './#208943679',
  },
  {
    name: 'its_jordan',
    path: './#208943681',
  },
  {
    name: 'Scores',
    path: './scores',
  },
  {
    name: 'Replays',
    path: './replays',
  },
  {
    name: 'Discord Tiers',
    path: './meme',
  },
  ,
  {
    name: 'Season 1 Archive',
    path: './archive',
  },
];

function Nav() {
  const replayData = Data;
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          // @ts-ignore
          <Link
            // @ts-ignore
            href={link?.path}
            key={index}
            data-player={link?.path.split('#')[1]}>
            {link?.name}
          </Link>
        );
      })}
      <ul className='replays-dropdown-container'>
        <div className='replays-dropdown-header'>Replays</div>
        <ul className='replays-dropdown'>
          {replayData
            .sort((a: any, b: any) =>
              a.player1 > b.player1 ? 1 : b.player1 > a.player1 ? -1 : 0
            )
            .map((player: any, index: any) => {
              return (
                <Link
                  href={`./replays/#${player.player1Id}-${player.player2Id}-1`}
                  data-player1={`${player.player1Id}`}
                  className='replay-dropdown-link'
                  key={index}>
                  {player.player1} vs. {player.player2} - G{player.game}
                </Link>
              );
            })}
        </ul>
      </ul>
    </nav>
  );
}

export default Nav;
