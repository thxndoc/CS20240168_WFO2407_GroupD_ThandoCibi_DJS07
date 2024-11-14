import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {
    // const [memeImage, setmemeImage] = React.useState('http://i.imgflip.com/1bij.jpg')
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    

    let url
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }

    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <label htmlFor='top-text'>Top Text</label>
                    <input 
                        id='top-text'
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                <label htmlFor='bottom-text'>Bottom Text</label>
                    <input 
                        id='bottom-text'
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}