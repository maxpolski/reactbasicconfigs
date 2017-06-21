import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../TodoList';

const props = {
  todos: [{
    id: 123,
    caption: 'test',
    isCompleted: false,
  }, {
    id: 1234,
    caption: 'test1',
    isCompleted: true,
  }],
  deleteTodo: () => {},
  toggleCompletion: () => {},
  editTodo: () => {},
};

let todoListComponent;

beforeEach(() => {
  todoListComponent = shallow(<TodoList {...props} />);
});

it('should render without error', () => {
  expect(shallow(<TodoList {...props} />).exists()).toBe(true);
});

it('should render Todo components due to amount of the todos', () => {
  expect(todoListComponent.find('Todo').length).toBe(2);
});

it('should pass correct params to the Todo component', () => {
  const expectedProps = {
    ...props.todos[0],
    deleteTodo: () => {},
    toggleCompletion: () => {},
    editTodo: () => {},
  };

  expect(todoListComponent.find('Todo').nodes[0].props).toEqual({
    caption: expectedProps.caption,
    isCompleted: expectedProps.isCompleted,
    id: expectedProps.id,
    deleteTodo: expect.any(Function),
    editTodo: expect.any(Function),
    toggleCompletion: expect.any(Function),
  });
});
