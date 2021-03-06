import React, { Component, PropTypes } from 'react'
//import * as styles from './style.css'
import WeatherItem from './weatherItem'

export default (props) => {
  console.log(props)
  //  className={styles.weatherApp}
  return (
    <div>
      {/*props.children*/}
      <ul>
      {props.items && props.items.map((item) => {
        console.log(item)
        return (<WeatherItem key={item.place}
          {...item}
          fetchWeatherForCity={props.fetchWeatherForCity} />)
      })}
      </ul>
    </div>
  )
}
