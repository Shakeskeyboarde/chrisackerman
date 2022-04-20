import { styled } from '../support/styled';

const HeaderContainer = styled('div')`
  flex: 0 0 auto;
  height: ${(_props, theme) => theme.spacing.headerHeight};
`;

export { HeaderContainer };
