'use client';

import { useState } from 'react';

interface PokemonButtonProps {
  children?: React.ReactNode;
  pokemon?: string;
}

export default function PokemonButton({
  children,
  pokemon,
}: PokemonButtonProps) {
  const [abilities, setAbilities] = useState(true);
  return (
    <div className='abilities-container-alt'>
      <div className='headers-container'>
        <button
          className='abilities-header-alt'
          onClick={() => {
            setAbilities(true);
          }}>
          {abilities ? 'Abilities' : '🠜 Abilities'}
        </button>
        <button
          className='moves-header-button'
          onClick={() => {
            setAbilities(false);
          }}>
          {abilities ? 'Moves 🠞' : 'Moves'}
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
