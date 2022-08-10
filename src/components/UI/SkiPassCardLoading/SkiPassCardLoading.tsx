import React, { memo } from 'react';
import { Grid } from '@mui/material';
import ContentLoader from 'react-content-loader';

const SkiPassCardLoading: React.FC<{ count: number }> = ({ count }) => {

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ rowGap: '20px' }}
    >
      {
        Array.from(Array(count), (_, i) => {
          return (
            <Grid item xs={12} sm={12} md={12} key={i}>
              <ContentLoader
                opacity={0.2}
                speed={2}
                width={580}
                height={124}
                viewBox="0 0 580 124"
                backgroundColor="#4158f6"
                foregroundColor="#ecebeb"
                title="Загрузка..."
              >
                <rect x="0" y="0" rx="8" ry="8" width="580" height="124" />
              </ContentLoader>
            </Grid>
          )
        })
      }
    </Grid>
  );
};

export default memo(SkiPassCardLoading);