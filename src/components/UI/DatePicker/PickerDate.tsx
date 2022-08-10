import React, { memo } from 'react';
import moment from 'moment';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';
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

const PickerDate: React.FC<Props> = ({ setFieldFormik, dateValue, setDateValue, label, type, touch, error }) => {
  const handleChangeDate = (newDate: Date | null): void => {
    const requiredFormatDate = moment(newDate).format('YYYY-MM-DD');
    setFieldFormik(type, requiredFormatDate);
    setDateValue(newDate);
  };

  return (
    <ThemeProvider theme={style.themeDatePicker}>
      <LocalizationProvider
        dateAdapter={DateAdapter}
        locale={ru}
      >
        <DatePicker
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
          maxDate={new Date()}
          mask="__.__.____"
          inputFormat="dd.MM.yyyy"
          label={getErrorOnValidate('label', error, touch, label)}
          value={dateValue}
          onChange={handleChangeDate}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
};

export default memo(PickerDate);
