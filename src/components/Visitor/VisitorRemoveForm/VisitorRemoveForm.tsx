import React, { memo } from 'react';

import * as style from './style';

interface Props {
  fullName: string;
  avatar: string;
  sportType: string;
};

const VisitorRemoveForm: React.FC<Props> = ({ fullName, avatar, sportType }) => {
  
  return (
    <style.VisitorInfoMainBox>
      <style.VisitorMediumAvatar
        alt={fullName}
        src={avatar}
      />
      <style.TextMediumVisitorName>
        {fullName}
      </style.TextMediumVisitorName>
      <style.TextSportType>
        {sportType}
      </style.TextSportType>
      <style.TextFormRemoveQuestion>
        Вы уверены, что хотите удалить карточку этого посетителя?
      </style.TextFormRemoveQuestion>
    </style.VisitorInfoMainBox>
  );
};

export default memo(VisitorRemoveForm);
