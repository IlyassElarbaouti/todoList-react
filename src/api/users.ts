import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './todos';

export const fetchLogin = (email: string, password: string) =>
  axios.post(`${baseUrl}/login`, {
    email,
    password,
  });

export const fetchSignUp = (email: string, password: string) =>
  axios.post(`${baseUrl}/registration`, {
    email,
    password,
  });

export const fetchLogout = () =>
  axios.post(`${baseUrl}/logout`, {
    refreshToken: localStorage.getItem('refreshToken'),
  });

export const fetchRefresh = () => {
  localStorage.clear();
  return axios
    .post(`${baseUrl}/refresh`, {
      refreshToken: localStorage.getItem('refreshToken'),
    })
    .then((res) => {
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshsToken);
    });
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      fetchRefresh();
    }
  }
);
