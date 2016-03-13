import React, { Component, PropTypes } from 'react'
import styles from './style.css'

class App extends Component {

  static propTypes = {
    hello: PropTypes.string
  }

  render() {
    return (
      <div className={styles.root}>{this.props.hello  || "Hello world!"}</div>
    )
  }
}

export default App
