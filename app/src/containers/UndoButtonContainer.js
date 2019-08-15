import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Text, Button, Layer } from 'grommet'
import { Close } from 'grommet-icons'

import { undoDelete, closeUndoBox } from '../actions'

class UndoButtonContainer extends Component {
  render() {
    return (
      <Box>
        {this.props.open && (
          <Layer position='bottom'
            modal={false}
            responsive={false}
            margin='small'>
            <Box background='dark-2' direction='row' gap='medium' round='small' pad='small' align='center'>
              <Text>Event deleted.</Text>
              <Button label='Undo' primary onClick={this.props.undoDelete} />
              <Button plain icon={<Close />} onClick={this.props.closeUndoBox} />
            </Box>
          </Layer>
        )}
      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.todoApp.undoBoxOpen
})

export default connect(mapStateToProps, { undoDelete, closeUndoBox })(UndoButtonContainer)
