import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import TodoList from '../components/TodoList';


class TodoListContainer extends Component {
  render() {
    return (
      <TodoList todos={this.props.todos} />
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, { addTodo })(TodoListContainer)
