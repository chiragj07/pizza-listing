import React, { useState } from 'react'
import CheckBox from '../Common/CheckBox';
import Radio from '../Common/Radio';
import {addToCart} from '../../redux/cart/action'
import { useDispatch, useSelector } from 'react-redux';
import '../Pizza/pizza.css'
const Popup = ({isVisible,setIsVisible , clickHandler,pizza}) => {
const [quantity, setQuantity] = useState(1);
const [pizzaSize, setPizzaSize] = useState("mediam");
const {size, toppings} = pizza;
const {cart} = useSelector(state => state.cartState);
const dispatch = useDispatch();
console.log(isVisible)
const [toppingsForCart ,setToppings] = useState([]);
const checkSize = (e)=>{

    if(e.target.name === "size") setPizzaSize(e.target.value)
    else setToppings([e.target.value])    /* when isRadio true for topping*/
}
const addHandler =(e)=>{
    e.preventDefault();
    dispatch(addToCart({
        cartItemId: cart.length+1,
        pizza,
        quantity,
        size:pizzaSize,
        toppings:toppingsForCart
    }))

    setIsVisible(false);
}



const checkHandler =(e) =>{
console.log(e.target.value)
if(e.target.checked) setToppings([...toppingsForCart,e.target.value]);
else setToppings(toppingsForCart.filter(top => top !== e.target.value));

}
return (
<>


    <div className='popup-div-main-container'>
        <div className='popup-div-items'>
            <h4>SELECT- SIZE</h4>

            {
            size[0].items.map((item,ind)=>
            <Radio key={`${item.size}-${ind}`} name="size" onCheck={checkSize} item={item} ind={ind} />)
            }

        </div>
        <div className='popup-div-items'>
            <h4>SELECT - TOPPINGS </h4> {
            toppings[0].items.map((item,ind)=> {
            return (
            toppings[0].isRadio ? (
     <Radio key={`${item.name}-${ind}`} name="name" onCheck={checkSize} item={item} ind={ind} />) :   /* when isRadio true for topping*/
            (
            <CheckBox key={`${item.name}-${ind}`} item={item} checkHandler={checkHandler} />
            )
            )
            })
            }
        </div>

    </div>
    <div className='all-buttons-div'>
        <div className='popup-div-buttons'>
            {quantity > 1 ? (<button onClick={()=> setQuantity(quantity-1)}>-</button>) :(<span></span>)}
            <span className='quantity-popup'>{quantity}</span>
            <button onClick={()=> setQuantity(quantity+1)}>+</button>

        </div>
    <div className='popup-div-buttons'>
        <button onClick={clickHandler}>Cancel</button>
        <button onClick={addHandler}>Add To Cart</button>
    </div>
    </div>
    
</>

)
}

export default Popup