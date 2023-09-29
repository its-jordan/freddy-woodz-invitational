import { PokemonClient } from 'pokenode-ts';
import { getTypeWeaknesses } from '../pokemon-types/index';
import { twMerge } from 'tailwind-merge';
import './altstyle.css';
// @ts-ignore
import Data from '../data/uber-stats.yaml';
// @ts-ignore
import Moves from '../data/moves.yaml';
// @ts-ignore
import Effects from '../data/moveEffects.yaml';
import Link from 'next/link';
import Image from 'next/image';

interface Pokemon {
  player: string;
  playerId: number;
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
  className?: string;
}

export default async function AlternateStyle({
  player,
  playerId,
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
  className,
}: Pokemon) {
  const api = new PokemonClient();

  let playerName = player;

  async function displayAbility(e: string) {
    const abilityInfo = await api.getAbilityByName(e);
    if (abilityInfo.id == 261) {
      const abilityEffect = abilityInfo.flavor_text_entries[7]?.flavor_text;
      return <div className='ability-effect-alt'>{abilityEffect}</div>;
    } else if (
      abilityInfo.id == 202 ||
      abilityInfo.id == 65 ||
      abilityInfo.id == 206 ||
      abilityInfo.id == 119
    ) {
      const abilityEffect = abilityInfo.effect_entries[0]?.short_effect;
      return <div className='ability-effect-alt'>{abilityEffect}</div>;
    } else {
      const abilityEffect = abilityInfo.effect_entries[1]?.short_effect;
      return <div className='ability-effect-alt'>{abilityEffect}</div>;
    }
  }

  function moveRelations(e: string, move: string) {
    let typeArray = {
      normal: {
        immunes: ['ghost'],
        weaknesses: ['rock', 'steel'],
        strengths: [],
      },
      fire: {
        immunes: [],
        weaknesses: ['fire', 'water', 'rock', 'dragon'],
        strengths: ['grass', 'ice', 'bug', 'steel'],
      },
      water: {
        immunes: [],
        weaknesses: ['water', 'grass', 'dragon'],
        strengths: ['fire', 'ground', 'rock'],
      },
      electric: {
        immunes: ['ground'],
        weaknesses: ['electric', 'grass', 'dragon'],
        strengths: ['water', 'flying'],
      },
      grass: {
        immunes: [],
        weaknesses: [
          'fire',
          'grass',
          'poison',
          'flying',
          'bug',
          'dragon',
          'steel',
        ],
        strengths: ['water', 'ground', 'rock'],
      },
      ice: {
        immunes: [],
        weaknesses: ['fire', 'water', 'ice', 'steel'],
        strengths: ['grass', 'ground', 'flying', 'dragon'],
      },
      fighting: {
        immunes: ['ghost'],
        weaknesses: ['poison', 'flying', 'psychic', 'bug', 'fairy'],
        strengths: ['normal', 'ice', 'rock', 'dark', 'steel'],
      },
      poison: {
        immunes: ['steel'],
        weaknesses: ['poison', 'ground', 'rock', 'ghost'],
        strengths: ['grass', 'fairy'],
      },
      ground: {
        immunes: ['flying'],
        weaknesses: ['grass', 'bug'],
        strengths: ['fire', 'electric', 'poison', 'rock', 'steel'],
      },
      flying: {
        immunes: [],
        weaknesses: ['electric', 'rock', 'steel'],
        strengths: ['grass', 'fighting', 'bug'],
      },
      psychic: {
        immunes: ['dark'],
        weaknesses: ['psychic', 'steel'],
        strengths: ['fighting', 'poison'],
      },
      bug: {
        immunes: [],
        weaknesses: [
          'fire',
          'fighting',
          'poison',
          'flying',
          'ghost',
          'steel',
          'fairy',
        ],
        strengths: ['grass', 'psychic', 'dark'],
      },
      rock: {
        immunes: [],
        weaknesses: ['fighting', 'ground', 'steel'],
        strengths: ['fire', 'ice', 'flying', 'bug'],
      },
      ghost: {
        immunes: ['normal'],
        weaknesses: ['dark'],
        strengths: ['psychic', 'ghost'],
      },
      dragon: {
        immunes: ['fairy'],
        weaknesses: ['steel'],
        strengths: ['dragon'],
      },
      dark: {
        immunes: [],
        weaknesses: ['fighting', 'dark', 'fairy'],
        strengths: ['psychic', 'ghost'],
      },
      steel: {
        immunes: [],
        weaknesses: ['fire', 'water', 'electric', 'steel'],
        strengths: ['ice', 'rock', 'fairy'],
      },
      fairy: {
        immunes: [],
        weaknesses: ['fire', 'poison', 'steel'],
        strengths: ['fighting', 'dragon', 'dark'],
      },
    };
    const typeName = e;
    // @ts-ignore
    let type = typeArray[typeName];

    if (move === 'status') {
      return <></>;
    } else if (type !== undefined && type?.immunes.length === 0) {
      return (
        <div>
          <div className='damage-type-container-alt'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Weak Against</div>
              <div className='weaknesses-alt'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box-alt`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Strong Against</div>
              <div className='strengths-alt'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box-alt`}
                      key={strengths.index}>
                      {strengths.charAt(0).toUpperCase() + strengths.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (type !== undefined && type?.strengths.length === 0) {
      return (
        <div>
          <div className='damage-type-container-alt double-damage'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>No Damage To</div>
              <div className='immunes'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box-alt`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Weak Against</div>
              <div className='weaknesses-alt'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box-alt`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (type !== undefined && type?.weaknesses.length === 0) {
      return (
        <div>
          <div className='damage-type-container-alt double-damage'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>No Damage To</div>
              <div className='immunes-alt'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box-alt`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Strong Against</div>
              <div className='strengths-alt'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box-alt`}
                      key={strengths.index}>
                      {strengths.charAt(0).toUpperCase() + strengths.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      type !== undefined &&
      type?.weaknesses.length === 0 &&
      type?.immunes.length === 0
    ) {
      return (
        <div>
          <div className='damage-type-container-alt double-damage'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Strong Against</div>
              <div className='strengths-alt'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box-alt`}
                      key={strengths.index}>
                      {strengths.charAt(0).toUpperCase() + strengths.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (
      type !== undefined &&
      type?.strengths.length === 0 &&
      type?.immunes.length === 0
    ) {
      return (
        <div>
          <div className='damage-type-container-alt double-damage'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Weak Against</div>
              <div className='weaknesses-alt'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box-alt`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (type !== undefined) {
      return (
        <div>
          <div className='damage-type-container-alt double-damage'>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>No Damage To</div>
              <div className='immunes-alt'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box-alt`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Weak Against</div>
              <div className='weaknesses-alt'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box-alt`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover-alt'>
              <div className='type-hover-header-alt'>Strong Against</div>
              <div className='strengths-alt'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box-alt`}
                      key={strengths.index}>
                      {strengths.charAt(0).toUpperCase() + strengths.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function displayMoves(e: string) {
    const statsArray = Data;
    const pokemon = e;
    // @ts-ignore
    let stats = statsArray[pokemon];

    if (stats !== undefined)
      return (
        <div className='moves-wrapper-alt'>
          <div className='moves-container-alt'>
            {stats?.map((value: any) => {
              return (
                <>
                  <Link
                    href={`https://www.smogon.com/dex/sv/moves/${value}`}
                    target='_blank'
                    className='move-alt'
                    data-move={value}
                    key={value.index}>
                    <div className='move-name-alt'>
                      {value?.replace('-', ' ')?.replace('-', ' ')}
                    </div>
                    {moveTypes(value)}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      );
  }

  async function getGenera(e: string) {
    let species = await api.getPokemonSpeciesByName(e);
    return (
      <div className={`genera-text-alt ${e}`}>{species?.genera[7].genus}</div>
    );
  }

  async function getPokemonNumber(e: string) {
    let species = await api.getPokemonSpeciesByName(e);
    return (
      <div
        className={`pokedex-number-alt ${e} ${species.pokedex_numbers[1]?.entry_number}`}>
        No. {species.pokedex_numbers[0]?.entry_number}
      </div>
    );
  }

  const move = Moves;

  function mergeMoves(e: string) {
    const moveArray = move[e];

    const effectArray = Effects[moveArray?.effect_id];

    let merge = (obj1: any, obj2: any) => ({ ...obj1, ...obj2 });

    const mergedArrays = merge(moveArray, effectArray);

    return (
      <div className='move-effect-alt'>
        {mergedArrays?.short_effect
          ?.replace(
            '$effect_chance%',
            `${mergedArrays?.effect_chance?.toString()}%`
          )
          ?.replace('[burn]{mechanic:burn}', 'burn')
          ?.replace('[poison]{mechanic:poison}', 'poison')
          ?.replace('[freeze]{mechanic:freeze}', 'freeze')
          ?.replace('[paralyze]{mechanic:paralysis}', 'paralyze')
          ?.replace('[Grass Pledge]{move:grass-pledge}', 'Grass Pledge')
          ?.replace('[Water Pledge]{move:water-pledge}', 'Water Pledge')
          ?.replace('[Fire Pledge]{move:fire-pledge}', 'Fire Pledge')
          ?.replace('[Fusion Bolt]{move:fusion-bolt}', 'Fusion Bolt')
          ?.replace('[Fusion Flare]{move:fusion-flare}', 'Fusion Flare')
          ?.replace('[]{type:water}', 'water')
          ?.replace('[]{type:fire}', 'fire')
          ?.replace('[]{type:ground}', 'ground')
          ?.replace('[]{type:grass}', 'grass')
          ?.replace('[]{type:fighting}', 'fighting')
          ?.replace('[]{type:flying}', 'flying')
          ?.replace('[]{type:ghost}', 'ghost')
          ?.replace('[]{type:electric}', 'electric')
          ?.replace('[]{type:normal}', 'normal')
          ?.replace('[]{type:dragon}', 'dragon')}
      </div>
    );
  }

  function moveTypes(e: string) {
    const ele = move[e];
    if (ele?.damage_class === 'status') {
      return (
        <div className='move-hover-box-alt' data-move-name={ele.name}>
          <div className='move-hover-upper-container-alt'>
            <div className='move-name-container-alt'>
              <div className={`move-hover-name-alt`} data-move={ele.name}>
                {ele.name?.replace('-', ' ')?.replace('-', ' ')}
              </div>
              <div className={`move-type-alt ${ele.type_id}`}>
                {ele.type_id}
              </div>
            </div>
            <div className='move-hover-info-alt'>
              <div className={`move-damage-type-alt`} data-damage-type='status'>
                Status
              </div>
              <div className={`move-pp-alt`} data-pp={ele.pp}>
                {ele.pp}pp
              </div>
              {/* <div
                  className='move-type-change'
                  data-type-change={`${move.stat_changes[0]?.change}x ${move.stat_changes[0]?.stat.name}`}>
                  {move.stat_changes[0]?.change}x{' '}
                  {move.stat_changes[0]?.stat.name}
                </div> */}
              <div className={`move-priority-alt`} data-priority={ele.priority}>
                Priority: {ele.priority}
              </div>
            </div>
          </div>
          <div className='move-hover-lower-container-alt'>
            {mergeMoves(ele.name)}
            {moveRelations(ele?.type_id, ele?.damage_class)}
          </div>
        </div>
      );
    } else {
      return (
        <div className='move-hover-box-alt'>
          <div className='move-hover-upper-container-alt'>
            <div className='move-name-container-alt'>
              <div className={`move-hover-name-alt`} data-move={ele?.name}>
                {ele?.name?.replace('-', ' ')?.replace('-', ' ')}
              </div>
              <div className={`move-type-alt ${ele?.type_id}`}>
                {ele?.type_id}
              </div>
            </div>
            <div className='move-hover-info-alt'>
              <div
                className={`move-damage-type-alt`}
                data-damage-type={ele?.damage_class}>
                {ele?.damage_class}
              </div>

              <div
                className={`move-accuracy-alt`}
                data-accuracy={ele?.accuracy}>
                {ele?.accuracy}% acc
              </div>
              <div className={`move-pp-alt`} data-pp={ele?.pp}>
                {ele?.pp}pp
              </div>
              <div className={`move-power-alt`} data-power={ele?.power}>
                {ele?.power}bp
              </div>
              <div
                className={`move-priority-alt`}
                data-priority={ele?.priority}>
                Priority: {ele?.priority}
              </div>
            </div>
          </div>
          <div className='move-hover-lower-container-alt'>
            <div className='move-effect-alt'>
              {ele?.short_effect?.replace(
                '$effect_chance%',
                `${ele?.effect_chance?.toString()}%`
              )}
              {mergeMoves(ele?.name)}
              {moveRelations(ele?.type_id, ele?.damage_class)}
            </div>
          </div>
        </div>
      );
    }
  }

  function nameSplit(e: string) {
    if (e.includes('galar') == true) {
      return `${
        e.split('-')[1].charAt(0).toUpperCase() +
        e.split('-')[1].slice(1).concat('ian')
      } ${' '} ${
        e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('50')) {
      return `${e.replace('-50', '')}`;
    } else if (e.includes('mega') == true) {
      return `${
        e.split('-')[1].charAt(0).toUpperCase() + e.split('-')[1].slice(1)
      } ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('alola') == true) {
      return `${
        e.split('-')[1].charAt(0).toUpperCase() +
        e.split('-')[1].slice(1)?.concat('n')
      } ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('hisui') == true) {
      return `${e.split('-')[1]?.concat('an')} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('blade') == true) {
      return `${e.split('-')[0]}`;
    } else if (e.includes('rotom') == true) {
      return `${
        e.split('-')[1].charAt(0).toUpperCase() + e.split('-')[1].slice(1)
      } ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('incarnate') == true) {
      return `${
        e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else {
      return e;
    }
  }

  function weightCalculation(e: number) {
    var str = e.toString();
    var len = str.length;
    var x = str.substring(0, len - 1) + '.' + str.substring(len - 1);
    var weight = Math.round(parseFloat(x));
    if (weight! <= 1) {
      return (
        <div className='pokemon-weight-alt' data-weight={`${x} kg`}>
          {x}&nbsp;kg
        </div>
      );
    } else {
      return (
        <div className='pokemon-weight-alt' data-weight={`${weight} kg`}>
          {weight}&nbsp;kg
        </div>
      );
    }
  }

  async function getStats(e: string) {
    let pokemon = await api.getPokemonByName(e);
    return (
      <div className={`pokemon-stats-alt ${pokemon}`} data-pokemon={e}>
        {pokemon.stats.map((stat, index) => {
          return (
            <div
              className={`stat-container-alt ${stat.stat.name}`}
              data-stat={stat.stat.name}
              data-stat-value={stat.base_stat}
              key={index}>
              <div className='stat-header-alt'>
                {stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name
                    .slice(1)
                    .replace('-', ' ')
                    .replace('pecial attack', 'pa')
                    .replace('pecial defense', 'pd')
                    .replace('ack', '')
                    .replace('ense', '')
                    .replace('eed', 'e')}
              </div>
              <div className='stat-value-alt'>{stat.base_stat}</div>
            </div>
          );
        })}
      </div>
    );
  }

  function abilityNames(e: any) {
    if (
      e.ability.name
        .slice(1)
        .replace(/-[A-Za-z]/i, ' ')
        .split(' ')[1] == undefined
    ) {
      return (
        e.ability.name.charAt(0).toUpperCase() +
        e.ability.name
          .slice(1)
          .replace(/-[A-Za-z]/i, ' ')
          .split(' ')[0]
      );
    } else {
      return (
        e.ability.name.charAt(0).toUpperCase() +
        e.ability.name
          .slice(1)
          .replace(/-[A-Za-z]/i, ' ')
          .split(' ')[0] +
        ' ' +
        e.ability.name
          ?.slice(1)
          ?.replace(/-/i, ' ')
          ?.split(' ')[1]
          ?.charAt(0)
          .toUpperCase() +
        e.ability.name
          .slice(1)
          .replace(/-[A-Za-z]/i, ' ')
          .split(' ')[1]
      );
    }
  }

  async function getPokemonData(e: string) {
    let pok = await api.getPokemonByName(e);
    const pokWeakness = getTypeWeaknesses(
      pok.types[0].type.name,
      pok.types[1]?.type.name
    );
    const pokArray = Object.entries(pokWeakness)
      .map((a) => a.join(': '))
      .filter((a) => !a.includes('1'))
      .map((i) => i + 'x')
      .sort();
    var pokearray = [
      {
        name: pok.name,
        abilities: pok.abilities,
        types: pok.types,
        // sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok.name
        //   ?.replace('-50', '')
        //   ?.replace('-incarnate', '')}.gif`,
        sprite: pok.sprites.other?.['official-artwork'].front_default,
        species: pok.species,
        weakness: pokArray,
        weight: pok.weight,
      },
    ];

    return (
      <>
        {pokearray.map((values, index) => {
          return (
            <Link
              className={`pokemon-info-alt ${values.types[0].type.name}`}
              key={index}
              data-species={values.species.name}
              data-pokemon={nameSplit(values.name)}
              data-type-1={values.types[0].type.name}
              data-type-2={values.types[1]?.type.name}
              href={`https://www.smogon.com/dex/sv/pokemon/${values.name
                ?.replace('-mega', '')
                ?.replace('-incarnate', '')
                ?.replace('-50', '')}`}
              target='_blank'>
              <div className='holo-background-container'>
                <div
                  className='holo-background-text unselectable'
                  aria-hidden='true'>
                  {nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name) +
                    ' ' +
                    nameSplit(values.name)}
                </div>
              </div>
              <div className='name-container-alt'>
                <div className='pokemon-name-alt'>{nameSplit(values.name)}</div>
                <div className='pokemon-types-alt'>
                  {values.types.map((value) => {
                    return (
                      <div
                        className={`pokemon-type-alt ${value.type.name}`}
                        data-type-1={value.type.name}
                        key={value.slot}>
                        <img
                          src={`./icons/${value.type.name}.svg`}
                          height={25}
                          width={25}></img>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='pokemon-img-container'>
                <img
                  className={`${values.name}-img-alt pokemon-img`}
                  //@ts-ignore
                  src={values.sprite}
                  alt={`Default front sprite for ${values.name}`}
                />
              </div>
              <div className='pokemon-mid-container-alt'>
                {getPokemonNumber(values.species.name)}
                {weightCalculation(values.weight)}
                {getGenera(values.species.name)}
              </div>
              <div className='lower-container-alt'>
                <div className='abilities-container-alt'>
                  <div className='headers-container'>
                    <div className='abilities-header-alt'>Abilities</div>
                    <button className='moves-header-button'>Moves</button>
                  </div>
                  <div className='abilities-alt'>
                    {values.abilities?.map((value, index) => {
                      return (
                        <Link
                          href={`https://www.smogon.com/dex/sv/abilities/${value.ability.name}`}
                          target='_blank'
                          className={`ability-box-alt ${value.ability.name}`}
                          key={index}>
                          <div className='ability-name-alt'>
                            <div>{abilityNames(value)}</div>
                            {displayAbility(value.ability.name)}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className='damage-relation-types-alt'>
                  {values.weakness?.map((value, index) => {
                    return (
                      <div
                        key={index}
                        data-type={value}
                        className='relations-type-alt'>
                        <div>
                          <img
                            className={`relations-type-icon-alt`}
                            src={`../icons/${value.split(':')[0]}.svg`}
                            alt={`${value.split(':')[0]}-type icon`}
                            height={30}
                            width={30}></img>
                        </div>
                        <div
                          className={`relation-type-name-hover ${
                            value.split(':')[0]
                          }`}>
                          {value.split(':')[0].charAt(0).toUpperCase() +
                            value.split(':')[0].slice(1)}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {getStats(values.name)}
              </div>
              {displayMoves(values.name)}
            </Link>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={twMerge(`team-alt ${playerId.toString()}`, className)}
      id={playerId.toString()}
      data-player={playerId}
      data-player-name={playerName}>
      <div className='player-team-alt'>
        <div className='player-name-alt'>{playerName}</div>
        {getPokemonData(p1)}
        {getPokemonData(p2)}
        {getPokemonData(p3)}
        {getPokemonData(p4)}
        {getPokemonData(p5)}
        {getPokemonData(p6)}
        {getPokemonData(p7)}
        {getPokemonData(p8)}
        {getPokemonData(p9)}
        {getPokemonData(p0)}
      </div>
    </div>
  );
}
