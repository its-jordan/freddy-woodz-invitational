import dynamic from 'next/dynamic';
import './home.css';
//@ts-ignore
import Data from '../../data/players.yaml';

export default function Archive() {
  const PlayerTeam = dynamic(() => import('@/components/arrays'), {
    loading: () => (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    ),
  });

  const Players = Data;

  function loadPlayers() {
    return (
      <div className='teams-container archive'>
        {Players.map((player: any) => {
          return (
            <PlayerTeam
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

  return <main className='team-main'>{loadPlayers()}</main>;
}
