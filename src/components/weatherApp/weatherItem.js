import React, { Component } from 'react'

export default class WeatherItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    const { place, fetchWeatherForCity } = this.props
    fetchWeatherForCity(place);
  }
  render(){
    return (
      <li>
        <header>{this.props.place}</header>
        <section>
          {this.props.isFetching ? ' Loading ...' : null}
          <pre>{JSON.stringify(this.props.data, null, ' ')}</pre>
        </section>
      </li>
    )
  }
}
