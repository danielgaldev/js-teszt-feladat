import React from 'react'
import { Box, Text, Button, Layer } from 'grommet'
import { Close } from 'grommet-icons'

const Undo = (props) => {
  return (
    <Layer position='bottom'
      modal={false}
      responsive={false}
      margin='small'>
      <Box background='dark-2' direction='row' gap='medium' round='small' pad='small' align='center'>
        <Text>Event deleted.</Text>
        <Button label='Undo' primary onClick={props.undoDelete} />
        <Button plain icon={<Close />} onClick={props.closeUndoBox} />
      </Box>
    </Layer>
  )
}

export default Undo

