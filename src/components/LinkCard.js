import React, {useState} from 'react'

const LinkCard = ({link}) => {
    const originalUrl = link.long
    const shortenedUrl = link.short
    const [copied, setCopied] = useState(false)

    const copyUrl = () => {
        const button = document.getElementById(`${originalUrl}`)
        const copyText = document.querySelector('.copy-link').firstChild
        
        const r = document.createRange()
        r.selectNode(copyText)

        if(!copied){
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(r)
            document.execCommand("copy")
            window.getSelection().removeAllRanges()
            button.style.backgroundColor = "hsl(257, 27%, 26%)"
            button.style.color = "white"
            button.innerHTML = "Copied!"
            setCopied(true)

            setTimeout(
                function(){
                    button.style.backgroundColor = "hsl(180, 66%, 49%)";
                    button.style.color = "white"
                    button.innerHTML = "Copy!"
                    setCopied(false)
                }, 3000
            )
        }
    }

    //sometimes the URL is too long for the display
    //this function truncates long URLs for the link card
    const tooLong = (longUrl) => {
        if(longUrl.length > 25) {
            const newUrl = []
            for(let i = 0; i < 25; i++) {
                newUrl.push(longUrl[i])
            }
            return `${newUrl.join('')}...`
        } else {
            return longUrl
        }
    }

    return(
        <div className="link-card">
            <p>{tooLong(originalUrl)}</p>
            <div className="copy-link">
                <p>{shortenedUrl}</p>
                <button id={`${originalUrl}`} className="copy-link-button" onClick={copyUrl}>Copy</button>
            </div>
        </div>
    )
}

export default LinkCard