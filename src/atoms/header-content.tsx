import { styled } from '../support/styled';

type HeaderStyledProps = {
  readonly $isElevated: boolean;
  readonly $isVisible: boolean;
};

const HeaderContent = styled('header')<HeaderStyledProps>`
  position: fixed;
  top: ${(props, theme) => (props.$isVisible ? 0 : `-${theme.spacing.headerContentHeight}`)};
  left: 0;
  right: 0;
  height: ${(props, theme) =>
    props.$isElevated ? theme.spacing.headerContentScrollingHeight : theme.spacing.headerContentHeight};
  background-color: ${(_props, theme) => theme.palette.headerBackground};
  box-shadow: ${(props, theme) => (props.$isElevated ? theme.shadow.default : null)};
  transition: box-shadow 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { HeaderContent };
