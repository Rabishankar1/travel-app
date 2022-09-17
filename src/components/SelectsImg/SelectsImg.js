import React from 'react'
import './SelectsImg.css'
import BoraBora from '../../assets/borabora.jpg';

function SelectsImg({ text, bgImg }) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt="/" />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg