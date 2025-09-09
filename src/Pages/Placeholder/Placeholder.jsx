import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./Placeholder.css"

const Placeholder = () => {
   const {getTotalAmount}=useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className='placeorder-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First-Name'/>
          <input type="text" placeholder="Last-Name"/>
        </div>
        <input type="text" placeholder='"Email address'/>
        <input type="text" placeholder='Street'/>
        <div className='multi-fields'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder="State"/>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder='Phone'/>
        </div>

  
      <div className='placeorder-right'>
        <div className='cart-total'>
            <h2>Cart Totals</h2>
          
            <div className='cart-details'>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className='cart-details'>
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className='cart-details'>
              <b>Total</b>
              <b>${getTotalAmount() + 2}</b>
            </div>
            <button>Proceed To Payment</button>
            </div>
        
      </div>
    </form>
  )
}

export default Placeholder