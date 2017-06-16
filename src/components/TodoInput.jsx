import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  state = {
    value: '',
  }

  // event:  { target: { value: '' } }
  onChangeHandler = ({ target: { value } }) => this.setState({ value });

  // event: { keyCode: '<CodeOfTheKey>' }
  onKeyDownHandler = ({ keyCode }) => {
    if (keyCode === 13) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.onChangeHandler}
        onKeyDown={this.onKeyDownHandler}
      />
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
