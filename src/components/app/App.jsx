import React, { Component } from 'react';
import Form from '../form/Form.jsx';
import Filters from '../filters/Filters.jsx';
import TodoList from '../todoList/TodoList.jsx';
import './app.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STATUS: {
        all: 'all',
        completed: 'completed',
        active: 'active',
      },

      todoList: [
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
      ],
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,

      nextId:
        this.state.todoList.length !== 0
          ? Math.max(...this.state.todoList.map((todo) => todo.id)) + 1
          : 0,

      currentStatus: this.state.STATUS.all,
    });
  }

  //get todo by id
  getIndexOfTodo(id) {
    return this.state.todoList.findIndex((todo) => todo.id === id);
  }

  //rerender
  rerender() {
    this.setState(this.state);
  }

  //set status
  setStatus(newStatus) {
    this.state.currentStatus = newStatus;
    this.rerender();
  }

  //edit todo by id
  editTodo(id) {
    this.state.todoList[this.getIndexOfTodo(id)].checked =
      !this.state.todoList[this.getIndexOfTodo(id)].checked;
    this.rerender();
  }

  //toggle all todos checked
  toggleChecked() {
    const isAllChecked = this.state.todoList.every((todo) => todo.checked);
    this.state.todoList.forEach((todo) => {
      todo.checked = !isAllChecked;
    });
    this.rerender();
  }

  // delete todo by id
  deleteTodo(id) {
    this.state.todoList.splice(this.getIndexOfTodo(id), 1);
    this.rerender();
  }

  // create todo
  createTodo(label) {
    this.state.todoList.push({
      label,
      id: this.state.nextId++,
      checked: false,
    });
    this.rerender();
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
          />

        </div>
      </>
    );
  }
}
