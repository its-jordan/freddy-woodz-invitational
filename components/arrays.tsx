// @ts-nocheck
import { PokemonClient } from 'pokenode-ts';
import { getTypeWeaknesses } from '../pokemon-types/index';
// @ts-ignore
import Data from '../data/uber-stats.yaml';
// @ts-ignore
import Moves from '../data/moves.yaml';
// @ts-ignore
import Effects from '../data/moveEffects.yaml';
import Link from 'next/link';

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
}

export default async function PlayerTeam({
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

  const move = Moves;

  function mergeMoves(e: string) {
    // const moveArray = [move];
    // const effectArray = [Effects];
    // const mergedArrays = [moveArray].map((m1: any) => ({
    //   ...m1,
    //   ...[effectArray].find(
    //     (m2: any) =>
    //       m2[moveArray]?.move_effect_id.toString() ===
    //       m1[moveArray]?.effect_id.toString()
    //   ),
    // }));

    const moveArray = move[e];
    const effectArray = Effects[moveArray?.effect_id];

    let merge = (obj1, obj2) => ({ ...obj1, ...obj2 });

    const mergedArrays = merge(moveArray, effectArray);

    console.log(merge(moveArray, effectArray));

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
            </div>
          </div>
        </div>
      );
    }
  }

  var pokearray = [
    {
      name: pok1.name,
      abilities: pok1.abilities,
      types: pok1.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok1.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok1.species,
      weakness: pok1Array,
      weight: pok1.weight,
    },
    {
      name: pok2.name,
      abilities: pok2.abilities,
      types: pok2.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok2.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok2.species,
      weakness: pok2Array,
      weight: pok2.weight,
    },
    {
      name: pok3.name,
      abilities: pok3.abilities,
      types: pok3.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok3.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok3.species,
      weakness: pok3Array,
      weight: pok3.weight,
    },
    {
      name: pok4.name,
      abilities: pok4.abilities,
      types: pok4.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok4.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok4.species,
      weakness: pok4Array,
      weight: pok4.weight,
    },
    {
      name: pok5.name,
      abilities: pok5.abilities,
      types: pok5.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok5.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok5.species,
      weakness: pok5Array,
      weight: pok5.weight,
    },
    {
      name: pok6.name,
      abilities: pok6.abilities,
      types: pok6.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok6.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok6.species,
      weakness: pok6Array,
      weight: pok6.weight,
    },
    {
      name: pok7.name,
      abilities: pok7.abilities,
      types: pok7.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok7.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok7.species,
      weakness: pok7Array,
      weight: pok7.weight,
    },
    {
      name: pok8.name,
      abilities: pok8.abilities,
      types: pok8.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok8.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok8.species,
      weakness: pok8Array,
      weight: pok8.weight,
    },
    {
      name: pok9.name,
      abilities: pok9.abilities,
      types: pok9.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok9.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok9.species,
      weakness: pok9Array,
      weight: pok9.weight,
    },
    {
      name: pok0.name,
      abilities: pok0.abilities,
      types: pok0.types,
      sprite: `https://www.smogon.com/dex/media/sprites/xy/${pok0.name
        ?.replace('-50', '')
        ?.replace('-incarnate', '')}.gif`,
      species: pok0.species,
      weakness: pok0Array,
      weight: pok0.weight,
    },
  ];

  if (pok1.name === 'lilligant-hisui') {
    var editedArray = {
      name: pok1.name,
      abilities: pok1.abilities,
      types: pok1.types,
      sprite: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/56ce70c8-7180-4823-ad03-5f29f2594215/dfptijp-3a860015-8842-4067-9126-711d52512397.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU2Y2U3MGM4LTcxODAtNDgyMy1hZDAzLTVmMjlmMjU5NDIxNVwvZGZwdGlqcC0zYTg2MDAxNS04ODQyLTQwNjctOTEyNi03MTFkNTI1MTIzOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bQKwQwMio-YJACXsO411cdd2JRTh7PJDuXDtQ9rGxp4`,
      species: pok1.species,
      weakness: pok1Array,
      weight: pok1.weight,
    };

    pokearray = pokearray.map((u) =>
      u.name !== editedArray.name ? u : editedArray
    );
  }

  function nameSplit(e: string) {
    if (e.includes('galar') == true) {
      return `${e.split('-')[1]?.concat('ian')} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('50')) {
      return `${e.replace('-50', '')}`;
    } else if (e.includes('mega') == true) {
      return `${e.split('-')[1]} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('alola') == true) {
      return `${e.split('-')[1]?.concat('n')} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('hisui') == true) {
      return `${e.split('-')[1]?.concat('an')} ${
        ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
      }`;
    } else if (e.includes('blade') == true) {
      return `${e.split('-')[0]}`;
    } else {
      return e;
    }
  }

  function returnType(e: string) {
    if (e == undefined) {
      return <></>;
    }
    return (
      <img
        className={`type-icon ${e}-type`}
        src={`icons/${e}.svg`}
        alt={`Type icon for ${e}.`}></img>
    );
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

  return (
    <div className='team' id={playerId.toString()} data-player={playerId}>
      <div className='teamname'>{playerName}</div>
      <div className='player-team'>
        {pokearray.map((values, index) => {
          return (
            <div className={`pokemon-info`} key={index}>
              <div className='type-icon-container'>
                {returnType(values.types[0]?.type.name)}
                {returnType(values.types[1]?.type.name)}
              </div>
              <Link
                href={`https://www.smogon.com/dex/sv/pokemon/${values.name
                  ?.replace('-mega', '')
                  ?.replace('-incarnate', '')
                  ?.replace('-50', '')}`}
                target='_blank'
                className='upper-container'>
                <img
                  className={`${values.name}-img`}
                  src={values.sprite}
                  alt={`Default front sprite for ${values.name}`}
                />
                <div className='pokemon-data'>
                  <div className='name-container'>
                    <div className='pokemon-name'>{nameSplit(values.name)}</div>
                    {weightCalculation(values.weight)}
                  </div>
                </div>
                <div className='pokemon-types'>
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
              </Link>
              <div className='abilities-container'>
                <div className='abilities-header'>Abilities</div>
                <div className='abilities'>
                  {values.abilities?.map((value, index) => {
                    return (
                      <div
                        className={`ability-box ${value.ability.name}`}
                        key={index}>
                        <div className='ability-name'>{value.ability.name}</div>
                        {displayAbility(value.ability.name)}
                      </div>
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
                        {value.split(':')[0]}
                      </div>
                    );
                  })}
                </div>
              </div>
              {displayMoves(values.name)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
