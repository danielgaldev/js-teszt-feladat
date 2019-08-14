import { combineReducers } from 'redux'
import moment from 'moment'

import { ADD_TODO, CHECK_TODO } from './actions'


const INITIAL_TODOS = [
  { text: 'Finish this app', completed: false, date: moment('2019-10-08', 'YYYY-MM-DD') },
  { text: 'Eat dinner', completed: false, date: moment('2019-10-15', 'YYYY-MM-DD') },
  { text: 'Work out', completed: true, date: moment('2019-11-15', 'YYYY-MM-DD') },
  { text: 'Sleep', completed: false, date: moment('2019-11-22', 'YYYY-MM-DD') },
  { text: 'Relax', completed: true, date: moment('2019-11-25', 'YYYY-MM-DD') }
];

function todos(state = INITIAL_TODOS, action) {
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
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], completed: !state[i].completed },
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

const reducers = combineReducers({
  todos
})

export default reducers