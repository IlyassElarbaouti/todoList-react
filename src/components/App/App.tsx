import * as React from 'react';
import TodoList from './TodoList/TodoList';
import './App.css';

const App = () => {
  return (
    <>
      <h1 className="title">todos</h1>
      <TodoList />
    </>
  );
};

export default App;
