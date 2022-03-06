import React, { useState } from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPizzas } from '../../redux/pizzas/action';
import Pizza from '../Pizza/Pizza';
import './allpizzas.css'
const PizzaComponent = () => {
    const {pizzaState:{loading, pizzas,error}} = useSelector(state => state);
    const [sortby, setSortby] = useState('');
    const [filterArg, setFilterArg] = useState('');
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(fetchPizzas());
    },[]);

    const sortHandler = (e)=>{
        const val = e.target.value;
        if(val==='') return pizzas;
        pizzas.sort(function(a,b){return a[val]-b[val]});
        setSortby(val);
    }
    const typeHandler =(e) =>{
        const type= e.target.value;
        setFilterArg(type)
    }
  return (
    <div>
      <select name="Sort" id="sort" onChange={sortHandler}>
          <option value="">sort</option>
          <option value="price">price</option>
          <option value="rating">rating</option>  

      </select>
      <select name="type" id="sort" onChange={typeHandler}>
          <option value="">Type</option>
          <option value="veg">veg</option>
          <option value="non-veg">Non-Veg</option>  

      </select>
    <div className='all-pizzas'>

         {
           loading ? (<div className='loader'></div>): error ==='' ? (pizzas.filter((pizza) => {
            return  (filterArg==='' ?pizza : filterArg==="veg" ? pizza.isVeg === true : pizza.isVeg === false)
           }).map((pizza) =><Pizza key= {pizza.id} pizza={pizza} />)) : (<div>{error}</div>)
         }

    </div>
    </div>
  )
}

export default PizzaComponent