import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// Components:
import App from 'components/app'
import Layout from 'components/layout'
import Hello from 'containers/hello'
import Weather from 'containers/weather'
import WeatherApp from 'containers/weatherApp'

// Store
import store, { history } from './store'
import * as actions from './actions'

// Test
// import { getWeatherByCity } from './api'
// getWeatherByCity('London').then(data => console.log(data))

// TODO: load data from store...
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

store.dispatch(actions.weatherSetState(DEFAULT_STATE))

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
        <Route path="/hello/:phrase" component={Hello} />
        <Route path="/weather" component={WeatherApp}>
          <IndexRoute component={WeatherApp} />
          <Route path="/weather/:city" component={Weather} />
        </Route>
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
