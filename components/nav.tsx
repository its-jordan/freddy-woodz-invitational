import Link from 'next/link';

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
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          // @ts-ignore
          <Link href={link?.path} key={index}>
            {link?.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
