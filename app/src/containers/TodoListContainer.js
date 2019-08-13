import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, checkTodo } from '../actions'
import TodoList from '../components/TodoList';


class TodoListContainer extends Component {
  render() {
    return (
      <TodoList todos={this.props.todos} checkTodo={this.props.checkTodo} />
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, { addTodo, checkTodo })(TodoListContainer)
