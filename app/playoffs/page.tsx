import Link from 'next/link';
// @ts-ignore
import Data from '../../data/playoffs.yaml';

const PlayoffArray = [
  {
    'Match 1': [
      {
        name1: Data['match 1'].name.split(',')[0],
        seed1: Data['match 1'].seed.charAt(0),
        score1: Data['match 1'].score.charAt(0),
        name2: Data['match 1'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 1'].seed.charAt(3),
        score2: Data['match 1'].score.charAt(2),
      },
    ],
    'Match 2': [
      {
        name1: Data['match 2'].name.split(',')[0],
        seed1: Data['match 2'].seed.charAt(0),
        score1: Data['match 2'].score.charAt(0),
        name2: Data['match 2'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 2'].seed.charAt(3),
        score2: Data['match 2'].score.charAt(2),
      },
    ],
    'Match 5': [
      {
        name1: Data['match 5'].name.split(',')[0],
        seed1: Data['match 5'].seed.charAt(0),
        score1: Data['match 5'].score.charAt(0),
        name2: Data['match 5'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 5'].seed.charAt(3),
        score2: Data['match 5'].score.charAt(2),
      },
    ],
    'Match 6': [
      {
        name1: Data['match 6'].name.split(',')[0],
        seed1: Data['match 6'].seed.charAt(0),
        score1: Data['match 6'].score.charAt(0),
        name2: Data['match 6'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 6'].seed.charAt(3),
        score2: Data['match 6'].score.charAt(2),
      },
    ],
    'Match 7': [
      {
        name1: Data['match 7'].name.split(',')[0],
        seed1: Data['match 7'].seed.charAt(0),
        score1: Data['match 7'].score.charAt(0),
        name2: Data['match 7'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 7'].seed.charAt(3),
        score2: Data['match 7'].score.charAt(2),
      },
    ],
    'Match 8': [
      {
        name1: Data['match 8'].name.split(',')[0],
        seed1: Data['match 8'].seed.charAt(0),
        score1: Data['match 8'].score.charAt(0),
        name2: Data['match 8'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 8'].seed.charAt(3),
        score2: Data['match 8'].score.charAt(2),
      },
    ],
    'Match 9': [
      {
        name1: Data['match 9'].name.split(',')[0],
        seed1: Data['match 9'].seed.charAt(0),
        score1: Data['match 9'].score.charAt(0),
        name2: Data['match 9'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 9'].seed.charAt(3),
        score2: Data['match 9'].score.charAt(2),
      },
    ],
    'Match 10': [
      {
        name1: Data['match 10'].name.split(',')[0],
        seed1: Data['match 10'].seed.charAt(0),
        score1: Data['match 10'].score.charAt(0),
        name2: Data['match 10'].name.split(',')[1].replace(' ', ''),
        seed2: Data['match 10'].seed.charAt(3),
        score2: Data['match 10'].score.charAt(2),
      },
    ],
  },
];

function NameSplit(e: string) {
  const player = e;
  if (player === 'ifurgat') {
    return 'iFurgat';
  } else if (player === 'resolamxxy') {
    return 'resolamxxy';
  } else if (player === 'seanboyq') {
    return 'SeanBoyQ';
  } else if (player === 'tokotoro') {
    return 'Tokotoro';
  } else if (player === 'castleflutes') {
    return 'Castleflutes';
  } else if (player === 'danknett') {
    return 'Danknett';
  } else {
    return player;
  }
}

function verifyPath(e: string) {
  const path = e;
  if (path === 'ifurgat') {
    return './#ifurgat';
  } else if (path === 'resolamxxy') {
    return './#resolamxxy';
  } else if (path === 'seanboyq') {
    return './#seanboyq';
  } else if (path === 'tokotoro') {
    return './#tokotoro';
  } else if (path === 'castleflutes') {
    return './#castleflutes';
  } else if (path === 'danknett') {
    return './#danknett';
  } else {
    return './';
  }
}

function returnMatchInfo(e: string) {
  return (
    <>
      {/* @ts-ignore */}
      {PlayoffArray[0][e]?.map((player: any, index: number) => {
        return (
          <div key={index} className='playoffs-match-container' data-match={e}>
            <Link
              href={verifyPath(player.name1)}
              className='playoffs-player-container'
              data-player-1={player.name1}
              data-score={player.score1}>
              <div className='playoffs-player-upper'>
                <div className='playoff-seed'>{player.seed1}</div>
                <div className='playoff-player'>{NameSplit(player.name1)}</div>
              </div>
              <div className='playoff-score'>{player.score1}</div>
            </Link>
            <Link
              href={verifyPath(player.name2)}
              className='playoffs-player-container'
              data-player-1={player.name2}
              data-score={player.score2}>
              <div className='playoffs-player-upper'>
                <div className='playoff-seed'>{player.seed2}</div>
                <div className='playoff-player'>{NameSplit(player.name2)}</div>
              </div>
              <div className='playoff-score'>{player.score2}</div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default function Playoffs() {
  return (
    <main className='playoffs-main'>
      <div className='playoffs-container'>
        <div className='playoffs-header'>Playoffs</div>
        <div className='playoffs-bracket'>
          <div className='playoffs-round'>
            <div className='playoffs-upper'>
              {returnMatchInfo('Match 1')}
              {returnMatchInfo('Match 2')}
            </div>
            <div className='playoffs-lower'>
              {returnMatchInfo('Match 3')}
              {returnMatchInfo('Match 4')}
            </div>
          </div>
          <div className='playoffs-connector-container'>
            <div className='playoffs-upper'>
              <div className='playoffs-connector'></div>
              <div className='playoffs-line'></div>
            </div>
            <div className='playoffs-lower first'></div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper'>{returnMatchInfo('Match 5')}</div>
            <div className='playoffs-lower'>
              {returnMatchInfo('Match 6')}
              {returnMatchInfo('Match 7')}
            </div>
          </div>
          <div className='playoffs-connector-container'>
            <div className='playoffs-upper first'>
              <div className='playoffs-line'></div>
            </div>
            <div className='playoffs-lower first'>
              <div className='playoffs-connector'></div>
              <div className='playoffs-line'></div>
            </div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper second'>
              <div className='playoffs-line'></div>
            </div>
            <div className='playoffs-lower'>{returnMatchInfo('Match 8')}</div>
          </div>
          <div className='playoffs-connector-container'>
            <div className='playoffs-upper third'>
              <div className='playoffs-line'></div>
            </div>
            <div className='playoffs-lower third'>
              <div className='playoffs-line'></div>
            </div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper fourth'>
              <div className='playoffs-line'></div>
            </div>
            <div className='playoffs-lower'>{returnMatchInfo('Match 9')}</div>
          </div>
          <div className='playoffs-connector-container last'>
            <div className='playoffs-connector'></div>
            <div className='playoffs-line'></div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper'>{returnMatchInfo('Match 10')}</div>
            <div className='playoffs-lower'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
