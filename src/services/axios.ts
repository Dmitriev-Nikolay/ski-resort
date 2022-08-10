import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { LS_ACCESS_TOKEN_KEY } from '../store/constants';
import { removeToken } from '../store/login/services';

const { REACT_APP_BASE_URL } = process.env;

/**
 * @method AxiosInstance
 */

const AxiosDefault = Axios.create({
  baseURL: REACT_APP_BASE_URL,
});

AxiosDefault.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (!config) {
      config = {};
    };
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${localStorage.getItem(LS_ACCESS_TOKEN_KEY)}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

AxiosDefault.interceptors.response.use(
  (response: AxiosResponse) => {    
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      console.log(error.response);
      removeToken();
    }
    return Promise.reject(error);
  },
);

export default AxiosDefault;