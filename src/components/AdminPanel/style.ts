import { styled } from '@mui/material/styles';
import { Avatar, Typography, Stack, Box, Grid, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

export const SmallAvatarEdit = styled(Avatar)({
  width: 'calc(var(--spacer) * 3)',
  height: 'calc(var(--spacer) * 3)',
  background: '#E8EDF1',
  '@media screen and (max-width: 601px)': {
    width: 'calc(var(--spacer) * 6)',
    height: 'calc(var(--spacer) * 6)',
  },
});

export const MediumAvatarEdit = styled(Avatar)({
  width: 'calc(var(--spacer) * 5)',
  height: 'calc(var(--spacer) * 5)',
  background: '#E8EDF1',
  border: '6px solid var(--white)',
});

export const AdminSmallAvatar = styled(Avatar)({
  width: 'calc(var(--spacer) * 8)',
  height: 'calc(var(--spacer) * 8)',
  transition: 'var(--transition-3)',
  '&:hover': {
    transform: 'var(--scale-small)',
  },
  '@media screen and (max-width: 601px)': {
    width: 'calc(var(--spacer) * 20)',
    height: 'calc(var(--spacer) * 20)',
  },
});

export const AdminMediumAvatar = styled(Avatar)({
  width: 'calc(var(--spacer) * 21)',
  height: 'calc(var(--spacer) * 21)',
});

export const SmallEditIcon = styled(CreateIcon)({
  color: '#B3B3B3',
  fontSize: '12px',
  '@media screen and (max-width: 601px)': {
    fontSize: '20px',
  },
});

export const MediumEditIcon = styled(CreateIcon)({
  color: '#B3B3B3',
  fontSize: '20px',
});

export const TextSmallAdminName = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 2)',
  color: 'var(--white)',
  '@media screen and (max-width: 601px)': {
    color: 'var(--blue)',
    fontSize: 'calc(var(--spacer) * 4)',
  },
});

export const TextMediumAdminName = styled('h1')({
  fontSize: 'calc(var(--spacer) * 4)',
  color: '#000',
  lineHeight: '50px',
  fontWeight: 500,
});

export const TextUserRole = styled('div')({
  fontSize: 'calc(var(--spacer) * 1.5)',
  color: '#afb8ff',
  fontWeight: 500,
  '@media screen and (max-width: 601px)': {
    fontSize: 'calc(var(--spacer) * 2)',
  },
});

export const TextUserRoleInfo = styled('div')({
  fontSize: 'calc(var(--spacer) * 1.5)',
  color: 'var(--blue)',
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

export const AdminStack = styled(Stack)({
  marginBottom: '12px',
  cursor: 'pointer',
});

export const AdminMainBox = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 'calc(var(--spacer) * 8) 0 calc(var(--spacer) * 4) 0',
  '@media screen and (max-width: 601px)': {
    flexGrow: 0,
  },
});

export const AdminInfoMainBox = styled(Box)({
  padding: 'calc(var(--spacer) * 7) 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const AdminGridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '115px',
});