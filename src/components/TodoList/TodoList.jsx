import React, { Component } from 'react';
import Todo from '../Todo/Todo.jsx';
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
          <Todo
            key={todo.id}
            onDeleteTodo={this.props.onDeleteTodo}
            onEditTodo={this.props.onEditTodo}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
