import React from 'react'
import './stylesheets/projects.scss'

function Projects () {
  return (
    <section className="projects-section">
      <h1>PROJECTS</h1>
      <p className="project-intro">If you would like to check out some of my work, below are github links for some of my recent projects.</p>
      <br /> 
      <br />
      <div className="projects-grid">   
    
        <div className="container"> 
        <div className="image-size" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/Battleships.jpeg`}} ></div> 
          <div className="overlay">
            <div className="text">Terminal application created for the week 3 assessment at Coder Academy.</div>
          </div>
          <div className="project-footer">
            <h4>Terminal Application</h4>
            <span className="badge">Ruby</span>
          </div>
        </div>

        <div className="container">
          <div className="image-size" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/two-sided-marketplace.png)`}} ></div>
          <div className="overlay">
            <div className="text">Two-sided marketplace application completed for the third assessment at Coder Academy.</div>
          </div>
          <div className="project-footer">
            <h4>Marketplace Application</h4>
            <span className="badge">Ruby</span>
            <span className="badge">Rails</span>
            <span className="badge">JavaScript</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Projects