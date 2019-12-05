import React, { Fragment } from 'react'
import './stylesheets/App.scss'
import Home from './home'
import Nav from './nav'


function App() {
  return (
    <Fragment>
      <Nav />
      <Home />
    </Fragment>
  )
}

export default App