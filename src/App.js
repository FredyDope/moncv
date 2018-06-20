import React, { Component } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Interest from './components/Interest'
import FooterPage from './components/Footer'

import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <Interest />
        <FooterPage />
      </div>
    )
  }
}

export default App
