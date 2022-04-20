import { styled } from '../support/styled';

const MainContainer = styled('main')`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  margin: 0 ${(_props, theme) => theme.spacing.gutterWidth};
  @media only screen and (min-width: ${(_props, theme) => theme.spacing.minDesktopWidth}) {
    margin: 0 ${(_props, theme) => theme.spacing.gutterDesktopWidth};
  }
`;

export { MainContainer };
