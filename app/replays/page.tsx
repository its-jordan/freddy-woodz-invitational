// import Link from 'next/link';
// import axios from 'axios';
// import { saveAs } from 'file-saver';

// export async function ReplayLinks(
//   player1: string,
//   player2: string,
//   game: string
// ) {
//   const data = await axios.get(`/replay/${player1}-${player2}-${game}.html`, {
//     responseType: 'blob',
//   });
//   const htmlBlob = new Blob([data.data], { type: 'text/html' });
//   return saveAs(htmlBlob, 'index.html', );
// }

// export default async function Replays() {
//   const ReplayArray = [
//     { player1: 'castleflutes', player2: 'its_jordan', game: '1' },
//     { player1: 'castleflutes', player2: 'seanboyq', game: '1' },
//     { player1: 'castleflutes', player2: 'seanboyq', game: '2' },
//     { player1: 'castleflutes', player2: 'seanboyq', game: '3' },
//     { player1: 'danknett', player2: 'its_jordan', game: '1' },
//     { player1: 'danknett', player2: 'its_jordan', game: '2' },
//     { player1: 'danknett', player2: 'tokotoro', game: '1' },
//     { player1: 'danknett', player2: 'tokotoro', game: '2' },
//     { player1: 'dtbaggins', player2: 'castleflutes', game: '1' },
//     { player1: 'dtbaggins', player2: 'castleflutes', game: '2' },
//     { player1: 'dtbaggins', player2: 'foxish', game: '1' },
//     { player1: 'dtbaggins', player2: 'resolamxxy', game: '1' },
//     { player1: 'dtbaggins', player2: 'resolamxxy', game: '2' },
//     { player1: 'ifurgat', player2: 'dtbaggins', game: '1' },
//     { player1: 'ifurgat', player2: 'dtbaggins', game: '2' },
//     { player1: 'resolamxxy', player2: 'seanboyq', game: '1' },
//     { player1: 'resolamxxy', player2: 'seanboyq', game: '2' },
//   ];

//   return (
//     <main className="mb-16">
//       <div className="replays-container">
//         {ReplayArray.map((value) => {
//           return (
//             <div>
//               <div
//                 onClick={ReplayLinks(value.player1, value.player2, value.game)}>
//                 <div>{value.player1}</div>
//                 <div>vs.</div>
//                 <div>{value.player2}</div>
//               </div>
//               <div>Game {value.game}</div>
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }

export default function Replays() {
  return <div></div>;
}
