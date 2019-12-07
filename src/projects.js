import React from 'react'
import './stylesheets/projects.scss'

function Projects () {
  return (
    <section className="projects-section">
      <h1>PROJECTS</h1>
      <p>Below are some of my latest projects.</p>
      <div className="projects-grid">         
        <div className="container">
          <img className="battleships" src="/images/Battleships.jpeg" alt="battleship game screenshot" />
          <div className="overlay">
            <div className="text">Terminal application created for the week 3 assessment for Coder Academy.</div>
          </div>
        </div>
        
        <div className="container">
          <img className="marketplace" src="/images/two-sided-marketplace.png" alt="marketplace application screenshot" />
          <div className="overlay">
            <div className="text">Two-sided marketplace application completed for the third assessment of Coder Academy.</div>
          </div>
        </div>
      </div>
      {/* <p>Ongoing project building Custom software for a client in the real estate industry.</p> */}
    </section> 
  )
}

export default Projects