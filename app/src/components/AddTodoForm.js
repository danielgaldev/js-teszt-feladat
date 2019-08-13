import React, { Component, createRef } from 'react'
import { Form, FormField, Button, Drop, Box, Grid, Calendar } from 'grommet'


class CalendarDrop extends Component {
  targetRef = createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
        <Box align="center" justify="center">
          <Box
            background="dark-3"
            pad="medium"
            align="center"
            justify="start"
            ref={this.targetRef}
          >
            Box
          </Box>
          {this.targetRef.current && (
            <Drop
              align={{ top: "bottom" }}
              target={this.targetRef.current}
            >
              <Calendar size='small'/>
            </Drop>
          )}
        </Box>
    );
  }
}

const AddTodoForm = (props) => (
  <Form onSubmit={({ value }) => console.log(value)}>
    <Box round='xsmall' width='large' pad='xsmall' border={{ size: 'xsmall', color: 'brand' }}>
      <Grid fill gap='xsmall' columns={['flex', 'auto', 'auto']}>
        <FormField name='text' required />
        <CalendarDrop />
        <Button type='submit' primary label='Add' />
      </Grid>
    </Box>
  </Form>
)

export default AddTodoForm
