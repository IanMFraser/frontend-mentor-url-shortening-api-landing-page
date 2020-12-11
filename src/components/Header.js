import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <Navigation/>
        </header>
    )
}

export default Header