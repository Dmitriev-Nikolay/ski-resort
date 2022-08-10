import { NavLink as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography, IconButton, Box } from '@mui/material';

export const TextAllRightsReserved = styled(Typography)({
  fontWeight: 500,
  textAlign: 'left',
  fontSize: 'calc(var(--spacer) * 1.4)',
  lineHeight: 'calc(var(--spacer) * 3)',
  color: '#A5AAAD',
  '@media screen and (max-width: 601px)': {
    fontSize: 'calc(var(--spacer) * 2)',
    lineHeight: 'calc(var(--spacer) * 3)',
  },
});

export const NavigationLink = styled(RouterLink)({
  display: 'flex',
  underline: 'none',
});

export const TextLink = styled(Typography)({
  fontWeight: 600,
  textAlign: 'center',
  fontSize: 'calc(var(--spacer) * 1.75)',
  lineHeight: 'calc(var(--spacer) * 3)',
  marginLeft: '32px',
  '@media screen and (max-width: 601px)': {
    fontSize: 'calc(var(--spacer) * 3.75)',
    lineHeight: 'calc(var(--spacer) * 5)',
  },
});

export const IconButtonNav = styled(IconButton)({
  borderRadius: '10px',
  color: 'inherit',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  transition: 'var(--transition-3)',
});

export const NavigationMainBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

export const NavigationLinksBox = styled(Box)({
  padding: 'calc(var(--spacer) * 4)',
});