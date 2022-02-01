import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
      return (
        <div className="todo">
          <input
            checked={this.props.todo.checked}
            onChange={() => this.props.onEditTodo(this.props.todo.id)}
            className="checkbox"
            type="checkbox"
          />
          <h2 className="label">{this.props.todo.label}</h2>
          <button
            onClick={() => this.props.onDeleteTodo(this.props.todo.id)}
            className="closeBtn"
          >
            x
          </button>
        </div>
      );
  }
}
