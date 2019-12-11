import React, { Fragment } from 'react'
import './stylesheets/contact.scss'

function Contact () {
  return (
  <Fragment>
    <section className="contact-section">
    <h1>CONTACT</h1>
      <div className="resume-doc">
        <img className="resume-img"src={`${process.env.PUBLIC_URL}/images/JyeBussa-Resume.png`} alt="resume"></img>
   
      </div>
    <ul className="contact-grid">
      <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bussajye@gmail.com" target="_blank">
      <li>
        <img className="gmail-icon" src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="email icon" />
      </li>
      <p>Email</p>
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
