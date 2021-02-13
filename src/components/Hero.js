import React from 'react'

const Hero = ({ hero, children }) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: 'bcg-img'
}

export default Hero
