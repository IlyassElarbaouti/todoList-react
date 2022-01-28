import React, { Component } from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  // update state based on input value
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // handle form submit
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      this.setState({ value: '' });
      return
    }
    this.props.createTodo(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="form__container">
        <FontAwesomeIcon onClick={this.props.toggleChecked} icon={faChevronDown} className="drop" />
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder="What needs to be done?"
            className="form__input"
            type="text"
          />
          <button
            onClick={this.createTodoElement}
            className="form__btn hidden"
            type="submit"
          >
            Add todo
          </button>
        </form>
      </div>
    );
  }
}
