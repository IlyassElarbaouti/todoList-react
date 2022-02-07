import * as React from "react";
import {TodoItems} from '../types/TodoItem'

interface Props{
  todo:TodoItems;
  onEditTodo: (id:number) => void;
  onDeleteTodo: (id:number) => void;
}

const Todo = ({todo, onEditTodo, onDeleteTodo}:Props) => {
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
