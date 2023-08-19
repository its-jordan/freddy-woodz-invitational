import Tokotoro from '@/teams/tokotoro';
import Ifurgat from '@/teams/ifurgat';
import SeanBoyQ from '@/teams/seanboyq';
import Resolamxxy from '@/teams/resolamxxy';
import JDougs from '@/teams/jdougs';
import Dom from '@/teams/dom';
import Danknett from '@/teams/danknett';
import Foxish from '@/teams/foxish';
import Itsjordan from '@/teams/itsjordan';

export default function Home() {
  return (
    <main className="mb-16">
      <div className="flex flex-col gap-4">
        <SeanBoyQ />
        <Resolamxxy />
        <JDougs />
        <Dom />
        <Tokotoro />
        <Danknett />
        <Ifurgat />
        <Foxish />
        <Itsjordan />
      </div>
    </main>
  );
}
