import React from 'react'
import { Form, FormField, Button, Box, Grid, TextInput } from 'grommet'
import { Add } from 'grommet-icons'
import moment from 'moment'

const AddTodoForm = (props) => (
  <Form onSubmit={({ value }) => props.addTodo(value)}>
    <Box round='xsmall' width='large' pad='xsmall' border={{ size: 'xsmall', color: 'brand' }}>
      <Grid gap='xsmall' columns={['flex', 'auto', 'auto']}>
        <FormField
          name='text'
          required
          component={TextInput}
          placeholder='Add task'
          plain />
        <FormField
          name='date'
          required
          validate={input => {
            if (!moment(input, 'YYYY/MM/DD', true).isValid())
              return 'Format: YYYY/MM/DD'
          }}
          component={TextInput}
          placeholder='Date'
          value={moment().format('YYYY/MM/DD')}
          plain />
        <Button type='submit' primary icon={<Add />} />
      </Grid>
    </Box>
  </Form>
)

export default AddTodoForm
