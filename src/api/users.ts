import axios from 'axios'

const baseUrl = 'http://localhost:9000'

export const fetchLogin = (email:string, password:string, navigate:(link:string)=>void) => {
  return axios
    .post(`${baseUrl}/login`, {
      email,
      password,
    })
    .then((res) => {
      if (res.status === 200 && res.data.user.isActivated) {
        localStorage.setItem('token', res.data.accessToken)
        localStorage.setItem('refreshToken', res.data.refreshToken)

        location.reload()
      } else if (res.status === 200 && !res.data.user.isActivated) {
        return navigate('/activation')
      } else {
        return navigate('/notfound')
      }
    })
    .catch((e) => {
      const res = JSON.parse(JSON.stringify(e))

      if (res.status === 400) {
        alert('email or password are incorrect')
      } else {
        alert('server error')
      }
    })
}

export const fetchSignUp = (email:string, password:string, navigate:(link:string)=>void) => {
  return axios
    .post(`${baseUrl}/registration`, {
      email,
      password,
    })
    .then((res) => {
      return navigate('/')
    })
    .catch((e) => {
      const res = JSON.parse(JSON.stringify(e))

      if (res.status === 400) {
        alert('user already exists')
        return navigate('/')
      } else {
        alert('server error')
      }
    })
}

export const fetchLogout = () => {
  return axios.post(`${baseUrl}/logout`, {
    refreshToken: localStorage.getItem('refreshToken'),
  })
}

export const fetchRefresh = (previousRequest:any) => {
  localStorage.clear()
  return axios.post(`${baseUrl}/refresh`, {
    refreshToken: localStorage.getItem('refreshToken'),
  }).then(res => {
    localStorage.setItem('token', res.data.accessToken)
    localStorage.setItem('refreshToken', res.data.refreshsToken)
  }).then(() => {
      previousRequest()
  })
}
