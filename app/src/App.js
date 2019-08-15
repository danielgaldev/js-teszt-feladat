import React, { Component } from 'react'
import { Box, Heading } from 'grommet'

import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';
import UndoContainer from './containers/UndoContainer';


class App extends Component {
  render() {
    return (
      <Box direction='column'
        align='center'
        pad='medium'
        gap='medium'>
        <Heading>TodoApp</Heading>
        <AddTodoContainer />
        <TodoListContainer />
        <UndoContainer />
      </Box>
    );
  }
}

export default App;
