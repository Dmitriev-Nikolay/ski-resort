import { createTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { Typography, Button, Accordion as Acc, AccordionDetails as AccDetails, AccordionSummary as AccSummary } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Accordion = styled(Acc)({
  cursor: 'default',
});

export const AccordionSummary = styled(AccSummary)({
  padding: '24px 40px',
  '& .MuiAccordionSummary-content': {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    alignItems: 'center',
    columnGap: '16px',
    '@media screen and (max-width: 901px)': {
      gridTemplateColumns: '2fr 5fr',
    },
    '@media screen and (max-width: 601px)': {
      gridTemplateColumns: '2fr 5fr',
    },
    '@media screen and (max-width: 451px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const TextLinkToAll = styled(Typography)({
  fontSize: '10px',
  fontWeight: 500,
  textAlign: 'left',
  color: 'var(--blue)',
  marginRight: '5px',
});

export const ButtonLinkToAll = styled(Button)({
  position: 'absolute',
  bottom: '5px',
  right: '5px',
  borderRadius: '8px',
  '&:hover .MuiSvgIcon-root': {
    animation: 'arrow-go 0.5s ease 1',
  },
  '@keyframes arrow-go': {
    '0%': {
      transform: 'translateX(-20px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1,
    }
  }
});

export const MoreIcon = styled(ExpandMoreIcon)({
  cursor: 'pointer',
});

export const ArrowIconToAll = styled(ArrowForwardIcon)({
  fontSize: '16px',
});

export const AccordionDetails = styled(AccDetails)({
  padding: '0 calc(var(--spacer) * 7) calc(var(--spacer) * 5.5)',
  position: 'relative',
});

export const AccordionList = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:last-of-type": {
            borderRadius: '12px',
          },
        },
      },
    },
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
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&:hover:not(.Mui-disabled)": {
            cursor: "default",
          },
        },
      },
    },
  },
});