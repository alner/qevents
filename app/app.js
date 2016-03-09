import React, { Component, PropTypes } from 'react'
import styles from './app.css'

class App extends Component {
  render() {
    return (
      <div className={styles.root}>{this.props.hello}</div>
    )
  }
}

App.propTypes = {
  hello: PropTypes.string.isRequired
}

export default App
