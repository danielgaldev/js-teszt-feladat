import { combineReducers } from 'redux'
import moment from 'moment'

import { ADD_TODO, CHECK_TODO, DELETE_TODO, MOVE_TODO } from './actions'

const storage = localStorage.getItem('todoArray')
const INITIAL_TODOS = storage ? JSON.parse(storage) : []

function todos(state = INITIAL_TODOS, action) {
  const i = action.index;
  switch (action.type) {
    case ADD_TODO:
      const { text, date } = action.todo;
      return [
        ...state,
        {
          text: text,
          date: moment(date, 'YYYY/MM/DD'),
          completed: false
        }
      ]
    case CHECK_TODO:
      return [
        ...state.slice(0, i),
        { ...state[i], completed: !state[i].completed },
        ...state.slice(i + 1)
      ]
    case DELETE_TODO:
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    case MOVE_TODO:
      switch (action.direction) {
        case 'up':
          return [
            ...state.slice(0, i - 1),
            { ...state[i] },
            { ...state[i - 1] },
            ...state.slice(i + 1)
          ]
        case 'down':
          return [
            ...state.slice(0, i),
            { ...state[i + 1] },
            { ...state[i] },
            ...state.slice(i + 2)
          ]
        default:
          return state
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  todos
})

export default reducers