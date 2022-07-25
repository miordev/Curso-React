export const example = 1

const initialState = [{
  id: 1,
  todo: 'search the soul rock',
  done: false,
}];

const todoReducer = (state = initialState, action: any = {}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }

  return state;
};

let todoList = todoReducer();

const newTodo = {
  id: 2,
  todo: 'search the power rock',
  done: false,
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
};

todoList = todoReducer(todoList, addTodoAction);

console.log({state: todoList});
