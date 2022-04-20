import { type FC, type ReactNode } from 'react';

import { Header } from './header';
import { Main } from './main';
import { Page } from './page';

type LayoutNavItem = {
  readonly href: string;
  readonly title: string;
};

type LayoutLinkItem = {
  readonly href: string;
  readonly icon: string;
};

type LayoutProps = {
  readonly children?: ReactNode;
  readonly email?: string;
  readonly links?: readonly LayoutLinkItem[];
  readonly logo?: ReactNode;
  readonly nav?: readonly LayoutNavItem[];
  readonly resume?: ReactNode;
};

const Layout: FC<LayoutProps> = ({ logo, nav, resume, links, email, children }) => {
  return (
    <Page>
      <Header>
        {logo}
        {/* {nav} */}
        {resume}
      </Header>
      <Main>{children}</Main>
    </Page>
  );
};

export { type LayoutLinkItem, type LayoutNavItem, type LayoutProps, Layout };
