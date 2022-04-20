import { useEffect, useState } from 'react';

import { createDebounce } from '../support/debounce';

type OnScreenElement = Pick<HTMLElement, 'getBoundingClientRect'>;

type OnScreenOptions = {
  readonly initialValue?: boolean;
  readonly margin?: number;
};

const _debounce = createDebounce(100);

/**
 * True if the given elements client bounding box has at least the `margin`
 * number of pixels both vertically and horizontally inside the viewport.
 *
 * The margin can be negative to report the element as on-screen before it is
 * really in the viewport.
 */
const useOnScreen = <TElement extends OnScreenElement>(
  element: TElement | null | undefined,
  { margin = 0, initialValue = false }: OnScreenOptions = {},
) => {
  const [isOnScreen, setIsOnScreen] = useState(initialValue);

  useEffect(() => {
    const [onScroll, cancelOnScroll] = _debounce.decorate(() => {
      if (!element) {
        return;
      }

      const { left, right, top, bottom, width, height } = element.getBoundingClientRect();

      setIsOnScreen((width + left >= margin || right >= margin) && (height + top >= margin || bottom >= margin));
    });

    window.addEventListener('scroll', onScroll, { capture: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      cancelOnScroll();
    };
  }, [element, margin]);

  return isOnScreen;
};

export { type OnScreenElement, type OnScreenOptions, useOnScreen };
