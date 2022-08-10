import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const DrawerMainBox = styled(Box)({
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'calc(var(--spacer) * 5) var(--spacer)',
  columnGap: '20px',
});

export const IconLogout = styled(IconButton)({
  borderRadius: '10px',
  transition: 'var(--transition-3)',
});

export const ExitButton = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const ButtonLogout = styled(Button)({
  background: 'var(--blue)',
});

export const IconLogin = styled(LoginIcon)({
  marginRight: '16px',
});

export const TextGetOut = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 3)',
  fontWeight: 600,
  textAlign: 'center',
  color: 'var(--blue)',
  lineHeight: 'calc(var(--spacer) * 4)',
});

export const TextGetOutYesNo = styled(TextGetOut)({
  color: 'var(--white)',
});

export const TextButtonGetOut = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 2)',
  lineHeight: 'calc(var(--spacer) * 3)',
  color: 'var(--white)',
  fontWeight: 500,
  '@media screen and (max-width: 601px)': {
    display: 'none',
	},
});