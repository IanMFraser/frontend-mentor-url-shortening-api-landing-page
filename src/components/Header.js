import React, { useState } from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [clicked, setClicked] = useState(false)

    const clickHandler = (e) => {
        e.preventDefault()
        const nav = document.querySelector('.navigation')
        setClicked(!clicked)

        if(clicked){
            nav.style.display = "block"
            setClicked(!clicked)
        } else {
            nav.style.display = "none"
        }
 
    }

    return(
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="fa-icon">
                <a href="http://localhost:3000" onClick={clickHandler}><FontAwesomeIcon icon={faBars} size="lg"/></a>
            </div>
            <Navigation/>
        </header>
    )
}

export default Header