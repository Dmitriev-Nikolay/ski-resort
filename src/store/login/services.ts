import AxiosDefault from '../../services/axios';
import { LS_ACCESS_TOKEN_KEY } from '../constants';

/**
 * @method EverythingForTokens
 */

export const saveToken = (accessToken: string): void => {
  localStorage.setItem(LS_ACCESS_TOKEN_KEY, accessToken);
  AxiosDefault.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeToken = (): void => {
  localStorage.removeItem(LS_ACCESS_TOKEN_KEY);
};

export const hasToken = (): boolean => {
  const accessToken = localStorage.getItem(LS_ACCESS_TOKEN_KEY);
  return Boolean(accessToken);
};

export const setHeaders = (): void => {
  const accessToken = localStorage.getItem(LS_ACCESS_TOKEN_KEY);
  if (accessToken) {
    AxiosDefault.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};
