import React, { memo } from 'react';
import { Grid } from '@mui/material';

import { SkiPass } from '../../../store/skiPasses/interfaces';

import * as style from './style';

const SkiPassSelectCard: React.FC<{ currentSkiPass: SkiPass }> = ({ currentSkiPass }) => {
  
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={3}>
        <style.SkiPassAvatar />
      </Grid>
      <Grid item xs={9}>
        <style.TextSkiPassTime>
          {currentSkiPass.expirationTime}
        </style.TextSkiPassTime>
        <style.TextSkiPassPrice>
          {currentSkiPass.price} р
        </style.TextSkiPassPrice>
      </Grid>
    </Grid>
  );
};

export default memo(SkiPassSelectCard);