import * as React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css'
type Todotypes = {
  id: number,
  label: string,
  checked:boolean
}

interface Props{
  currentStatus: string;
  todoList: Array<Todotypes>;
  onDeleteTodo: (id:number) => void;
  onEditTodo: (id:number) => void;
}

const TodoList = ({ currentStatus, todoList, onDeleteTodo, onEditTodo }:Props) => {
  //get filtered list
  const getListToRender = () => {
    if (currentStatus === 'all') {
      return todoList;
    } else if (currentStatus === 'completed') {
      return todoList.filter((todo) => todo.checked);
    } else {
      return todoList.filter((todo) => !todo.checked);
    }
  };

  return (
    <div className="todos">
      {getListToRender().map((todo) => (
        <Todo
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
