import * as React from 'react'
import { useMemo } from 'react'
import Todo from './Todo/Todo'
import './Todos.css'
import TodoItem from '../../../types/TodoItem'

interface Props {
  currentStatus: string
  todoList: Array<TodoItem>
  onDeleteTodo: (id: number) => void
  onEditTodo: (todo: TodoItem) => void
}

const Todos = ({
  currentStatus,
  todoList,
  onDeleteTodo,
  onEditTodo,
}: Props) => {
  const getListToRender = () => {
    if (currentStatus === 'all') {
      return todoList
    } else if (currentStatus === 'completed') {
      return todoList.filter((todo) => todo.checked)
    } else {
      return todoList.filter((todo) => !todo.checked)
    }
  }

  return (
    <div className="todos">
      {getListToRender().map((todo) => {
        return (
          <Todo
            onEditTodo={onEditTodo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            todo={todo}
          />
        )
      })}
    </div>
  )
}

export default Todos
