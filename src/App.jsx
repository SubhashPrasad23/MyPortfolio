import './App.css'
import About from './pages/About'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './pages/Skills'

function App() {

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
