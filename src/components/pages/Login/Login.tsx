import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-mui';

import { getErrorOnValidate } from '../../../utils/getErrorOnValidate';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { loginRequest } from '../../../store/login/actions';
import * as login from '../../../store/login/selectors';
import logo from '../../../assets/img/logo.png';
import google from '../../../assets/img/google.png';
import facebook from '../../../assets/img/facebook.png';
import vk from '../../../assets/img/vk.png';

import * as style from './style';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Введите имя пользователя'),
  password: Yup.string()
    .required('Введите пароль')
    .min(3, 'Пароль должен быть больше 2 символов')
});

const Login: React.FC = () => {
  const dispatch = useTypedDispatch();

  const isError = useTypedSelector(login.isError);
  const errorLogin = isError && 'Неверное имя пользователя или пароль';
  const isLogin = useTypedSelector(login.isLoggedIn);

  if (isLogin) {
    return <Redirect to='/' />
  }

  return (
    <style.LoginPage>
      <style.LoginPaper elevation={5}>
        <style.LoginTitleGrid container>
          <style.LogoTooltip
            title="Покатаемся?"
            placement="right-start"
          >
            <style.Logo
              height="70"
              width="77"
              src={logo}
              alt="main-logo"
            />
          </style.LogoTooltip>
          <Grid item xs={12}>
            <style.TextPersonalTitle>
              личный кабинет
            </style.TextPersonalTitle>
          </Grid>
          <Grid item xs={12}>
            <style.TextResortTitle>
              Горнолыжного курорта
            </style.TextResortTitle>
          </Grid>
          <style.BlockLoginError item xs={12}>
            <style.TextLoginError>
              {errorLogin}
            </style.TextLoginError>
          </style.BlockLoginError>
        </style.LoginTitleGrid>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setSubmitting(false);
            resetForm();
            dispatch(loginRequest(values));
          }}
        >
          {({ submitForm, errors, touched }) => (
            <style.MainForm>
              <style.FieldInput
                fullWidth
                component={TextField}
                label={getErrorOnValidate('label', errors.username, touched.username, 'Имя*')}
                type="username"
                name="username"
                sx={getErrorOnValidate('background', errors.username, touched.username)}
              />
              <style.FieldInput
                fullWidth
                component={TextField}
                label={getErrorOnValidate('label', errors.password, touched.password, 'Пароль*')}
                type="password"
                name="password"
                sx={getErrorOnValidate('background', errors.password, touched.password)}
              />
              <style.ButtonLogin
                type='submit'
                color='primary'
                variant="contained"
                onClick={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  submitForm();
                }
                }
              >
                Войти
              </style.ButtonLogin>
            </style.MainForm>
          )}
        </Formik>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          marginBottom="30px"
        >
          <Grid item>
            <Link
              href="https://www.google.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <style.SocialIcon
                height="45"
                width="45"
                src={google}
                alt="google-social"
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://ru-ru.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <style.SocialIcon
                height="45"
                width="45"
                src={facebook}
                alt="facebook-social"
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <style.SocialIcon
                height="45"
                width="45"
                src={vk}
                alt="vk-social"
              />
            </Link>
          </Grid>
        </Grid>
        <style.TextRegistration>
          <Link href="#">
            Зарегистрироваться
          </Link>
        </style.TextRegistration>
      </style.LoginPaper>
      <style.TextAllRightsReserved>
        (с) 2021. Все права защищены
      </style.TextAllRightsReserved>
    </style.LoginPage>
  )
};

export default Login;
