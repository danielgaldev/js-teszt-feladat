import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'
import onStateChange from 'redux-on-state-change'

import './index.css'
import App from './App'
import reducers from './reducers'

const saveState = (prevState, nextState, action, dispatch) => {
  localStorage.setItem('todoArray', JSON.stringify(nextState.todoApp.todos))
}

const store = createStore(reducers, applyMiddleware(onStateChange(saveState)))

ReactDOM.render(
  <Provider store={store}>
    <Grommet full>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root'));
