'use client';

import { useState } from 'react';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';

interface PokemonButtonProps {
  children?: React.ReactNode;
  pokemon?: string;
}

export default function PokemonButton({
  children,
  pokemon,
}: PokemonButtonProps) {
  const [abilities, setAbilities] = useState(true);

  function returnText(e: string) {
    if (abilities == true && e === 'Abilities') {
      return <>Abilities</>;
    } else if (abilities == false && e === 'Abilities') {
      return (
        <>
          <ImArrowLeft className='arrow left' />
          Abilities
        </>
      );
    } else if (abilities == true && e === 'Moves') {
      return (
        <>
          Moves
          <ImArrowRight className='arrow right' />
        </>
      );
    } else if (abilities == false && e === 'Moves') {
      return <>Moves</>;
    }
  }

  return (
    <div className='abilities-container-alt'>
      <div className='headers-container'>
        <button
          className='abilities-header-alt'
          onClick={() => {
            setAbilities(true);
          }}>
          {returnText('Abilities')}
        </button>
        <button
          className='moves-header-button'
          onClick={() => {
            setAbilities(false);
          }}>
          {returnText('Moves')}
        </button>
      </div>
      <div
        className={
          abilities
            ? `lower-container-content hide-last`
            : `lower-container-content hide-first`
        }>
        {children}
      </div>
    </div>
  );
}
