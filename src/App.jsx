import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Works from './components/works'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const darkToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={`${darkMode ? 'dark' : ''}`}>
        < Navbar darkMode={darkMode} darkToggle={darkToggle} />
        < Header />
        < About darkMode={darkMode} />
        < Works />
        < Articles darkMode={darkMode} />
        < Contact darkMode={darkMode}/>
        < Footer darkMode={darkMode} />
      </div>
    </>
  )
}

export default App
