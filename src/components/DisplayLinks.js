import React from 'react'
import LinkCard from './LinkCard'

const DisplayLinks = ({links}) => {
    console.log(links)
    return(
        <div className="display-links">
            <ul>
                {   links.map((link, i) => {
                        return <li key={i}><LinkCard link={link} /></li>
                    }) 
                }
            </ul>
        </div>
    )
}

export default DisplayLinks