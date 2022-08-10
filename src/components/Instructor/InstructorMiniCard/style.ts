import { styled } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';

export const GridMain = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  '@media screen and (max-width: 601px)': {
    justifyContent: 'center',
  },
});

export const GridContent = styled(Grid)({
  display: 'flex',
  '@media screen and (max-width: 601px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const GridText = styled(Grid)({
  paddingLeft: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media screen and (max-width: 601px)': {
    alignItems: 'center',
    padding: '8px 0 0 0',
  },
});

export const GridAvatar = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const InstructorAvatar = styled(Avatar)({
  cursor: 'pointer',
  transition: '.5s',
  '&:hover': {
    transform: 'rotate3d(0, 0, 1, -1turn)',
    boxShadow: '0px 0px 0px 2px var(--blue), 0px 0px 12px 6px var(--blue)',
  },
  '@media screen and (max-width: 601px)': {
    width: 'calc(var(--spacer) * 10)',
    height: 'calc(var(--spacer) * 10)',
  },
});

export const TextInstructorname = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 1.75)',
  lineHeight: 'calc(var(--spacer) * 3)',
  textAlign: 'left',
  '@media screen and (max-width: 601px)': {
    fontSize: 'calc(var(--spacer) * 2)',
    lineHeight: 'calc(var(--spacer) * 3)',
    textAlign: 'center',
  },
});

export const TextBlock = styled(Box)({
  display: 'flex',
  fontSize: 'calc(var(--spacer) * 1.75)',
  lineHeight: 'calc(var(--spacer) * 2.5)',
  textAlign: 'left',
  color: '#0000008B',
  'div + div': {
    marginLeft: '4px',
  },
  '@media screen and (max-width: 601px)': {
    fontSize: 'calc(var(--spacer) * 2)',
    textAlign: 'center',
    flexDirection: 'column',
    'div + div': {
      margin: 0,
    },
  },
});

export const GridLocal = styled(Grid)({
  paddingLeft: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 601px)': {
    display: 'none'
  },
});