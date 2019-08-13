import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'


class AddTodoContainer extends Component {
  render() {
    return (
      <AddTodoForm addTodo={this.props.addTodo} />
    )
  }
}

export default connect(null, { addTodo })(AddTodoContainer)
