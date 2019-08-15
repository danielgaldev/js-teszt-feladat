import React, { Component } from 'react'
import { Box, Heading } from 'grommet'

import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';
import UndoButtonContainer from './containers/UndoButtonContainer';


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
        <UndoButtonContainer />
      </Box>
    );
  }
}

export default App;
