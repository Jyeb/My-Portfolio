import React, { Fragment } from 'react'
import './stylesheets/App.scss'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Nav from './nav'




function App() {
  return (
    <Fragment>
      <Nav />
      <section><Home /></section>
      <section><About /></section>
      <section><Projects /></section>
      <section><Contact /></section>
    </Fragment>
  )
}
export default App
