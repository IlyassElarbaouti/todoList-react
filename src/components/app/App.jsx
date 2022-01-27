import React, { Component } from 'react';
import Form from '../form/Form.jsx';
import Filters from '../filters/Filters.jsx';
import TodoList from '../todoList/TodoList.jsx';
import './app.css';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        {
          label: 'test1',
          checked: true,
          id: 1,
        },
        {
          label: 'test2',
          checked: true,
          id: 2,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h1 className="title">todos</h1>
        <div className="app">
          <Form />
          <TodoList todos={this.state.todoList} />
          <Filters />
        </div>
      </>
    );
  }
}
