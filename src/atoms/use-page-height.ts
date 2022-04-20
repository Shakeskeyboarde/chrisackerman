import { useEffect, useState } from 'react';

/**
 * Get the current full height (even on mobile) of the page in pixels.
 */
const usePageHeight = (): number => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return height;
};

export { usePageHeight };
