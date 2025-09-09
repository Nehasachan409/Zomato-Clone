import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const{cartItem,foodlist, removeCart,getTotalAmount}=useContext(StoreContext)

   const navigate =useNavigate();        
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {foodlist.map((item)=>{
          if(cartItem[item._id]>0){
            return(
              <>
              <div className='cart-items-title cart-list'>
                <img src={item.image}/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p className="cros" onClick={()=>removeCart(item._id)}><IoIosCloseCircle /></p>
          
        
                </div>
                <hr/>
                </>
            )
          }
        })}
        </div>
        <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>Cart Totals</h2>
          
            <div className='cart-details'>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className='cart-details'>
              <p>Delivery fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-details'>
              <b>Total</b>
              <b>${getTotalAmount() + 2}</b>
            </div>
            <button onClick={()=>navigate('/order')} >Proceed To Checkout</button>
            </div>
        
        <div className='cart-promocode'>
          <p>If you have a promo code,Enter it here</p>
          <div className='promocode-input'>
            <input type="text" placeholder='Enter the code'/>
            <button>Submit</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Cart