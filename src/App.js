import React, { Fragment } from 'react'
import './stylesheets/App.scss'
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Nav from './nav'




function App() {
  return (
    <Fragment>
      <Nav />
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
      </Router>
    </Fragment>
  )
}
export default App
