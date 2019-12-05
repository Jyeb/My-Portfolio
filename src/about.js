import React from 'react'
import './stylesheets/about.scss'

function About () {
  return (
    <div>
      <h1 className="about">About Me</h1>
      <img className="profile-picture" src="/images/resume.png" alt="profile-picture" />
      <section className="about-section">
        <hr />
        <p>I am currently studying a diploma of IT at Coder Academy in Brisbane, Australia. My interests are in web development, 
          machine learning, and mathematics. I have previously, worked in the engineering industry as a structural draftsman, with experience meeting strict deadlines, and a professional work environment.
          I have worked with the technologies listed below.
  `    </p>
        <ul>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>
    </div>
  )
}

export default About