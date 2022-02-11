import * as React from 'react'
import { useState } from 'react'
import todos_Mock from '../../../constants/todos_Mock'
import Filters from './Filters/Filters'
import Form from './Form/Form'
import Todos from './Todos/Todos'
import './TodoList.css'

const TodoList = () => {
    const [currentStatus, setCurrentStatus] = useState('all')
    const [todoList, setTodoList] = useState(todos_Mock)
    const [nextId, setNextId] = useState(
        todoList.length !== 0
            ? Math.max(...todoList.map((todo) => todo.id)) + 1
            : 0
    )

    const handleClearCompleted = () => {
        setTodoList(todoList.filter((todo) => !todo.checked))
    }

    const handleEditStatus = (newStatus: string) => {
        setCurrentStatus(newStatus)
    }

    const editTodo = (id: number, label: string) => {
        if (label) {
            setTodoList(
                [...todoList].map((todo) => {
                    if (todo.id === id) {
                        todo.label = label
                    }
                    return todo
                })
            )
        } else {
            setTodoList(
                [...todoList].map((todo) => {
                    if (todo.id === id) {
                        todo.checked = !todo.checked
                    }
                    return todo
                })
            )
        }
    }

    const handleToggleChecked = () => {
        const isAllChecked = todoList.every((todo) => todo.checked)
        setTodoList(
            [...todoList].map((todo) => {
                todo.checked = !isAllChecked
                return todo
            })
        )
    }

    const handleDeleteTodo = (id: number) => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }

    const handleCreateTodo = (label: string) => {
        setTodoList([...todoList, { label, id: nextId, checked: false }])
        setNextId(nextId + 1)
    }

    return (
        <>
            <div className="todoList">
                <Form
                    onToggleChecked={handleToggleChecked}
                    onCreateTodo={handleCreateTodo}
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
