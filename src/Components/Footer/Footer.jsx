import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-left'>
             <h2 style={{color:"tomato", cursor:"pointer"}}>zomato</h2>
             <p>Powered by a love for food and a passion for service, Zomato is more than just a food delivery app — it's a community of food lovers, chefs, and restaurant owners working together to deliver joy.</p>
             <div className='footer-icon'>
                <img src="/public/facebook_icon.png"/>
                <img src="/public/twitter_icon.png"/>
                <img src="/public/linkedin_icon.png"/>
             </div>
            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className='footer-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-211-234-1236</li>
                    <li>contact@zomato.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © Zomato Clone.com-All Right Reserverd.</p>
        </div>
        )
        }


export default Footer