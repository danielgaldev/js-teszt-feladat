export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'

export const addTodo = text => (
  { type: ADD_TODO, text }
)

export const checkTodo = index => (
  { type: CHECK_TODO, index }
)
