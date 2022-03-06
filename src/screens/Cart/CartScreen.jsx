import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../Components/CartItem/CartItem';
import './cart.css'
const CartScreen = () => {
  const {cart} = useSelector(state => state.cartState);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(()=>{
    const gd= cart.reduce((arg,item)=>arg+(item.quantity)*(item.pizza.price),0);
    setGrandTotal(gd);
    console.log(gd)

  },[cart])
  return (
    <div className='cart-container'>
      {cart.length > 0 ? (cart.map((item,index)=> <CartItem key={index} setGrandTotal={setGrandTotal} cartItem= {item}/>)) : <div className='empty'> No ITEM IN THE CART </div>}
      {cart.length > 0 && <div className='grand-price-div'>TOTAL:   ₹{grandTotal}</div>}
    </div>
  )
}

export default CartScreen