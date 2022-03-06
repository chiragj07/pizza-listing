import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from './cartIcon.png'
import pizza from './pizza.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='title'>
            <Link to={'/'} style={{textDecoration:"none", color:"#ced5d4"}}>
            <span>Pizza Shop</span> 
            <img src={pizza} alt="pizza icon" />
            </Link>
        </div>
        <div className='links'>
            <Link to={'/'} style={{textDecoration:"none", color:"#ced5d4"}}>
                
                <span>Home</span>
            </Link>
            <Link to= {'/cart'}  style={{textDecoration:"none",color:"#ced5d4"}}>
                <div className='cart-icon'>
                        <span>Cart</span>
                        <img src={cartIcon} alt="" width="50px" height="50px" />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar