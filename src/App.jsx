import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/ About'
import NavBar from './components/NavBar'
import Features from './components/Features'
import Contact from './components/Contact'
function App() {

  return (
    <div className='relative min-h-screen w-screen  overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Contact />
    </div>
  )
}

export default App
