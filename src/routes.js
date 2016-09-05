import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'

// Components:
import App from 'components/app'
import Layout from 'components/layout'
import Hello from 'containers/hello'
import Weather from 'containers/weather'
import WeatherApp from 'containers/weatherApp'

// Test
// import { getWeatherByCity } from './api'
// getWeatherByCity('London').then(data => console.log(data))

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
    <Route path="/hello/:phrase" component={Hello} />
    <Route path="/weather" component={WeatherApp}>
      <IndexRoute component={WeatherApp} />
      <Route path="/weather/:city" component={Weather} />
    </Route>
  </Route>
)
