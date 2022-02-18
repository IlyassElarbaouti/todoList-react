import axios from 'axios';

const baseUrl = 'http://localhost:9000';

export const fetchLogin = (email:string, password:string, navigate:(link:string)=>void) => axios
  .post(`${baseUrl}/login`, {
    email,
    password,
  })
  .then((res) => {
    if (res.status === 200 && res.data.user.isActivated) {
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      return window.location.reload();
    } if (res.status === 200 && !res.data.user.isActivated) {
      return navigate('/activation');
    }
    return navigate('/notfound');
  })
  .catch((e) => {
    const res = JSON.parse(JSON.stringify(e));

    if (res.status === 400) {
      alert('email or password are incorrect');
    } else {
      alert('server error');
    }
  });

export const fetchSignUp = (email:string, password:string, navigate:(path:string)=>void) => axios
  .post(`${baseUrl}/registration`, {
    email,
    password,
  })
  .then(() => navigate('/'))
  .catch((e) => {
    const res = JSON.parse(JSON.stringify(e));

    if (res.status === 400) {
      navigate('/');
      return alert('user already exists');
    }
    return alert('server error');
  });

export const fetchLogout = () => axios.post(`${baseUrl}/logout`, {
  refreshToken: localStorage.getItem('refreshToken'),
});

export const fetchRefresh = (previousRequest:any) => {
  localStorage.clear();
  return axios.post(`${baseUrl}/refresh`, {
    refreshToken: localStorage.getItem('refreshToken'),
  }).then((res) => {
    localStorage.setItem('token', res.data.accessToken);
    localStorage.setItem('refreshToken', res.data.refreshsToken);
  }).then(() => {
    previousRequest();
  });
};
