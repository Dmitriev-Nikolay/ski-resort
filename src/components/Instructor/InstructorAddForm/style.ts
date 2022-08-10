import { createTheme, styled } from '@mui/material/styles';
import { Chip, Button, Typography, CardMedia, InputLabel, FormControl } from '@mui/material';
import { Form, Field } from 'formik';

import addIcon from '../../../assets/img/add-photo.png';

export const ButtonAddPhoto = styled(InputLabel)({
  marginBottom: '24px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'var(--transition-3)',
  "&:hover": {
    boxShadow: '0px 0px 0px 2px var(--blue), 0px 0px 12px 6px var(--blue)',
  },
});

export const Avatar = styled(CardMedia)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: `url(${addIcon}), #F3F3F3`,
  backgroundSize: '35%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  width: 'calc(var(--spacer) * 21)',
  height: 'calc(var(--spacer) * 21)',
});

export const MainForm = styled(Form)({
  paddingTop: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  position: 'relative',
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
  '& .MuiSelect-select': {
    height: '44px',
  },
});

export const FieldInputSelect = styled(FieldInput)({
  minHeight: '64px',
});

export const FormControlInputSelect = styled(FormControl)({
  marginBottom: '12px',
  borderRadius: '10px',
  '& .MuiInputLabel-root': {
    top: '-4px',
  },
});

export const LabelSelect = styled(InputLabel)({
  fontSize: '14px'
});

export const VisitorSelected = styled(Chip)({
  margin: '8px 2px 0',
  background: 'var(--blue)',
  '& .MuiChip-label': {
    color: 'var(--white)',
    fontWeight: 500,
    padding: '0 var(--spacer)',
  },
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
