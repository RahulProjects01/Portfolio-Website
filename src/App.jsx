import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contect from './components/Contect/Contect'
import Footer from './components/Footer/Footer'
import MyHomePage from './components/MyHomePage/MyHomePage'

const App = () => {
  return (
    <>
      <NavBar />
      <MyHomePage/>
      <Projects />
      <Experience />
      <Education />
      <Contect />
      <Footer />
    </>
  )
}

export default App