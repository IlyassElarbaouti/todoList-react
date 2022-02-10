import * as React from 'react';
import { FormEvent, ChangeEvent, MouseEventHandler } from 'react';
import { useState } from 'react';
import { TodoItems } from '../../../../../types/TodoItem';
import './Todo.css';

interface Props {
  todo: TodoItems;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodoText: (id: number, label: string) => void;
}

const Todo = ({ todo, onToggleTodo, onDeleteTodo, onEditTodoText }: Props) => {
  const [label, setLabel] = useState(todo.label);
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');

  const handleDoubleClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() === '') {
      setValue('');
      setShowInput(!showInput);
      return;
    }

    setValue('');
    setLabel(value);
    onEditTodoText(todo.id, value);
    setShowInput(!showInput);
  };

  const handleToggleTodo = (event: FormEvent<HTMLInputElement>) => {
    onToggleTodo(todo.id);
  };
  const handleBlur = () => {
    setShowInput(false);
    setValue('');
  };

  return (
    <div onDoubleClick={handleDoubleClick} className="todo">
      <input
        onDoubleClick={(e) => e.stopPropagation()}
        checked={todo.checked}
        onClick={handleToggleTodo}
        className="checkbox"
        type="checkbox"
      />
      {showInput ? (
        <form className="todo__form" onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            className="todo__input"
            value={value}
            onChange={handleInputChange}
            type="text"
          ></input>
        </form>
      ) : (
        <h2 className="label">{label}</h2>
      )}
      <button onClick={() => onDeleteTodo(todo.id)} className="closeBtn">
        x
      </button>
    </div>
  );
};

export default Todo;
