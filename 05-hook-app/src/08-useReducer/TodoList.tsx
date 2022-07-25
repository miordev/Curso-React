import { TodoItem } from './TodoItem';

import { Todo } from '../interfaces/Todo';

type TodoListProps = {
  todoList: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todoList, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
