import React from 'react'
import fb from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = () => {
    return(
        <footer className="footer">
            <h1>Shortly</h1>
            <div className="footer-links">
                <div className="footer-links-col">
                    <h6>Features</h6>
                    <ul>
                        <li><a href="http://localhost:3000/">Link Shortening</a></li>
                        <li><a href="http://localhost:3000/">Branded Links</a></li>
                        <li><a href="http://localhost:3000/">Analytics</a></li>
                    </ul>
                </div>
                    <div className="footer-links-col">
                        <h6>Resources</h6>
                        <ul>
                            <li><a href="http://localhost:3000/">Blog</a></li>
                            <li><a href="http://localhost:3000/">Developers</a></li>
                            <li><a href="http://localhost:3000/">Support</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h6>Company</h6>
                        <ul>
                            <li><a href="http://localhost:3000/">About</a></li>
                            <li><a href="http://localhost:3000/">Our Team</a></li>
                            <li><a href="http://localhost:3000/">Careers</a></li>
                            <li><a href="http://localhost:3000/">Contact</a></li>
                        </ul>
                    </div>
                <div className="footer-icons">
                    <a href="http://facebook.com"><img src={fb} alt="facebook-icon"/></a>
                    <a href="http://twitter.com"><img src={twitter} alt="twitter-icon" /></a>
                    <a href="http://pinterest.com"><img src={pinterest} alt="pinterest-icon"/></a>
                    <a href="http://instagram.com"><img src={instagram} alt="instagram-icon"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer