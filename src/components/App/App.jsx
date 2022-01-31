import React, { Component } from 'react';
import Form from '../Form/Form.jsx';
import Filters from '../Filters/Filters.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import './App.css';
import Status from '/src/constants/status.js';
import todoListMock from '/src/constants/todoListMock.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoListMock,
      currentStatus: Status.all,
      nextId:
        todoListMock.length !== 0
          ? Math.max(...todoListMock.map((todo) => todo.id)) + 1
          : 0,
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  // clear handler
  handleClearCompleted() {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((todo) => !todo.checked),
    });
  }

  //set status
  setStatus(newStatus) {
    this.setState({ ...this.state, currentStatus: newStatus });
  }

  //edit todo by id
  editTodo(id) {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      }),
    });
  }

  //toggle all todos checked
  toggleChecked() {
    const isAllChecked = this.state.todoList.every((todo) => todo.checked);
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((todo) => {
        todo.checked = !isAllChecked;
        return todo;
      }),
    });
  }

  // delete todo by id
  deleteTodo(id) {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  }

  // create todo
  createTodo(label) {
    this.setState({
      ...this.state,
      todoList: [
        ...this.state.todoList,
        {
          label,
          id: this.state.nextId,
          checked: false,
        },
      ],
      nextId: this.state.nextId + 1,
    });
  }

  render() {
    return (
      <>
        <h1 className="title">todos</h1>
        <div className="app">
          <Form
            toggleChecked={this.toggleChecked}
            createTodo={this.createTodo}
          />
          <TodoList
            currentStatus={this.state.currentStatus}
            deleteTodo={this.deleteTodo}
            todoList={this.state.todoList}
            editTodo={this.editTodo}
          />

          {this.state.todoList.length > 0 ? (
            <Filters
              currentStatus={this.state.currentStatus}
              setStatus={this.setStatus}
              todoList={this.state.todoList}
              handleClearCompleted={this.handleClearCompleted}
            />
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}
