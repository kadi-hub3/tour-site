import React from 'react'

const Banner = ({ title, subtitle, children }) => {
    return (
        <div className='banner'>
            <div></div>
            <p>{subtitle}</p>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Banner
