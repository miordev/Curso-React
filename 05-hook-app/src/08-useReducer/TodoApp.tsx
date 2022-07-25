import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import { useTodo } from '../hooks';

export const TodoApp = () => {
  const { todoList, todoListCount, pendingTodoListCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
    useTodo();

  return (
    <>
      <h1>TodoApp: {todoListCount}</h1>
      <small>Pending: {pendingTodoListCount}</small>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todoList={todoList} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
