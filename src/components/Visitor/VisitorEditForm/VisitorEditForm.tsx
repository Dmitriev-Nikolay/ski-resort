import React, { useState, useEffect, memo } from 'react';
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
import { Loader, PickerDate } from '../../UI';
import { InstructorSelectCard } from '../../Instructor';
import { SkiPassSelectCard } from '../../SkiPass';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Visitor } from '../../../store/visitors/interfaces';
import { visitorAllInstructorsRequest, visitorEditRequest } from '../../../store/visitors/actions';
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
  instructorId: Yup.string()
    .required('Выберите тренера'),
  skiPassNumber: Yup.string()
    .required('Выберите ски-пасс'),
  sportType: Yup.string()
    .required('Укажите вид спорта'),
});

export interface ValuesVisitorForEdit {
  fullname: string;
  dateOfBirth: string;
  sportType: string;
  instructorId: string;
  skiPassNumber: string;
  [key: string]: string;
};

const VisitorEditForm: React.FC<{ currentVisitor: Visitor, avatar: string, onClose?: any }> = ({ currentVisitor, avatar }) => {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const dateOfBirth = new Date(currentVisitor.dateOfBirth ?? '');
  const [birth, setBirth] = useState<Date | null>(dateOfBirth);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(currentVisitor.photo ? avatar : null);

  const allSkiPassesWithoutVisitors = useTypedSelector(selectorVisitors.allSkiPassesForVisitors);
  const allInstructorsForVisitors = useTypedSelector(selectorVisitors.allInstructorsForVisitors);
  const isLoadingAllInstructors = useTypedSelector(selectorVisitors.isLoadingAllInstructors);
  const instructorsPhoto = useTypedSelector(selectorVisitors.allInstructorsPhotoForVisitor);
  const limitOnPage = pathname === '/' ? LIMIT_ON_PREVIEW_PEOPLE : LIMIT_ON_PAGE_PEOPLE;

  const allSkiPassesForVisitors = currentVisitor.skiPass ? [...allSkiPassesWithoutVisitors, currentVisitor.skiPass] : allSkiPassesWithoutVisitors;

  useEffect(() => {
    if (isMounted) {
      dispatch(visitorAllInstructorsRequest());
    };
    return () => setIsMounted(false);
  }, [dispatch, isMounted]);

  const getInstructorsForAppointment = (): React.ReactNode => {
    if (isLoadingAllInstructors) {
      return <Loader size={45} />
    }
    if (allInstructorsForVisitors.length === 0) {
      return <style.TextAllVisitorsInfo>Нет тренеров для назначения</style.TextAllVisitorsInfo>
    }
    return (
      allInstructorsForVisitors.map((instructor, i) => {
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
    );
  };

  const getSkiPassesForAppointment = (): React.ReactNode => {
    if (isLoadingAllInstructors) {
      return <Loader size={45} />
    }
    if (allSkiPassesForVisitors.length === 0) {
      return <style.TextAllVisitorsInfo>Нет ски-пассов для назначения</style.TextAllVisitorsInfo>
    }
    return (
      allSkiPassesForVisitors.map(skiPass => {
        return (
          <MenuItem
            key={skiPass.number}
            value={skiPass.number}
          >
            <SkiPassSelectCard currentSkiPass={skiPass} />
          </MenuItem>
        );
      })
    );
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
        fullname: currentVisitor?.fullname || '',
        dateOfBirth: currentVisitor?.dateOfBirth || '',
        sportType: currentVisitor?.sportType || '',
        instructorId: currentVisitor.coach !== null ? String(currentVisitor.coach?.id) : '',
        skiPassNumber: currentVisitor.skiPass !== null ? String(currentVisitor.skiPass?.number) : '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        const { fullname, dateOfBirth, sportType, instructorId, skiPassNumber } = values;
        if (
          fullname !== String(currentVisitor.fullname) ||
          dateOfBirth !== currentVisitor.dateOfBirth ||
          sportType !== currentVisitor.sportType ||
          instructorId !== String(currentVisitor.coach?.id) ||
          skiPassNumber !== String(currentVisitor.skiPass?.number)
        ) {
          setSubmitting(false);
          resetForm();
          const instructorID = Number(instructorId);
          const skiPassNUMBER = Number(skiPassNumber);
          const id = currentVisitor.id;
          const photo = avatarPreview;
          dispatch(visitorEditRequest({ id, fullname, photo, dateOfBirth, sportType }, limitOnPage, instructorID, skiPassNUMBER));
          toast.success("Посетитель отредактирован!", { autoClose: 1500 });
        } else {
          toast.error("Вы ничего не поменяли!", { autoClose: 1500 });
        }
      }}
    >
      {({ submitForm, errors, values, touched, setFieldValue, isValid }) => (
        <style.MainForm>
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
            <style.FieldInputSelect
              component={TextField}
              label={getErrorOnValidate('label', errors.skiPassNumber, touched.skiPassNumber, 'Назначить ски-пасс*')}
              type="skiPassNumber"
              name="skiPassNumber"
              sx={getErrorOnValidate('background', errors.skiPassNumber, touched.skiPassNumber)}
              select
              fullWidth
            >
              <MenuItem disabled value="">
                Назначить ски-пасс
              </MenuItem>
              {getSkiPassesForAppointment()}
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
              Редактировать
            </style.ButtonAdd>
          </ModalCloseButton>
        </style.MainForm>
      )}
    </Formik>
  );
};

export default memo(VisitorEditForm);