import React, { useState } from 'react'
import "./Login.css"

const Login = ({setShowLogin}) => {
    const[currentState,setCurrentState]=useState("Login")
  return (
    <div className="login">
        <div className="login-conatiner">
            <div className='login-title'>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src="/cross_icon.png"/>
            </div>
            <div className='login-popup-inputs'>
                <input type="text" placeholder='Your name' required/>
                {currentState==="Login"?<></>:
                <input type="email" placeholder='Your Email' required/>}
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currentState==="Sign Up"? "create account":"Login"}</button>
            <input type="checkbox" required/>
            <p>By coninuing,i agree to the terms of use & privacy Policy.</p>
     
        {currentState==="Login"}?<p>Create a new account ?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span>  </p>
        :<p>Already have an Account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>
    </div>
       </div>
  )
}

export default Login