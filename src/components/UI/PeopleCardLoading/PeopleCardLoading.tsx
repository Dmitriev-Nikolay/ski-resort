import React, { memo } from 'react';
import { Grid } from '@mui/material';
import ContentLoader from 'react-content-loader';

import * as style from './style';

const PeopleCardLoading: React.FC<{ count: number }> = ({ count }) => {

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
    >
      {
        Array.from(Array(count), (_, i) => {
          return (
            <style.GridCardLoading item xs={12} sm={12} md={6} key={i}>
              <ContentLoader
                opacity={0.2}
                speed={2}
                width={308}
                height={48}
                viewBox="0 0 308 48"
                backgroundColor="#4158f6"
                foregroundColor="#ecebeb"
                title="Загрузка..."
              >
                <rect x="0" y="2" rx="100" ry="100" width="40" height="40" />
                <rect x="54" y="4" rx="8" ry="8" width="155" height="14" />
                <rect x="54" y="26" rx="8" ry="8" width="120" height="14" />
                <rect x="292" y="8" rx="6" ry="6" width="10" height="28" />
              </ContentLoader>
            </style.GridCardLoading>
          )
        })
      }
    </Grid>
  )
}

export default memo(PeopleCardLoading);