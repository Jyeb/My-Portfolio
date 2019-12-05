import React from 'react'
import './stylesheets/nav.scss'
import { Link } from 'react-scroll'
function Nav () {
  return (
    <nav>
      <div className="nav-options">
          <Link
      activeClass="active"
      to="home-page"
      spy={true}
      smooth={true}
      offset={-70}
      duration= {500}
  >HOME</Link>
      <Link
        activeClass="active"
        to="about-page"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        >ABOUT</Link>
      <Link
        activeClass="active"
        to="projects-page"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        >PROJECTS</Link>
      <Link
        activeClass="active"
        to="contact-page"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        >CONTACT</Link>
      </div>
    </nav>
  )
}

export default Nav
