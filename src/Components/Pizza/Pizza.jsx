import React, { useState } from 'react'
import Popup from '../Popup/Popup';
import './pizza.css'
const Pizza = ({pizza}) => {
const {name, img_url,description,isVeg, rating,price} = pizza
const [isVisible, setIsVisible] = useState(false);

const clickHandler =(e)=>{
  e.preventDefault();
  setIsVisible(!isVisible);
  }
return (
<>
  <div className='single-pizza'>
    <h2>{name}</h2>
    <img src={img_url} alt="" width="200px" height="200px" />
    <p>{description}</p>
    <div className='isveg'>
      <div className={`type ${isVeg ? "veg" : "non-veg" }`}>
      </div>
      <span>{isVeg ? "VEG" : "NON-VEG"}</span>
    </div>
    <h3>Price : ₹{price}</h3>
    <h4>{rating}</h4>
    <button onClick={clickHandler}>- ADD +</button>
    <div className='popup-div' style={{display: `${isVisible ? "flex" : "none"}`}}>
      <Popup pizza={pizza} isVisible={isVisible} setIsVisible={setIsVisible} clickHandler={clickHandler} />
  </div>
  </div>
  
</>

)
}

export default Pizza