import dynamic from 'next/dynamic';
//@ts-ignore
import PlayerData from '../../data/players.yaml';
import './altstyle.css';
import Link from 'next/link';

export default function AltStyle() {
  const AlternateStyle = dynamic(() => import('./altstyle'), {
    loading: () => (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    ),
  });

  const navArray = [
    {
      name: 'Home',
      path: './',
    },
    {
      name: 'SeanBoyQ',
      path: '#208943645',
    },
    {
      name: 'resolamxxy',
      path: '#208943647',
    },
    {
      name: 'dtbaggins',
      path: '#208943648',
    },
    {
      name: 'castleflutes',
      path: '#208943656',
    },
    {
      name: 'Tokotoro',
      path: '#208943657',
    },
    {
      name: 'danknett',
      path: '#208943667',
    },
    {
      name: 'ifurgat',
      path: '#208943635',
    },
    {
      name: 'foxish',
      path: '#208943679',
    },
    {
      name: 'its_jordan',
      path: '#208943681',
    },
  ];

  const Players = PlayerData;

  function loadPlayers() {
    return (
      <div className='teams-container-alt'>
        {Players.map((player: any) => {
          return (
            <AlternateStyle
              key={player.index}
              player={player.player}
              playerId={player.playerId}
              p1={player.p1}
              p2={player.p2}
              p3={player.p3}
              p4={player.p4}
              p5={player.p5}
              p6={player.p6}
              p7={player.p7}
              p8={player.p8}
              p9={player.p9}
              p0={player.p0}
            />
          );
        })}
      </div>
    );
  }

  return (
    <main className='team-main'>
      <div>
        <nav>
          {navArray.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
      {loadPlayers()}
    </main>
  );
}
