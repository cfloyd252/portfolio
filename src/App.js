import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Welcome from './Components/Welcome/Welcome'
import Bio from './Components/Bio/Bio'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div id='app'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/bio' component={Bio} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/' component={Footer} />
      </div>
    )
  }
}

export default withRouter(App);
