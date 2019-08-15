import { combineReducers } from 'redux'
import moment from 'moment'

import { ADD_TODO, CHECK_TODO, DELETE_TODO, MOVE_TODO, UNDO_DELETE, CLOSE_UNDO_BOX } from './actions'

const storage = localStorage.getItem('todoArray')
const INITIAL_STATE = {
  todos: storage ? JSON.parse(storage) : [],
  deletedEntry: null,
  undoBoxOpen: false
}

function todoApp(state = INITIAL_STATE, action) {
  const i = action.index;
  switch (action.type) {
    case ADD_TODO:
      const { text, date } = action.todo;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: text,
            date: date === '' ? null : moment(date, 'YYYY/MM/DD'),
            completed: false
          }
        ]
      }
    case CHECK_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, i),
          { ...state.todos[i], completed: !state.todos[i].completed },
          ...state.todos.slice(i + 1)
        ]
      }
    case DELETE_TODO:
      return {
        undoBoxOpen: true,
        deletedEntry: { todo: state.todos[i], index: i },
        todos: [
          ...state.todos.slice(0, i),
          ...state.todos.slice(i + 1)
        ]
      }
    case UNDO_DELETE:
      return {
        undoBoxOpen: false,
        deletedEntry: null,
        todos: [
          ...state.todos.slice(0, state.deletedEntry.index),
          { ...state.deletedEntry.todo },
          ...state.todos.slice(state.deletedEntry.index)
        ]
      }
    case CLOSE_UNDO_BOX:
      return {
        ...state,
        undoBoxOpen: false
      }
    case MOVE_TODO:
      switch (action.direction) {
        case 'up':
          return {
            ...state,
            todos: [
              ...state.todos.slice(0, i - 1),
              { ...state.todos[i] },
              { ...state.todos[i - 1] },
              ...state.todos.slice(i + 1)
            ]
          }
        case 'down':
          return {
            ...state,
            todos: [
              ...state.todos.slice(0, i),
              { ...state.todos[i + 1] },
              { ...state.todos[i] },
              ...state.todos.slice(i + 2)
            ]
          }
        default:
          return state
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  todoApp
})

export default reducers