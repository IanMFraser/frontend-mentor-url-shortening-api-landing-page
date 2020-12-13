import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return(
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="fa-icon">
                <a href="http://localhost:3000"><FontAwesomeIcon icon={faBars} size="lg"/></a>
            </div>
            <Navigation/>
        </header>
    )
}

export default Header