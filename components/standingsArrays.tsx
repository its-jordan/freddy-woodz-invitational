import { TournamentAdapter } from '../challonge';
import { MatchAdapter } from '../challonge';
import { ParticipantAdapter } from '../challonge';

export default async function Standings() {
  const participant = await ParticipantAdapter.index(
    'ojemCQBOix3jaZ8ALVKrxupf6f3gKdQTaGZ8h1kB',
    'freddywoodz'
  );

  const league = await TournamentAdapter.show(
    'ojemCQBOix3jaZ8ALVKrxupf6f3gKdQTaGZ8h1kB',
    'freddywoodz'
  );

  const matches = await MatchAdapter.index(
    'ojemCQBOix3jaZ8ALVKrxupf6f3gKdQTaGZ8h1kB',
    'freddywoodz'
  );
  return (
    <div>
      {/* {matches.map((value) => {
        return <div>{value.player1_id}</div>;
      })} */}
      <div>Content</div>
    </div>
  );
}
