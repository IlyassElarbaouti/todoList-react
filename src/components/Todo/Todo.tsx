import * as React from 'react';
import { MouseEvent, FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import { TodoItems } from '../../types/TodoItem';
import './Todo.css'

interface Props {
  todo: TodoItems;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const Todo = ({ todo, onToggleTodo, onDeleteTodo }: Props) => {
  const [text, setText] = useState(todo.label);
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');

  const handleDoubleClick = (event: MouseEvent<HTMLHeadingElement>) => {
    setShowInput(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
        if (value.trim() === '') {
          setValue('');
          return;
        }
    setValue('');
    setText(value)
    setShowInput(false);
  };

  return (
    <div onDoubleClick={handleDoubleClick} className="todo">
      <input
        checked={todo.checked}
        onChange={() => onToggleTodo(todo.id)}
        className="checkbox"
        type="checkbox"
      />
      {showInput ? (
        <form onSubmit={handleSubmit}>
          <input className='todo__input' value={value} onChange={handleInputChange} type="text"></input>
        </form>
      ) : (
        <h2 className="label">{text}</h2>
      )}
      <button onClick={() => onDeleteTodo(todo.id)} className="closeBtn">
        x
      </button>
    </div>
  );
};

export default Todo;
