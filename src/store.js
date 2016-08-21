import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'

const defaultState = {
  word: 'world'
}

const enhancers = compose(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
