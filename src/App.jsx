import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeholder from './Pages/Placeholder/Placeholder'
import Footer from './Components/Footer/Footer'
import Login from './Components/LoginPopup/Login'
import { useState } from 'react'
import Explore from './Components/Explore/Explore'
import AppDownload from './Components/AppDownload/AppDownload'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path='/menu' element={<Explore/>}/>
      <Route path="/contact" element={<Footer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/order' element={<Placeholder/>}/>
      <Route path="/app" element={<AppDownload/>}/>
    </Routes>
    </div>
    
    </>
  )
}

export default App
