import React from 'react'
import { Box, Text, CheckBox, Button, Grid } from 'grommet'
import { Trash } from 'grommet-icons'
import moment from 'moment'


const TodoItem = (props) => (
  <CheckBox
    checked={props.todo.completed}
    label={<Grid fill='horizontal' as='li' columns={['auto', 'flex']} pad='small'>
      <Box direction='row' gap='small' align='center' pad='xsmall'>
        <Text>{props.todo.text}</Text>
        <Text size='xsmall'>{moment(props.todo.date).format('YYYY. MMMM D.')}</Text>
      </Box>
      <Box direction='row' justify='end'>
        <Button plain icon={<Trash />} onClick={() => {props.deleteTodo(props.index)}} />
      </Box>
    </Grid>}
    onChange={event => {
      props.checkTodo(props.index);
    }}
  />
)

export default TodoItem
