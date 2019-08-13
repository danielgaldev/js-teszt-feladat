import { combineReducers } from 'redux'
import { ADD_TODO, CHECK_TODO } from './actions'

const INITIAL_TODOS = [
  { text: 'Finish this app', completed: false, date: new Date('2019-10-08T03:14:48') },
  { text: 'Eat dinner', completed: false, date: new Date('2019-10-15T03:15:01') },
  { text: 'Work out', completed: true, date: new Date('2019-11-15T03:16:10') },
  { text: 'Sleep', completed: false, date: new Date('2019-11-22T03:14:53') },
  { text: 'Relax', completed: true, date: new Date('2019-11-25T03:16:36') }
];

function todos(state = INITIAL_TODOS, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
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