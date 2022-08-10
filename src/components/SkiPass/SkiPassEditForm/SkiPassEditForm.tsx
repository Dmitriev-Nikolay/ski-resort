import React, { useState, useEffect, useRef, memo } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { TextField } from 'formik-mui';
import { MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getErrorOnValidate } from '../../../utils/getErrorOnValidate';
import { checkForm } from '../../../utils/checkForm';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { Loader, PickerDateTime } from '../../UI';
import { VisitorSelectCard } from '../../Visitor';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SkiPass } from '../../../store/skiPasses/interfaces';
import { skiPassAllVisitorsRequest, skiPassEditRequest } from '../../../store/skiPasses/actions';
import * as selectorSkiPasses from '../../../store/skiPasses/selectors';
import { LIMIT_ON_PREVIEW_SKI_PASS, LIMIT_ON_PAGE_SKI_PASS } from '../../../store/constants';
import addIcon from '../../../assets/img/add-photo.png';
import { ValuesSkiPassForAddEdit } from '../SkiPassAddForm/SkiPassAddForm';

import * as style from './style';

const SignupSchema = Yup.object().shape({
  visitorId: Yup.string()
    .required('Выберите посетителя'),
  expirationTime: Yup.date()
    .required('Укажите конец действия')
    .nullable(),
  skiPassPrice: Yup.number()
    .typeError('Укажите цену от 1 до 10000')
    .min(1, 'Цена должна быть больше 1')
    .max(10000, 'Цена не может превышать 10000')
    .integer('Цена должна быть целым числом')
    .required('Укажите цену'),
});

const SkiPassEditForm: React.FC<{ currentSkiPass: SkiPass }> = ({ currentSkiPass }) => {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const dateExpirationTime = new Date(currentSkiPass.expirationTime);
  const [date, setDate] = useState<Date | null>(dateExpirationTime);

  const formikRef = useRef<FormikProps<ValuesSkiPassForAddEdit>>(null);

  const assignedVisitor = useTypedSelector(selectorSkiPasses.assignedVisitorForCard);
  const visitorsForAppointment = useTypedSelector(selectorSkiPasses.allVisitorsForSkiPasses);
  const isGetAllVisitors = useTypedSelector(selectorSkiPasses.isGetAllVisitors);
  const limitOnPage = pathname === '/' ? LIMIT_ON_PREVIEW_SKI_PASS : LIMIT_ON_PAGE_SKI_PASS;
  const visitorsPhoto = useTypedSelector(selectorSkiPasses.allVisitorsPhotoForSkiPasses);

  useEffect(() => {
    if (isMounted) {
      dispatch(skiPassAllVisitorsRequest(currentSkiPass.number));
    };
    return () => setIsMounted(false);
  }, [dispatch, isMounted, currentSkiPass.number]);

  useEffect(() => {
    formikRef.current?.setFieldValue('visitorId', assignedVisitor?.id ?? '');
  }, [assignedVisitor?.id]);

  const getVisitorsForAppointment = (): React.ReactNode => {
    if (isGetAllVisitors) {
      return <Loader size={45} />
    }
    if (visitorsForAppointment.length === 0) {
      return <style.TextAllVisitorsInfo>Нет посетителей для назначения</style.TextAllVisitorsInfo>
    }
    return (
      visitorsForAppointment.map((visitor, i) => {
        return (
          <MenuItem
            key={`${visitor.id}${visitor.fullname}`}
            value={visitor.id}
          >
            <VisitorSelectCard
              currentVisitor={visitor}
              photo={visitorsPhoto![i]}
            />
          </MenuItem>
        );
      })
    )
  };

  return (
    <Formik
      initialValues={{
        visitorId: String(assignedVisitor?.id),
        expirationTime: currentSkiPass.expirationTime,
        skiPassPrice: String(currentSkiPass.price),
      }}
      innerRef={formikRef}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        const { expirationTime, skiPassPrice, visitorId } = values;
        if (skiPassPrice !== String(currentSkiPass.price) || expirationTime !== currentSkiPass.expirationTime) {
          setSubmitting(false);
          resetForm();
          setDate(null);
          const price = Number(skiPassPrice);
          const id = Number(visitorId);
          const number = currentSkiPass.number;
          if (!assignedVisitor) {
            dispatch(skiPassEditRequest({ number, expirationTime, price }, limitOnPage, id));
            toast.success("Ски-пасс отредактирован!", { autoClose: 1500 });
          }
          dispatch(skiPassEditRequest({ number, expirationTime, price }, limitOnPage, id, assignedVisitor?.id));
          toast.success("Ски-пасс отредактирован!", { autoClose: 1500 });
        } else {
          toast.error("Вы ничего не поменяли!", { autoClose: 1500 });
        }
      }}
    >
      {({ submitForm, errors, values, touched, setFieldValue, isValid }) => (
        <style.MainForm>
          <style.SkiPassImgBox>
            <style.SkiPassAddImg image={addIcon} />
          </style.SkiPassImgBox>
          <PickerDateTime
            setFieldFormik={setFieldValue}
            dateValue={date}
            setDateValue={setDate}
            label="Конец действия*"
            type="expirationTime"
            touch={touched.expirationTime}
            error={errors.expirationTime}
          />
          <style.FieldInput
            fullWidth
            component={TextField}
            label={getErrorOnValidate('label', errors.skiPassPrice, touched.skiPassPrice, 'Цена*')}
            type="skiPassPrice"
            name="skiPassPrice"
            sx={getErrorOnValidate('background', errors.skiPassPrice, touched.skiPassPrice)}
          />
          <ThemeProvider theme={style.Select}>
            <style.FieldInputSelect
              component={TextField}
              label={getErrorOnValidate('label', errors.visitorId, touched.visitorId, 'Назначить посетителя*')}
              type="visitorId"
              name="visitorId"
              sx={getErrorOnValidate('background', errors.visitorId, touched.visitorId)}
              select
              fullWidth
            >
              <MenuItem disabled value="">
                Назначить посетителя
              </MenuItem>
              {getVisitorsForAppointment()}
            </style.FieldInputSelect>
          </ThemeProvider>
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

export default memo(SkiPassEditForm);