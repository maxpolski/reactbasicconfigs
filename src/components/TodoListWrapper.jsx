import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as todoActions from '../actions/todo';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import * as todoGetters from '../reducers/todo';

class TodoListWrapper extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.props.todos}
          toggleCompletion={this.props.toggleCompletion}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
        <TodoInput addTodo={this.props.addTodo} />
        <div>
          <Link to="/">All</Link>
          {' '}
          <Link to="/completed">Completed</Link>
          {' '}
          <Link to="/incompleted">Incompleted</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let todos = [];
  switch (ownProps.match.params.type) {
    case undefined:
      todos = todoGetters.getTodos(state);
      break;
    case 'completed':
      todos = todoGetters.getCompletedTodos(state);
      break;
    case 'incompleted':
      todos = todoGetters.getInCompletedTodo(state);
      break;
    default:
      todos = [];
  }

  return { todos };
};

const mapDispatchToProps = dispatch => ({
  getInitialData: todoActions.getInitialData(dispatch),
  addTodo: todoActions.addTodo(dispatch),
  toggleCompletion: todoActions.toggleCompletion(dispatch),
  deleteTodo: todoId => dispatch(todoActions.deleteTodo(todoId)),
  editTodo: (todoId, newCaption) =>
    dispatch(todoActions.editTodo(todoId, newCaption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);

TodoListWrapper.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  })).isRequired,
  getInitialData: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
