import React from 'react'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Track from './trackorder/Track'




const App = () => {
  return (
    <div className='app-container overflow-hidden w-100'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/track' element={<Track />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
