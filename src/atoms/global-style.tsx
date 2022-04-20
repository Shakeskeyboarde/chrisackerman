import { getId } from 'tsstyled';

import { styled } from '../support/styled';

const animation = {
  reveal: getId('animation-reveal'),
} as const;

const GlobalStyle = styled.global`
  @keyframes ${animation.reveal} {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  html,
  body {
    color: ${(_props, theme) => theme.palette.neutral};
    background-color: ${(_props, theme) => theme.palette.primary};
    font-family: ${(_props, theme) => theme.font.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export { animation, GlobalStyle };
