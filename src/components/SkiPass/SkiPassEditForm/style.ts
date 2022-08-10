import { createTheme, styled } from '@mui/material/styles';
import { Box, Button, Typography, CardMedia } from '@mui/material';
import { Form, Field } from 'formik';

import addIcon from '../../../assets/img/add-photo.png';

export const SkiPassImgBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: '#F3F3F3',
  width: '100%',
  height: 'calc(var(--spacer) * 21)',
  marginBottom: '32px',
});

export const SkiPassAddImg = styled(CardMedia)({
  background: `url(${addIcon})`,
  backgroundSize: '35%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: 'calc(var(--spacer) * 21)',
  height: 'calc(var(--spacer) * 21)',
});

export const MainForm = styled(Form)({
  paddingTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
});

export const FieldInput = styled(Field)({
  borderRadius: '10px',
  fontSize: '10px',
  marginBottom: '12px',
  "&:last-of-type": {
    margin: 0,
  },
  '& .MuiOutlinedInput': {
    '&-notchedOutline': {
      border: 'none',
    },
    '&-input': {
      padding: '10px 12px',
    },
    '&-root': {
      borderRadius: '8px',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    color: '#D3D3D3',
    top: '-4px',
  },
  '& .MuiButton-root': {
    '&:active': {
      transform: 'translateY(.1em)',
    },
  },
  '& .MuiFormHelperText-root': {
    display: 'none',
  },
  '& .MuiSvgIcon-root': {
    color: 'var(--blue)',
  },
  '& .MuiSelect-outlined': {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
  },
});

export const FieldInputSelect = styled(FieldInput)({
  minHeight: '64px',
});

export const ButtonAdd = styled(Button)({
  marginTop: '24px',
  textTransform: 'capitalize',
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '14px',
  textAlign: 'center',
  borderRadius: '21px',
  width: '60%',
  padding: 'calc(var(--spacer) * 2) calc(var(--spacer) * 4)',
  background: 'var(--blue)',
});

export const TextAllVisitorsInfo = styled(Typography)({
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'center',
});

export const Select = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: '200px',
          padding: '10px 0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--grey-text)',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--blue)',
            borderRadius: '20px',
          },
        },
      },
    },
  },
});