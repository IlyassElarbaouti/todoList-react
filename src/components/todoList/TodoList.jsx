import React, { Component } from 'react';
import './todoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todos">
        {this.props.todos.map((todo) => (
          <div key={todo.label} className="todo">
            <input className="checkbox" type="checkbox" />
            <h2 className="label">{todo.label}</h2>
            <button className="closeBtn">x</button>
          </div>
        ))}
      </div>
    );
  }
}
