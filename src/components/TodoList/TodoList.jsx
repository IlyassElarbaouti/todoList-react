import React from 'react';
import Todo from '../Todo/Todo.jsx';
import './TodoList.css'

const TodoList = ({ currentStatus, todoList, onDeleteTodo, onEditTodo }) => {
  //get filtered list
  const getListToRender = () => {
    if (currentStatus === 'all') {
      return todoList;
    } else if (currentStatus === 'completed') {
      return todoList.filter((todo) => todo.checked);
    } else {
      return todoList.filter((todo) => !todo.checked);
    }
  };

  return (
    <div className="todos">
      {getListToRender().map((todo) => (
        <Todo
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
