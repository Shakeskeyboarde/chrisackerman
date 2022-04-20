import { useEffect, useState } from 'react';

/**
 * Get the last direction of scrolling on each axis.
 */
const useScrollDirection = () => {
  const [vertical, setVertical] = useState<'down' | 'up' | null>(null);
  const [horizontal, setHorizontal] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    let x = window.scrollX;
    let y = window.scrollY;

    const onScroll = () => {
      const dx = window.scrollX - x;
      const dy = window.scrollY - y;

      if (dx !== 0) {
        x = window.scrollX;
        setHorizontal(dx < 0 ? 'left' : 'right');
      }

      if (dy !== 0) {
        y = window.scrollY;
        setVertical(dy < 0 ? 'up' : 'down');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return [vertical, horizontal];
};

export { useScrollDirection };
