import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import todosActions from '../../../state/actions/todos';
import { fetchCreateTodo, fetchToggleChecked } from '../../../api/todos';
import nextIdActions from '../../../state/actions/nextId';
import './Form.css';
import RootState from '../../../types/RootState';
import TodoItem from '../../../types/TodoItem';

const Form = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => state.todos);
  const nextId = useSelector((state: RootState) => state.nextId);
  const isAllChecked = todoList.every((todo: TodoItem) => todo.checked);
  const [value, setValue] = useState('');

  const handleCreateTodo = useCallback(
    (label: string) => {
      fetchCreateTodo(label)
        .then(() => {
          dispatch(
            todosActions.createTodo({ label, id: nextId, checked: false })
          );
          dispatch(nextIdActions.setNextId(nextId + 1));
        })
        .catch((error) => {
          console.error('Create Todo', error);
        });
    },
    [todoList, nextId]
  );

  const handleToggleChecked = useCallback(() => {
    fetchToggleChecked()
      .then(() => {
        dispatch(todosActions.toggleChecked(!isAllChecked));
      })
      .catch((error) => {
        console.error('handle Toggle Checked', error);
      });
  }, [isAllChecked]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === '') {
      setValue('');
      return;
    }
    handleCreateTodo(value);
    setValue('');
  };

  return (
    <div className="form__container">
      <FontAwesomeIcon
        onClick={handleToggleChecked}
        icon={faChevronDown}
        className={`drop ${isAllChecked ? 'dark' : null}`}
      />
      <form onSubmit={handleSubmit} className="form">
        <input
          value={value}
          onChange={handleInputChange}
          placeholder="What needs to be done?"
          className="form__input"
          type="text"
        />
      </form>
    </div>
  );
};

export default React.memo(Form);
