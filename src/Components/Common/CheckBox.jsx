import React from 'react'

const CheckBox = ({item, checkHandler}) => {
  return (
    <div>

        <input type="checkbox" value={item.name} id={item.name} onChange={checkHandler} />
            <label htmlFor={item.name}>
              <span>{item.name}</span>
            </label>
    </div>
  )
}

export default CheckBox