import { createTheme, styled } from '@mui/material/styles';
import { Button, IconButton, MenuItem } from '@mui/material';

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

export const ItemMenu = styled(MenuItem)({
  fontSize: 'calc(var(--spacer) * 2)',
  fontWeight: 500,
  lineHeight: 'calc(var(--spacer) * 2.5)',
  textAlign: 'center',
});

export const ButtonIconRemove = styled(IconButton)({
  borderRadius: '10px',
  fontSize: '5px',
  position: 'absolute',
  top: '4%',
  right: '5%'
});

export const ButtonIconEdit = styled(IconButton)({
  borderRadius: '10px',
  fontSize: '5px',
  position: 'absolute',
  top: '4%',
  right: '13%'
});

export const themeModificationButton = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'var(--grey)',
        },
      },
    },
  },
});