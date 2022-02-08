import * as React from 'react';
import  { useState } from 'react';
import initialTodos from '../../constants/initialTodos';
import Filters from '../Filters/Filters';
import Form from '../Form/Form';
import Todos from '../Todos/Todos';
import './TodoList.css'


const TodoList = () => {

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
  const handleEditStatus = (newStatus:string) => {
    setCurrentStatus(newStatus);
  };

  //edit todo by id
  const handleToggleTodo = (id:number) => {
    setTodoList(
      todoList.map((todo) => {
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
      todoList.map((todo) => {
        todo.checked = !isAllChecked;
        return todo;
      })
    );
  };

  // delete todo by id
  const handleDeleteTodo = (id:number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleCreateTodo = (label:string) => {
    setTodoList([...todoList, { label, id: nextId, checked: false }]);
    setNextId(nextId + 1);
  };

  return (
    <>

      <div className="todoList">
        <Form
          onToggleChecked={handleToggleChecked}
          onCreateTodo={handleCreateTodo}
        />
        <Todos
          currentStatus={currentStatus}
          onDeleteTodo={handleDeleteTodo}
          todoList={todoList}
          onToggleTodo={handleToggleTodo}
        />

        {todoList.length > 0 ? (
          <Filters
            currentStatus={currentStatus}
            onSetStatus={handleEditStatus}
            todoList={todoList}
            onClearCompleted={handleClearCompleted}
          />
        ) : null}
      </div>
    </>
  );
};

export default TodoList;
