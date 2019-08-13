import React, { Component } from 'react'
import { Box, Text } from 'grommet'


const TodoList = (props) => (
  <Box fill align='center' justify='center'>
    <Box as='ul'
      border={{ size: 'xsmall', color: 'brand' }}
      round='xsmall'
      width='large'
      gap='small'
      direction='column'>
      {props.todos.map((todo, index) => (
        <Box as='li' direction='row' pad='small' gap='small'>
          <Text>{todo.text}</Text>
        </Box>
      ))}
    </Box>
  </Box>
)

export default TodoList
