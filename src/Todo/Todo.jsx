import React from 'react';

const Todo = ({todo, onEditTodo, onDeleteTodo}) => {
  return (
    <div className="todo">
      <input
        checked={todo.checked}
        onChange={() => onEditTodo(todo.id)}
        className="checkbox"
        type="checkbox"
      />
      <h2 className="label">{todo.label}</h2>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="closeBtn"
      >
        x
      </button>
    </div>
  );
};

export default Todo;
