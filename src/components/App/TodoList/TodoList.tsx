import * as React from 'react'
import { useState, useCallback, useEffect } from 'react'

import Filters from './Filters/Filters'
import Form from './Form/Form'
import Todos from './Todos/Todos'
import './TodoList.css'
import { TodoItem } from '../../../types/TodoItem'
import axios from 'axios'
import {
  apiGetAllTodos,
  apiEditTodo,
  apiClearCompleted,
  apiToggleChecked,
  apiDeleteTodo,
  apiCreateTodo,
} from '../../../apiService/todosApiService'
import Header from './Header/Header'
import { apiLogout } from '../../../apiService/usersApiService'

const TodoList = () => {
  useEffect(() => {
    apiGetAllTodos()
      .then((res: any) => {
        setTodoList(res.data.todos)
        setNextId(res.data.nextId)
      })
      .catch((e) => {
        const status = JSON.parse(JSON.stringify(e)).status
        if (status === 401) {
          console.log(status)
          const response = axios
            .post('http://localhost:9000/refresh', {
              refreshToken: localStorage.getItem('refreshToken'),
            })
            .then(() => {
              console.log(response)
            })
        }
      })
  }, [])

  const [currentStatus, setCurrentStatus] = useState('all')
  const [todoList, setTodoList] = useState([])
  console.log(todoList)
  const [nextId, setNextId] = useState(0)

  const handleEditStatus = useCallback(
    (newStatus: string) => setCurrentStatus(newStatus),
    []
  )

  const editTodo = (newTodo: TodoItem) => {
    apiEditTodo(newTodo).then((res) =>
      setTodoList(
        todoList.map((todo) => (todo.id === newTodo.id ? res.data : todo))
      )
    )
  }

  const isAllChecked = todoList.every((todo) => todo.checked)

  const handleClearCompleted = useCallback(() => {
    setTodoList(todoList.filter((todo) => !todo.checked))
    apiClearCompleted()
  }, [todoList])

  const handleToggleChecked = useCallback(() => {
    apiToggleChecked()
      .then(() => {
        setTodoList(
          todoList.map((todo) => ({ ...todo, checked: !isAllChecked }))
        )
      })
      .catch((e) => console.log(e))
  }, [todoList, isAllChecked])

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
    apiDeleteTodo(id).catch((e) => alert(e))
  }

  const handleCreateTodo = useCallback(
    (label: string) => {
      setTodoList([...todoList, { label, id: nextId, checked: false }])
      setNextId(nextId + 1)

      apiCreateTodo(label).catch((e) => alert(e))
    },

    [todoList, nextId]
  )

  const handleLogout = () => {
    apiLogout().then(() =>{
      localStorage.clear()
      location.reload()
  })
  }

  return (
    <>
      <Header logout={handleLogout} username="test" />
      <h1 className="title"> TODOS</h1>
      <div className="todoList">
        <Form
          onToggleChecked={handleToggleChecked}
          onCreateTodo={handleCreateTodo}
          isAllChecked={isAllChecked}
        />
        <Todos
          onEditTodo={editTodo}
          currentStatus={currentStatus}
          onDeleteTodo={handleDeleteTodo}
          todoList={todoList}
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
  )
}

export default TodoList
