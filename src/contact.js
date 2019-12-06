import React, { Fragment } from 'react'
import './stylesheets/contact.scss'

function Contact () {
  return (
  <Fragment>
    <section className="contact-section">
    <h1>CONTACT</h1>
    <ul>
      <li>Email:<a href="#">bussajye@gmail.com</a></li>
      <li>Resume:<a href="#">Jye Bussa</a></li>
      <li>LinkedIn:<a href="#">Jye Bussa</a></li>
      <li>Github:<a href="#">Jyeb</a></li>
    </ul>
    </section>
  </Fragment>
  )
}

export default Contact