export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'

export const addTodo = todo => (
  { type: ADD_TODO, todo }
)

export const checkTodo = index => (
  { type: CHECK_TODO, index }
)
