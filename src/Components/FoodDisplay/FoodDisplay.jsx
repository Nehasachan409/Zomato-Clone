/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'


const FoodDisplay = ({category}) => {
 
    const {foodlist}=useContext(StoreContext)
     return (
        <div className="foodDisplay">
            <h2>Top Dishes Near You</h2>
        <div className='fooddisplay-list'>
            {foodlist.map((item,index)=>{
            
        
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} category={item.category} image={item.image}/>
                }

            )}
            </div>
    
        </div>

  )
}

export default FoodDisplay