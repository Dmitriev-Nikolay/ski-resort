import React, { memo } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { RouteProps } from './routes';
import { useTypedSelector } from "../hooks/useTypedSelector";
import * as selectorLogin from '../store/login/selectors';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLogin = useTypedSelector(selectorLogin.isLoggedIn);

  if (isLogin) {
    return <Route {...props} />
  }

  return (
    <Redirect to='/login' />
  );
};

export default memo(PrivateRoute);
