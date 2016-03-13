import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Components:
import App from 'components/app'
import Layout from 'components/layout'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
  </Route>
)

/*
<Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="test" component={Test} />
  </Route>
*/
