import { styled } from '../support/styled';

const MainContent = styled('div')`
  min-height: 100%;
  width: 100%;
  height: 0;
  @media only screen and (min-width: ${(_props, theme) => theme.spacing.minDesktopWidth}) {
    max-width: 1000px;
  }
`;

export { MainContent };
