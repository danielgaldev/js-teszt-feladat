import React from 'react'
import { Box, Text, CheckBox, Button, Grid } from 'grommet'
import { Trash, Up, Down } from 'grommet-icons'
import moment from 'moment'


const TodoItem = (props) => {
  const upArrow = <Button plain
    icon={<Up />}
    key={'up'}
    onClick={() => { props.moveTodo(props.index, 'up') }} />
  const downArrow = <Button plain
    icon={<Down />}
    key={'down'}
    onClick={() => { props.moveTodo(props.index, 'down') }} />
  const arrows = () => {
    switch (props.position) {
      case 'first':
        return [downArrow]
      case 'last':
        return [upArrow]
      default:
        return [upArrow, downArrow]
    }
  }
  return (
    <CheckBox
      checked={props.todo.completed}
      label={
        <Grid fill='horizontal' as='li' columns={['auto', 'flex']} pad='small'>
          <Box direction='row' gap='small' align='center' pad='xsmall'>
            <Text>{props.todo.text}</Text>
            <Text size='xsmall'>
              {moment(props.todo.date).format('YYYY. MMMM D.')}
            </Text>
          </Box>
          <Box direction='row' justify='end' gap='small'>
            {arrows().map(arrow => arrow)}
            <Button plain icon={<Trash />} onClick={() => { props.deleteTodo(props.index) }} />
          </Box>
        </Grid>
      }
      onChange={event => {
        props.checkTodo(props.index);
      }}
    />
  )
}

export default TodoItem
