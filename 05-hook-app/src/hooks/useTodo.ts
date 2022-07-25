import { useEffect, useReducer } from 'react';

import { todoReducer } from '../08-useReducer/todoReducer';
import { Todo } from '../interfaces/Todo';

const init = () => {
  return JSON.parse(localStorage.getItem('todoList')!) || [];
};

export const useTodo = () => {
  const [todoList, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const handleNewTodo = (todo: Todo): void => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id: number): void => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id: number): void => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    };
    dispatch(action);
  };

  const getTodoListCount = (): number => {
    return todoList.length;
  }

  const getPendingTodoListCount = (): number => {
    return todoList.filter((todo: Todo) => !todo.done).length;
  }

  return {
    todoList,
    todoListCount: getTodoListCount(),
    pendingTodoListCount: getPendingTodoListCount(),
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
