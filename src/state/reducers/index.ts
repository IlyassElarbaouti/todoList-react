import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import nextIdReducer from './idReducer';
import statusReducer from './currentStatus';
import authReducer from './authentication';

const reducers = combineReducers({
  todos: todosReducer,
  nextId: nextIdReducer,
  currentStatus: statusReducer,
  isAuth: authReducer,
});

export default reducers;
