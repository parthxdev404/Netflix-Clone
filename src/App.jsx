import React from 'react'
import Home from './pages/Home'
import Navbar from './layouts/Navbar'
import Explore from './pages/Explore'
import Faq from './pages/Faq'
import Footer from './layouts/Footer'
import Trending from './pages/Trending'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Trending />
      <Explore />
      <Faq />
      <Footer />
    </>
  )
}

export default App