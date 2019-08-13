import React from 'react'
import { Box, Text, CheckBox } from 'grommet'
import moment from 'moment'


const TodoItem = (props) => (
  <CheckBox
    checked={props.todo.completed}
    label={<Box as='li' direction='row' pad='xsmall' gap='small' align='center'>
      <Text>{props.todo.text}</Text>
      <Text size='xsmall'>{moment(props.todo.date).format('YYYY. MMMM DD, h:mm')}</Text>
    </Box>}
    onChange={event => {
      props.checkTodo(props.index);
    }}
  />
)

export default TodoItem
