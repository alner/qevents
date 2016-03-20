import React, { Component, PropTypes } from 'react'
import styles from './style.css'

class App extends Component {

  static propTypes = {
    hello: PropTypes.string
  }

  static defaultProps = {
    hello: "Hello world!"
  }

  render() {
    return (
      <div className={styles.root}>{this.props.hello}</div>
    )
  }
}

export default App
