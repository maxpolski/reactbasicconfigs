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
    case todoConstants.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          caption: action.payload,
          isCompleted: false,
        },
      ];
    case todoConstants.TOGGLE_COMPLETION:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
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
