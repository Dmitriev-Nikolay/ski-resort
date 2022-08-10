import React, { memo } from 'react';

import * as style from './style';

interface Props {
  fullName: string;
  avatar: string;
  sportType: string;
};

const InstructorRemoveForm: React.FC<Props> = ({ fullName, avatar, sportType }) => {
  
  return (
    <style.InstructorInfoMainBox>
      <style.InstructorMediumAvatar
        alt={fullName}
        src={avatar}
      />
      <style.TextMediumInstructorName>
        {fullName}
      </style.TextMediumInstructorName>
      <style.TextSportType>
        {sportType}
      </style.TextSportType>
      <style.TextFormRemoveQuestion>
        Вы уверены, что хотите удалить карточку этого инструктора?
      </style.TextFormRemoveQuestion>
    </style.InstructorInfoMainBox>
  );
};

export default memo(InstructorRemoveForm);