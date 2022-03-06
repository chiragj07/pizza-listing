import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from'@fortawesome/free-solid-svg-icons'
import './rating.css'
const Rating = ({rating,totalStar}) => {
    const[wid,setWid] = useState("0");
    useEffect(()=>{
        const percentage = (rating/totalStar)*100;

        const rounded = `${Math.round(percentage/10) *10}%`
        setWid(rounded)
    },[])
    
  return (
      
    <div className='outer'>
        {[...Array(5)].map( (item,index)=> <FontAwesomeIcon key = {index} icon={faStar} />)}
        <div className='inner' style={{width:`${wid}`}} >
        {[...Array(5)].map( (item,index)=> <FontAwesomeIcon key = {index} color ="#ffc107" icon={faStar} />)}
        

        
</div>

    </div>
  )
}

export default Rating