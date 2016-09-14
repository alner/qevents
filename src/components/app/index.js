import React, { Component, PropTypes } from 'react'
//import styles from './style.css'

class App extends Component {

  static propTypes = {
    hello: PropTypes.string
  }

  static defaultProps = {
    data: "Home page"
  }

  // className={styles.root}
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}

export default App
