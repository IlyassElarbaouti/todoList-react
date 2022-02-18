import axios from 'axios';
import TodoItem from '../types/TodoItem';

const baseUrl = process.env.BASE_URL;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
};

export const fetchGetAllTodos = () =>
  axios.get(`${baseUrl}/todos`, {
    headers,
  });

export const fetchEditTodo = (newTodo: TodoItem) =>
  axios.put(`${baseUrl}/todos/update/${newTodo.id}`, newTodo, {
    headers,
  });

export const fetchClearCompleted = () =>
  axios.delete(`${baseUrl}/todos`, {
    headers,
  });

export const fetchToggleChecked = () =>
  axios.put(
    `${baseUrl}/todos`,
    {},
    {
      headers,
    }
  );

export const fetchDeleteTodo = (id: number) =>
  axios.delete(`${baseUrl}/todos/${id}`, {
    headers,
  });

export const fetchCreateTodo = (label: string) =>
  axios.post(
    `${baseUrl}/todos`,
    { label, checked: false },
    {
      headers,
    }
  );
