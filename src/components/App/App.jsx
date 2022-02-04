import React, { useState } from 'react';
import Filters from '../Filters/Filters.jsx';
import Form from '../Form/Form.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import './App.css'

const App = () => {
  //variables
  const initialTodos = [
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

  //state
  const [currentStatus, setCurrentStatus] = useState('all');
  const [todoList, setTodoList] = useState(initialTodos);
  const [nextId, setNextId] = useState(
    todoList.length !== 0 ? Math.max(...todoList.map((todo) => todo.id)) + 1 : 0
  );

  //functions

  //clear handler
  const handleClearCompleted = () => {
    setTodoList(todoList.filter((todo) => !todo.checked));
  };

  //set status
  const handleEditStatus = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  //edit todo by id
  const handleEditTodo = (id) => {
    setTodoList(
      [...todoList].map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  //toggle all todos checked
  const handleToggleChecked = () => {
    const isAllChecked = todoList.every((todo) => todo.checked);
    setTodoList(
      [...todoList].map((todo) => {
        todo.checked = !isAllChecked;
        return todo;
      })
    );
  };

  // delete todo by id
  const handleDeleteTodo = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
  };

  const handleCreateTodo = (label) => {
    setTodoList([...todoList, { label, id: nextId, checked: false }]);
    setNextId(nextId + 1);
  };

  return (
    <>
      <h1 className="title">todos</h1>
      <div className="app">
        <Form
          onToggleChecked={handleToggleChecked}
          onCreateTodo={handleCreateTodo}
        />
        <TodoList
          currentStatus={currentStatus}
          onDeleteTodo={handleDeleteTodo}
          todoList={todoList}
          onEditTodo={handleEditTodo}
        />

        {todoList.length > 0 ? (
          <Filters
            currentStatus={currentStatus}
            onSetStatus={handleEditStatus}
            todoList={todoList}
            onClearCompleted={handleClearCompleted}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default App;
