import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { connect } from 'react-redux';
import TodoListWrapper from './TodoListWrapper';
import * as todoActions from '../actions/todo';

const App = (props) => (
  <BrowserRouter history={createHistory()}>
    <Switch>
      <Route exac path="/" component={TodoListWrapper} />
      <Route path="completed" component={TodoListWrapper} />
      <Route path="incompleted" component={TodoListWrapper} />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

// site.com/completed/unassigned

/*
  <Router>
    <Switch>
      <Route exac path='/' component={} />
      <Route path='/all' />
      <Route path='/completed'>
        <Switch>
          <Route path='/' />
          <Route path='/unassigned' />
        </Switch>
      </Route>
    </Switch>
  </Router>
*/

const mapDispatchToProps = dispatch => ({
  addTodo: caption => dispatch(todoActions.addTodo(caption)),
  toggleCompletion: todoId => dispatch(todoActions.toggleCompletion(todoId)),
  deleteTodo: todoId => dispatch(todoActions.deleteTodo(todoId)),
  editTodo: (todoId, newCaption) =>
    dispatch(todoActions.editTodo(todoId, newCaption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
