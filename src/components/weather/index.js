import React, { Component } from 'react'

export default class Weather extends Component {
  componentDidMount() {
    //console.log(this.props)
    this.props.fetchWeatherForCity(this.props.params.city)
  }
  render() {
    console.log(this.props.weather)
    return (
      <pre>
        {JSON.stringify(this.props.weather, null, '\t')}
      </pre>
    )
  }
}
