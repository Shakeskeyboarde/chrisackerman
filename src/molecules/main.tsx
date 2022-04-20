import { type FC, type ReactNode } from 'react';

import { MainContainer } from '../atoms/main-container';
import { MainContent } from '../atoms/main-content';

type MainProps = {
  readonly children?: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};

export { Main };
