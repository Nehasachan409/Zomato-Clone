import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("home")
   
  const {getTotalCartAmount}=useContext(StoreContext)
  
  return ( 
    <div className='navbar'>
        <Link to="/"><h1 className="logo" >Zomato</h1></Link>
        <ul className='menu'>
          <Link to ="/" ><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
        
           <Link to="/menu" ><li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li></Link>
          <Link to="/contact" ><li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact </li></Link>
          <Link to ="/app"> <li onClick={()=>setMenu("app")} className={menu==="app"?"active":""}>Mobile App</li></Link>
        </ul>
        <div className='navbar-right'>
          <img src='search_icon.png'/>
          <div className='navbar-search'>
            <Link to="/cart"><img src='basket_icon.png'/></Link>
          <div className={getTotalCartAmount ===0?"":"dot" }></div>
          </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
          </div>
          </div>

  
    
  )
}

export default Navbar