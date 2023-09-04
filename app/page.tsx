import PlayerTeam from '@/components/arrays';
// import PokemonInput from '@/components/ui/pokemon';

export default function Home() {
  const fs = require('fs');

  function uberStats() {
    fs.readFile('ubers-stats.txt', 'utf8', (err: any, data: any) => {
      if (err) {
        console.error(err);
        return;
      } else {
        let stats = data
          .toString()
          .split('+----------------------------------------+')
          .toString()
          .split(',');
        let statsFormatted = stats;
        console.log(statsFormatted);
      }
    });
  }

  uberStats();

  return (
    <main className="mb-16">
      <div className="teams-container">
        <PlayerTeam
          player={'SeanBoyQ'}
          p1={'pinsir-mega'}
          p2={'slowking-galar'}
          p3={'zygarde-50'}
          p4={'raikou'}
          p5={'jellicent'}
          p6={'arcanine'}
          p7={'cloyster'}
          p8={'forretress'}
          p9={'tropius'}
          p0={'regigigas'}
        />
        <PlayerTeam
          player={'resolamxxy'}
          p1={'manaphy'}
          p2={'garchomp'}
          p3={'azelf'}
          p4={'breloom'}
          p5={'salamence'}
          p6={'politoed'}
          p7={'gastrodon'}
          p8={'ampharos-mega'}
          p9={'kabutops'}
          p0={'claydol'}
        />
        <PlayerTeam
          player={'dtbaggins'}
          p1={'sableye-mega'}
          p2={'rotom-wash'}
          p3={'blissey'}
          p4={'togekiss'}
          p5={'chansey'}
          p6={'dragalge'}
          p7={'bronzong'}
          p8={'ditto'}
          p9={'shedinja'}
          p0={'shuckle'}
        />
        <PlayerTeam
          player={'castleflutes'}
          p1={'kangaskhan-mega'}
          p2={'volcarona'}
          p3={'jirachi'}
          p4={'conkeldurr'}
          p5={'hippowdon'}
          p6={'tentacruel'}
          p7={'haxorus'}
          p8={'chandelure'}
          p9={'zangoose'}
          p0={'golem-alola'}
        />
        <PlayerTeam
          player={'Tokotoro'}
          p1={'swampert-mega'}
          p2={'ferrothorn'}
          p3={'pelipper'}
          p4={'thundurus-incarnate'}
          p5={'goodra-hisui'}
          p6={'diancie'}
          p7={'umbreon'}
          p8={'primeape'}
          p9={'qwilfish'}
          p0={'drifblim'}
        />
        <PlayerTeam
          player={'danknett'}
          p1={'tyranitar-mega'}
          p2={'excadrill'}
          p3={'rotom-heat'}
          p4={'skarmory'}
          p5={'marowak-alola'}
          p6={'vaporeon'}
          p7={'toxicroak'}
          p8={'gardevoir'}
          p9={'altaria'}
          p0={'sandslash-alola'}
        />
        <PlayerTeam
          player={'ifurgat'}
          p1={'lopunny-mega'}
          p2={'landorus-therian'}
          p3={'starmie'}
          p4={'gengar'}
          p5={'cobalion'}
          p6={'moltres'}
          p7={'persian-alola'}
          p8={'accelgor'}
          p9={'heliolisk'}
          p0={'carbink'}
        />
        <PlayerTeam
          player={'foxish'}
          p1={'gliscor'}
          p2={'alakazam-mega'}
          p3={'tornadus-incarnate'}
          p4={'zoroark-hisui'}
          p5={'chesnaught'}
          p6={'kingdra'}
          p7={'porygon2'}
          p8={'slowking'}
          p9={'avalugg-hisui'}
          p0={'luxray'}
        />
        <PlayerTeam
          player={'its_jordan'}
          p1={'scizor-mega'}
          p2={'blaziken'}
          p3={'infernape'}
          p4={'torkoal'}
          p5={'quagsire'}
          p6={'sableye'}
          p7={'flygon'}
          p8={'mismagius'}
          p9={'kecleon'}
          p0={'probopass'}
        />
      </div>
    </main>
  );
}
