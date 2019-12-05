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
        <ul className="skills-grid">
          <img className="ruby-logo" src="#" alt="ruby language logo" />
          <li>Ruby</li>
          <img className="rails-logo" src="#" alt="rails language logo" />
          <li>Ruby on Rails</li>
          <img className="python-logo" src="#" alt="python language logo" />
          <li>Python</li>
          <img className="javascript-logo" src="#" alt="javascript language logo" />
          <li>JavaScript</li>
          <img className="react-logo" src="#" alt="react language logo" />
          <li>React</li>
          <img className="html-logo" src="#" alt="html language logo" />
          <li>HTML</li>
          <img className="css-logo" src="#" alt="css language logo" />
          <li>CSS</li>
        </ul>
      </section>
    </div>
  )
}

export default About