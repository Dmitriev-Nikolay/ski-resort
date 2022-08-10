import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';

import mountainsDay from '../../../assets/img/mountains-day.png';

export const MainGridSkiPass = styled(Grid)({
  background: `url(${mountainsDay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  borderRadius: '8px',
  padding: '32px 40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '124px',
  overflow: 'hidden',
  position: 'relative',
  "&:after": {
    pointerEvents: 'none',
    position: "absolute",
    content: "''",
    top: 0,
    left: '-400px',
    width: '300px',
    height: '100%',
    background: "linear-gradient(to right,rgba(255, 255, 255, 0.0) 0%,rgba(255, 255, 255, 0.1) 77%,rgba(255, 255, 255, 0.2) 92%,rgba(255, 255, 255, 0.0) 100%)",
    transform: 'skewX(10deg)',
    animationName: 'slide',
    animationDuration: '3s',
    animationTimingFunction: 'ease-in-out',
    animationDelay: '.3s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'inherit',
    transition: '.3s',
  },
  '&:hover::before': {
    transform: 'scale(1.2)',
  },
  "@keyframes slide": {
    '0%': {
      left: '-60%',
      top: 0,
    },
    '100%': {
      left: '70%',
      top: 0,
    },
  },
  "@media (max-width: 601px)": {
    minHeight: 0,
    padding: 'calc(var(--spacer) * 4) calc(var(--spacer) * 5)',
  },
});

export const MainGridSkiPassInfo = styled(Box)({
  cursor: 'pointer',
  position: 'relative',
  padding: '8px',
  '&:after': {
    position: 'absolute',
    content: '""',
    width: '0',
    height: '4px',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'var(--white)',
    transition: 'all .4s',
    borderRadius: '15%'
  },
  '&:hover:after': {
    width: '100%',
  }
});

export const TextSkiPassTime = styled(Typography)({
  fontWeight: 700,
  fontSize: 'calc(var(--spacer) * 2)',
  lineHeight: 'calc(var(--spacer) * 2.5)',
  textAlign: 'left',
  color: 'var(--white)',
});

export const TextSkiPassPrice = styled(Typography)({
  fontWeight: 700,
  fontSize: 'calc(var(--spacer) * 3)',
  lineHeight: 'calc(var(--spacer) * 3)',
  textAlign: 'left',
  color: 'var(--white)',
});

export const BoxLocalMenu = styled(Box)({
  position: 'absolute',
  top: '10px',
  right: '5px',
  '@media screen and (max-width: 601px)': {
    display: 'none'
  },
});