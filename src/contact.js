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
      <a href="#" target="_blank">
      <li>
        <img className="resume-icon" src="/images/resume.png" alt="email icon" />
      </li>
      <p>Resume</p>
      </a>
      <a href="https://www.linkedin.com/in/jye-bussa-2b5b54193/" target="_blank">
      <li>
        <img className="linkedin-icon" src="/images/linkedin.png" alt="email icon" />
      </li>
      <p>Linkedin</p>
      </a>
      <a href="https://github.com/Jyeb" target="_blank">
      <li>
        <img className="github-icon" src="/images/github-sign.png" alt="email icon" />
      </li>
      <p>Github</p>
      </a>
    </ul>
    <form action="mailto:bussajye@gmail.com" method="post">
        Name:<br />   
        <input type="text" placeholder="Enter your name..." style={{width:"70%"}}/><br />
        E-mail:<br />
        <input type="text" placeholder="Enter your email..." style={{width:"70%"}}/><br />
        Message:<br /> 
        <textarea placeholder="Write a message..." rows="20"  /><br /><br />
        <input type="submit" value="Send" />
    </form>
    </section>
  </Fragment>
  )
}

export default Contact
