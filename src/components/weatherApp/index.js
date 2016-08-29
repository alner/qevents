import React, { Component, PropTypes } from 'react'
import * as styles from './style.css'
import WeatherItem from './weatherItem'

export default (props) => {
  console.log(props.items)
  return (
    <div className={styles.weatherApp}>
      {/*props.children*/}
      <ul>
      {props.items.map((item) => {
        console.log(item)
        return (<WeatherItem key={item.place} {...item} />)
      })}
      </ul>
    </div>
  )
}
