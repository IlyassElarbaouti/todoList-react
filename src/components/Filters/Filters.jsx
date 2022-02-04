import React from 'react';
import './Filters.css'

const Filters = ({
  todoList,
  onSetStatus,
  currentStatus,
  onClearCompleted,
}) => {
  
  //get active todos
  const getActiveTodos = () => {
    return todoList.filter((todo) => !todo.checked);
  };

  //get completed todos
  const getCompletedTodos = () => {
    return todoList.filter((todo) => todo.checked);
  };
  return (
    <div className="filters__container">
      <div className="filters">
        <span className="count">{getActiveTodos().length} items left</span>
        <div className="filter__btns">
          <button
            onClick={() => onSetStatus('all')}
            className={`all btn ${currentStatus === 'all' ? 'border' : ''}`}
          >
            All
          </button>

          <button
            onClick={() => onSetStatus('active')}
            className={`active btn ${
              currentStatus === 'active' ? 'border' : ''
            }`}
          >
            active
          </button>

          <button
            onClick={() => onSetStatus('completed')}
            className={`completed btn ${
              currentStatus === 'completed' ? 'border' : ''
            }`}
          >
            completed
          </button>
        </div>
        {getCompletedTodos().length > 0 ? (
          <button onClick={onClearCompleted} className="delete-complete btn">
            clear completed
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="overlays">
        <div className="overlay1 overlay"></div>
        <div className="overlay2 overlay"></div>
      </div>
    </div>
  );
};

export default Filters;
