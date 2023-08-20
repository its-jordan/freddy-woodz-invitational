import { PokemonClient } from 'pokenode-ts';
import Link from 'next/link';

export default async function JordansPage() {
  const api = new PokemonClient();
  let pokemon1 = await api.getPokemonByName('lilligant-hisui');
  let pokemon2 = await api.getPokemonByName('venusaur-mega');
  const pokemonArray = [
    {
      name: pokemon1.name,
      abilities: pokemon1.abilities,
      types: pokemon1.types,
      sprite: pokemon1.sprites,
      species: pokemon1.species,
    },
    {
      name: pokemon2.name,
      abilities: pokemon2.abilities,
      types: pokemon2.types,
      sprite: pokemon2.sprites,
      species: pokemon2.species,
    },
  ];
  return (
    <main>
      <Link href="./">Home</Link>
      <div className="heading">Potential Pickups</div>
      <div className="pokemon-jordan-container">
        {pokemonArray.map((values, index) => {
          return (
            <Link
              href={`https://www.smogon.com/dex/sv/pokemon/${values.species.name}`}
              target="_blank"
              className={`pokemon-info-itsjordan flex flex-row`}
              key={index}>
              <img
                className={`${values.name}-img`}
                src={values.sprite.front_default?.toString()}
                alt={`Default front sprite for ${values.name}`}
              />
              <div className="pokemon-data">
                <div className="name-container">
                  <div className="pokemon-name">{values.name}</div>
                  <div className="pokemon-types">
                    {values.types.map((value) => {
                      return (
                        <div
                          className={`pokemon-type ${value.type.name}`}
                          key={value.slot}>
                          {value.type.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="abilities-container">
                  <div>Potential Abilities: </div>
                  <div className="abilities">
                    {values.abilities?.map((value, index) => {
                      return (
                        <div className={value.ability.name} key={index}>
                          {value.ability.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
