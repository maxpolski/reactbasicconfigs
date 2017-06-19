import * as constants from '../constants/todo';

import * as todoApiCalls from '../apiCalls/todo';

const gotInitialData = todos => ({
  type: constants.GOT_INITIAL_DATA,
  payload: todos,
});

export const getInitialData = dispatch => () => {
  todoApiCalls.getTodos()
    .then(todos => dispatch(gotInitialData(todos)));
};

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
