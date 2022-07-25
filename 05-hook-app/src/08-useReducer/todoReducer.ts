import { Todo } from '../interfaces/Todo';
export const todoReducer = (initialState: any, action: any) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Delete Todo':
      return initialState.filter((todo: Todo) => todo.id !== action.payload);

    case '[TODO] Toggle Todo':
      return initialState.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
  
    default:
      return initialState;
  }
}