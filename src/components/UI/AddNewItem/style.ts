import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';

export const TitleAccordion = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 2)',
  lineHeight: 'calc(var(--spacer) * 3)',
  fontWeight: 500,
  textAlign: 'left',
});

export const ButtonAddNewPerson = styled(Button)({
  borderRadius: '8px',
  borderColor: 'var(--blue)',
  padding: 'var(--spacer) calc(var(--spacer) * 2)',
  '@media screen and (max-width: 901px)': {
    '& .MuiButton-startIcon': {
      margin: 0,
    }
  },
  '@media screen and (max-width: 601px)': {
    minWidth: '64px',
  },
  '@media screen and (max-width: 451px)': {
    minWidth: '24px',
    padding: '6px'
  },
});

export const ButtonAddText = styled(Typography)({
  fontSize: 'calc(var(--spacer) * 1.5)',
  fontWeight: 500,
  textAlign: 'center',
  color: 'var(--blue)',
  textTransform: 'lowercase',
  "&:first-letter": {
    textTransform: 'uppercase',
  },
  '@media screen and (max-width: 901px)': {
    '&:last-of-type': {
      display: 'none',
    }
  },
});

