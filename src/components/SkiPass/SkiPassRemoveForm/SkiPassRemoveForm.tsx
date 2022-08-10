import React, { memo } from 'react';

import * as style from './style';

interface Props {
  number: number;
  avatar: string;
};

const SkiPassRemoveForm: React.FC<Props> = ({ number, avatar }) => {
  
  return (
    <style.SkiPassInfoMainBox>
      <style.SkiPassMediumAvatar
        alt="ski-pass"
        src={avatar}
      />
      <style.TextMediumSkiPassNumber>
        {number}
      </style.TextMediumSkiPassNumber>
      <style.TextFormRemoveQuestion>
        Вы уверены, что хотите удалить карточку этого ски-пасса?
      </style.TextFormRemoveQuestion>
    </style.SkiPassInfoMainBox>
  );
};

export default memo(SkiPassRemoveForm);