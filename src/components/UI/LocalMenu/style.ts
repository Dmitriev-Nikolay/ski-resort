import { IconButton, Menu as MenuMui } from '@mui/material';
import { createTheme, styled } from "@mui/material/styles";

export const ButtonIcon = styled(IconButton)({
  position: 'relative',
  '& .MuiSvgIcon-root': {
    '&:hover': {
      background: 'var(--grey-light)',
    },
  },
});

export const Menu = styled(MenuMui)({
  borderRadius: '8px',
  '& .MuiPaper-root': {
    borderRadius: '8px',
    boxShadow: '0px 3px 10px 4px #93A6C233',
  },
  '& .MuiMenuItem-root': {
    minHeight: 'calc(var(--spacer) * 6)',
  },
  "@media (max-width: 601px)": {
    '& .MuiList-root': {
      padding: 0,
    },
  },
});

export const MuiMenu = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        root: {
          left: '-120px',
          top: 0,
          borderRadius: '40px',
          position: 'fixed',
          "@media (max-width: 769px)": {
            left: '-102px',
            top: '-4px',
          },
          "@media (max-width: 601px)": {
            left: '-50px',
            top: '-4px',
          },
        },
      },
    },
  },
});