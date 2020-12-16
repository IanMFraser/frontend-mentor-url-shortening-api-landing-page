import React from 'react'
import hero from '../images/illustration-working.svg'

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero-img">
                <img src={hero} alt="working"></img>
            </div>
            <div className="hero-info">
                <h1>More than just shorter links</h1>
                <p>
                Build your brand's recognition and get
                detailed insights on how your links are performing.
                </p>
                <button className="hero-button">Get Started</button>
            </div>
        </section>
    )
}

export default Hero