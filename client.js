import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './app/app'

render(<App hello={"Hello world!"} />,
  //<div className={styles.root}>Hello world</div>,
  document.getElementById('root'))
