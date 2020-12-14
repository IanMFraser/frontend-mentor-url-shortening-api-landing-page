import React, {useEffect, useState} from 'react';
import axios from 'axios'
import DisplayLinks from './DisplayLinks'
import Loader from 'react-loader-spinner'

const LinkForm = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [displayedLinks, setDisplayedLinks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const API_URL = `https://api.shrtco.de/v2/shorten?url=`

    const changeHandler = (e) => {
        setUrl(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(url === ''){
            const form = document.querySelector('.link-form').firstChild
            const input = document.querySelector('.form-input')
            const node = document.createElement('p')
            const message = document.createTextNode('Please add a link.')

            //if a user tries to submit an empty field, highlight the input red 
            //and display message
            input.style.border = '4px solid hsl(0, 87%, 67%)'
            node.appendChild(message)
            node.style.color = 'hsl(0, 87%, 67%)'
            input.style.setProperty('--c', 'hsl(0, 87%, 67%)')
            node.style.fontSize = '0.9rem';
            if(window.screen.width < 750){
                input.after(node)

                //after a second, revert back to normal
                setTimeout(
                    function(){
                        input.style.border = 'none'
                        input.style.setProperty('--c', 'hsl(257, 7%, 63%)')
                        form.removeChild(form.childNodes[1])
                    }, 3000
                )
            }
            else {
                form.appendChild(node)

                setTimeout(
                    function(){
                        input.style.border = 'none'
                        input.style.setProperty('--c', 'hsl(257, 7%, 63%)')
                        form.removeChild(form.childNodes[2])
                    }, 3000
                )
            }
            

    
        } else {
            setIsLoading(true)
            axios.get(`${API_URL}${url}`)
            .then(res => {
                const data = res.data.result
                setIsLoading(false)
                setShortUrl(data.short_link)
                setUrl('')
            })
        }
    }

    //push the shortened link to array whenever shortLink is updated
    useEffect(() => {
        const obj = {
            long: url,
            short: shortUrl
        }

        if(shortUrl !== ''){
            setDisplayedLinks( d => [...d, obj])
        }
    }, [shortUrl])

    return(
        <>
        <section className="link-form-container">
            <div className="link-form">
                <form onSubmit={onSubmit}>
                    <input placeholder="Shorten a link here..." onChange={changeHandler} value={url} className="form-input"></input>
                    <button className="form-submit-button" type="submit">Shorten It!</button>
                </form>
                { isLoading ? <Loader type="Oval" color="#00BFFF" height={30} width={30} className="loader" /> : null}
            </div>
        </section>
        <DisplayLinks links={displayedLinks} />
        </>
    )
}

export default LinkForm