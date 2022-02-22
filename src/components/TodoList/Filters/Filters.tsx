import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../../state/actions/todos';
import allStatus from '../../../constants/allStatus';
import './Filters.css';
import TodoItem from '../../../types/TodoItem';
import FilterBtn from './FilterBtn/FilterBtn';
import { fetchClearCompleted } from '../../../api/todos';
import statusActions from '../../../state/actions/status';
import RootState from '../../../types/RootState';

const Filters = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state: RootState) => state.currentStatus);
  const todoList: Array<TodoItem> = useSelector(
    (state: RootState) => state.todos
  );

  const activeTodosCount = todoList.filter((todo) => !todo.checked).length;
  const completedTodosExist = todoList.some((todo) => todo.checked);

  const handleEditStatus = useCallback((newStatus: string) => {
    dispatch(statusActions.setStatus(newStatus));
  }, []);

  const handleClearCompleted = useCallback(() => {
    fetchClearCompleted()
      .then(() => {
        dispatch(todosActions.clearCompleted());
      })
      .catch((error) => {
        console.error('Clear Completed', error);
      });
  }, []);

  return (
    <div className="filters__container">
      <div className="filters">
        <span className="count">{activeTodosCount} items left</span>
        <div className="filter__btns">
          {allStatus.map((status) => (
            <FilterBtn
              key={allStatus.indexOf(status)}
              onSetStatus={handleEditStatus}
              currentStatus={currentStatus}
              statusName={status.name}
              statusValue={status.value}
            />
          ))}
        </div>
        {completedTodosExist ? (
          <button
            onClick={handleClearCompleted}
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
  );
};

export default React.memo(Filters);
