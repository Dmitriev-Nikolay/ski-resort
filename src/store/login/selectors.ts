import { TRootState } from '../store';

export const allLogin = (state: TRootState) => state.loginReducer;

export const isLoading = (state: TRootState) => allLogin(state).isLoading;
export const isLoggedIn = (state: TRootState) => allLogin(state).isLoggedIn;
export const isError = (state: TRootState) => allLogin(state).isError;
export const errorValue = (state: TRootState) => allLogin(state).errorValue;
export const currentUser = (state: TRootState) => allLogin(state).user;
export const currentUserPhoto = (state: TRootState) => allLogin(state).userPhoto;
export const isLoadingCurrentUser = (state: TRootState) => allLogin(state).isLoadingCurrentUser;