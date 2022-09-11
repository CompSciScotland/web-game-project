import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='h-full container mx-auto px-20 pt-10'>
            {children}
        </div>
    )
}

export default Container