import { call, put, takeLatest } from 'redux-saga/effects'
import qs from 'querystring';

import AxiosDefault from '../../services/axios';
import * as actions from './actions';
import { loginEndpoints } from './requests';
import { LoginDetails, loginConfig, UserRole, AuthDataInfo } from './interfaces';
import { saveToken, removeToken } from './services';
import { LoginActionTypes, LoginRequest } from './types';
import { BASE64_IMAGE, GET_TOKEN_URL } from '../constants';

/**
 * 
 * @methods WORKERS 
 */

function* login(action: LoginRequest) {
  try {
    const loginDetails: LoginDetails = action.payload; // username & password
    const requestBody = {
      ...loginConfig,
      ...loginDetails,
    };
    const { access_token }: AuthDataInfo = yield call(
      AxiosDefault.post,
      GET_TOKEN_URL,
      qs.stringify(requestBody),
      {
        auth: {
          username: loginConfig.skiresort as string,
          password: loginConfig.secret as string,
        },
      },
    );
    yield call(saveToken, access_token);
    yield put(actions.loginSuccess());
  } catch (e: any) {
    yield put(actions.loginError(e.response.data));
  };
};

function* logout() {
  try {
    yield call(removeToken);
    yield put(actions.logoutSuccess());
  } catch (e: any) {
    yield put(actions.logoutError(e.response.data));
  };
};

function* userRole() {
  const admin: UserRole = yield call(AxiosDefault.get, loginEndpoints.user());
  const photoUser: string = yield call(AxiosDefault.get, loginEndpoints.img(admin.id));
  yield put(actions.currentUserPhotoSucces({ id: admin.id, photo: `${BASE64_IMAGE}${photoUser}` }));
  yield put(actions.currentUserSucces(admin));
};

/**
 * 
 * @methods WATCHERS
 */

export function* loginWatcher(): unknown {
  yield takeLatest(LoginActionTypes.LOGIN_CURRENT_USER_REQUEST, userRole);
  yield takeLatest(LoginActionTypes.LOGIN_REQUEST, login);
  yield takeLatest(LoginActionTypes.LOGOUT_REQUEST, logout);
};