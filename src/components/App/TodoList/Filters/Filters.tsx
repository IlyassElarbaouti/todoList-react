import * as React from 'react'
import './Filters.css'
import { TodoItem } from '../../../../types/TodoItem'
import FilterBtn from './FilterBtn/FilterBtn'

interface Props {
    todoList: Array<TodoItem>
    onSetStatus: (status: string) => void
    currentStatus: string
    onClearCompleted: () => void
}

const Filters = ({
    todoList,
    onSetStatus,
    currentStatus,
    onClearCompleted,
}: Props) => {
    const activeTodosCount = todoList.filter((todo) => !todo.checked).length
    const completedTodosExist = todoList.some((todo) => todo.checked)

    return (
        <div className="filters__container">
            <div className="filters">
                <span className="count">{activeTodosCount} items left</span>
                <div className="filter__btns">
                    <FilterBtn
                        onSetStatus={onSetStatus}
                        currentStatus={currentStatus}
                        targetedStatus="all"
                    />
                    <FilterBtn
                        onSetStatus={onSetStatus}
                        currentStatus={currentStatus}
                        targetedStatus="active"
                    />
                    <FilterBtn
                        onSetStatus={onSetStatus}
                        currentStatus={currentStatus}
                        targetedStatus="completed"
                    />
                </div>
                {completedTodosExist ? (
                    <button
                        onClick={onClearCompleted}
                        className="delete-complete btn"
                    >
                        clear completed
                    </button>
                ) : null}
            </div>
            <div className="overlays">
                <div className="overlay1 overlay"></div>
                <div className="overlay2 overlay"></div>
            </div>
        </div>
    )
}

export default Filters
