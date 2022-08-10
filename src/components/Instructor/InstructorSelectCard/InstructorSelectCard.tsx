import React, { memo } from 'react';
import { Grid } from '@mui/material';

import { Instructor } from '../../../store/instructors/interfaces';
import { getExperience } from '../../../utils/getExperience';

import * as style from './style';

interface Props {
  currentInstructor: Instructor;
  photo: string;
};

const InstructorSelectCard: React.FC<Props> = ({ currentInstructor, photo }) => {
  const experience: string = currentInstructor.workExperience ? getExperience(currentInstructor.workExperience) : 'N лет';
  const avatar: string = currentInstructor?.photo ? photo : '/broken-image.jpg';
  const fullNameInstructor: string = currentInstructor.fullname || 'Инструктор';
  const sportType: string = currentInstructor.sportType || 'Не указан';
  const sportTypeAndExperience: string = `${sportType}. Опыт ${experience}`;

  return (
    <Grid item xs={12}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3} md={2}>
          <style.InstructorAvatar
            src={avatar}
            alt={fullNameInstructor}
          />
        </Grid>
        <Grid item xs={9} md={10}>
          <style.TextInstructorname>
            {fullNameInstructor}
          </style.TextInstructorname>
          <style.TextAge>
            {sportTypeAndExperience}
          </style.TextAge>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(InstructorSelectCard);