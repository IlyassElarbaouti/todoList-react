import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../../types/RootState';
import Todo from './Todo/Todo';
import './Todos.css';

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const currentStatus = useSelector((state: RootState) => state.currentStatus);

  const getListToRender = () => {
    if (currentStatus === 'all') {
      return todos;
    }
    if (currentStatus === 'completed') {
      return todos.filter((todo) => todo.checked);
    }
    return todos.filter((todo) => !todo.checked);
  };

  return (
    <div className="todos">
      {getListToRender().map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
