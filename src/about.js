import React from 'react'
import './stylesheets/about.scss'
function About () {
  return (
    <div>
      <section className="about-section">
        <div className="about-grid"> 
        <div>
        
        <img className="profile-picture" src="/images/profile-pic.png" alt="profile-picture" />
        <h1 className="about">ABOUT</h1>
        <p className="description">I am currently studying a diploma of IT at Coder Academy in Brisbane, Australia. My interests are in web development, 
          machine learning, and mathematics.
          <br /><br />
          I have previously worked in the engineering industry at a structural and geotechnical engineering firm. 
          <br /><br />
          During this time I worked as a 
          structural draftsman and gained experience designing and drafting the structural components of residential and commercial property
          whilst adhering to strict deadlines.
        </p> 
        </div>
        <div>
          <h1>SKILLS</h1>
        <ul className="skills-grid">
        <li>
          <img className="ruby-logo" src={`${process.env.PUBLIC_URL}/images/ruby.svg`} alt="ruby language logo" /><br />
          Ruby
        </li>
        <li>
          <img className="rails-logo" src={`${process.env.PUBLIC_URL}/images/rails.svg`} alt="rails language logo" /><br />
          Ruby on Rails
        </li>
        <li>
          <img className="python-logo" src={`${process.env.PUBLIC_URL}/images/python.svg`} alt="python language logo" /><br />
          Python   
        </li>
        <li>
          <img className="javascript-logo" src={`${process.env.PUBLIC_URL}/images/javascript.svg`} alt="javascript language logo" /><br />
          JavaScript
        </li>
        <li>
          <img className="react-logo" src={`${process.env.PUBLIC_URL}/images/react.svg`} alt="react language logo" /><br />
          React
        </li>
        <li>
          <img className="html-logo" src={`${process.env.PUBLIC_URL}/images/html.svg`} alt="html language logo" /><br />
          HTML
        </li>
        <li>
          <img className="css-logo" src={`${process.env.PUBLIC_URL}/images/css.svg`} alt="css language logo" /><br />
          CSS
        </li>
        <li>
          <img className="css-logo" src={`${process.env.PUBLIC_URL}/images/git.png`} alt="css language logo" /><br />
          Git
        </li>
        <li>
          <img className="css-logo" src={`${process.env.PUBLIC_URL}/images/ubuntu.png`} alt="css language logo" /><br />
          Ubuntu
        </li>
        </ul>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About