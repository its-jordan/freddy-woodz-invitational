// @ts-ignore

const PlayoffArray = [
  {
    'Match 1': [
      {
        name1: 'Seed 1',
        seed1: 1,
        score1: 0,
        name2: 'Seed 2',
        seed2: 4,
        score2: 0,
      },
    ],
    'Match 2': [
      {
        name1: 'Seed 2',
        seed1: 2,
        score1: 0,
        name2: 'Seed 3',
        seed2: 3,
        score2: 0,
      },
    ],
    'Match 3': [
      {
        name1: 'Seed 5',
        seed1: 5,
        score1: 0,
      },
    ],
    'Match 4': [
      {
        name1: 'Seed 6',
        seed1: 6,
        score1: 0,
      },
    ],
    'Match 5': [
      {
        name1: 'Winner of 1 vs 4',
        seed1: '1/4',
        score1: 0,
        name2: 'Winner of 2 vs 3',
        seed2: '2/3',
        score2: 0,
      },
    ],
    'Match 6': [
      {
        name1: 'Loser of 2 vs 3',
        seed1: '2/3',
        score1: 0,
        name2: 'Seed 5',
        seed2: 5,
        score2: 0,
      },
    ],
    'Match 7': [
      {
        name1: 'Loser of 1 vs 4',
        seed1: '1/4',
        score1: 0,
        name2: 'Seed 6',
        seed2: 6,
        score2: 0,
      },
    ],
    'Match 8': [
      {
        name1: '',
        seed1: 1,
        score1: 0,
        name2: '',
        seed2: 1,
        score2: 0,
      },
    ],
    'Match 9': [
      {
        name1: '',
        seed1: 1,
        score1: 0,
        name2: '',
        seed2: 1,
        score2: 0,
      },
    ],
    'Match 10': [
      {
        name1: '',
        seed1: 1,
        score1: 0,
        name2: '',
        seed2: 1,
        score2: 0,
      },
    ],
  },
];

function returnMatchInfo(e: string) {
  return (
    <>
      {/* @ts-ignore */}
      {PlayoffArray[0][e]?.map((player: any, index: number) => {
        return (
          <div key={index} className='playoffs-match-container' data-match={e}>
            <div
              className='playoffs-player-container'
              data-player-1={player.name1}
              data-score={player.score1}>
              <div className='playoffs-player-upper'>
                <div className='playoff-seed'>{player.seed1}</div>
                <div className='playoff-player'>{player.name1}</div>
              </div>
              <div className='playoff-score'>{player.score1}</div>
            </div>
            <div
              className='playoffs-player-container'
              data-player-1={player.name2}
              data-score={player.score2}>
              <div className='playoffs-player-upper'>
                <div className='playoff-seed'>{player.seed2}</div>
                <div className='playoff-player'>{player.name2}</div>
              </div>
              <div className='playoff-score'>{player.score2}</div>
            </div>
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
          <div className='playoffs-round'>
            <div className='playoffs-upper'>{returnMatchInfo('Match 5')}</div>
            <div className='playoffs-lower'>
              {returnMatchInfo('Match 6')}
              {returnMatchInfo('Match 7')}
            </div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper'></div>
            <div className='playoffs-lower'>{returnMatchInfo('Match 8')}</div>
          </div>
          <div className='playoffs-round'>
            <div className='playoffs-upper'></div>
            <div className='playoffs-lower'>{returnMatchInfo('Match 9')}</div>
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
