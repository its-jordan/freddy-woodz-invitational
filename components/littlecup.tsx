import { PokemonClient } from 'pokenode-ts';
import { getTypeWeaknesses } from '../data/pokemon-types/index';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
// @ts-ignore
import Data from '../data/uber-stats.yaml';
// @ts-ignore
import Moves from '../data/moves.yaml';
// @ts-ignore
import Effects from '../data/moveEffects.yaml';
import Link from 'next/link';
import PokemonButton from '@/components/pokemonbutton';
import LCStats from '@/data/lcStats.json';
import { returnLCMoves } from './functions/lcUsageState';

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

export default async function LittleCup({
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
        <div className='damage-types'>
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
        <div className='damage-types'>
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
        <div className='damage-types'>
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
        <div className='damage-types'>
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
        <div className='damage-types'>
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
        <div className='damage-types'>
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

  function nameReplace(e: string) {
    const moveName = e;
    const moveNameFront =
      moveName?.charAt(0).toUpperCase() + moveName.slice(1).replace('-', ' ');
    return moveNameFront;
  }

  async function getGenera(e: string) {
    let species = await api.getPokemonSpeciesByName(e);
    return (
      <div
        className={`genera-text-alt`}
        data-genera-text={`The ${species?.genera[7].genus}`}>
        The {species?.genera[7].genus}
      </div>
    );
  }

  async function getPokemonNumber(e: string) {
    let species = await api.getPokemonSpeciesByName(e);
    return (
      <div
        className={`pokedex-number-alt`}
        data-pokedex-number={species.pokedex_numbers[1]?.entry_number}>
        No. {species.pokedex_numbers[0]?.entry_number}
      </div>
    );
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
      <div className={`pokemon-stats-alt`} data-pokemon={e}>
        {pokemon.stats.map((stat, index) => {
          return (
            <div
              className={`stat-container-alt`}
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
            <div
              className={`pokemon-info-alt ${values.types[0].type.name}`}
              key={index}
              data-species={values.species.name}
              data-pokemon={
                nameSplit(values.name).charAt(0).toUpperCase() +
                nameSplit(values.name).slice(1)
              }
              data-type-1={values.types[0].type.name}
              data-type-2={values.types[1]?.type.name}>
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
                <Link
                  className='pokemon-name-alt'
                  href={`https://www.smogon.com/dex/sv/pokemon/${values.name
                    ?.replace('-mega', '')
                    ?.replace('-incarnate', '')
                    ?.replace('-50', '')}`}
                  target='_blank'>
                  {nameSplit(values.name)}
                </Link>
                <div className='pokemon-types-alt'>
                  {values.types.map((value) => {
                    return (
                      <div
                        className={`pokemon-type-alt ${value.type.name}`}
                        data-type-1={value.type.name}
                        key={value.slot}>
                        <Image
                          src={`./icons/${value.type.name}.svg`}
                          height={25}
                          width={25}
                          alt={`${
                            value.type.name.charAt(0).toUpperCase() +
                            value.type.name.slice(1)
                          } type icon.`}></Image>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='pokemon-img-container'>
                <Image
                  className={`${values.name}-img-alt pokemon-img`}
                  //@ts-ignore
                  src={values.sprite}
                  width={305}
                  height={305}
                  alt={`Default front sprite for ${nameSplit(values.name)}.`}
                  fetchPriority='high'
                />
              </div>
              <div className='pokemon-mid-container-alt'>
                {getPokemonNumber(values.species.name)}
                {weightCalculation(values.weight)}
                {getGenera(values.species.name)}
              </div>

              <div className='lower-container-alt'>
                <PokemonButton pokemon={values.name}>
                  <div className='abilities-alt'>
                    {values.abilities?.map((value, index) => {
                      return (
                        <Link
                          href={`https://www.smogon.com/dex/sv/abilities/${value.ability.name}`}
                          target='_blank'
                          className={`ability-box-alt`}
                          data-ability={value.ability.name}
                          key={index}>
                          <div className='ability-name-alt'>
                            <div>{abilityNames(value)}</div>
                            {displayAbility(value.ability.name)}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {returnLCMoves(values.name)}
                </PokemonButton>
                <div className='damage-relation-types-alt'>
                  {values.weakness?.map((value, index) => {
                    return (
                      <div
                        key={index}
                        data-type={value.split(':')[0]}
                        data-multiplier={value
                          .split(':')[1]
                          .replace(' ', '')
                          .replace('x', '')}
                        className='relations-type-alt'>
                        <div>
                          <Image
                            className={`relations-type-icon-alt`}
                            src={`../icons/${value.split(':')[0]}.svg`}
                            alt={`${value.split(':')[0]}-type icon`}
                            height={30}
                            width={30}></Image>
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
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div
      className={twMerge(`team-alt`, className)}
      id={playerName.toLowerCase()}
      data-player={playerName.toLowerCase()}>
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
