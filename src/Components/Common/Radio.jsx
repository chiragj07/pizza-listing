import React from 'react'

const Radio = ({name, item,onCheck}) => {
 const title = name==="name" ?"name" : "size";
  return (
    <div >
            <input type="radio"value={item[title]} onChange={onCheck} className="custom-radio" name={title} id={item[title]} 
              />
            <label htmlFor={item[title]}>
              <span>{item[title]}</span>
            </label>
         </div>
  )
}

export default Radio