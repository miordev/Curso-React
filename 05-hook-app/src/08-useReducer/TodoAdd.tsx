import { useState } from 'react';
import { useForm } from '../hooks';

import { Todo } from '../interfaces/Todo';

type TodoAddProps = {
  onNewTodo: (todo: Todo) => void;
};

export const TodoAdd: React.FC<TodoAddProps> = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (description.trim().length > 0) {
      const newTodo = {
        id: new Date().getTime(),
        description,
        done: false,
      };
      onNewTodo(newTodo);
      onResetForm('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What is there to do?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Add
      </button>
    </form>
  );
};
