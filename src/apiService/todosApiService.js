const baseUrl = 'http://localhost:9000/todos'
import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
}

export const apiGetAllTodos = () => {
  return axios.get(baseUrl, {
    headers,
  })
}

export const apiEditTodo = (newTodo) => {
  return axios.put(`${baseUrl}/update/${newTodo.id}`, newTodo, {
    headers,
  })
}

export const apiClearCompleted = () => {
  return axios.delete(baseUrl, {
    headers,
  })
}

export const apiToggleChecked = () => {
  return axios.put(
    baseUrl,
    {},
    {
      headers,
    }
  )
}

export const apiDeleteTodo = (id) => {
  console.log(id)
  return axios.delete(`${baseUrl}/${id}`, {
    headers,
  })
}

export const apiCreateTodo = (label) => {
  return axios.post(
    baseUrl,
    { label, checked: false },
    {
      headers,
    }
  )
}
