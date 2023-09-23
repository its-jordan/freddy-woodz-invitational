import { PokemonClient } from 'pokenode-ts';
import { getTypeWeaknesses } from '../../pokemon-types/index';
import { twMerge } from 'tailwind-merge';
import './altstyle.css';
// @ts-ignore
import Data from '../../data/uber-stats.yaml';
// @ts-ignore
import Moves from '../../data/moves.yaml';
// @ts-ignore
import Effects from '../../data/moveEffects.yaml';
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
      return <div className='ability-effect'>{abilityEffect}</div>;
    } else if (
      abilityInfo.id == 202 ||
      abilityInfo.id == 65 ||
      abilityInfo.id == 206 ||
      abilityInfo.id == 119
    ) {
      const abilityEffect = abilityInfo.effect_entries[0]?.short_effect;
      return <div className='ability-effect'>{abilityEffect}</div>;
    } else {
      const abilityEffect = abilityInfo.effect_entries[1]?.short_effect;
      return <div className='ability-effect'>{abilityEffect}</div>;
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
          <div className='damage-type-container'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Weak Against</div>
              <div className='weaknesses'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Strong Against</div>
              <div className='strengths'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box`}
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
          <div className='damage-type-container double-damage'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>No Damage To</div>
              <div className='immunes'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Weak Against</div>
              <div className='weaknesses'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box`}
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
          <div className='damage-type-container double-damage'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>No Damage To</div>
              <div className='immunes'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Strong Against</div>
              <div className='strengths'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box`}
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
          <div className='damage-type-container double-damage'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Strong Against</div>
              <div className='strengths'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box`}
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
          <div className='damage-type-container double-damage'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Weak Against</div>
              <div className='weaknesses'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box`}
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
          <div className='damage-type-container double-damage'>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>No Damage To</div>
              <div className='immunes'>
                {type?.immunes.map((immunes: any) => {
                  return (
                    <div
                      className={`type ${immunes} hover-relation-box`}
                      key={immunes.index}>
                      {immunes.charAt(0).toUpperCase() + immunes.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Weak Against</div>
              <div className='weaknesses'>
                {type?.weaknesses.map((weaknesses: any) => {
                  return (
                    <div
                      className={`type ${weaknesses} hover-relation-box`}
                      key={weaknesses.index}>
                      {weaknesses.charAt(0).toUpperCase() + weaknesses.slice(1)}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='damage-relation-hover'>
              <div className='type-hover-header'>Strong Against</div>
              <div className='strengths'>
                {type?.strengths.map((strengths: any) => {
                  return (
                    <div
                      className={`type ${strengths} hover-relation-box`}
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
        <div className='moves-wrapper'>
          <div className='moves-header'>Most Common Moves</div>
          <div className='moves-container'>
            {stats?.map((value: any) => {
              return (
                <>
                  <Link
                    href={`https://www.smogon.com/dex/sv/moves/${value}`}
                    target='_blank'
                    className='move'
                    data-move={value}
                    key={value.index}
                    data-move-id={value}>
                    <div className='move-name'>
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

  async function getPokemonNumber(e: string) {
    let species = await api.getPokemonSpeciesByName(e);
    return (
      <div
        className={`pokedex-number-alt ${e} ${species.pokedex_numbers[1]?.entry_number}`}>
        &#x23;{species.pokedex_numbers[0]?.entry_number}
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
      <div className='move-effect'>
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
        <div className='move-hover-box' data-move-name={ele.name}>
          <div className='move-hover-upper-container'>
            <div className='move-name-container'>
              <div className={`move-hover-name`} data-move={ele.name}>
                {ele.name?.replace('-', ' ')?.replace('-', ' ')}
              </div>
              <div className={`move-type ${ele.type_id}`}>{ele.type_id}</div>
            </div>
            <div className='move-hover-info'>
              <div className={`move-damage-type`} data-damage-type='status'>
                Status
              </div>
              <div className={`move-pp`} data-pp={ele.pp}>
                {ele.pp}pp
              </div>
              {/* <div
                  className='move-type-change'
                  data-type-change={`${move.stat_changes[0]?.change}x ${move.stat_changes[0]?.stat.name}`}>
                  {move.stat_changes[0]?.change}x{' '}
                  {move.stat_changes[0]?.stat.name}
                </div> */}
              <div className={`move-priority`} data-priority={ele.priority}>
                Priority: {ele.priority}
              </div>
            </div>
          </div>
          <div className='move-hover-lower-container'>
            {mergeMoves(ele.name)}
            {moveRelations(ele?.type_id, ele?.damage_class)}
          </div>
        </div>
      );
    } else {
      return (
        <div className='move-hover-box'>
          <div className='move-hover-upper-container'>
            <div className='move-name-container'>
              <div className={`move-hover-name`} data-move={ele?.name}>
                {ele?.name?.replace('-', ' ')?.replace('-', ' ')}
              </div>
              <div className={`move-type ${ele?.type_id}`}>{ele?.type_id}</div>
            </div>
            <div className='move-hover-info'>
              <div
                className={`move-damage-type`}
                data-damage-type={ele?.damage_class}>
                {ele?.damage_class}
              </div>

              <div className={`move-accuracy`} data-accuracy={ele?.accuracy}>
                {ele?.accuracy}% acc
              </div>
              <div className={`move-pp`} data-pp={ele?.pp}>
                {ele?.pp}pp
              </div>
              <div className={`move-power`} data-power={ele?.power}>
                {ele?.power}bp
              </div>
              <div className={`move-priority`} data-priority={ele?.priority}>
                Priority: {ele?.priority}
              </div>
            </div>
          </div>
          <div className='move-hover-lower-container'>
            <div className='move-effect'>
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
      } ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
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
        e.split('-')[0].slice(1)?.concat('n')
      } ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('hisui') == true) {
      return `${e.split('-')[1]?.concat('an')} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('blade') == true) {
      return `${e.split('-')[0]}`;
    } else {
      return `${e.charAt(0).toUpperCase() + e.split('-')[0].slice(1)}`;
    }
  }

  function weightCalculation(e: number) {
    var str = e.toString();
    var len = str.length;
    var x = str.substring(0, len - 1) + '.' + str.substring(len - 1);
    var weight = Math.round(parseFloat(x));
    if (weight! <= 1) {
      return (
        <div className='pokemon-weight' data-weight={`${x} kg`}>
          Weight: {x}&nbsp;kg
        </div>
      );
    } else {
      return (
        <div className='pokemon-weight' data-weight={`${weight} kg`}>
          Weight: {weight}&nbsp;kg
        </div>
      );
    }
  }

  async function getStats(e: string) {
    let pokemon = await api.getPokemonByName(e);
    return (
      <div className={`pokemon-stats ${pokemon}`} data-pokemon={e}>
        <div className='pokemon-stats-header'>Base Stats</div>
        <div className='pokemon-stats-values'>
          {pokemon.stats.map((stat, index) => {
            return (
              <div
                className={`stat-container ${stat.stat.name}`}
                data-stat={stat.stat.name}
                data-stat-value={stat.base_stat}
                key={index}>
                <div className='stat-header'>
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
                <div className='stat-value'>{stat.base_stat}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
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
        sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok.name
          ?.replace('-50', '')
          ?.replace('-incarnate', '')}.gif`,
        species: pok.species,
        weakness: pokArray,
        weight: pok.weight,
      },
    ];
    return (
      <>
        {pokearray.map((values, index) => {
          return (
            <div
              className={`pokemon-info-alt`}
              key={index}
              data-species={values.species.name}
              data-pokemon={values.name}>
              {getPokemonNumber(values.species.name)}
              <Link
                href={`https://www.smogon.com/dex/sv/pokemon/${values.name
                  ?.replace('-mega', '')
                  ?.replace('-incarnate', '')
                  ?.replace('-50', '')}`}
                target='_blank'
                className='upper-container-alt'>
                <img
                  className={`${values.name}-img-alt`}
                  src={values.sprite}
                  alt={`Default front sprite for ${values.name}`}
                />
                <div className='pokemon-data-alt'>
                  <div className='name-container-alt'>
                    <div className='pokemon-name-alt'>
                      {nameSplit(values.name)}
                    </div>
                    {weightCalculation(values.weight)}
                  </div>
                </div>
                {getStats(values.name)}
              </Link>
              <div className='abilities-container-alt'>
                <div className='abilities-header-alt'>Abilities</div>
                <div className='abilities-alt'>
                  {values.abilities?.map((value, index) => {
                    return (
                      <Link
                        href={`https://www.smogon.com/dex/sv/abilities/${value.ability.name}`}
                        target='_blank'
                        className={`ability-box-alt ${value.ability.name}`}
                        key={index}>
                        <div className='ability-nam-alt'>
                          {value.ability.name?.replace(
                            'defiant',
                            'competitive'
                          )}
                        </div>
                        {displayAbility(value.ability.name)}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className='damage-relations-container'>
                <div className='damage-relations-header-container'>
                  <div className='damage-relations-header'>
                    Type Effectiveness
                  </div>
                  <div className='damage-relation-label'>
                    {[
                      'Immune to',
                      'Very Resistant to',
                      'Resistant to',
                      'Weak to',
                      'Very Weak to',
                    ].map((value, index) => {
                      return (
                        <div
                          className='relation-label'
                          key={index}
                          data-label={value}>
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='damage-relation-types'>
                  {values.weakness?.map((value, index) => {
                    return (
                      <div
                        key={index}
                        data-type={value}
                        className='relations-type'>
                        <div>
                          <img
                            className={`relations-type-icon ${
                              value.split(':')[0]
                            }`}
                            src={`../icons/${value.split(':')[0]}.svg`}
                            alt='Bug icon'
                            height={30}
                            width={30}></img>
                        </div>
                        <div>{value.split(':')[0]}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {displayMoves(values.name)}
              <div className='pokemon-types-alt'>
                {values.types.map((value) => {
                  return (
                    <div
                      className={`pokemon-type-alt ${value.type.name}`}
                      key={value.slot}>
                      {value.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={twMerge(`team-alt ${playerId.toString()}`, className)}
      id={playerId.toString()}
      data-player={playerId}>
      <div className='teamname'>{playerName}</div>
      <div className='player-team-alt'>
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
