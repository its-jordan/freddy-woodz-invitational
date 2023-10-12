import Link from 'next/link';
import LCStats from '@/data/lcStats.json';
// @ts-ignore
import Moves from '../data/moves.yaml';
// @ts-ignore
import Effects from '../data/moveEffects.yaml';

const move = Moves;

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
            <div className={`move-type-alt ${ele.type_id}`}>{ele.type_id}</div>
          </div>
          <div className='move-hover-info-alt'>
            <div className={`move-damage-type-alt`} data-damage-type='status'>
              Status
            </div>
            <div className={`move-pp-alt`} data-pp={ele.pp}>
              {ele.pp}pp
            </div>
            <div className={`move-priority-alt`} data-priority={ele.priority}>
              Prio: {ele?.priority}
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

            <div className={`move-accuracy-alt`} data-accuracy={ele?.accuracy}>
              {ele?.accuracy}% acc
            </div>
            <div className={`move-pp-alt`} data-pp={ele?.pp}>
              {ele?.pp}pp
            </div>
            <div className={`move-power-alt`} data-power={ele?.power}>
              {ele?.power}bp
            </div>
            <div className={`move-priority-alt`} data-priority={ele?.priority}>
              Prio: {ele?.priority}
            </div>
          </div>
        </div>
        <div className='move-hover-lower-container-alt'>
          <div className='move-effect-alt-container'>
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

function json2array(json: any) {
  var result: any = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(key);
  });
  return result;
}

export function returnLCMoves(e: string) {
  const lcUsageStats = LCStats;
  const pokemonName = e;

  function replaceMoveName(e: any) {
    const moveName = e;
    return moveName.replaceAll(' ', '-').toLowerCase();
  }

  // @ts-ignore
  const lcMove = json2array(lcUsageStats.pokemon[pokemonName].moves);

  if (lcMove !== undefined) {
    return (
      <div className='moves-wrapper-alt'>
        <div className='moves-container-alt'>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${replaceMoveName(
              lcMove[0]
            )}`}
            target='_blank'
            className='move-alt'
            data-move={replaceMoveName(lcMove[0])}
            data-move-type={move[replaceMoveName(lcMove[0])]?.type_id}>
            <div className='move-name-alt'>{lcMove[0]}</div>
            {moveTypes(replaceMoveName(lcMove[0]))}
          </Link>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${lcMove[1]}`}
            target='_blank'
            className='move-alt'
            data-move={replaceMoveName(lcMove[1])}
            data-move-type={move[replaceMoveName(lcMove[1])]?.type_id}>
            <div className='move-name-alt'>{lcMove[1]}</div>
            {moveTypes(replaceMoveName(lcMove[1]))}
          </Link>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${replaceMoveName(
              lcMove[2]
            )}`}
            target='_blank'
            className='move-alt'
            data-move={lcMove[2]}
            data-move-type={move[replaceMoveName(lcMove[2])]?.type_id}>
            <div className='move-name-alt'>{replaceMoveName(lcMove[2])}</div>
            {moveTypes(replaceMoveName(lcMove[2]))}
          </Link>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${replaceMoveName(
              lcMove[3]
            )}`}
            target='_blank'
            className='move-alt'
            data-move={replaceMoveName(lcMove[3])}
            data-move-type={move[replaceMoveName(lcMove[3])]?.type_id}>
            <div className='move-name-alt'>{lcMove[3]}</div>
            {moveTypes(replaceMoveName(lcMove[3]))}
          </Link>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${replaceMoveName(
              lcMove[4]
            )}`}
            target='_blank'
            className='move-alt'
            data-move={replaceMoveName(lcMove[4])}
            data-move-type={move[replaceMoveName(lcMove[4])]?.type_id}>
            <div className='move-name-alt'>{lcMove[4]}</div>
            {moveTypes(replaceMoveName(lcMove[4]))}
          </Link>
          <Link
            href={`https://www.smogon.com/dex/sv/moves/${replaceMoveName(
              lcMove[5]
            )}`}
            target='_blank'
            className='move-alt'
            data-move={replaceMoveName(lcMove[5])}
            data-move-type={move[replaceMoveName(lcMove[5])]?.type_id}>
            <div className='move-name-alt'>{lcMove[5]}</div>
            {moveTypes(replaceMoveName(lcMove[5]))}
          </Link>
        </div>
      </div>
    );
  }
}
