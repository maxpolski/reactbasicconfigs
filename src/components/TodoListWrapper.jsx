import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class TodoListWrapper extends Component {
  render() {
    return (
      <div>
      Hi
      {/*
        <TodoList
          todos={this.props.todos}
          toggleCompletion={this.props.toggleCompletion}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
        <TodoInput addTodo={this.props.addTodo} />
  */}
      </div>
    );
  }
}

// TodoListWrapper.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     caption: PropTypes.string.isRequired,
//     isCompleted: PropTypes.bool.isRequired,
//   })).isRequired,
//   addTodo: PropTypes.func.isRequired,
//   toggleCompletion: PropTypes.func.isRequired,
//   deleteTodo: PropTypes.func.isRequired,
//   editTodo: PropTypes.func.isRequired,
// };
