import React, { Fragment } from 'react'
import './stylesheets/App.scss'
import Home from './home'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Nav from './nav'




function App() {
  return (
    <Fragment>
      <Nav />
      <section className="home-page"><Home /></section>
      <section className="about-page"><About /></section>
      <section className="projects-page"><Projects /></section>
      <section className="contact-page"><Contact /></section>
    </Fragment>
  )
}
export default App
