import { useState } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

interface Props{
  onCreateTodo: (value:string) => void;
  onToggleChecked: () => void;
}

const Form = ({ onCreateTodo, onToggleChecked }:Props) => {
  //state
  const [value, setValue] = useState('');

  //functions
  //handle input change
  const handleInputChange = (event:any) => {
    setValue(event.target.value);
  };

  //handle submit
  const handleSubmit = (event:any) => {
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
        className="drop"
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

export default Form;
