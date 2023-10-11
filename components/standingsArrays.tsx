// @ts-nocheck

import { MatchAdapter } from '../challonge';
import { ParticipantAdapter } from '../challonge';
import Link from 'next/link';

export default async function Standings() {
  let match = await MatchAdapter.index(
    'b18tqb8TwU1SWQ1r6PsvTmPla83GaeOwuTcfz5X7',
    'freddywoodz'
  );

  let eachMatch = match.matches;

  async function DisplayWinners() {
    const winners = {};

    winners['208943648'] = 0;
    winners['208943681'] = 0;

    let winnerArray = [
      eachMatch[0]?.match.winner_id,
      eachMatch[1]?.match.winner_id,
      eachMatch[2]?.match.winner_id,
      eachMatch[3]?.match.winner_id,
      eachMatch[4]?.match.winner_id,
      eachMatch[5]?.match.winner_id,
      eachMatch[6]?.match.winner_id,
      eachMatch[7]?.match.winner_id,
      eachMatch[8]?.match.winner_id,
      eachMatch[9]?.match.winner_id,
      eachMatch[10]?.match.winner_id,
      eachMatch[11]?.match.winner_id,
      eachMatch[12]?.match.winner_id,
      eachMatch[13]?.match.winner_id,
      eachMatch[14]?.match.winner_id,
      eachMatch[15]?.match.winner_id,
      eachMatch[16]?.match.winner_id,
      eachMatch[17]?.match.winner_id,
      eachMatch[18]?.match.winner_id,
      eachMatch[19]?.match.winner_id,
      eachMatch[20]?.match.winner_id,
      eachMatch[21]?.match.winner_id,
      eachMatch[22]?.match.winner_id,
      eachMatch[23]?.match.winner_id,
      eachMatch[24]?.match.winner_id,
      eachMatch[25]?.match.winner_id,
      eachMatch[26]?.match.winner_id,
      eachMatch[27]?.match.winner_id,
      eachMatch[28]?.match.winner_id,
      eachMatch[29]?.match.winner_id,
      eachMatch[30]?.match.winner_id,
      eachMatch[31]?.match.winner_id,
      eachMatch[32]?.match.winner_id,
      eachMatch[33]?.match.winner_id,
      eachMatch[34]?.match.winner_id,
      eachMatch[35]?.match.winner_id,
    ];

    winnerArray.forEach(function (x) {
      winners[x] = (winners[x] || 0) + 1;
    });

    delete winners.null;
    delete winners.undefined;

    const winnerValues = Object.entries(winners).map(([id, wins]) => ({
      id,
      wins,
    }));

    const losers = {};

    losers['208943657'] = 0;
    losers['208943647'] = 0;
    losers['208943681'] = 0;
    losers['208943656'] = 0;
    losers['208943645'] = 0;
    losers['208943679'] = 0;
    losers['208943648'] = 0;
    losers['208943635'] = 0;
    losers['208943667'] = 0;

    let loserArray = [
      eachMatch[0]?.match.loser_id,
      eachMatch[1]?.match.loser_id,
      eachMatch[2]?.match.loser_id,
      eachMatch[3]?.match.loser_id,
      eachMatch[4]?.match.loser_id,
      eachMatch[5]?.match.loser_id,
      eachMatch[6]?.match.loser_id,
      eachMatch[7]?.match.loser_id,
      eachMatch[8]?.match.loser_id,
      eachMatch[9]?.match.loser_id,
      eachMatch[10]?.match.loser_id,
      eachMatch[11]?.match.loser_id,
      eachMatch[12]?.match.loser_id,
      eachMatch[13]?.match.loser_id,
      eachMatch[14]?.match.loser_id,
      eachMatch[15]?.match.loser_id,
      eachMatch[16]?.match.loser_id,
      eachMatch[17]?.match.loser_id,
      eachMatch[18]?.match.loser_id,
      eachMatch[19]?.match.loser_id,
      eachMatch[20]?.match.loser_id,
      eachMatch[21]?.match.loser_id,
      eachMatch[22]?.match.loser_id,
      eachMatch[23]?.match.loser_id,
      eachMatch[24]?.match.loser_id,
      eachMatch[25]?.match.loser_id,
      eachMatch[26]?.match.loser_id,
      eachMatch[27]?.match.loser_id,
      eachMatch[28]?.match.loser_id,
      eachMatch[29]?.match.loser_id,
      eachMatch[30]?.match.loser_id,
      eachMatch[31]?.match.loser_id,
      eachMatch[32]?.match.loser_id,
      eachMatch[33]?.match.loser_id,
      eachMatch[34]?.match.loser_id,
      eachMatch[35]?.match.loser_id,
    ];

    const loserScores = {};

    let matchArray = [
      {
        loser: {
          id: eachMatch[0]?.match.loser_id,
          score: eachMatch[0]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[0]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[1]?.match.loser_id,
          score: eachMatch[1]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[1]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[2]?.match.loser_id,
          score: eachMatch[2]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[2]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[3]?.match.loser_id,
          score: eachMatch[3]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[3]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[4]?.match.loser_id,
          score: eachMatch[4]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[4]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[5]?.match.loser_id,
          score: eachMatch[5]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[5]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[6]?.match.loser_id,
          score: eachMatch[6]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[6]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[7]?.match.loser_id,
          score: eachMatch[7]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[7]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[8]?.match.loser_id,
          score: eachMatch[8]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[8]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[9]?.match.loser_id,
          score: eachMatch[9]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[9]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[10]?.match.loser_id,
          score: eachMatch[10]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[10]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[11]?.match.loser_id,
          score: eachMatch[11]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[11]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[12]?.match.loser_id,
          score: eachMatch[12]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[12]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[13]?.match.loser_id,
          score: eachMatch[13]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[13]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[14]?.match.loser_id,
          score: eachMatch[14]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[14]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[15]?.match.loser_id,
          score: eachMatch[15]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[15]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[16]?.match.loser_id,
          score: eachMatch[16]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[16]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[17]?.match.loser_id,
          score: eachMatch[17]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[17]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[18]?.match.loser_id,
          score: eachMatch[18]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[18]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[19]?.match.loser_id,
          score: eachMatch[19]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[19]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[20]?.match.loser_id,
          score: eachMatch[20]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[20]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[21]?.match.loser_id,
          score: eachMatch[21]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[21]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[22]?.match.loser_id,
          score: eachMatch[22]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[22]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[23]?.match.loser_id,
          score: eachMatch[23]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[23]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[24]?.match.loser_id,
          score: eachMatch[24]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[24]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[25]?.match.loser_id,
          score: eachMatch[25]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[25]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[26]?.match.loser_id,
          score: eachMatch[26]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[26]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[27]?.match.loser_id,
          score: eachMatch[27]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[27]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[28]?.match.loser_id,
          score: eachMatch[28]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[28]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[29]?.match.loser_id,
          score: eachMatch[29]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[29]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[30]?.match.loser_id,
          score: eachMatch[30]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[30]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[31]?.match.loser_id,
          score: eachMatch[31]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[31]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[32]?.match.loser_id,
          score: eachMatch[32]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[32]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[33]?.match.loser_id,
          score: eachMatch[33]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[33]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[34]?.match.loser_id,
          score: eachMatch[34]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[34]?.match.winner_id },
      },
      {
        loser: {
          id: eachMatch[35]?.match.loser_id,
          score: eachMatch[35]?.match.scores_csv
            .replace('2', '')
            .replace('-', ''),
        },
        winner: { id: eachMatch[35]?.match.winner_id },
      },
    ];

    loserArray.forEach(function (x) {
      losers[x] = (losers[x] || 0) + 1;
    });

    delete losers.null;
    delete losers.undefined;

    const loserValues = Object.entries(losers).map(([id, losses]) => ({
      id,
      losses,
    }));

    let currentStandings = winnerValues.map((item, i) =>
      Object.assign({}, item, loserValues[i])
    );

    const arrOfIds = [
      'ifurgat',
      'seanboyq',
      'resolamxxy',
      'dtbaggins',
      'castleflutes',
      'tokotoro',
      'danknett',
      'foxish',
      'its_jordan',
    ];

    let nextId = 0;
    for (const element of currentStandings) {
      element.name = arrOfIds[nextId++];
      element.winpoints = element.wins * 2;
      element.points = calculatePoints(element);
      // element.rd = element.points - element.losses * 2;
      element.rd = calculatePoints(element) - calculatePointsAllowed(element);
    }

    console.log(currentStandings);

    let sortedStandings = currentStandings.sort(
      (a, b) =>
        b.wins - a.wins ||
        a.losses - b.losses ||
        b.rd - a.rd ||
        b.points - a.points
    );

    function calculatePoints(e: any) {
      let player = e;
      if (
        player.id === '208943656' ||
        player.id === '208943635' ||
        player.id === '208943657'
      ) {
        return player.wins * 2 + 1;
      } else if (player.id === '208943667') {
        return player.wins * 2 + 1;
      } else if (player.id === '208943679') {
        return player.wins * 2 + 2;
      } else if (player.id === '208943648') {
        return player.wins * 2 + 3;
      } else {
        return player.wins * 2;
      }
    }

    function calculatePointsAllowed(e: any) {
      let player = e;
      if (player.id === '208943645') {
        return player.losses * 2 + 4;
      } else if (player.id === '208943656') {
        return player.losses * 2 + 2;
      } else if (player.id === '208943657') {
        return player.losses * 2 + 2;
      } else if (player.id === '208943667') {
        return player.losses * 2 + 1;
      } else {
        return player.losses * 2 + 0;
      }
    }

    return (
      <div className='standings-container'>
        <div className='standings-title'>Standings</div>
        <div className='standings-header'>
          <div className='standings-player'>Player</div>
          <div className='standings-wins'>W</div>
          <div className='standings-losses'>L</div>
          <div className='standings-points'>PS</div>
          <div className='standings-differential'>PD</div>
        </div>
        {sortedStandings.map((player) => {
          return (
            <Link
              href={`./#${player.name}`}
              data-player={player.name.toLowerCase()}
              className='standings-record'
              data-playoffs={player.wins < 2 ? 'no' : 'yes'}
              key={player.id}>
              <div className='standings-name'>
                {replaceName(player.id)}
                <div className='standings-playoffs'>
                  {returnPlayoffs(player.id)}
                </div>
              </div>
              <div className='standings-wins'>{player.wins}</div>
              <div className='standings-losses'>{player.losses}</div>
              <div className='standings-points'>{player.points}</div>
              <div className='standings-differential'>{player.rd}</div>
            </Link>
          );
        })}
        <div className='standings-guide'>
          <div className='qualified'>
            <div className='standings-guide-symbol'>Q</div>
            <div className='standings-guide-meaning'>
              Qualified for Playoffs
            </div>
          </div>
          <div className='eliminated'>
            <div className='standings-guide-symbol'>E</div>
            <div className='standings-guide-meaning'>
              Eliminated from Playoff Contention
            </div>
          </div>
        </div>
      </div>
    );
  }

  async function displayName(e: any) {
    let participants = await ParticipantAdapter.show(
      'b18tqb8TwU1SWQ1r6PsvTmPla83GaeOwuTcfz5X7',
      'freddywoodz',
      `${e}`
    );
    return (
      <div className='player-name' data-player={participants.participant.id}>
        {replaceName(participants.participant.id)}
      </div>
    );
  }

  function replaceId(e: any) {
    let playerId = e;
    if (playerId == '208943681') {
      return 'its_jordan';
    } else if (playerId == '208943656') {
      return 'castleflutes';
    } else if (playerId == '208943645') {
      return 'seanboyq';
    } else if (playerId == '208943667') {
      return 'danknett';
    } else if (playerId == '208943657') {
      return 'tokotoro';
    } else if (playerId == '208943647') {
      return 'resolamxxy';
    } else if (playerId == '208943648') {
      return 'dtbaggins';
    } else if (playerId == '208943679') {
      return 'foxish';
    } else if (playerId == '208943635') {
      return 'ifurgat';
    }
  }

  function returnPlayoffs(e: any) {
    let playerId = e;
    if (playerId == '208943681') {
      return 'E';
    } else if (playerId == '208943656') {
      return 'Q';
    } else if (playerId == '208943645') {
      return 'Q';
    } else if (playerId == '208943667') {
      return 'Q';
    } else if (playerId == '208943657') {
      return 'Q';
    } else if (playerId == '208943647') {
      return 'Q';
    } else if (playerId == '208943648') {
      return 'E';
    } else if (playerId == '208943679') {
      return 'E';
    } else if (playerId == '208943635') {
      return 'Q';
    }
  }

  function replaceName(e: any) {
    let playerId = e;
    if (playerId == '208943681') {
      return 'its_jordan';
    } else if (playerId == '208943656') {
      return 'Castleflutes';
    } else if (playerId == '208943645') {
      return 'SeanBoyQ';
    } else if (playerId == '208943667') {
      return 'Danknett';
    } else if (playerId == '208943657') {
      return 'Tokotoro';
    } else if (playerId == '208943647') {
      return 'resolamxxy';
    } else if (playerId == '208943648') {
      return 'DTBaggins';
    } else if (playerId == '208943679') {
      return 'Foxish';
    } else if (playerId == '208943635') {
      return 'iFurgat';
    }
  }

  return (
    <div className='score-container'>
      {DisplayWinners()}
      <div className='match-container'>
        <div className='score-container-header'>Scores</div>
        {eachMatch.map((value) => {
          return (
            <Link
              href={`./replays#${replaceId(value.match.player1_id)}-${replaceId(
                value.match.player2_id
              )}-1`}
              key={value.match.id}
              data-match={value.match.id}
              data-winner={value.match.winner_id}
              data-week={value.match.round}
              class={`match-data`}>
              <div
                className='player player-1'
                data-player={replaceID(value.match.player1_id)}
                data-score={value.match.scores_csv.charAt(0)}>
                <div className='player-container'>
                  {displayName(value.match.player1_id)}
                </div>
                <div
                  className='score'
                  data-score={value.match.scores_csv.charAt(0)}>
                  {value.match.scores_csv.charAt(0).toString()}
                </div>
              </div>
              <div
                className='player player-2'
                data-player={replaceID(value.match.player2_id)}
                data-score={value.match.scores_csv.charAt(2)}>
                <div className='player-container'>
                  {displayName(value.match.player2_id)}
                </div>
                <div
                  className='score'
                  data-score={value.match.scores_csv.charAt(2)}>
                  {value.match.scores_csv.charAt(2).toString()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
