import React from 'react'

export default function Meme() {
    return (
        <main>
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
                <button className="form--button">Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}