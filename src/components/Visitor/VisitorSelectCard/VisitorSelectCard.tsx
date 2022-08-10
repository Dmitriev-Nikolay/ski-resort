import React, { memo } from 'react';
import { Grid } from '@mui/material';

import { Visitor } from '../../../store/visitors/interfaces';
import { getAge } from '../../../utils/getAge';

import * as style from './style';

interface Props {
  currentVisitor: Visitor;
  photo: string;
};

const VisitorSelectCard: React.FC<Props> = ({ currentVisitor, photo }) => {
  const age: string = currentVisitor.dateOfBirth ? getAge(currentVisitor.dateOfBirth) : 'Не указано (лет)';
  const fullNameVisitor: string = currentVisitor.fullname || 'Посетитель';
  const avatar: string = currentVisitor.photo ? photo : '/broken-image.jpg';

  return (
    <Grid item xs={12}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3} md={2}>
          <style.VisitorAvatar
            src={avatar}
            alt={fullNameVisitor}
          />
        </Grid>
        <Grid item xs={9} md={10}>
          <style.TextVisitorname>
            {fullNameVisitor}
          </style.TextVisitorname>
          <style.TextAge>
            {age}
          </style.TextAge>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(VisitorSelectCard);