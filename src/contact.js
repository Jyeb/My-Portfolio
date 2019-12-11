import React, { Fragment } from 'react'
import './stylesheets/contact.scss'

function Contact () {
  return (
  <Fragment>
    <section className="contact-section">
    <h1>CONTACT</h1>
      <div className="resume-doc">
        <img src={`${process.env.PUBLIC_URL}/images/JyeBussa-Resume.png`}></img>
      </div>
    <ul className="contact-grid">
      <a href="#" target="_blank">
      <li>
        <img className="resume-icon" src={`${process.env.PUBLIC_URL}/images/resume.png`} alt="email icon" />
      </li>
      <p>Resume</p>
      </a>
      <a href="https://www.linkedin.com/in/jye-bussa-2b5b54193/" target="_blank">
      <li>
        <img className="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="email icon" />
      </li>
      <p>Linkedin</p>
      </a>
      <a href="https://github.com/Jyeb" target="_blank">
      <li>
        <img className="github-icon" src={`${process.env.PUBLIC_URL}/images/github-sign.png`} alt="email icon" />
      </li>
      <p>Github</p>
      </a>
    </ul>
    </section>
  </Fragment>
  )
}

export default Contact
