import { styled } from "@mui/material/styles";
import { NavLink as RouterLink } from 'react-router-dom';
import { Typography, Button, Paper, Box } from '@mui/material';
import notFoundBg from '../../../assets/img/login-bg.png';

export const NotFoundPage = styled(Box)({
  height: '100vh',
  width: '100vw',
  background: `url(${notFoundBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NotFoundPaper = styled(Paper)({
  padding: 'calc(var(--spacer) * 9) calc(var(--spacer) * 8) calc(var(--spacer) * 5)',
  maxHeight: '90vh',
  maxWidth: 'calc(var(--spacer) * 62)',
  borderRadius: 12,
  margin: 'calc(var(--spacer) * 2.5) calc(var(--spacer) * 2.5) calc(var(--spacer) * 4)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const TextNotFound = styled(Typography)({
  fontWeight: 700,
  marginBottom: 'calc(var(--spacer) * 6)',
  textAlign: 'center',
  fontSize: 'calc(var(--spacer) * 3)',
});

export const GoToMain = styled(Button)({
  fontSize: 'calc(var(--spacer) * 2)',
  fontWeight: 600,
  lineHeight: 'calc(var(--spacer) * 2)',
  textAlign: 'center',
  borderRadius: '21px',
  width: '60%',
  padding: 'calc(var(--spacer) * 2) calc(var(--spacer) * 4)',
  background: 'var(--blue)',
});

export const NavigationLink = styled(RouterLink)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});