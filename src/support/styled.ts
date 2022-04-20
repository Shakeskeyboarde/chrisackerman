import color from 'color';
import { createReactTheme, createStyled } from 'tsstyled';

type ThemeOptions = {
  readonly neutralColor?: string;
  readonly primaryColor?: string;
  readonly secondaryColor?: string;
  readonly unitPixels?: number;
};

const createTheme = ({
  unitPixels = 8,
  primaryColor = '#303038',
  secondaryColor = '#ffaa66',
  neutralColor = '#b0b0bd',
}: ThemeOptions = {}) => {
  return {
    font: {
      mono: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
      sans: '"Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    },
    palette: {
      headerBackground: color(primaryColor).alpha(0.8).toString(),
      neutral: neutralColor,
      neutral1: color(neutralColor).lighten(0.1).toString(),
      neutral2: color(neutralColor).lighten(0.2).toString(),
      primary: primaryColor,
      secondary: secondaryColor,
    },
    shadow: {
      default: `0 10px 30px -10px rgba(0, 0, 0, 0.33)`,
    },
    spacing: {
      footerHeight: `${unitPixels * 12}px`,
      gutterDesktopWidth: `${unitPixels * 12}px`,
      gutterWidth: `${unitPixels * 6}px`,
      headerContentHeight: `${unitPixels * 10}px`,
      headerContentScrollingHeight: `${unitPixels * 8}px`,
      headerHeight: `${unitPixels * 12}px`,
      l: `${unitPixels * 3}px`,
      m: `${unitPixels * 2}px`,
      maxDesktopWidth: '1000px',
      minDesktopWidth: '600px',
      s: `${unitPixels}px`,
    },
  } as const;
};

const defaultTheme = createTheme();
const [useTheme, ThemeProvider] = createReactTheme(defaultTheme);
const styled = createStyled(useTheme);

export { defaultTheme, styled, ThemeProvider, useTheme };
