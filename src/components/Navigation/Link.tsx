import React, { memo } from 'react';
import { SvgIconComponent } from '@mui/icons-material';

import { useNavLinkColor } from '../../hooks/useNavLinkColor';

import * as style from './style';

interface Props {
  to: string;
  title: string;
  icon: SvgIconComponent;
};

const Link: React.FC<Props> = (props) => {

  return (
    <style.NavigationLink to={props.to}>
      <style.IconButtonNav
        size="large"
        edge="start"
        aria-label="open drawer"
      >
        <props.icon sx={useNavLinkColor(props.to, 'icon')} />
        <style.TextLink sx={useNavLinkColor(props.to)}>
          {props.title}
        </style.TextLink>
      </style.IconButtonNav>
    </style.NavigationLink>
  );
};

export default memo(Link);
