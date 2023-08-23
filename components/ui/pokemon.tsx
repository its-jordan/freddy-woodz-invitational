// import { PokemonClient } from 'pokenode-ts';
// import { getTypeWeaknesses } from '../../pokemon-types/index';
// import Link from 'next/link';
// import { useState } from 'react';

// export default async function PokemonInput() {
//   const [value, setValue] = useState('');

//   let p1 = value;
//   const api = new PokemonClient();
//   const newPokemon = await api.getPokemonByName(p1);
//   console.log(newPokemon);

//   const newPokWeakness = getTypeWeaknesses(
//     newPokemon.types[0].type.name,
//     newPokemon.types[1]?.type.name
//   );
//   const newPokArray = Object.entries(newPokWeakness)
//     .map((a) => a.join(': '))
//     .filter((a) => !a.includes('1'))
//     .map((i) => i + 'x')
//     .sort();

//   return (
//     <>
//       <div className="vert-flex-container">
//         <input
//           placeholder="Add a pokemon"
//           onChange={(e) => {
//             setValue('e.currentTarget.value');
//           }}
//         />
//         <div>
//           <Link
//             href={`https://www.smogon.com/dex/sv/pokemon/${newPokemon.species.name}`}
//             target="_blank"
//             className={`pokemon-info flex flex-row`}>
//             <img
//               className={`${newPokemon.name}-img`}
//               src={newPokemon.sprites.front_default?.toString()}
//               alt={`Default front sprite for ${newPokemon.name}`}
//             />
//             <div className="pokemon-data">
//               <div className="name-container">
//                 <div className="pokemon-name">{newPokemon.name}</div>
//                 <div className="pokemon-types">
//                   {newPokemon.types.map((value) => {
//                     return (
//                       <div
//                         className={`pokemon-type ${value.type.name}`}
//                         key={value.slot}>
//                         {value.type.name}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="abilities-container">
//                 <div>Potential Abilities: </div>
//                 <div className="abilities">
//                   {newPokemon.abilities?.map((value, index) => {
//                     return (
//                       <div className={value.ability.name} key={index}>
//                         {value.ability.name}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="damage-relations-container">
//                 {newPokArray?.map((value, index) => {
//                   return (
//                     <div
//                       key={index}
//                       data-type={value}
//                       className="relations-type">
//                       {value}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
