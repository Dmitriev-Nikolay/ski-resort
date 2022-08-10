import React, { memo, lazy, Suspense } from 'react';

import HeaderLoading from './HeaderLoading';

const HeaderDesktop = lazy(() => import('./HeaderDesktop'));
const HeaderMobile = lazy(() => import('./HeaderMobile'));

const Header: React.FC<{ isMobileMode: boolean }> = ({ isMobileMode }) => {
  const actualHeader = (): React.ReactNode => {
    if (isMobileMode) {
      return <HeaderMobile />
    }
    return <HeaderDesktop />
  };

  return (
    <Suspense fallback={<HeaderLoading />}>
      {actualHeader()}
    </Suspense>
  );
};

export default memo(Header);
