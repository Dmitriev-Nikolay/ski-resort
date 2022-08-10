import React, { memo } from 'react';
import { Grid } from '@mui/material';

import { SkiPassMiniCard } from '../../SkiPass';
import { SkiPass } from '../../../store/skiPasses/interfaces';

const SkiPassesList: React.FC<{ skiPasses: SkiPass[] }> = ({ skiPasses }) => {
  const viewSkiPassesList = (): React.ReactNode => {
    return (
      skiPasses?.map((skiPass: SkiPass) => (
        <SkiPassMiniCard
          key={skiPass.number}
          currentSkiPass={skiPass}
        />
      ))
    );
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ rowGap: '20px' }}
    >
      {viewSkiPassesList()}
    </Grid>
  );
};

export default memo(SkiPassesList);
