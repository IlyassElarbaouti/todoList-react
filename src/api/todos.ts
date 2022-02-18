import axios from 'axios'
import TodoItem from '../types/TodoItem'
const baseUrl = 'http://localhost:9000/todos'

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
}

export const fetchGetAllTodos = () => {
  return axios.get(baseUrl, {
    headers,
  })
}

export const fetchEditTodo = (newTodo:TodoItem) => {
  return axios.put(`${baseUrl}/update/${newTodo.id}`, newTodo, {
    headers,
  })
}

export const fetchClearCompleted = () => {
  return axios.delete(baseUrl, {
    headers,
  })
}

export const fetchToggleChecked = () => {
  return axios.put(
    baseUrl,
    {},
    {
      headers,
    }
  )
}

export const fetchDeleteTodo = (id:number) => {
  return axios.delete(`${baseUrl}/${id}`, {
    headers,
  })
}

export const fetchCreateTodo = (label:string) => {
  return axios.post(
    baseUrl,
    { label, checked: false },
    {
      headers,
    }
  )
}
