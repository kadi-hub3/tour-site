import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiUser, BiSearchAlt, BiGlobe } from 'react-icons/bi'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../images/logo.jpg'

export default class Nav extends Component {
    state = {
        navOpen: false
    }

    handleToggle = () => {
        this.setState({ navOpen: !this.state.navOpen })
    }

    render() {
        return (
            <nav>
                <div className='nav-logo'>
                    <Link to='/' >
                        <img src={logo} alt='logo' />
                    </Link>
                    <button className='nav-btn' onClick={this.handleToggle}><FaAlignRight /></button>
                </div>
                <ul className={this.state.navOpen ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to='/services' style={{ textDecoration: 'none' }}>Services</Link>
                    </li>
                    <li>
                        <Link to='/about' style={{ textDecoration: 'none' }}>About us</Link>
                    </li>
                    <li>
                        <Link to='/' style={{ textDecoration: 'none' }}><BiSearchAlt /></Link>
                    </li>
                    <li>
                        <Link to='/' style={{ textDecoration: 'none' }}><BiUser /></Link>
                    </li>

                </ul>

            </nav>
        )
    }
}
