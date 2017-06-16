import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = props => (
  <ul>
    {
      props.todos.map(todo => (
        <Todo
          {...todo}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
          key={todo.id}
          toggleCompletion={props.toggleCompletion}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  })).isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};

export default TodoList;
