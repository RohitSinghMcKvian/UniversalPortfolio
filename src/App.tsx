import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Languages from './components/Languages'
import Stats from './components/Stats'
import Footer from './components/Footer'
import StarsBackground from './components/StarsBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <StarsBackground />
      <div className={`${isLoading ? 'invisible' : 'visible'} transition-all duration-700`}>
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <TechnicalSkills />
          <Experience />
          <Projects />
          <Education />
          <Languages />
          <Stats />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App