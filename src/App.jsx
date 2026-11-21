import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
//Sabarinathan
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Expertise />
      <Skills />
      <Projects />
      {/* Certifications section hidden for now */}
      {/* <Certifications /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
