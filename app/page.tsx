import dynamic from 'next/dynamic';
// @ts-ignore
import PlayerData from '../data/players.yaml';
import LCStats from '@/data/lcStats.json';

export default function HomePage() {
  const AlternateStyle = dynamic(() => import('../components/altstyle'), {
    loading: () => (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    ),
  });

  const Players = PlayerData;

  function loadPlayers() {
    return (
      <div className='teams-container-alt'>
        <div className='regular-season'>
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
      </div>
    );
  }

  return <main className='team-main'>{loadPlayers()}</main>;
}
