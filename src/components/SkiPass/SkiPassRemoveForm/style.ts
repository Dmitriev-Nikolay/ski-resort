import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const SkiPassInfoMainBox = styled(Box)({
  padding: '32px 0 54px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const SkiPassMediumAvatar = styled('img')({
  width: '100%',
  height: 'calc(var(--spacer) * 21)',
  marginBottom: '24px',
  borderRadius: '8px',
});

export const TextMediumSkiPassNumber = styled('h1')({
  fontSize: 'calc(var(--spacer) * 4.5)',
  color: '#000',
  lineHeight: 'calc(var(--spacer) * 6)',
  textAlign: 'center',
  fontWeight: 500,
  marginBottom: '40px',
});

export const TextFormRemoveQuestion = styled(Typography)({
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'center',
  fontWeight: 500,
});