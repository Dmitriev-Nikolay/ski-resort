import React, { useState, useEffect, memo, useRef } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { TextField } from 'formik-mui';
import { MenuItem, Select as MultiSelect, SelectChangeEvent } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getErrorOnValidate } from '../../../utils/getErrorOnValidate';
import { checkForm } from '../../../utils/checkForm';
import { changePhoto } from '../../../utils/changePhoto';
import { compareArray } from '../../../utils/compareArray';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { Loader, PickerDate } from '../../UI';
import { VisitorSelectCard } from '../../Visitor';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Instructor } from '../../../store/instructors/interfaces';
import { visitorAllInstructorsRequest, instructorAllVisitorsRequest, instructorEditRequest } from '../../../store/instructors/actions';
import * as selectorInstructors from '../../../store/instructors/selectors';
import { LIMIT_ON_PREVIEW_PEOPLE, LIMIT_ON_PAGE_PEOPLE } from '../../../store/constants';
import addIcon from '../../../assets/img/add-photo.png';

import * as style from './style';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Укажите ФИО'),
  dateOfBirth: Yup.date()
    .required('Укажите дату рождения')
    .nullable(),
  category: Yup.string()
    .required('Укажите категорию'),
  sportType: Yup.string()
    .required('Укажите вид спорта'),
  workExperience: Yup.number()
    .typeError('Укажите опыт от 1 до 99')
    .required('Укажите опыт')
    .max(99, 'Опыт не может быть больше 99')
    .integer('Опыт должен быть целым числом'),
  sex: Yup.string()
    .required('Укажите пол'),
  visitorsId: Yup.array(Yup.string())
    .required('Выберите посетителей'),
});

export interface ValuesInstructorForEdit {
  fullname: string;
  dateOfBirth: string;
  category: string;
  sportType: string;
  workExperience: string;
  sex: string;
  visitorsId: any;
  [key: string]: string | any;
};

const InstructorEditForm: React.FC<{ currentInstructor: Instructor, avatar: string }> = ({ currentInstructor, avatar }) => {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const dateOfBirth = new Date(currentInstructor.dateOfBirth ?? '');
  const [birth, setBirth] = useState<Date | null>(dateOfBirth);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(currentInstructor.photo ? avatar : null);

  const formikRef = useRef<FormikProps<ValuesInstructorForEdit>>(null);

  const allVisitorsForInstructor = useTypedSelector(selectorInstructors.allVisitorsForInstructor);
  const allInstructorVisitors = useTypedSelector(selectorInstructors.allInstructorVisitors);
  const isLoadingAllVisitorsForInstructor = useTypedSelector(selectorInstructors.isLoadingAllVisitorsForInstructor);
  const limitOnPage = pathname === '/' ? LIMIT_ON_PREVIEW_PEOPLE : LIMIT_ON_PAGE_PEOPLE;
  const visitorsPhoto = useTypedSelector(selectorInstructors.allVisitorsPhotoForInstructor);

  const allVisitorsForInstructors = allInstructorVisitors ? [...allVisitorsForInstructor, ...allInstructorVisitors] : allVisitorsForInstructor;

  useEffect(() => {
    if (isMounted) {
      dispatch(visitorAllInstructorsRequest());
      dispatch(instructorAllVisitorsRequest(currentInstructor.id))
    };
    return () => setIsMounted(false);
  }, [dispatch, isMounted, currentInstructor.id]);

  useEffect(() => {
    formikRef.current?.setFieldValue('visitorsId', allInstructorVisitors.map(visitor => visitor.id) ?? '');
  }, [allInstructorVisitors]);

  const handleChangeVisitor = (event: SelectChangeEvent<string>, funcField: (field: string, value: string) => void) => {
    const { target: { value } } = event;
    funcField("visitorsId", value);
  };

  const visitorsDisplay = (selectedVisitors: string[]) => {
    return (
      <>
        {
          selectedVisitors.map((visitorId: string) => (
            <style.VisitorSelected
              key={visitorId}
              label={visitorId ? allVisitorsForInstructors.filter(v => v.id === Number(visitorId))[0]?.fullname || 'Посетитель' : visitorId}
            />
          ))
        }
      </>
    )
  };

  const getVisitorsForAppointment = (): React.ReactNode => {
    if (isLoadingAllVisitorsForInstructor) {
      return <Loader size={45} />
    }
    if (allVisitorsForInstructors.length === 0) {
      return <style.TextAllVisitorsInfo>Нет посетителей для назначения</style.TextAllVisitorsInfo>
    }
    return (
      allVisitorsForInstructors.map((visitor, i) => {
        return (
          <MenuItem
            key={`${visitor.id}${visitor.fullname}`}
            value={visitor.id}
            disabled={Boolean(allInstructorVisitors.find(v => v.id === visitor.id))}
          >
            <VisitorSelectCard
              currentVisitor={visitor}
              photo={visitorsPhoto[i]}
            />
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
        fullname: currentInstructor?.fullname || '',
        dateOfBirth: currentInstructor?.dateOfBirth || '',
        category: currentInstructor?.category || '',
        sportType: currentInstructor?.sportType || '',
        workExperience: currentInstructor?.workExperience || '',
        sex: currentInstructor?.sex || '',
        visitorsId: [],
      }}
      innerRef={formikRef}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        const { fullname, dateOfBirth, category, sportType, workExperience, sex, visitorsId } = values;
        if (
          fullname !== String(currentInstructor.fullname) ||
          dateOfBirth !== currentInstructor.dateOfBirth ||
          category !== currentInstructor.category ||
          sportType !== currentInstructor.sportType ||
          workExperience !== currentInstructor.workExperience ||
          sex !== currentInstructor.sex ||
          !compareArray(visitorsId, allInstructorVisitors)
        ) {
          setSubmitting(false);
          resetForm();
          const photo = avatarPreview;
          const id = currentInstructor.id;
          dispatch(instructorEditRequest({ id, fullname, photo, dateOfBirth, category, sportType, workExperience, sex }, limitOnPage, visitorsId));
          toast.success("Инструктор отредактирован!", { autoClose: 1500 });
        } else {
          toast.error("Вы ничего не поменяли!", { autoClose: 1500 });
        }
      }}
    >
      {({ submitForm, errors, values, touched, setFieldValue, isValid, handleBlur }) => (
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
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.sex, touched.sex, 'Пол*')}
            type="sex"
            name="sex"
            sx={getErrorOnValidate('background', errors.sex, touched.sex)}
          />
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.sportType, touched.sportType, 'Вид спорта*')}
            type="sportType"
            name="sportType"
            sx={getErrorOnValidate('background', errors.sportType, touched.sportType)}
          />
          <ThemeProvider theme={style.Select}>
            <style.FormControlInputSelect
              sx={getErrorOnValidate('background', errors.visitorsId, touched.visitorsId)}
              fullWidth
            >
              <style.LabelSelect>
                {getErrorOnValidate('label', errors.visitorsId, touched.visitorsId, 'Назначить посетителей*')}
              </style.LabelSelect>
              <style.FieldInputSelect
                component={MultiSelect}
                fullWidth
                type="visitorsId"
                name="visitorsId"
                multiple
                value={values.visitorsId}
                onBlur={handleBlur("visitorsId")}
                renderValue={(selected: string[]) => visitorsDisplay(selected)}
                onChange={(event: SelectChangeEvent<string>) => handleChangeVisitor(event, setFieldValue)}
              >
                <MenuItem disabled value="">
                  Назначить посетителей
                </MenuItem>
                {getVisitorsForAppointment()}
              </style.FieldInputSelect>
            </style.FormControlInputSelect>
          </ThemeProvider>
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.category, touched.category, 'Категория*')}
            type="category"
            name="category"
            sx={getErrorOnValidate('background', errors.category, touched.category)}
          />
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.workExperience, touched.workExperience, 'Опыт работы*')}
            type="workExperience"
            name="workExperience"
            sx={getErrorOnValidate('background', errors.workExperience, touched.workExperience)}
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

export default memo(InstructorEditForm);