import { type FC, type ReactNode, useState } from 'react';

import { HeaderContainer } from '../atoms/header-container';
import { HeaderContent } from '../atoms/header-content';
import { type OnScreenElement, useOnScreen } from '../atoms/use-on-screen';
import { useScrollDirection } from '../atoms/use-scroll-direction';

type HeaderProps = {
  readonly children?: ReactNode;
};

const Header: FC<HeaderProps> = ({ children }) => {
  const [element, setElement] = useState<OnScreenElement | null>(null);
  const isOnScreen = useOnScreen(element, { initialValue: true, margin: 96 });
  const [scrollVertical] = useScrollDirection();

  return (
    <HeaderContainer ref={setElement}>
      <HeaderContent $isVisible={isOnScreen || scrollVertical === 'up'} $isElevated={!isOnScreen}>
        {children}
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
