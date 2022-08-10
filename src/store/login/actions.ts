import {
  LoginActionTypes,
  LoginRequest,
  LoginSuccess,
  LoginError,
  LogoutRequest,
  LogoutSuccess,
  LogoutError,
  LoginCurrentUserRequest,
  LoginCurrentUserSuccess,
  LoginCurrentUserPhotoSuccess
} from './types';
import {
  LoginDetails,
  LoginErrorDescription,
  ErrorResponse,
  UserRole,
  AdminPhoto
} from './interfaces'

export const loginRequest = (loginDetails: LoginDetails): LoginRequest => ({
  type: LoginActionTypes.LOGIN_REQUEST,
  payload: loginDetails,
});

export const loginSuccess = (): LoginSuccess => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
});

export const loginError = (error: LoginErrorDescription): LoginError => ({
  type: LoginActionTypes.LOGIN_ERROR,
  payload: error,
});

export const currentUserRequest = (): LoginCurrentUserRequest => ({
  type: LoginActionTypes.LOGIN_CURRENT_USER_REQUEST,
});

export const currentUserSucces = (user: UserRole): LoginCurrentUserSuccess => ({
  type: LoginActionTypes.LOGIN_CURRENT_USER_SUCCES,
  payload: user,
});

export const currentUserPhotoSucces = (adminPhoto: AdminPhoto): LoginCurrentUserPhotoSuccess => ({
  type: LoginActionTypes.LOGIN_CURRENT_USER_PHOTO_SUCCES,
  payload: adminPhoto,
});

export const logoutRequest = (): LogoutRequest => ({
  type: LoginActionTypes.LOGOUT_REQUEST,
});

export const logoutSuccess = (): LogoutSuccess => ({
  type: LoginActionTypes.LOGOUT_SUCCESS,
});

export const logoutError = (error: ErrorResponse): LogoutError => ({
  type: LoginActionTypes.LOGOUT_ERROR,
  payload: error,
});