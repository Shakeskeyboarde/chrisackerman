import 'normalize.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

import { render } from 'react-dom';

import { GlobalStyle } from './atoms/global-style';
import { HeaderLogo } from './atoms/header-logo';
import { Layout } from './molecules/layout';
import logoUrl from './resources/logo.png';

render(
  <>
    <GlobalStyle />
    <Layout logo={<HeaderLogo src={logoUrl} />}>Hello, world</Layout>
  </>,
  document.getElementById('root'),
);
