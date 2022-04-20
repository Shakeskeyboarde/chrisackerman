import { type ReactNode } from 'react';

import { PageContainer } from '../atoms/page-container';
import { usePageHeight } from '../atoms/use-page-height';

type PageProps = {
  readonly children?: ReactNode;
};

/**
 * Container which is always at least the height of the page.
 */
const Page = ({ children }: PageProps) => {
  const pageHeight = usePageHeight();

  return <PageContainer style={{ minHeight: pageHeight }}>{children}</PageContainer>;
};

export { type PageProps, Page };
