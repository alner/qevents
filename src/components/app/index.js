import React, { Component, PropTypes } from 'react'
import styles from './style.css'

class App extends Component {

  static propTypes = {
    hello: PropTypes.string
  }

  static defaultProps = {
    data: "Home page"
  }

  render() {
    return (
      <div className={styles.root}>{this.props.data}</div>
    )
  }
}

export default App
