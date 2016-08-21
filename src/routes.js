import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Components:
import App from 'components/app'
import Layout from 'components/layout'
import Hello from 'containers/hello'

// Store
import store, { history } from './store'

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
        <Route path="/hello/:phrase" component={Hello} />
      </Route>
    </Router>
  </Provider>
)

/*
<Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="test" component={Test} />
  </Route>
*/
