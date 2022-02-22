import React, { FormEvent, ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import todosActions from '../../../../state/actions/todos';
import TodoItem from '../../../../types/TodoItem';
import './Todo.css';
import { fetchDeleteTodo, fetchEditTodo } from '../../../../api/todos';

interface Props {
  todo: TodoItem;
}

const Todo = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState(todo.label);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEditTodo = (newTodo: TodoItem) => {
    fetchEditTodo(newTodo)
      .then((res) => {
        dispatch(todosActions.editTodo(res.data));
      })
      .catch((error) => {
        console.error('edit todo', error);
      });
  };

  const handleDeleteTodo = (id: number) => {
    fetchDeleteTodo(id)
      .then(() => {
        dispatch(todosActions.deleteTodo(id));
      })
      .catch((error) => {
        console.error('Delete Todo', error);
      });
  };

  const handleDoubleClick = () => {
    setShowInput(!showInput);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setInputValue('');
      setShowInput(!showInput);
      return;
    }

    setInputValue('');
    setLabel(inputValue);
    handleEditTodo({ ...todo, label: inputValue });
    setShowInput(!showInput);
  };

  const handleBlur = () => {
    setShowInput(false);
    setInputValue('');
  };

  return (
    <div onDoubleClick={handleDoubleClick} className="todo">
      <div
        onDoubleClick={(e) => e.stopPropagation()}
        className="checkbox__container"
      >
        {todo.checked ? (
          <FontAwesomeIcon className="checkmark" icon={faCheck} />
        ) : null}
        <input
          onChange={() => {}}
          checked={todo.checked}
          onClick={() => handleEditTodo({ ...todo, checked: !todo.checked })}
          className="checkbox"
          type="checkbox"
        />
      </div>
      {showInput ? (
        <form className="todo__form" onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            className="todo__input"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
          ></input>
        </form>
      ) : (
        <h2 className={`label ${todo.checked ? 'label-done' : null}`}>
          {label}
        </h2>
      )}
      <button onClick={() => handleDeleteTodo(todo.id)} className="closeBtn">
        x
      </button>
    </div>
  );
};

export default Todo;
