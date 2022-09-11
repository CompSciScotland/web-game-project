import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='h-4/5 container mx-auto px-20 py-10'>
            {children}
        </div>
    )
}

export default Container