import TodoItem from '../../types/TodoItem';

const setAllTodos = (todos: Array<TodoItem>) => {
  return {
    type: 'setAllTodos',
    payload: todos,
  };
};

const createTodo = (todo: TodoItem) => {
  return {
    type: 'createTodo',
    payload: todo,
  };
};

const editTodo = (todo: TodoItem) => {
  return {
    type: 'editTodo',
    payload: todo,
  };
};

const clearCompleted = () => {
  return {
    type: 'clearCompleted',
  };
};

const toggleChecked = (isAllChecked: boolean) => {
  return {
    type: 'toggleChecked',
    payload: !isAllChecked,
  };
};

const deleteTodo = (id: number) => {
  return {
    type: 'deleteTodo',
    payload: id,
  };
};

export default {
  setAllTodos,
  createTodo,
  toggleChecked,
  deleteTodo,
  editTodo,
  clearCompleted,
};
