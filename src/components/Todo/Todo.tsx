import * as React from "react";

type Todotypes = {
  id: number,
  label: string,
  checked:boolean
}

interface Props{
  todo:Todotypes;
  onDeleteTodo: (id:number) => void;
  onEditTodo: (id:number) => void;
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
