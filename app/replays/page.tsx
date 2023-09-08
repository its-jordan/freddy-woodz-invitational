export default function Replays() {
  const PlayerArray = [
    { player1: 'castleflutes', player2: 'its_jordan', game: '1' },
    { player1: 'castleflutes', player2: 'seanboyq', game: '1' },
    { player1: 'castleflutes', player2: 'seanboyq', game: '2' },
    { player1: 'castleflutes', player2: 'seanboyq', game: '3' },
    { player1: 'danknett', player2: 'its_jordan', game: '1' },
    { player1: 'danknett', player2: 'its_jordan', game: '2' },
    { player1: 'danknett', player2: 'tokotoro', game: '1' },
    { player1: 'danknett', player2: 'tokotoro', game: '2' },
    { player1: 'dtbaggins', player2: 'castleflutes', game: '1' },
    { player1: 'dtbaggins', player2: 'castleflutes', game: '2' },
    { player1: 'dtbaggins', player2: 'resolamxxy', game: '1' },
    { player1: 'dtbaggins', player2: 'resolamxxy', game: '2' },
    { player1: 'dtbaggins', player2: 'foxish', game: '1' },
    { player1: 'ifurgat', player2: 'castleflutes', game: '1' },
    { player1: 'ifurgat', player2: 'castleflutes', game: '2' },
    { player1: 'ifurgat', player2: 'castleflutes', game: '3' },
    { player1: 'ifurgat', player2: 'dtbaggins', game: '1' },
    { player1: 'ifurgat', player2: 'dtbaggins', game: '2' },
    { player1: 'its_jordan', player2: 'tokotoro', game: '1' },
    { player1: 'its_jordan', player2: 'tokotoro', game: '2' },
    { player1: 'resolamxxy', player2: 'seanboyq', game: '1' },
    { player1: 'resolamxxy', player2: 'seanboyq', game: '2' },
  ];

  return (
    <main className="mb-16">
      <div className="notice">Games may not be in actual play order.</div>
      <div className="replays-wrapper">
        {PlayerArray.map((element, index) => {
          return (
            <div
              key={index}
              className="replay-container"
              data-player-1={element.player1}
              data-player-2={element.player2}
              data-game={element.game}>
              <div className="replay-heading">
                {element.player1} vs. {element.player2} - Game {element.game}
              </div>
              <div>
                <iframe
                  src={`./${element.player1}-${element.player2}-${element.game}.html`}
                  width="900px"
                  height="900px"
                  loading="lazy"></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
