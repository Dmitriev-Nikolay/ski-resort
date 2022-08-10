import { Box, IconButton, Modal as Mod } from '@mui/material';
import { createTheme, styled } from "@mui/material/styles";

export const Modal = styled(Mod)({
  margin: '0 4px',
});

export const ModalTitle = styled('h4')({
  fontSize: '14px',
  color: '#000',
  lineHeight: '16px',
  fontWeight: 600,
});

export const ButtonIcon = styled(IconButton)({
  borderRadius: '10px',
  fontSize: '5px',
});

export const MainBoxModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  maxWidth: 'calc(var(--spacer) * 65)',
  padding: 'calc(var(--spacer) * 4.5)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  animation: 'emergence .4s ease-in-out forwards',
  '@keyframes emergence': {
    '0%': {
      opacity: 0,
      top: '50%',
      left: '50%',
      transform: 'scale(0.1) translate(-50%, -50%)',
      transformOrigin: '100% 100%',
    },
    '100%': {
      opacity: 1,
      top: '50%',
      left: '50%',
      transform: 'scale(1) translate(-50%, -50%)',
      transformOrigin: '100% 0',
    },
  },
}));

export const TitleBoxModal = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const ModalCloseButton = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '16px',
        },
      },
    },
  },
});