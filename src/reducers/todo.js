import { handleActions } from 'redux-actions';

import * as todoConstants from '../constants/todo';

const initialState = [];
/*
  {
    id: NUMBER,
    caption: STRING,
    isCompleted: BOOL,
  }
*/

export default handleActions({
  [todoConstants.GOT_INITIAL_DATA]: (state, action) =>
    action.payload,
  [todoConstants.ADD_TODO]: (state, action) =>
    [...state, action.payload],
  [todoConstants.TOGGLE_COMPLETION]: (state, action) =>
    state.map((todo) => {
      if (todo.id === action.payload.id) {
        return action.payload;
      }

      return todo;
    }),
  [todoConstants.DELETE_TODO]: (state, action) =>
    state.filter(todo => todo.id !== action.payload.todoId),
  [todoConstants.EDIT_TODO]: (state, action) =>
    state.map((todo) => {
      if (todo.id === action.payload.todoId) {
        return {
          ...todo,
          caption: action.payload.newCaption,
        };
      }

      return { ...todo };
    }),
}, initialState);

export const getTodos = state => state.todos;

export const getCompletedTodos = state =>
  state.todos.filter(todo => todo.isCompleted);

export const getInCompletedTodo = state =>
  state.todos.filter(todo => !todo.isCompleted);
