import { PokemonClient } from 'pokenode-ts';
import { getTypeWeaknesses } from '../pokemon-types/index';
import Link from 'next/link';

interface Pokemon {
  player: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
  p0: string;
}

export default async function PlayerTeam({
  player,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p0,
}: Pokemon) {
  const api = new PokemonClient();
  let playerName = player;
  let pok1 = await api.getPokemonByName(p1);
  let pok2 = await api.getPokemonByName(p2);
  let pok3 = await api.getPokemonByName(p3);
  let pok4 = await api.getPokemonByName(p4);
  let pok5 = await api.getPokemonByName(p5);
  let pok6 = await api.getPokemonByName(p6);
  let pok7 = await api.getPokemonByName(p7);
  let pok8 = await api.getPokemonByName(p8);
  let pok9 = await api.getPokemonByName(p9);
  let pok0 = await api.getPokemonByName(p0);

  const pok1weakness = getTypeWeaknesses(
    pok1.types[0].type.name,
    pok1.types[1]?.type.name
  );
  const pok1Array = Object.entries(pok1weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok2weakness = getTypeWeaknesses(
    pok2.types[0].type.name,
    pok2.types[1]?.type.name
  );
  const pok2Array = Object.entries(pok2weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok3weakness = getTypeWeaknesses(
    pok3.types[0].type.name,
    pok3.types[1]?.type.name
  );
  const pok3Array = Object.entries(pok3weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok4weakness = getTypeWeaknesses(
    pok4.types[0].type.name,
    pok4.types[1]?.type.name
  );
  const pok4Array = Object.entries(pok4weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok5weakness = getTypeWeaknesses(
    pok5.types[0].type.name,
    pok5.types[1]?.type.name
  );
  const pok5Array = Object.entries(pok5weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok6weakness = getTypeWeaknesses(
    pok6.types[0].type.name,
    pok6.types[1]?.type.name
  );
  const pok6Array = Object.entries(pok6weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok7weakness = getTypeWeaknesses(
    pok7.types[0].type.name,
    pok7.types[1]?.type.name
  );
  const pok7Array = Object.entries(pok7weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok8weakness = getTypeWeaknesses(
    pok8.types[0].type.name,
    pok8.types[1]?.type.name
  );
  const pok8Array = Object.entries(pok8weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok9weakness = getTypeWeaknesses(
    pok9.types[0].type.name,
    pok9.types[1]?.type.name
  );
  const pok9Array = Object.entries(pok9weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pok0weakness = getTypeWeaknesses(
    pok0.types[0].type.name,
    pok0.types[1]?.type.name
  );
  const pok0Array = Object.entries(pok0weakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  let pokearray = [
    {
      name: pok1.name,
      abilities: pok1.abilities,
      types: pok1.types,
      sprite: pok1.sprites,
      species: pok1.species,
      weakness: pok1Array,
    },
    {
      name: pok2.name,
      abilities: pok2.abilities,
      types: pok2.types,
      sprite: pok2.sprites,
      species: pok2.species,
      weakness: pok2Array,
    },
    {
      name: pok3.name,
      abilities: pok3.abilities,
      types: pok3.types,
      sprite: pok3.sprites,
      species: pok3.species,
      weakness: pok3Array,
    },
    {
      name: pok4.name,
      abilities: pok4.abilities,
      types: pok4.types,
      sprite: pok4.sprites,
      species: pok4.species,
      weakness: pok4Array,
    },
    {
      name: pok5.name,
      abilities: pok5.abilities,
      types: pok5.types,
      sprite: pok5.sprites,
      species: pok5.species,
      weakness: pok5Array,
    },
    {
      name: pok6.name,
      abilities: pok6.abilities,
      types: pok6.types,
      sprite: pok6.sprites,
      species: pok6.species,
      weakness: pok6Array,
    },
    {
      name: pok7.name,
      abilities: pok7.abilities,
      types: pok7.types,
      sprite: pok7.sprites,
      species: pok7.species,
      weakness: pok7Array,
    },
    {
      name: pok8.name,
      abilities: pok8.abilities,
      types: pok8.types,
      sprite: pok8.sprites,
      species: pok8.species,
      weakness: pok8Array,
    },
    {
      name: pok9.name,
      abilities: pok9.abilities,
      types: pok9.types,
      sprite: pok9.sprites,
      species: pok9.species,
      weakness: pok9Array,
    },
    {
      name: pok0.name,
      abilities: pok0.abilities,
      types: pok0.types,
      sprite: pok0.sprites,
      species: pok0.species,
      weakness: pok0Array,
    },
  ];
  return (
    <div className="team" id={`${playerName}`}>
      <div className="teamname">{playerName}</div>
      <div className="player-team">
        {pokearray.map((values, index) => {
          return (
            <Link
              href={`https://www.smogon.com/dex/sv/pokemon/${values.species.name}`}
              target="_blank"
              className={`pokemon-info flex flex-row`}
              key={index}>
              <img
                className={`${values.name}-img`}
                src={values.sprite.front_default?.toString()}
                alt={`Default front sprite for ${values.name}`}
              />
              <div className="pokemon-data">
                <div className="name-container">
                  <div className="pokemon-name">{values.name}</div>
                  <div className="pokemon-types">
                    {values.types.map((value) => {
                      return (
                        <div
                          className={`pokemon-type ${value.type.name}`}
                          key={value.slot}>
                          {value.type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="abilities-container">
                  <div>Potential Abilities: </div>
                  <div className="abilities">
                    {values.abilities?.map((value, index) => {
                      return (
                        <div className={value.ability.name} key={index}>
                          {value.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="damage-relations-container">
                  {values.weakness?.map((value, index) => {
                    return (
                      <div
                        key={index}
                        data-type={value}
                        className="relations-type">
                        {value}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
