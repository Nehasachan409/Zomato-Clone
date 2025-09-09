import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contain">
            <h1 style={{color:"white",fontWeight:"500"}}>Order Your Favourite Food Here</h1>
            <p>every dish is crafted with love, using the freshest ingredients and traditional recipes. Our chefs bring years of experience and passion to every plate, ensuring a memorable dining experience that’s both authentic and satisfying.</p>
            <button>View Menu</button>

        </div>
    </div>
  )
}

export default Header