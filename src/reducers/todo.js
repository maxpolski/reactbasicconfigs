import * as todoConstants from '../constants/todo';

const initialState = [];
/*
  {
    id: NUMBER,
    caption: STRING,
    isCompleted: BOOL,
  }
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.GOT_INITIAL_DATA:
      return action.payload;
    case todoConstants.ADD_TODO:
      return [
        ...state,
        action.payload,
      ];
    case todoConstants.TOGGLE_COMPLETION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }

        return { ...todo };
      });
    case todoConstants.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.todoId);
    case todoConstants.EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            caption: action.payload.newCaption,
          };
        }

        return { ...todo };
      });
    default:
      return state;
  }
};

export const getTodos = state => state.todos;

export const getCompletedTodos = state =>
  state.todos.filter(todo => todo.isCompleted);

export const getInCompletedTodo = state =>
  state.todos.filter(todo => !todo.isCompleted);
