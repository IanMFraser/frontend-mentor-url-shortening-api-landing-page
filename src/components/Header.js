import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <Navigation/>
        </div>
    )
}

export default Header