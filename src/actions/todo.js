import { createAction } from 'redux-actions';

import * as constants from '../constants/todo';
import * as todoApiCalls from '../apiCalls/todo';

const gotInitialData = createAction(constants.GOT_INITIAL_DATA);
const addTodoActionCreator = createAction(constants.ADD_TODO);
const toggleCompletionActionCreator = createAction(constants.TOGGLE_COMPLETION);
export const deleteTodo = createAction(constants.DELETE_TODO, todoId => ({ todoId }));
export const editTodo = createAction(constants.EDIT_TODO);

export const getInitialData = dispatch => () => {
  todoApiCalls.getTodos()
    .then(todos => dispatch(gotInitialData(todos)));
};

export const addTodo = dispatch => caption =>
  todoApiCalls.addTodo(caption)
    .then(todo => dispatch(addTodoActionCreator(todo)));

export const toggleCompletion = dispatch => todoId =>
  todoApiCalls.toggleTodo(todoId)
    .then(todo => dispatch(toggleCompletionActionCreator(todo)));
