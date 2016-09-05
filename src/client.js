import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import routes from './routes'
import configureStore from './store'

// TODO: load data from store...
// TODO universal app: const defaultState = window.__INIT_STATE__
const DEFAULT_STATE = {
  items: [
    {
      place: 'Barcelona'
    },
    {
      place: 'Kiev'
    },
    {
      place: 'Istanbul'
    }
  ]
};

const { store, history } = configureStore(DEFAULT_STATE)

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
  ,
  document.getElementById('root')
)
