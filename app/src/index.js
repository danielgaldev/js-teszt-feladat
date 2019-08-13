import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Grommet } from 'grommet'

import './index.css'
import App from './App'
import reducers from './reducers'


const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Grommet full>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root'));
