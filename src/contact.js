import React, { Fragment } from 'react'
import './stylesheets/contact.scss'

function Contact () {
  return (
  <Fragment>
    <section className="contact-section">
    <h1>CONTACT</h1>
    <p>If you are looking for a junior developer or would like to get in touch, please contact me using one of the methods below.</p>
    <hr />
    <ul className="contact-grid">
      <a href="#">
        <li>
        <img className="email-icon" src="/images/gmail.png" alt="email icon" />
        </li>
        <p>Email</p>
      </a>
      <a href="#">
      <li>
        <img className="resume-icon" src="/images/resume.png" alt="email icon" />
      </li>
      <p>Resume</p>
      </a>
      <a href="#">
      <li>
        <img className="linkedin-icon" src="/images/linkedin.png" alt="email icon" />
      </li>
      <p>Linkedin</p>
      </a>
      <a href="#">
      <li>
        <img className="github-icon" src="/images/github-sign.png" alt="email icon" />
      </li>
      <p>Github</p>
      </a>
    </ul>
    </section>
  </Fragment>
  )
}

export default Contact