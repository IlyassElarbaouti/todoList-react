import axios from 'axios';
import TodoItem from '../types/TodoItem';

const baseUrlTodos = 'http://localhost:9000/todos';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `token ${localStorage.getItem('token')}`,
};

export const fetchGetAllTodos = () =>
  axios.get(baseUrlTodos, {
    headers,
  });

export const fetchEditTodo = (newTodo: TodoItem) =>
  axios.put(`${baseUrlTodos}/update/${newTodo.id}`, newTodo, {
    headers,
  });

export const fetchClearCompleted = () =>
  axios.delete(baseUrlTodos, {
    headers,
  });

export const fetchToggleChecked = () =>
  axios.put(
    baseUrlTodos,
    {},
    {
      headers,
    }
  );

export const fetchDeleteTodo = (id: number) =>
  axios.delete(`${baseUrlTodos}/${id}`, {
    headers,
  });

export const fetchCreateTodo = (label: string) =>
  axios.post(
    baseUrlTodos,
    { label, checked: false },
    {
      headers,
    }
  );
