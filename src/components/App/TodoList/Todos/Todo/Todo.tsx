import * as React from 'react'
import { FormEvent, ChangeEvent, MouseEventHandler } from 'react'
import { useState } from 'react'
import { TodoItem } from '../../../../../types/TodoItem'
import './Todo.css'

interface Props {
    todo: TodoItem
    onDeleteTodo: (id: number) => void
    onEditTodo: (id: number, label?: string) => void
}

const Todo = ({ todo, onDeleteTodo, onEditTodo }: Props) => {
    const [label, setLabel] = useState(todo.label)
    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const handleDoubleClick = () => {
        setShowInput(!showInput)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
      setInputValue(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (inputValue.trim() === '') {
            setInputValue('')
            setShowInput(!showInput)
            return
        }

      setInputValue('')
        setLabel(inputValue)
        onEditTodo(todo.id, inputValue)
        setShowInput(!showInput)
    }

    const handleBlur = () => {
        setShowInput(false)
      setInputValue('')
    }

    return (
        <div onDoubleClick={handleDoubleClick} className="todo">
            <input
                onChange={() => {}}
                onDoubleClick={(e) => e.stopPropagation()}
                checked={todo.checked}
                onClick={() => onEditTodo(todo.id)}
                className="checkbox"
                type="checkbox"
            />
            {showInput ? (
                <form className="todo__form" onSubmit={handleSubmit}>
                    <input
                        onBlur={handleBlur}
                        className="todo__input"
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                    ></input>
                </form>
            ) : (
                <h2 className="label">{label}</h2>
            )}
            <button onClick={() => onDeleteTodo(todo.id)} className="closeBtn">
                x
            </button>
        </div>
    )
}

export default Todo
