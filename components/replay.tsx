interface ReplayProps {
  element: any;
  index: number;
}

export default function Replay({ element, index }: ReplayProps) {
  return (
    <div
      id={`${element.player1Id}-${element.player2Id}-${element.game}`}
      key={index}
      className='replay-container'
      data-player-1={element.player1}
      data-player-2={element.player2}
      data-game={element.game}>
      <div className='replay-heading'>
        {element.player1.charAt(0).toUpperCase().replace('I', 'i') +
          element.player1.slice(1).replace('q', 'Q')}{' '}
        vs.{' '}
        {element.player2.charAt(0).toUpperCase().replace('I', 'i') +
          element.player2.slice(1).replace('q', 'Q')}{' '}
        - Game {element.game}
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
