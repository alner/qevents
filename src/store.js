import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'

import * as actions from './actions'

function configureStore(defaultState) {
  const enhancers = compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(rootReducer, {}, enhancers)
  const history = syncHistoryWithStore(browserHistory, store)

  store.dispatch(actions.weatherSetState(defaultState))

  return {
    store,
    history
  }
}

export default configureStore
