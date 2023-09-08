import PlayerTeam from '@/components/arrays';

export default async function Home() {
  return (
    <main className='mb-16'>
      <div className='notice'>
        Teams accurate as of 09&#8722;08&#8722;2023 at 7&#58;38pm EST.
      </div>
      <div className='teams-container'>
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
          p1={'aegislash-blade'}
          p2={'rotom-wash'}
          p3={'blissey'}
          p4={'togekiss'}
          p5={'amoonguss'}
          p6={'aggron-mega'}
          p7={'bronzong'}
          p8={'ditto'}
          p9={'bellossom'}
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
          p7={'hoopa'}
          p8={'primeape'}
          p9={'qwilfish'}
          p0={'beartic'}
        />
        <PlayerTeam
          player={'danknett'}
          p1={'tyranitar-mega'}
          p2={'excadrill'}
          p3={'rotom-heat'}
          p4={'skarmory'}
          p5={'serperior'}
          p6={'vaporeon'}
          p7={'toxicroak'}
          p8={'gardevoir'}
          p9={'altaria'}
          p0={'articuno'}
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
          p3={'infernape'}
          p4={'zoroark-hisui'}
          p5={'chesnaught'}
          p6={'kingdra'}
          p7={'porygon2'}
          p8={'slowking'}
          p9={'beedrill'}
          p0={'luxray'}
        />
        <PlayerTeam
          player={'its_jordan'}
          p1={'lilligant-hisui'}
          p2={'blaziken'}
          p3={'venusaur-mega'}
          p4={'torkoal'}
          p5={'quagsire'}
          p6={'sableye'}
          p7={'flygon'}
          p8={'mismagius'}
          p9={'rotom-frost'}
          p0={'probopass'}
        />
      </div>
    </main>
  );
}
