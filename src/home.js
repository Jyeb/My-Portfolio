import React, { Fragment } from 'react'
import './stylesheets/home.scss'
function Home () {
  return (
    <Fragment>
      <img className="background-image" src="/images/background.jpg" alt="background image" />
      <div className="homeinfo">
        <h1>Hello, I'm Jye Bussa</h1>
        <p>Student</p>
        <p>Software Developer</p>
        <a href="/about">ABOUT</a>
      </div>
    </Fragment>
  )
}

export default Home