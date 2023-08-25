import Link from 'next/link';

export const navLinks = [
  {
    name: 'Teams',
    path: '/',
  },
  {
    name: 'SeanBoyQ',
    path: '#SeanBoyQ',
  },
  {
    name: 'resolamxxy',
    path: '#resolamxxy',
  },
  {
    name: 'dtbaggins',
    path: '#dtbaggins',
  },
  {
    name: 'castleflutes',
    path: '#castleflutes',
  },
  {
    name: 'Tokotoro',
    path: '#Tokotoro',
  },
  {
    name: 'danknett',
    path: '#danknett',
  },
  {
    name: 'ifurgat',
    path: '#ifurgat',
  },
  {
    name: 'foxish',
    path: '#foxish',
  },
  {
    name: 'its_jordan',
    path: '#its_jordan',
  },
];

function Nav() {
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            <li key={index}>{link.name}</li>
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
