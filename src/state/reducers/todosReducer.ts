/* eslint-disable default-param-last */
import TodoItem from '../../types/TodoItem';

interface Props {
  type: String;
  payload: any;
}

const reducer = (state: Array<TodoItem> = [], action: Props) => {
  switch (action.type) {
    case 'createTodo':
      return state.concat(action.payload);

    case 'setAllTodos':
      return state.concat(action.payload);

    case 'editTodo':
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case 'clearCompleted':
      return state.filter((todo) => !todo.checked);

    case 'toggleChecked':
      return state.map((todo) => ({ ...todo, checked: !action.payload }));

    case 'deleteTodo':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
