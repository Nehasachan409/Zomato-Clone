/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'
import { foodlist } from '../assets/foodlist'

export  const StoreContext=createContext(null)

    const StoreContextProvider=(props)=>{
        const[cartItem,setCartItem]=useState({})


        const addCart=(itemId)=>{
            if(!cartItem[itemId]) {
                setCartItem((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }

            }
 
        
        const removeCart=(itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))


        }
       
        const getTotalAmount=()=>{
            let  totalAmount=0;
            for(const item in cartItem){
                if(cartItem[item]>0){
                    let itemInfo=foodlist.find((product)=>product._id===item);
                    totalAmount +=itemInfo.price * cartItem[item];
                }
            }
            return totalAmount;

        }

        const contextValue={
            foodlist,
            cartItem,
            setCartItem,
            addCart,
            removeCart,
            getTotalAmount
        


        }
        return(
            <StoreContext.Provider value={contextValue}>
                {props.children}
            </StoreContext.Provider>
                
        )

    }
 export default StoreContextProvider