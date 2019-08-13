import React from 'react'
import { Box } from 'grommet'
import TodoItem from './TodoItem';


const TodoList = (props) => (
  <Box fill align='center' justify='center'>
    <Box as='ul'
      border={{ size: 'xsmall', color: 'brand' }}
      round='xsmall'
      width='large'
      pad = 'small'
      direction='column'>
      {props.todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} checkTodo={props.checkTodo} />
      ))}
    </Box>
  </Box>
)

export default TodoList
