import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../data'
import logo from '../images/logo.jpg'

const Nav = () => {
    const [show, setShow] = useState(false)
    const linksContRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (show) {
            linksContRef.current.style.height = `${linksHeight}px`
        } else {
            linksContRef.current.style.height = '0'

        }
    }, [show])

    return <nav>
        <div className='nav-header'>
            <img src={logo} alt={logo} />
            <button className='nav-toggle' onClick={() => setShow(!show)}>
                <FaBars />
            </button>
        </div>

        <div className='links-container' ref={linksContRef}>
            <ul className='links' ref={linksRef}>
                {links.map(link => {
                    const { id, url, text } = link
                    return <li key={id}>
                        <Link to={url}>{text}</Link>
                    </li>
                })}
            </ul>
        </div>
        <ul className='social-icons'>
            {social.map(link => {
                const { id, url, icon } = link
                return <li key={id}>
                    <Link to={url}>{icon}</Link>
                </li>
            })}
        </ul>
    </nav>
}

export default Nav