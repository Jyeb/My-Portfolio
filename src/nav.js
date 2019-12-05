import React from 'react'
import './stylesheets/nav.scss'

function Nav () {
  return (
    <nav>
      <div className="nav-options">
        <a href="/">HOME</a>
        <a href="about">ABOUT</a>
        <a href="projects">PROJECTS</a>
        <a href="contact">CONTACT</a>
      </div>
    </nav>
  )
}

export default Nav
