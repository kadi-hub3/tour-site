import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>About us</Link>
                </li>
                <li>
                    <Link to='/'>Contact us</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/'>Training</Link>
                </li>
                <li>
                    <Link to='/'>Status</Link>
                </li>
                <li>
                    <Link to='/'>Security</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/'>Terms</Link>
                </li>
                <li>
                    <Link to='/'>Privacy</Link>
                </li>
                <li>
                    <Link to='/'>Docs</Link>
                </li>
            </ul>

        </div>
    )
}

export default Footer
