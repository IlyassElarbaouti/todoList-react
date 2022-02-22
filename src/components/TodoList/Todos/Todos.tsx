import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';
import './Todos.css';

const Todos = () => {
  const todos = useSelector((state: any) => state.todos);
  const currentStatus = useSelector((state: any) => state.currentStatus);

  const getListToRender = () => {
    if (currentStatus === 'all') {
      return todos;
    }
    if (currentStatus === 'completed') {
      return todos.filter((todo: any) => todo.checked);
    }
    return todos.filter((todo: any) => !todo.checked);
  };

  return (
    <div className="todos">
      {getListToRender().map((todo: any) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default Todos;
