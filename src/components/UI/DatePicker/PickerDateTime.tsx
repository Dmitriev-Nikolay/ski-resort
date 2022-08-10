import React, { memo } from 'react';
import moment from 'moment';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { TextField } from 'formik-mui';
import { ThemeProvider } from '@mui/material/styles';
import ru from 'date-fns/locale/ru';

import { getErrorOnValidate } from '../../../utils/getErrorOnValidate';

import * as style from './style';

interface Props {
  setFieldFormik: (field: string, value: any) => void
  dateValue: Date | null;
  setDateValue: (arg: Date | null) => void;
  label: string;
  type: string;
  touch?: boolean;
  error?: string;
};

const PickerDateTime: React.FC<Props> = ({ setFieldFormik, dateValue, setDateValue, label, type, touch, error }) => {
  const handleChangeDateTime = (newDateTime: Date | null): void => {
    const requiredFormatDate = moment(newDateTime).format('YYYY-MM-DD HH:mm');
    setFieldFormik(type, requiredFormatDate);
    setDateValue(newDateTime);
  };

  return (
    <ThemeProvider theme={style.themeDatePicker}>
      <LocalizationProvider
        dateAdapter={DateAdapter}
        locale={ru}
      >
        <DateTimePicker
          renderInput={(props) =>
            <style.FieldInput
              component={TextField}
              fullWidth
              type={type}
              name={type}
              sx={getErrorOnValidate('background', error, touch)}
              {...props}
            />
          }
          ampm={false}
          mask="__.__.____ __:__"
          inputFormat='dd.MM.yyyy HH:mm'
          minDate={new Date()}
          label={getErrorOnValidate('label', error, touch, label)}
          value={dateValue}
          onChange={handleChangeDateTime}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
};

export default memo(PickerDateTime);
