import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, checkTodo, deleteTodo, moveTodo, closeUndoBox } from '../actions'
import TodoList from '../components/TodoList';


class TodoListContainer extends Component {
  render() {
    return (
      <TodoList
        todos={this.props.todos}
        checkTodo={this.props.checkTodo}
        deleteTodo={this.props.deleteTodo}
        moveTodo={this.props.moveTodo}
        closeUndoBox={this.props.closeUndoBox} />
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoApp.todos
})

export default connect(mapStateToProps, { addTodo, checkTodo, deleteTodo, moveTodo, closeUndoBox })(TodoListContainer)
