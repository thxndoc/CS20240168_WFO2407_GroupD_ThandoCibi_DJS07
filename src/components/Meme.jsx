import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {
    let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
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
                    />
                <label htmlFor='bottom-text'>Bottom Text</label>
                    <input 
                        id='bottom-text'
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼️
                </button>
            </div>
        </main>
    )
}