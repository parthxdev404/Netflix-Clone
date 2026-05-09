import React from 'react'
import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import Explore from './pages/Explore'
import Faq from './pages/Faq'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Explore />
      <Faq />
      <Footer />
    </>
  )
}

export default App