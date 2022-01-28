import React, { Component } from 'react';
import Form from '../Form/Form.jsx';
import Filters from '../Filters/Filters.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import './App.css';
import Status from '/src/scripts/status.js';
const todoList_Mock = [
  {
    label: 'test0',
    checked: true,
    id: 0,
  },
  {
    label: 'test1',
    checked: false,
    id: 1,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todoList_Mock,
      currentStatus: Status.all,
      nextId:
        todoList_Mock.length !== 0
          ? Math.max(...todoList_Mock.map((todo) => todo.id)) + 1
          : 0,
    };
  }


  // clear handler
  clearHandler() {
    this.setState(
      (state) =>
        (state = {
          ...state,
          todoList: state.todoList.filter((todo) => !todo.checked),
        })
    );
  }


  //set status
  setStatus(newStatus) {
    this.setState((state) => (state = { ...state, currentStatus: newStatus }));
  }

  //edit todo by id
  editTodo(id) {
    this.setState(
      (state) =>
        (state = {
          ...state,
          todoList: state.todoList.map((todo) => {
            if (todo.id === id) {
              todo.checked = !todo.checked;
            }
            return todo;
          }),
        })
    );
  }

  //toggle all todos checked
  toggleChecked() {
    const isAllChecked = this.state.todoList.every((todo) => todo.checked);
    this.setState(
      (state) =>
        (state = {
          ...state,
          todoList: state.todoList.map((todo) => {
            todo.checked = !isAllChecked;
            return todo;
          }),
        })
    );
  }

  // delete todo by id
  deleteTodo(id) {
    this.setState(
      (state) =>
        (state = {
          ...state,
          todoList: state.todoList.filter((todo) => todo.id !== id),
        })
    );
  }

  // create todo
  createTodo(label) {
    this.setState(
      (state) =>
        (state = {
          ...state,
          todoList: [
            ...state.todoList,
            {
              label,
              id: this.state.nextId,
              checked: false,
            },
          ],
          nextId: state.nextId+1,
        })
    );
  }

  render() {
    return (
      <>
        <h1 className="title">todos</h1>
        <div className="app">
          <Form
            toggleChecked={this.toggleChecked.bind(this)}
            createTodo={this.createTodo.bind(this)}
          />

          <TodoList
            currentStatus={this.state.currentStatus}
            deleteTodo={this.deleteTodo.bind(this)}
            todoList={this.state.todoList}
            editTodo={this.editTodo.bind(this)}
          />

          <Filters
            currentStatus={this.state.currentStatus}
            setStatus={this.setStatus.bind(this)}
            todoList={this.state.todoList}
            clearHandler={this.clearHandler.bind(this)}
          />
        </div>
      </>
    );
  }
}
