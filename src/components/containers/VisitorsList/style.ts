import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const GridList = styled(Grid)({
  justifyContent: 'flex-start',
  '@media screen and (max-width: 901px)': {
    justifyContent: 'flex-start',
  },
});