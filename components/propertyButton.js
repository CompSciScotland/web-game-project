import React from 'react'

const PropertyButton = ({ show, property, onClick }) => {
  if (show[property]) {
    return (
      <div className='flex justify-between'>
        <button
          className='w-4/5 h-16 bg-transparent text-white font-bold py-2 px-4 rounded border-4 border-black'
          onClick={() => onClick(property)}
        >
          {property}
        </button>
        <div className='relative'>
          <button className='h-16 w-16 p-1 border-4 border-black rounded text-white font-bold'>L</button>
          <img className='abolute right-[-50px]' src="./learn-options.png"></img>
        </div>
      </div>
    )
  } else {
    return null  
  }
}

export default PropertyButton