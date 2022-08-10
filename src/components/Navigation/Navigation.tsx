import React, { memo } from 'react';

import Link from './Link';
import { links } from './linksConfig';

import * as style from './style';

const actualLinks = (): React.ReactNode => {
  return (
    links.map((link) => (
      <Link
        key={link.id}
        {...link}
      />
    ))
  );
};

const Navigation: React.FC = () => {

  return (
    <style.NavigationMainBox>
      <style.NavigationLinksBox>
        {actualLinks()}
      </style.NavigationLinksBox>
      <style.TextAllRightsReserved>
        Все права защищены
      </style.TextAllRightsReserved>
    </style.NavigationMainBox>
  );
};

export default memo(Navigation);
