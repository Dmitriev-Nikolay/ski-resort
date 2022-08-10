import { LoginActionTypes } from './types'
import { AdminPhoto, LoginState } from './interfaces'
import { LoginActions } from './types'

const initialState: LoginState = {
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  errorValue: null,
  isLoadingCurrentUser: false,
  user: null,
  userPhoto: {} as AdminPhoto,
};

const login = (state = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        isError: false,
      };
    case LoginActionTypes.LOGIN_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoadingCurrentUser: true,
      };
    case LoginActionTypes.LOGIN_CURRENT_USER_SUCCES:
      return {
        ...state,
        isLoadingCurrentUser: false,
        user: action.payload,
      };
    case LoginActionTypes.LOGIN_CURRENT_USER_PHOTO_SUCCES:
      return {
        ...state,
        userPhoto: action.payload,
      };
    case LoginActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorValue: action.payload,
      };
    case LoginActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LoginActionTypes.LOGOUT_REQUEST:
    case LoginActionTypes.LOGOUT_ERROR:
    default:
      return state;
  };
};

export default login;