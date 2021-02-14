import React from 'react'

const Header = ({ title, button }) => {
    return (
        <div className='header'>
            <h4>{title}</h4>
            <div></div>
            <button>{button}</button>
        </div>
    )
}

export default Header
