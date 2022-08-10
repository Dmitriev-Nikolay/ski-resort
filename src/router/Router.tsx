import React, { useRef } from 'react';
import { Route, RouteChildrenProps } from "react-router-dom";
import { ThemeProvider } from '@mui/material';

import PrivateRoute from './PrivateRoute';
import { breakpoints } from './breakpointsConfig';
import { Loader, PageAnimation } from "../components/UI";
import { routes } from "./routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import * as selectorLogin from '../store/login/selectors';

/**
 * @redirectError роутинг ломается при истечении срока токена из-за редиректа на главную (не кидает на страницу логина), 
 * так как необходимо использовать компонент Switch, но со Switch не будет анимаций перехода между страницами.
 * Пока оставляю так, но для решения этой проблемы можно использовать React-spring и она работает со Switch.
 * Для решения проблемы: на время в редиректе поставить to='/login' и зайти заново. Или просто использовать Switch и активировать страницу
 * NotFound в маршрутах (Анимация! Пока!).
 */

const Router: React.FC = () => {
  const nodeRef = useRef(null);
  const isProgressLoadingLogin = useTypedSelector(selectorLogin.isLoading);

  if (isProgressLoadingLogin) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={breakpoints}>
      {
        routes.map((route, key) => {
          if (route.isProtected) {
            return <PrivateRoute key={key} {...route}>
              {
                ({ match }: RouteChildrenProps) => (
                  <PageAnimation
                    match={match}
                    timeout={5000}
                    cssClass={"animation-content-page"}
                    node={nodeRef}
                  >
                    <route.component />
                  </PageAnimation>
                )
              }
            </PrivateRoute>
          }
          return <Route key={key} {...route}>
            {
              ({ match }: RouteChildrenProps) => (
                <PageAnimation
                  match={match}
                  timeout={800}
                  cssClass={"animation-login-page"}
                  node={nodeRef}
                >
                  <route.component />
                </PageAnimation>
              )
            }
          </Route>
        })
      }
      {/* <Redirect from="*" to="/" /> */}
    </ThemeProvider>
  );
};

export default Router;