import { NavLink as RouterLink } from 'react-router-dom';
import { styled, alpha, createTheme } from '@mui/material/styles';
import { InputBase, Typography, AppBar, IconButton } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: '#3841DC',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginLeft: 0,
  marginRight: '40px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

export const TextResort = styled(Typography)({
  textTransform: 'uppercase',
  maxWidth: '120px',
  fontSize: 'calc(var(--spacer) * 1.75)',
  color: 'var(--white)',
  textAlign: 'left',
  fontWeight: 500,
});

export const HeaderBar = styled(AppBar)({
  boxShadow: 'none',
  background: 'var(--blue)',
  '@media screen and (max-width: 601px)': {
    boxShadow: '0px 0px 10px 2px var(--blue)',
  },
});

export const NavigationLink = styled(RouterLink)({});

export const HomeTitleLink = styled(IconButton)({
  borderRadius: '10px',
  transition: 'var(--transition-3)',
});

export const BurgerMenu = styled(IconButton)({
  '&.MuiButtonBase-root': {
    padding: 0,
    margin: 0,
  },
});

export const themeToolBar = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
          "@media (min-width: 601px)": {
            padding: 0,
          },
        },
      },
    },
  },
});

export const Logo = styled('img')({
  width: '32px',
  height: '30px',
  fontSize: 'calc(var(--spacer) * 1.75)',
  color: 'var(--white)',
  textAlign: 'center',
});