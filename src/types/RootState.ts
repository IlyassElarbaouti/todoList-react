import TodoItem from './TodoItem';

interface RootState {
  todos: Array<TodoItem>;
  nextId: number;
  currentStatus: string;
}

export default RootState;
