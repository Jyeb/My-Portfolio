import React, { Fragment } from 'react'
import './stylesheets/home.scss'
import { Link } from 'react-scroll'
function Home () {
  return (
    <Fragment>
      <img className="background-image" src={`${process.env.PUBLIC_URL}/images/background.jpg`} alt="background image" />
      <div id="container">
        <canvas id="pixie"></canvas>
      </div>
      <div className="homeinfo">
        <h1>Jye Bussa</h1>
        <p>Student & Software Developer</p>
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