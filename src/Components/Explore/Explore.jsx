import React from 'react'
import { menulist } from '../../assets/menulist'
import './Explore.css'

const Explore = ({category,setCategory}) => {
  return (
    <div className='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our menu and treat your taste buds to a journey of flavor. Each item is made with the freshest ingredients and inspired by recipes from around the world. Whether you're here for a quick bite or a full-course meal, you're guaranteed to find something you love.</p>
      <div className='explore-menu-list'>
        {menulist.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev => prev === item.name ? "All" : item.name)}key={index} className="explore-menu-list-item">
              <img  className={category===item.name?"active":"" }src={item.image} alt={item.name}/>
              <p>{item.name}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Explore