import React from 'react'
import './stylesheets/projects.scss'

function Projects () {
  return (
    <section className="projects-section">
      <h1>PROJECTS</h1>
      <p>If you would like to check out some of my work, below are github links for some of my recent projects.</p>
      <hr /> 
      <br /> 
      <br />
      <div className="projects-grid">         
        <div className="container">
          <img className="battleships" src="/images/Battleships.jpeg" alt="battleship game screenshot" />
          <div className="overlay">
            <div className="text">Terminal application created for the week 3 assessment at Coder Academy.</div>
          </div>
        </div>
        
        <div className="container">
          <img className="marketplace" src="/images/two-sided-marketplace.png" alt="marketplace application screenshot" />
          <div className="overlay">
            <div className="text">Two-sided marketplace application completed for the third assessment at Coder Academy.</div>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Projects