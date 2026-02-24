import React from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Platformsection from './components/Platformsection'
import WorkingProcess from './components/WorkingProcess'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import KnownFor from './components/KnownFor'
import Faq from './components/Faq'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <LandingPage/>
      <Platformsection/>
      <WorkingProcess/>
      <Portfolio/>
      <Testimonials/>
      <KnownFor/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default App
