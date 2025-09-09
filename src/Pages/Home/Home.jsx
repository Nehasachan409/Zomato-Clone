import React from 'react'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/Explore/Explore'
import { useState } from 'react'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Footer from '../../Components/Footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <Explore  category={category} setCategory={setCategory}/>
      <FoodDisplay/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home