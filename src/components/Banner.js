import React from 'react'

const Banner = ({ title, subtitle, children }) => {
    return (
        <div className='banner'>
            <div></div>
            <h4>{subtitle}</h4>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Banner
