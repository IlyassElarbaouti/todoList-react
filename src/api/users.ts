import axios, { AxiosResponse } from 'axios';
import TodoItem from '../types/TodoItem';
import { baseUrl } from './todos';

export const fetchLogin = (
  email: string,
  password: string,
  navigate: (link: string) => void
) =>
  axios
    .post(`${baseUrl}/login`, {
      email,
      password,
    })
    .then((res) => {
      if (res.status === 200 && res.data.user.isActivated) {
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        return window.location.reload();
      }
      if (res.status === 200 && !res.data.user.isActivated) {
        return navigate('/activation');
      }
      return navigate('/notfound');
    });

export const fetchSignUp = (
  email: string,
  password: string,
  navigate: (path: string) => void
) =>
  axios
    .post(`${baseUrl}/registration`, {
      email,
      password,
    })
    .then(() => navigate('/'));

export const fetchLogout = () =>
  axios.post(`${baseUrl}/logout`, {
    refreshToken: localStorage.getItem('refreshToken'),
  });

export const fetchRefresh = (
  previousRequest: (
    param?: string | TodoItem | number
  ) => Promise<AxiosResponse<any, any>>
) => {
  localStorage.clear();
  return axios
    .post(`${baseUrl}/refresh`, {
      refreshToken: localStorage.getItem('refreshToken'),
    })
    .then((res) => {
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshsToken);
      previousRequest();
    });
};
