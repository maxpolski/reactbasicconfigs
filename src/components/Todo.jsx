import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  state = {
    isEditing: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isEditing && this.state.isEditing) {
      this.editInput.focus();
    }
  }

  handleToggle = (event) => {
    event.preventDefault();
    this.props.toggleCompletion(this.props.id);
  }

  handleDeleteClick = () =>
    this.props.deleteTodo(this.props.id);

  handleEditClick = () =>
    this.setState({ isEditing: true });

  confirmEditing = (newCaption) => {
    this.props.editTodo({
      todoId: this.props.id,
      newCaption,
    });
    this.setState({ isEditing: false });
  }

  handleBlur = ({ target: { value } }) => {
    this.confirmEditing(value);
  }

  handleKeyDown = ({ keyCode, target: { value } }) => {
    if (keyCode === 13) {
      this.confirmEditing(value);
    }
  }

  renderInProgress = () =>
    <span>{this.props.caption}</span>

  renderComleted = () =>
    <strike>{this.props.caption}</strike>

  renderNormalTodo() {
    return (
      <div>
        <a onClick={this.handleToggle} href>
          {
            this.props.isCompleted ?
              this.renderComleted()
            :
              this.renderInProgress()
          }
        </a>
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.handleDeleteClick}>X</button>
      </div>
    );
  }

  renderEditingTodo() {
    return (
      <input
        defaultValue={this.props.caption}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        ref={node => this.editInput = node}
      />
    );
  }

  render() {
    return (
      <li>
        {
          this.state.isEditing ?
            this.renderEditingTodo()
          :
            this.renderNormalTodo()
        }
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
