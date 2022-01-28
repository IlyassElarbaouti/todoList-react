import React, { Component } from 'react';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  // get filtered list
  getListToRender() {
    if (this.props.currentStatus === 'all') {
      return this.props.todoList;
    } else if (this.props.currentStatus === 'completed') {
      return this.props.todoList.filter((todo) => todo.checked);
    } else {
      return this.props.todoList.filter((todo) => !todo.checked);
    }
  }

  render() {
    return (
      <div className="todos">
        {this.getListToRender().map((todo) => (
          <div key={todo.id} className="todo">
            <input
              checked={todo.checked}
              onChange={() => this.props.editTodo(todo.id)}
              className="checkbox"
              type="checkbox"
            />
            <h2 className="label">{todo.label}</h2>
            <button
              onClick={() => this.props.deleteTodo(todo.id)}
              className="closeBtn"
            >
              x
            </button>
          </div>
        ))}
      </div>
    );
  }
}
