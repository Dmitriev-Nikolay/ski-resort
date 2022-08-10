import {
  LoginDetails,
  LoginErrorDescription,
  ErrorResponse,
  UserRole,
  AdminPhoto
} from './interfaces';

export enum LoginActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',

  LOGIN_CURRENT_USER_REQUEST = 'LOGIN_CURRENT_USER_REQUEST',
  LOGIN_CURRENT_USER_SUCCES = 'LOGIN_CURRENT_USER_SUCCES',
  LOGIN_CURRENT_USER_PHOTO_SUCCES = 'LOGIN_CURRENT_USER_PHOTO_SUCCES',

  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',
};

export interface LoginRequest {
  type: LoginActionTypes.LOGIN_REQUEST;
  payload: LoginDetails;
};

export interface LoginSuccess {
  type: LoginActionTypes.LOGIN_SUCCESS;
};

export interface LoginError {
  type: LoginActionTypes.LOGIN_ERROR;
  payload: LoginErrorDescription;
};

export interface LoginCurrentUserRequest {
  type: LoginActionTypes.LOGIN_CURRENT_USER_REQUEST;
};

export interface LoginCurrentUserSuccess {
  type: LoginActionTypes.LOGIN_CURRENT_USER_SUCCES;
  payload: UserRole;
};

export interface LoginCurrentUserPhotoSuccess {
  type: LoginActionTypes.LOGIN_CURRENT_USER_PHOTO_SUCCES;
  payload: AdminPhoto;
};

export interface LogoutRequest {
  type: LoginActionTypes.LOGOUT_REQUEST;
};

export interface LogoutSuccess {
  type: LoginActionTypes.LOGOUT_SUCCESS;
};


export interface LogoutError {
  type: LoginActionTypes.LOGOUT_ERROR;
  payload: ErrorResponse;
};

export type LoginActions =
  LoginRequest
  | LoginSuccess
  | LoginError
  | LoginCurrentUserRequest
  | LoginCurrentUserSuccess
  | LoginCurrentUserPhotoSuccess
  | LogoutRequest
  | LogoutSuccess
  | LogoutError;