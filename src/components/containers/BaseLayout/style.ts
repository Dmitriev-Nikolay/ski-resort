import { styled } from "@mui/material/styles";
import { Box, Grid } from '@mui/material';

export const GridMain = styled(Grid)({
  paddingBottom: 'calc(var(--spacer) * 3)',
});

export const GridHeader = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'var(--blue)',
  height: '100%',
  paddingTop: '8px',
  '@media screen and (max-width: 601px)': {
    padding: 0,
  },
});

export const GridContent = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-175px',
  width: '100%',
  '@media screen and (max-width: 601px)': {
    marginTop: '70px',
  },
});

export const GridContentContainer = styled(Grid)({
  justifyContent: 'center',
});

export const GridAdminPanel = styled(GridHeader)({
  justifyContent: 'flex-start',
  boxShadow: '-3px 0px 5px 2px var(--blue)',
  '@media screen and (max-width: 601px)': {
    display: 'none',
  },
});

export const GridNavigation = styled(Grid)({
  '@media screen and (max-width: 601px)': {
    display: 'none',
  },
});

export const BoxContent = styled(Box)({
  maxWidth: 'var(--max-width-actual)',
  width: '100%',
  margin: '0 auto',
  padding: '0 calc(var(--spacer) * 6)',
  '@media screen and (max-width: 901px)': {
    padding: '0 calc(var(--spacer) * 4)',
  },
  '@media screen and (max-width: 601px)': {
    padding: '0 calc(var(--spacer) * 3)',
  },
});

export const BoxContentBase = styled(BoxContent)({
  display: 'flex',
  justifyContent: 'center',
});