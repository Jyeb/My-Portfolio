import React from 'react'
import './stylesheets/about.scss'
function About () {
  return (
    <div>
      <section className="about-section">
        <div className="about-grid"> 
        <div>
     
        <img className="profile-picture" src={`${process.env.PUBLIC_URL}/images/profile-pic.png`} alt="profile-picture" />
        <h1 className="about">About Me</h1>
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
          <span className="skill-text">Ruby</span>
        </li>
        <li>
          <img className="rails-logo" src={`${process.env.PUBLIC_URL}/images/rails.svg`} alt="rails language logo" /><br />
          <span className="skill-text">Ruby on Rails</span>
        </li>
        <li>
          <img className="python-logo" src={`${process.env.PUBLIC_URL}/images/python.svg`} alt="python language logo" /><br />
          <span className="skill-text">Python</span> 
        </li>
        <li>
          <img className="javascript-logo" src={`${process.env.PUBLIC_URL}/images/javascript.svg`} alt="javascript language logo" /><br />
          <span className="skill-text">JavaScript</span>
        </li>
        <li>
          <img className="react-logo" src={`${process.env.PUBLIC_URL}/images/react.svg`} alt="react language logo" /><br />
          <span className="skill-text">React</span>
        </li>
        <li>
          <img className="html-logo" src={`${process.env.PUBLIC_URL}/images/html.svg`} alt="html language logo" /><br />
          <span className="skill-text">HTML</span>
        </li>
        <li>
          <img className="css-logo" src={`${process.env.PUBLIC_URL}/images/css.svg`} alt="css language logo" /><br />
          <span className="skill-text">CSS</span>
        </li>
        <li>
          <img className="git-logo" src={`${process.env.PUBLIC_URL}/images/git.png`} alt="git language logo" /><br />
          <span className="skill-text">Git</span>
        </li>
        <li>
          <img className="git-logo" src={`${process.env.PUBLIC_URL}/images/ubuntu.png`} alt="git language logo" /><br />
          <span className="skill-text">Ubuntu</span>
        </li>
        </ul>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About