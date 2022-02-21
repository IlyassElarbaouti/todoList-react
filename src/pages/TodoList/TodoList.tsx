import React, { useState, useCallback, useEffect } from 'react';
import './TodoList.css';
import TodoItem from '../../types/TodoItem';
import {
  fetchGetAllTodos,
  fetchEditTodo,
  fetchClearCompleted,
  fetchToggleChecked,
  fetchDeleteTodo,
  fetchCreateTodo,
} from '../../api/todos';
import { fetchLogout, fetchRefresh } from '../../api/users';
import Header from '../../components/TodoList/Header/Header';
import Todos from '../../components/TodoList/Todos/Todos';
import Filters from '../../components/TodoList/Filters/Filters';
import Form from '../../components/TodoList/Form/Form';

const TodoList = () => {
  const [currentStatus, setCurrentStatus] = useState('all');
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    fetchGetAllTodos()
      .then((res: any) => {
        setTodoList(res.data.todos);
        setNextId(res.data.nextId);
      })
      .catch((e) => {
        const { status } = JSON.parse(JSON.stringify(e));
        if (status === 401) {
          fetchRefresh(fetchGetAllTodos);
        } else {
          alert('server error');
        }
      });
  }, []);

  const handleEditStatus = useCallback(
    (newStatus: string) => setCurrentStatus(newStatus),
    []
  );

  const editTodo = (newTodo: TodoItem) => {
    fetchEditTodo(newTodo)
      .then((res) =>
        setTodoList(
          todoList.map((todo) => (todo.id === newTodo.id ? res.data : todo))
        )
      )
      .catch((e) => {
        const { status } = JSON.parse(JSON.stringify(e));
        if (status === 401) {
          fetchRefresh(fetchEditTodo);
        } else {
          alert('server error');
        }
      });
  };

  const isAllChecked = todoList.every((todo) => todo.checked);

  const handleClearCompleted = useCallback(() => {
    setTodoList(todoList.filter((todo) => !todo.checked));
    fetchClearCompleted().catch((e) => {
      const { status } = JSON.parse(JSON.stringify(e));
      if (status === 401) {
        fetchRefresh(fetchClearCompleted);
      } else {
        alert('server error');
      }
    });
  }, [todoList]);

  const handleToggleChecked = useCallback(() => {
    fetchToggleChecked()
      .then(() => {
        setTodoList(
          todoList.map((todo) => ({ ...todo, checked: !isAllChecked }))
        );
      })
      .catch((e) => {
        const { status } = JSON.parse(JSON.stringify(e));
        if (status === 401) {
          fetchRefresh(fetchToggleChecked);
        } else {
          alert('server error');
        }
      });
  }, [todoList, isAllChecked]);

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    fetchDeleteTodo(id).catch((e) => {
      const { status } = JSON.parse(JSON.stringify(e));
      if (status === 401) {
        fetchRefresh(() => fetchDeleteTodo(id));
      } else {
        alert('server error');
      }
    });
  };

  const handleCreateTodo = useCallback(
    (label: string) => {
      setTodoList([...todoList, { label, id: nextId, checked: false }]);
      setNextId(nextId + 1);

      fetchCreateTodo(label).catch((e) => {
        const { status } = JSON.parse(JSON.stringify(e));
        if (status === 401) {
          fetchRefresh(fetchCreateTodo);
        } else {
          alert('server error');
        }
      });
    },

    [todoList, nextId]
  );

  const handleLogout = () => {
    fetchLogout().then(() => {
      localStorage.clear();
      window.location.reload();
    });
  };

  return (
    <>
      <Header logout={handleLogout} username="test" />
      <h1 className="title"> TODOS</h1>
      <div className="todoList">
        <Form
          onToggleChecked={handleToggleChecked}
          onCreateTodo={handleCreateTodo}
          isAllChecked={isAllChecked}
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
  );
};

export default TodoList;
