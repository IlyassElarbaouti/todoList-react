import { ChangeEvent, FormEvent, useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

interface Props {
  onCreateTodo: (value: string) => void
  onToggleChecked: () => void
  isAllChecked: boolean
}

const Form = ({ onCreateTodo, onToggleChecked, isAllChecked }: Props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.trim() === '') {
      setValue('');
      return;
    }
    onCreateTodo(value);
    setValue('');
  };

  return (
    <div className="form__container">
      <FontAwesomeIcon
        onClick={onToggleChecked}
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
