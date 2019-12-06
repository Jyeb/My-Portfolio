import React from 'react'
import './stylesheets/about.scss'

function About () {
  return (
    <div>
      <section className="about-section">
        <h1 className="about">ABOUT</h1>
        <img className="profile-picture" src="/images/resume.png" alt="profile-picture" />
        <p>I am currently studying a diploma of IT at Coder Academy in Brisbane, Australia. My interests are in web development, 
          machine learning, and mathematics. I have previously, worked in the engineering industry as a structural draftsman, with experience working in a professional 
          environment, and meeting strict deadlines. I have experience working with the technologies listed below.
        </p> 
        <hr />
        <ul className="skills-grid">
        <li>
          <img className="ruby-logo" src="/images/ruby.svg" alt="ruby language logo" /><br />
          Ruby
        </li>
        <li>
          <img className="rails-logo" src="/images/rails.svg" alt="rails language logo" /><br />
          Ruby on Rails
        </li>
        <li>
          <img className="python-logo" src="/images/python.svg" alt="python language logo" /><br />
          Python   
        </li>
        <li>
          <img className="javascript-logo" src="/images/javascript.svg" alt="javascript language logo" /><br />
          JavaScript
        </li>
        <li>
          <img className="react-logo" src="/images/react.svg" alt="react language logo" /><br />
          React
        </li>
        <li>
          <img className="html-logo" src="/images/html.svg" alt="html language logo" /><br />
          HTML
        </li>
        <li>
          <img className="css-logo" src="/images/css.svg" alt="css language logo" /><br />
          CSS
        </li>
        </ul>
      </section>
    </div>
  )
}

export default About