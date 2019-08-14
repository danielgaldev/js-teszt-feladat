import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, checkTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList';


class TodoListContainer extends Component {
  render() {
    return (
      <TodoList
        todos={this.props.todos}
        checkTodo={this.props.checkTodo}
        deleteTodo={this.props.deleteTodo} />
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, { addTodo, checkTodo, deleteTodo })(TodoListContainer)
