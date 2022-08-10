import { hasToken, setHeaders } from '../store/login/services';
import { loginSuccess } from '../store/login/actions';
import store from '../store/store';

export const loginCheck = (): void => {
  if (hasToken()) {
    setHeaders();
    store.dispatch(loginSuccess());
  }
};