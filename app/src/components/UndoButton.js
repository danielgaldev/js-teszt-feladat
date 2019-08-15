import React from 'react'
import { Box, Button, Layer, Text } from 'grommet'

const UndoButton = (props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Box justify='center'>
      <Button onClick={() => setOpen(true)} primary label='Undo' />
      {open && (
        <Layer position='bottom'
          onClickOutside={() => setOpen(false)}
          onEsc={() => setOpen(false)}
          modal={false}
          margin='small'>
          <Box background='dark-2' direction='row' gap='medium' round='small' pad='small'>
            <Text>Event deleted.</Text>
            <Button label='Undo' plain onClick={() => console.log('undo')} />
          </Box>
        </Layer>)
      }
    </Box>
  )
}

export default UndoButton
