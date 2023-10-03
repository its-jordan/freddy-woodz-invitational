// @ts-nocheck

import '../app/scores/scores.css';
import { MatchAdapter } from '../challonge';
import { ParticipantAdapter } from '../challonge';
import Link from 'next/link';

export default async function Standings() {
  let match = await MatchAdapter.index(
    'ojemCQBOix3jaZ8ALVKrxupf6f3gKdQTaGZ8h1kB',
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
      eachMatch[36]?.match.winner_id,
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
      eachMatch[36]?.match.loser_id,
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
      'Furgat',
      'Sean',
      'Max',
      'J Dougs',
      'Dom',
      'Toko',
      'Dank',
      'Ricky',
      'Jordan',
    ];

    let nextId = 0;
    for (const element of currentStandings) {
      element.name = arrOfIds[nextId++];
      element.points = calculatePoints(element);
      // element.rd = element.points - element.losses * 2;
      element.rd = calculatePoints(element) - calculatePointsAllowed(element);
    }

    // console.log(currentStandings);

    let sortedStandings = currentStandings.sort(
      (a, b) =>
        b.wins / (b.wins + b.losses) - a.wins / (a.wins + a.losses) ||
        b.wins - a.wins ||
        b.points - a.points ||
        a.losses - b.losses
    );

    function calculatePoints(e: any) {
      let player = e;
      if (
        player.id === '208943679' ||
        player.id === '208943656' ||
        player.id === '208943635' ||
        player.id === '208943657'
      ) {
        return player.wins * 2 + 1;
      } else if (player.id === '208943648') {
        return player.wins * 2 + 2;
      } else {
        return player.wins * 2;
      }
    }

    function calculatePointsAllowed(e: any) {
      let player = e;
      if (player.id === '208943645') {
        return player.losses * 2 + 3;
      } else if (player.id === '208943656') {
        return player.losses * 2 + 1;
      } else if (player.id === '208943657') {
        return player.losses * 2 + 1;
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
              href={`./#${player.id}`}
              data-player={player.id}
              className='standings-record'
              key={player.id}>
              <div className='standings-name'>{player.name.toString()}</div>
              <div className='standings-wins'>{player.wins.toString()}</div>
              <div className='standings-losses'>{player.losses.toString()}</div>
              <div className='standings-points'>{player.points}</div>
              <div className='standings-differential'>{player.rd}</div>
            </Link>
          );
        })}
      </div>
    );
  }

  async function displayName(e: any) {
    let participants = await ParticipantAdapter.show(
      'ojemCQBOix3jaZ8ALVKrxupf6f3gKdQTaGZ8h1kB',
      'freddywoodz',
      `${e}`
    );
    return (
      <div className='player-name' data-player={participants.participant.id}>
        {participants.participant.name.charAt(0).toUpperCase() +
          participants.participant.name.slice(1)}
      </div>
    );
  }

  return (
    <div className='score-container'>
      {DisplayWinners()}
      <div className='match-container'>
        <div className='score-container-header'>Scores</div>
        {eachMatch.map((value) => {
          return (
            <Link
              href={`./replays#${value.match.player1_id}-${value.match.player2_id}-1`}
              key={value.match.id}
              data-match={value.match.id}
              data-winner={value.match.winner_id}
              data-week={value.match.round}
              class={`match-data`}>
              <div
                className='player player-1'
                data-player={value.match.player1_id}
                data-score={value.match.scores_csv.charAt(0)}>
                <div className='player-container'>
                  <div className='player-heading'>Player 1</div>
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
                data-player={value.match.player2_id}
                data-score={value.match.scores_csv.charAt(2)}>
                <div className='player-container'>
                  <div className='player-heading'>Player 2</div>
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
