import { createTheme, styled } from '@mui/material/styles';
import { Field } from 'formik';
import type { } from '@mui/lab/themeAugmentation';
import '@mui/lab/themeAugmentation';

export const FieldInput = styled(Field)({
  borderRadius: '10px',
  fontSize: '10px',
  marginBottom: '12px',
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
});

export const themeDatePicker = createTheme({
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          color: 'var(--blue)',
          "& .PrivatePickersSlideTransition-root": {
            minHeight: '230px',
          },
          "& .PrivatePickersFadeTransitionGroup-root": {
            padding: '0',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '32px',
          "& .MuiButtonBase-root": {
            padding: '8px',
            minHeight: '32px',
          },
        },
        indicator: {
          background: 'var(--blue)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'var(--blue)',
        },
      },
    },
  },
});
