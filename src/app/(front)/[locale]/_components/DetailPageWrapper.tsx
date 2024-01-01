import { ReactNode } from 'react';

import { PageTitle } from './PageTitle';

interface DetailPageWrapperProps {
  title: string;
  children: ReactNode;
}

export function DetailPageWrapper({ children, title }: DetailPageWrapperProps) {
  return (
    <>
      <PageTitle title={title} />

      <div className="mt-96 py-10">{children}</div>
    </>
  );
}
