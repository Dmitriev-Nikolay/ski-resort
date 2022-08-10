import { styled } from '@mui/material/styles';
import { Avatar, Typography, Box } from '@mui/material';

export const InstructorInfoMainBox = styled(Box)({
  padding: '32px 0 54px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const InstructorMediumAvatar = styled(Avatar)({
  width: 'calc(var(--spacer) * 21)',
  height: 'calc(var(--spacer) * 21)',
  marginBottom: '24px',
  fontSize: 'calc(var(--spacer) * 4)',
});

export const TextFormRemoveQuestion = styled(Typography)({
  fontSize: '14px',
  lineHeight: '16px',
  textAlign: 'center',
  fontWeight: 500,
});

export const TextMediumInstructorName = styled('h1')({
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
  marginBottom: '32px',
});