import React, { memo } from 'react';
import { Box } from '@mui/material';

import { InstructorCard } from '../index';
import { LocalMenu, MiniCardAnimation } from '../../UI';
import { ModalMain, ModalOpenButton, ModalContents } from '../../UI/ModalView/ModalView';
import { Instructor } from '../../../store/instructors/interfaces';
import { getExperience } from '../../../utils/getExperience';

import * as style from './style';

interface Props {
  currentInstructor: Instructor;
  photo: string;
};

const InstructorMiniCard: React.FC<Props> = ({ currentInstructor, photo }) => {
  const experience: string = currentInstructor.workExperience ? getExperience(currentInstructor.workExperience) : 'N лет';
  const avatar: string = currentInstructor?.photo ? photo : '/broken-image.jpg';
  const fullNameInstructor: string = currentInstructor.fullname || 'Инструктор';
  const sportType: string = currentInstructor.sportType || 'Не указан';

  return (
    <MiniCardAnimation>
      <style.GridMain item container xs={6} sm={12} md={6}>
        <style.GridContent item container xs={12} sm={9} md={11}>
          <ModalMain>
            <ModalContents title="Карточка инструктора">
              <InstructorCard
                currentInstructor={currentInstructor}
                avatar={avatar}
                fullName={fullNameInstructor}
                sportType={sportType}
              />
            </ModalContents>
            <ModalOpenButton>
              <style.GridAvatar item sm={3} md={2}>
                <style.InstructorAvatar
                  src={avatar}
                  alt={fullNameInstructor}
                />
              </style.GridAvatar>
            </ModalOpenButton>
          </ModalMain>
          <style.GridText item sm={6} md={8}>
            <style.TextInstructorname>
              {fullNameInstructor}
            </style.TextInstructorname>
            <style.TextBlock>
              <Box>{`${sportType}.`}</Box>
              <Box> {`Опыт ${experience}`}</Box>
            </style.TextBlock>
          </style.GridText>
        </style.GridContent>
        <style.GridLocal item sm={3} md={1}>
          <LocalMenu
            identifier={currentInstructor.id}
            type="instructor"
            avatar={avatar}
            fullName={fullNameInstructor}
            currentInstructor={currentInstructor}
            sportType={sportType}
          />
        </style.GridLocal>
      </style.GridMain>
    </MiniCardAnimation >
  );
};

export default memo(InstructorMiniCard);
