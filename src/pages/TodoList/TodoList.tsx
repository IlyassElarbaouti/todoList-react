import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/TodoList/Header/Header';
import Todos from '../../components/TodoList/Todos/Todos';
import Filters from '../../components/TodoList/Filters/Filters';
import Form from '../../components/TodoList/Form/Form';
import { fetchGetAllTodos } from '../../api/todos';
import './TodoList.css';
import todosActions from '../../state/actions/todos';
import nextIdActions from '../../state/actions/nextId';
import RootState from '../../types/RootState';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    fetchGetAllTodos()
      .then((res: any) => {
        dispatch(todosActions.setAllTodos(res.data.todos));
        dispatch(nextIdActions.setNextId(res.data.nextId));
      })
      .catch((error) => {
        console.error('get all todos', error);
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <h1 className="title"> TODOS</h1>
      <div className="todoList">
        <Form />
        <Todos />
        {todos.length > 0 ? <Filters /> : null}
      </div>
    </>
  );
};

export default TodoList;
