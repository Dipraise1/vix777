import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import MemeSection from './components/MemeSection'
import Socials from './components/Socials'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-meme-dark text-white' : 'bg-white text-meme-dark'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Tokenomics />
      <MemeSection />
      <Socials />
      <Footer />
    </div>
  )
}

export default App