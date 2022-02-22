import axios from 'axios';
import TodoItem from '../types/TodoItem';

export const baseUrl: string = process.env.BASE_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
};

export const fetchGetAllTodos = () => {
  return axios.get(`${baseUrl}/todos`, {
    headers,
  });
};

export const fetchEditTodo = (newTodo: TodoItem) => {
  return axios.put(`${baseUrl}/todos/update/${newTodo.id}`, newTodo, {
    headers,
  });
};

export const fetchClearCompleted = () => {
  return axios.delete(`${baseUrl}/todos`, {
    headers,
  });
};

export const fetchToggleChecked = () => {
  return axios.put(
    `${baseUrl}/todos`,
    {},
    {
      headers,
    }
  );
};

export const fetchDeleteTodo = (id: number) => {
  return axios.delete(`${baseUrl}/todos/${id}`, {
    headers,
  });
};

export const fetchCreateTodo = (label: string) => {
  return axios.post(
    `${baseUrl}/todos`,
    { label, checked: false },
    {
      headers,
    }
  );
};
