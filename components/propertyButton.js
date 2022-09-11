import React from 'react'

const PropertyButton = ({ property, onClick }) => {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black'
      onClick={onClick}
    >
      {property}
    </button>
  )
}

export default PropertyButton