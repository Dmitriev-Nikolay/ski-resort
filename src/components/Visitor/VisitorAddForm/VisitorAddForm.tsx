import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextField } from 'formik-mui';
import { MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getErrorOnValidate } from '../../../utils/getErrorOnValidate';
import { checkForm } from '../../../utils/checkForm';
import { changePhoto } from '../../../utils/changePhoto';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { Loader, PickerDate, PickerDateTime } from '../../UI';
import { InstructorSelectCard } from '../../Instructor';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { visitorAllInstructorsRequest, visitorAddRequest } from '../../../store/visitors/actions';
import * as selectorVisitors from '../../../store/visitors/selectors';
import { LIMIT_ON_PREVIEW_PEOPLE, LIMIT_ON_PAGE_PEOPLE } from '../../../store/constants';
import addIcon from '../../../assets/img/add-photo.png';

import * as style from './style';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Укажите ФИО'),
  dateOfBirth: Yup.date()
    .required('Укажите дату рождения')
    .nullable(),
  skiPassExpirationTime: Yup.date()
    .required('Укажите конец действия ски-пасса')
    .nullable(),
  instructorId: Yup.string()
    .required('Выберите тренера'),
  sportType: Yup.string()
    .required('Укажите вид спорта'),
});

export interface ValuesVisitorForAdd {
  fullname: string;
  dateOfBirth: string;
  skiPassExpirationTime: string;
  sportType: string;
  instructorId: string;
  [key: string]: string;
};

const VisitorAddForm: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [date, setDate] = useState<Date | null>(null);
  const [birth, setBirth] = useState<Date | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const instructorsForAppointment = useTypedSelector(selectorVisitors.allInstructorsForVisitors);
  const isGetAllVisitors = useTypedSelector(selectorVisitors.isLoadingAllInstructors);
  const limitOnPage = pathname === '/' ? LIMIT_ON_PREVIEW_PEOPLE : LIMIT_ON_PAGE_PEOPLE;
  const instructorsPhoto = useTypedSelector(selectorVisitors.allInstructorsPhotoForVisitor);

  useEffect(() => {
    if (isMounted) {
      dispatch(visitorAllInstructorsRequest());
    };
    return () => setIsMounted(false);
  }, [dispatch, isMounted]);

  const getInstructorsForAppointment = (): React.ReactNode => {
    if (isGetAllVisitors) {
      return <Loader size={45} />
    }
    if (instructorsForAppointment.length === 0) {
      return <style.TextAllVisitorsInfo>Нет тренеров для назначения</style.TextAllVisitorsInfo>
    }
    return (
      instructorsForAppointment.map((instructor, i) => {
        return (
          <MenuItem
            key={`${instructor.id}${instructor.fullname}`}
            value={instructor.id}
          >
            <InstructorSelectCard
              currentInstructor={instructor}
              photo={instructorsPhoto[i]}
            />
          </MenuItem>
        );
      })
    )
  };

  const addAvatar =
    avatarPreview
      ?
      <style.Avatar
        image={avatarPreview}
        sx={{ backgroundSize: avatarPreview && 'cover' }}
      />
      :
      <style.Avatar image={addIcon} />

  return (
    <Formik
      initialValues={{
        fullname: '',
        dateOfBirth: '',
        skiPassExpirationTime: '',
        sportType: '',
        instructorId: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        resetForm();
        setDate(null);
        const { fullname, dateOfBirth, skiPassExpirationTime, sportType, instructorId } = values;
        const id = Number(instructorId);
        const photo = avatarPreview;
        dispatch(visitorAddRequest({ fullname, photo, dateOfBirth, skiPassExpirationTime, sportType }, limitOnPage, id));
        toast.success("Посетитель добавлен!", { autoClose: 1500 });
      }}
    >
      {({ submitForm, errors, values, touched, setFieldValue, isValid }) => (
        <style.MainForm>
          {/* <style.ResetForm onClick={() => resetForm()}>Очистить форму</style.ResetForm> */}
          <style.ButtonAddPhoto>
            <input
              name='avatar'
              accept='image/*'
              id='contained-button-file'
              type='file'
              hidden
              onChange={(e) => changePhoto(e, setFieldValue, 'avatar', setAvatarPreview)}
            />
            {addAvatar}
          </style.ButtonAddPhoto>
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.fullname, touched.fullname, 'ФИО*')}
            type="fullname"
            name="fullname"
            sx={getErrorOnValidate('background', errors.fullname, touched.fullname)}
          />
          <PickerDate
            setFieldFormik={setFieldValue}
            dateValue={birth}
            setDateValue={setBirth}
            label="Дата рождения*"
            type="dateOfBirth"
            touch={touched.dateOfBirth}
            error={errors.dateOfBirth}
          />
          <PickerDateTime
            setFieldFormik={setFieldValue}
            dateValue={date}
            setDateValue={setDate}
            label="Дата окончания ски-пасса*"
            type="skiPassExpirationTime"
            touch={touched.skiPassExpirationTime}
            error={errors.skiPassExpirationTime}
          />
          <ThemeProvider theme={style.Select}>
            <style.FieldInputSelect
              component={TextField}
              label={getErrorOnValidate('label', errors.instructorId, touched.instructorId, 'Назначить тренера*')}
              type="instructorId"
              name="instructorId"
              sx={getErrorOnValidate('background', errors.instructorId, touched.instructorId)}
              select
              fullWidth
            >
              <MenuItem disabled value="">
                Назначить тренера
              </MenuItem>
              {getInstructorsForAppointment()}
            </style.FieldInputSelect>
          </ThemeProvider>
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.sportType, touched.sportType, 'Вид спорта*')}
            type="sportType"
            name="sportType"
            sx={getErrorOnValidate('background', errors.sportType, touched.sportType)}
          />
          <ModalCloseButton isValidate={checkForm(isValid, values)}>
            <style.ButtonAdd
              type='submit'
              color='primary'
              variant="contained"
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                submitForm();
              }
              }
            >
              Добавить
            </style.ButtonAdd>
          </ModalCloseButton>
        </style.MainForm>
      )}
    </Formik>
  );
};

export default VisitorAddForm;
