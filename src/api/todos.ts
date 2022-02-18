import axios from 'axios';
import TodoItem from '../types/TodoItem';

const baseUrl = 'http://localhost:9000/todos';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
};

export const fetchGetAllTodos = () => axios.get(baseUrl, {
  headers,
});

export const fetchEditTodo = (newTodo: TodoItem) => axios.put(`${baseUrl}/update/${newTodo.id}`, newTodo, {
  headers,
});

export const fetchClearCompleted = () => axios.delete(baseUrl, {
  headers,
});

export const fetchToggleChecked = () => axios.put(
  baseUrl,
  {},
  {
    headers,
  },
);

export const fetchDeleteTodo = (id: number) => axios.delete(`${baseUrl}/${id}`, {
  headers,
});

export const fetchCreateTodo = (label: string) => axios.post(
  baseUrl,
  { label, checked: false },
  {
    headers,
  },
);
