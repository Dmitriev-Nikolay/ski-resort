import { styled } from '@mui/material/styles';
import { Avatar, Typography, Box, Button, IconButton } from '@mui/material';

export const VisitorInfoMainBox = styled(Box)({
  padding: '32px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const VisitorMediumAvatar = styled(Avatar)({
  width: 'calc(var(--spacer) * 21)',
  height: 'calc(var(--spacer) * 21)',
  marginBottom: '24px',
  fontSize: 'calc(var(--spacer) * 4)',
});

export const TextForm = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 1.5)',
  lineHeight: 'calc(var(--spacer) * 3)',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'var(--grey-text)',
});

export const TextFormRemoveQuestion = styled(Typography)({
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'center',
  fontWeight: 500,
});

export const TextMediumVisitorName = styled('h1')({
  fontSize: 'calc(var(--spacer) * 4.5)',
  color: '#000',
  lineHeight: 'calc(var(--spacer) * 6)',
  textAlign: 'center',
  fontWeight: 500,
});

export const TextSportType = styled(Typography)({
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center',
  color: 'var(--blue)',
  marginBottom: '24px',
});

export const TextVisitorInfo = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 3)',
  fontWeight: 500,
  lineHeight: 'calc(var(--spacer) * 4)',
  textAlign: 'center',
  marginBottom: '24px',
  "&:last-child": {
    margin: 0,
  }
});

export const ButtonOk = styled(Button)({
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '14px',
  textAlign: 'center',
  borderRadius: '21px',
  width: '40%',
  padding: 'calc(var(--spacer) * 2) calc(var(--spacer) * 4)',
  background: 'var(--blue)',
});

export const ButtonIcon = styled(IconButton)({
  borderRadius: '10px',
  fontSize: '5px',
});