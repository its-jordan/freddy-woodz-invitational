'use client';

import { useEffect, useState } from 'react';
import { BiMoon, BiSolidMoon } from 'react-icons/bi';
import { BsSun, BsSunFill } from 'react-icons/bs';

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : 'dark-mode'
  );
  const colorTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';

  useEffect(() => {
    const body = window.document.body;

    body.classList.remove(colorTheme);
    body.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export function DarkMode() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className='theme-selector'>
      {/* @ts-ignore */}
      <button className='theme-button' onClick={() => setTheme('dark-mode')}>
        {colorTheme === 'dark-mode' ? <BiMoon /> : <BiSolidMoon />}
      </button>
      {/* @ts-ignore */}
      <button className='theme-button' onClick={() => setTheme('light-mode')}>
        {colorTheme === 'light-mode' ? <BsSun /> : <BsSunFill />}
      </button>
    </div>
  );
}

export default useDarkMode;
