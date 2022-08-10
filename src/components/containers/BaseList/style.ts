import { styled, createTheme } from "@mui/material/styles";
import { Paper, Box, Grid } from '@mui/material';

export const PaperBase = styled(Paper)({
  borderRadius: '12px',
});

export const GridBase = styled(Grid)({
  padding: 'calc(var(--spacer) * 5.5)',
});

export const GridAdditem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  columnGap: 'calc(var(--spacer) * 4)',
});

export const GridPagination = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const BoxList = styled(Box)({
  padding: '0 calc(var(--spacer) * 7) calc(var(--spacer) * 5)',
});

export const themeList = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'var(--blue)',
          fontSize: '2rem',
          transition: '0.5s',
          borderRadius: '50%',
          "&:hover": {
            background: 'var(--blue)',
            fill: 'var(--white)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: 'none',
          },
        },
      },
    },
  },
});