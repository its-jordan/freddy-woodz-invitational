'use client';

export default function ColSize() {
  let root = document.documentElement;

  root.addEventListener('click', (e) => {
    root.style.setProperty('--mouse-x', 'calc(50% - 2rem');
    root.style.setProperty('--colsize', '100%');
  });
}
