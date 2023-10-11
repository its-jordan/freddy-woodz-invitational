interface ReplayProps {
  element: any;
  index: number;
}

function replaceName(e: any) {
  let playerId = e;
  if (playerId == 'its_jordan') {
    return 'its_jordan';
  } else if (playerId == 'castleflutes') {
    return 'Castleflutes';
  } else if (playerId == 'seanboyq') {
    return 'SeanBoyQ';
  } else if (playerId == 'danknett') {
    return 'Danknett';
  } else if (playerId == 'tokotoro') {
    return 'Tokotoro';
  } else if (playerId == 'resolamxxy') {
    return 'resolamxxy';
  } else if (playerId == 'dtbaggins') {
    return 'DTBaggins';
  } else if (playerId == 'foxish') {
    return 'Foxish';
  } else if (playerId == 'ifurgat') {
    return 'iFurgat';
  }
}

export default function Replay({ element, index }: ReplayProps) {
  return (
    <div
      id={`${element.player1}-${element.player2}-${element.game}`}
      key={index}
      className='replay-container'
      data-player-1={element.player1}
      data-player-2={element.player2}
      data-game={element.game}>
      <div className='replay-heading'>
        <div>{replaceName(element.player1)}</div>
        <div>vs. </div>
        <div>{replaceName(element.player2)}</div>
        <div>Game {element.game}</div>
      </div>
      <div className='showdown-iframe-container'>
        <iframe
          src={`./replays/${element.player1}-${element.player2}-${element.game}.html`}
          width='1100px'
          height='1100px'
          loading='lazy'></iframe>
      </div>
    </div>
  );
}
