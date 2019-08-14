import React from 'react'
import { Form, FormField, Button, Box, TextInput } from 'grommet'
import { Add } from 'grommet-icons'
import moment from 'moment'

const AddTodoForm = (props) => (
  <Box align='center' width='large'>
    <Form style={{ width: '100%' }}
      onSubmit={({ value }) => props.addTodo(value)}>
      <Box
        direction='row-responsive'
        round='xsmall'
        fill='horizontal'
        pad='xsmall' gap='xsmall'
        border={{ size: 'xsmall', color: 'brand' }}>
        <Box fill='horizontal'>
          <FormField
            name='text'
            required
            component={TextInput}
            placeholder='Add task'
            plain />
        </Box>
        <Box direction='row' justify='between' gap='small'>
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
        </Box>
      </Box>
    </Form>
  </Box>
)

export default AddTodoForm
