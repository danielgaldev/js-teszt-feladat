import React from 'react'
import { Box, Button } from 'grommet'

const UndoButton = (props) => {
  return (
    <Box justify='center'>
      <Button onClick={props.undoDelete} primary label='Undo' />
    </Box>
  )
}

export default UndoButton
