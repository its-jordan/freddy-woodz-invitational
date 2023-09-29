import dynamic from 'next/dynamic';
// @ts-ignore
import PlayerData from '../data/players.yaml';
import { PokemonClient } from 'pokenode-ts';

export default function HomePage() {
  const AlternateStyle = dynamic(() => import('./altstyle'), {
    loading: () => (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    ),
  });

  const Players = PlayerData;

  const api = new PokemonClient();

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  async function randomPokemonGenerator() {
    const randomPokemon = await api.getPokemonById(getRandomInt(950));
    console.log(randomPokemon.name);
    return (
      <div>
        <div>{randomPokemon.name}</div>
        <div>{randomPokemon?.types[0]?.type?.name}</div>
        <div>{randomPokemon?.types[1]?.type?.name}</div>
        <div>{randomPokemon?.abilities[0]?.ability.name}</div>
        <div>{randomPokemon?.abilities[1]?.ability.name}</div>
        <div>{randomPokemon?.abilities[2]?.ability.name}</div>
      </div>
    );
  }

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

  return <main className='team-main'>{loadPlayers()}</main>;
}
