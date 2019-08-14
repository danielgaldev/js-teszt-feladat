import React from 'react'
import { Box } from 'grommet'
import TodoItem from './TodoItem';


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
          position={
            index === 0 ? 'first' :
            index === props.todos.length - 1 ? 'last' :
            'middle'
          }
          checkTodo={props.checkTodo}
          deleteTodo={props.deleteTodo}
          moveTodo={props.moveTodo} />
      ))}
    </Box>
  </Box>
)

export default TodoList
