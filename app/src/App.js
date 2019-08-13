import React, { Component } from 'react'
import { Box, Heading } from 'grommet'

import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';


class App extends Component {
  render() {
    return (
      <Box direction='column' fill align='center'>
        <Heading>TodoApp</Heading>
        <AddTodoContainer />
        <TodoListContainer />
      </Box>
    );
  }
}

export default App;
