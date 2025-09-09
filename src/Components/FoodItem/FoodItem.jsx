import React, { useContext} from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,category,image}) => {
  
const{cartItem,addCart,removeCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
    <div className='food-img-container'>
        <img src={image} className='food-image'/>
        {!cartItem[id]
        ?<img className='add'onClick={()=>addCart(id)} src="/add_icon_white.png"/>:
        <div className='food-item-counter'>
          <img src="/remove_icon_red.png" style={{width:"20px"}} onClick={()=>removeCart(id)}/>
          <p>{cartItem[id]}</p>
          <img src="/add_icon_green.png" onClick={()=>addCart(id)} style={{width:"20px"}} />
          </div>
      }
      
        </div> 
           <div className='food-info'>
            <div className='food-name-rating'>
            <p className='food-name' >{name}</p>
            <img src="rating_starts.png" style={{ width:"80px"}}/>
            </div>
            <p className='food-des'>{description}</p>
            <p className="food-price">${price}</p>
            <p className="food-categary">{category}</p>
            </div>


    </div>
    
  )
}

export default FoodItem