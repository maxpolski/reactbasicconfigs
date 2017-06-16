import * as constants from '../constants/todo';

export const addTodo = caption => ({
  type: constants.ADD_TODO,
  payload: caption,
});

export const toggleCompletion = todoId => ({
  type: constants.TOGGLE_COMPLETION,
  payload: { todoId },
});

export const deleteTodo = todoId => ({
  type: constants.DELETE_TODO,
  payload: { todoId },
});

export const editTodo = (todoId, newCaption) => ({
  type: constants.EDIT_TODO,
  payload: { todoId, newCaption },
});
