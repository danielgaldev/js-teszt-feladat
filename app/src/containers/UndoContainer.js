import React, { Component } from 'react'
import { connect } from 'react-redux'

import { undoDelete, closeUndoBox } from '../actions'
import Undo from '../components/Undo'

class UndoContainer extends Component {
  render() {
    return (
      <div>
        {this.props.open && (
          <Undo
            undoDelete={this.props.undoDelete}
            closeUndoBox={this.props.closeUndoBox} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.todoApp.undoBoxOpen
})

export default connect(mapStateToProps, { undoDelete, closeUndoBox })(UndoContainer)
