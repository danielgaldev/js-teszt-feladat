import { combineReducers } from 'redux'
import { ADD_TODO, CHECK_TODO } from './actions'

const INITIAL_TODOS = [
  {text: 'Finish this app', completed: false},
  {text: 'Eat dinner', completed: false},
  {text: 'Work out', completed: true},
  {text: 'Sleep', completed: false},
  {text: 'Relax', completed: true}
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