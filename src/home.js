import React, { Fragment } from 'react'
import './stylesheets/home.scss'
import { Link } from 'react-scroll'
function Home () {
  return (
    <Fragment>
      <img className="background-image" src="/images/background.jpg" alt="background image" />
      <div className="homeinfo">
        <h1>Hi, I'm Jye Bussa</h1>
        <p>Student</p>
        <p>Software Developer</p>
        <Link
        activeClass="active"
        to="about-page"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {500}
        >ABOUT</Link>
      </div>
    </Fragment>
  )
}

export default Home