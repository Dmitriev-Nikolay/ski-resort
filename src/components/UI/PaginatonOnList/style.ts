import { createTheme } from "@mui/material/styles";

export const Pagination = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#bdbdbd',
          fontSize: 'calc(var(--spacer) * 2)',
          fontWeight: 500,
          minWidth: 'calc(var(--spacer) * 2)',
          borderRadius: '6px',
          "&.Mui-selected": {
            color: 'var(--blue)',
            fontWeight: 600,
          },
        },
        ellipsis: {
          display: 'none',
        },
      },
    },
  },
});