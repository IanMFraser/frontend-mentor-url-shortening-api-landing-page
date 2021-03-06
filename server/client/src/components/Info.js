import React from 'react'
import recognition from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import customizable from '../images/icon-fully-customizable.svg'

const Info = () => {
    return(
        <section className="info">

            <div className="info-title">
                    <h1>Advanced Statistics</h1>
                    <p>Track how your links are performing across the web
                    with our advanced statistics dashboard.
                    </p>
            </div>

                <div className="info-cards">
                    <div className="info-card">
                        <div className="card-icon">
                            <div className="icon">
                                <img src={recognition} alt="brand-img"></img>
                            </div>
                        </div>
                        <h2>Brand Recognition</h2>
                        <p>Boost your brand recognition with each click.
                        Generic links don't mean a thing. Branded
                        links help instil confidence in your content.
                        </p>
                    </div>
                    
                    <div className="info-card">
                        <div className="card-icon">
                            <div className="icon">
                                <img src={records} alt="detailed-img"></img>
                            </div>
                        </div>
                        <h2>Detailed Records</h2>
                        <p>Gain insights into who is clicking your
                        links. Knowing when and where
                        people engage with your content
                        helps inform better decisions.
                        </p>
                    </div>

                    <div className="info-card">
                        <div className="card-icon">
                            <div className="icon">
                                <img src={customizable} alt="customizable-img"></img>
                            </div>
                        </div>
                        <h2>Fully Customizable</h2>
                        <p>Improve brand awareness and
                        content discoverability through
                        customizable links, supercharging
                        audience engagement.
                        </p>
                    </div>

                    <div className="green-bar"></div>
                </div>

            </section>
    )
}

export default Info