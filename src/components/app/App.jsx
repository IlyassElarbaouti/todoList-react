import React, { Component } from 'react';
import Form from '../form/Form.jsx';
import './app.css'

export default class App extends Component {
  render() {
      return (
          <div className="app">
              <h1 className="title">todos</h1>
              <Form/>   
          </div>
    )
  }
}
