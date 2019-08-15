import React, { Component } from 'react'
import { connect } from 'react-redux'

import { undoDelete } from '../actions'
import UndoButton from '../components/UndoButton'

class UndoButtonContainer extends Component {
  render() {
    return (
      <UndoButton undoDelete={this.props.undoDelete} />
    )
  }
}

export default connect(null, { undoDelete })(UndoButtonContainer)
