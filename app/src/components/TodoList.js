import React from 'react'
import { Box } from 'grommet'
import TodoItem from './TodoItem';

const getPosition = (index, length) => {
  return (
    index === 0 ? 'first' :
      index === length - 1 ? 'last' :
        length === 1 ? 'only' :
          'middle'
  )
}

const TodoList = (props) => (
  <Box align='center'>
    <Box as='ul'
      border={{ size: 'xsmall', color: 'brand' }}
      round='xsmall'
      width='large'
      pad='small'
      direction='column'
      overflow='visible'>
      {props.todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={index}
          position={getPosition(index, props.todos.length)}
          checkTodo={props.checkTodo}
          deleteTodo={props.deleteTodo}
          moveTodo={props.moveTodo} />
      ))}
    </Box>
  </Box>
)

export default TodoList
