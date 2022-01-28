import React, { Component } from 'react';
import './Filters.css';

export default class Filters extends Component {
  constructor(props) {
    super(props);
  }

  // get active todos
  getActiveTodos() {
    return this.props.todoList.filter((todo) => !todo.checked);
  }

  //get completed todos
  getCompletedTodos() {
    return this.props.todoList.filter((todo) => todo.checked);
  }

  render() {
    return (
      <div
        className={`filters__container ${
          this.props.todoList.length > 0 ? '' : 'hidden'
        }`}
      >
        <div className="filters">
          <span className="count">
            {this.getActiveTodos().length} items left
          </span>

          <div className="filter__btns">
            <button
              onClick={() => this.props.setStatus('all')}
              className={`all btn ${
                this.props.currentStatus === 'all' ? 'border' : ''
              }`}
            >
              All
            </button>

            <button
              onClick={() => this.props.setStatus('active')}
              className={`active btn ${
                this.props.currentStatus === 'active' ? 'border' : ''
              }`}
            >
              active
            </button>

            <button
              onClick={() => this.props.setStatus('completed')}
              className={`completed btn ${
                this.props.currentStatus === 'completed' ? 'border' : ''
              }`}
            >
              completed
            </button>
          </div>

          <button
            onClick={this.props.clearHandler}
            className={`delete-complete btn ${this.getCompletedTodos().length ===
              0 ? 'unvisible' : ''}`}
          >
            clear completed
          </button>
        </div>
        <div className="overlays">
          <div className="overlay1 overlay"></div>
          <div className="overlay2 overlay"></div>
        </div>
      </div>
    );
  }
}
