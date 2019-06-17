import React from 'react';
import './CardImage.css'

const CardImage = ({ title, description, imageURL }) => (
    <div class="container">
        <img src={imageURL} alt="Imagem Card" />
        <div class="centered">
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
    </div>
)

export default CardImage


