import axios from 'axios'

const baseUrl = 'http://localhost:9000'

export const apiLogin = (email, password, navigate) => {
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

export const apiSignUp = (email, password, navigate) => {
 return axios
    .post(`${baseUrl}/registration`, {
      email,
      password,
    })
    .then((res) => {
      if (res.status === 201) {
        return navigate('/')
      }
    })
}

export const apiLogout = () => {
  return axios.post(`${baseUrl}/logout`, {
    refreshToken: localStorage.getItem('refreshToken'),
  })
}