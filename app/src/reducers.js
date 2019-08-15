import { combineReducers } from 'redux'
import moment from 'moment'

import { ADD_TODO, CHECK_TODO, DELETE_TODO, MOVE_TODO, UNDO_DELETE } from './actions'

const storage = localStorage.getItem('todoArray')
const INITIAL_STATE = {
  todos: storage ? JSON.parse(storage) : [],
  todosBeforeDelete: null
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
            date: moment(date, 'YYYY/MM/DD'),
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
        todosBeforeDelete: [...state.todos],
        todos: [
          ...state.todos.slice(0, i),
          ...state.todos.slice(i + 1)
        ]
      }
    case UNDO_DELETE:
      return {
        todosBeforeDelete: null,
        todos: state.todosBeforeDelete.slice(0)
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