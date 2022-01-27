import React, { Component } from 'react';
import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  render() {
    return (
      <div className="form__container">
        <FontAwesomeIcon icon={faChevronDown} className="drop" />
        <form className="form">
          <input
            placeholder="What needs to be done?"
            className="form__input"
            type="text"
          />
          <button className="form__btn hidden" type="submit">
            Add todo
          </button>
        </form>
      </div>
    );
  }
}
