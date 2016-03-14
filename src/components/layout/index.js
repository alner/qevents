import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div>
        <h1>Universal App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        { this.props.children }
      </div>
    )
  }
}
