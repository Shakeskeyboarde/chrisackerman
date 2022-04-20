import { styled } from '../support/styled';

const HeaderLogo = styled('img')`
  height: 75%;
  width: auto;
  margin: 0 ${(_props, theme) => theme.spacing.m};
`;

export { HeaderLogo };
