export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const MOVE_TODO = 'MOVE_TODO'
export const UNDO_DELETE = 'UNDO_DELETE'
export const CLOSE_UNDO_BOX = 'CLOSE_UNDO_BOX'

export const addTodo = todo => (
  { type: ADD_TODO, todo }
)

export const checkTodo = index => (
  { type: CHECK_TODO, index }
)

export const deleteTodo = index => (
  { type: DELETE_TODO, index }
)

export const moveTodo = (index, direction) => (
  { type: MOVE_TODO, index, direction }
)

export const undoDelete = () => (
  { type: UNDO_DELETE }
)

export const closeUndoBox = () => (
  { type: CLOSE_UNDO_BOX }
)