import React, { useEffect, useState } from 'react'
import {removeFromCart , increaseQuant,decreaseQuant} from '../../redux/cart/action'
import { useDispatch } from 'react-redux';
import './cartitem.css'
const CartItem = ({cartItem ,setGrandTotal}) => {
    const {pizza,quantity, size,toppings} = cartItem
   
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(pizza.price * quantity);
    },[quantity])
    const dispatch = useDispatch();
    const increase = ()=>{
        dispatch(increaseQuant(cartItem))
        // setCompQuant(compQuant+1)
        // setTotal(prev=>parseInt(prev)+parseInt(pizza.price));
        // setGrandTotal(prev=>parseInt(prev)+parseInt(pizza.price))
    }
    const decrease = ()=>{
    
        dispatch(decreaseQuant(cartItem))

        

    }
    const handleCross = ()=>{
        // setGrandTotal(prev=>parseInt(prev)-parseInt((pizza.price)*(compQuant)) )
        dispatch(removeFromCart(cartItem))

    }
  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
            <img src={pizza.img_url} alt="pizza image" />
     </div> 
     <div className='cart-item-details'>
         <h3>{pizza.name}</h3>
         <ul>
             {toppings.map(topping => <li key={topping}>{topping}</li> )}
         </ul>
         <h4>
             {size}
         </h4>
    </div> 
    <div className='cart-item-controller'>
            
            <div className='cart-btn'>
                {quantity >1 ? <button onClick={decrease}>-</button> : <span></span>}
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
                <button onClick={handleCross}>X</button>
            </div>
            <div className='price-div'>
            ₹{total}
            </div>
    </div>

    </div>
  )
}

export default CartItem