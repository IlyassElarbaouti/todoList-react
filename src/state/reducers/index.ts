import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import nextIdReducer from './idReducer';
import statusReducer from './currentStatus';

const reducers = combineReducers({
  todos: todosReducer,
  nextId: nextIdReducer,
  currentStatus: statusReducer,
});

export default reducers;
