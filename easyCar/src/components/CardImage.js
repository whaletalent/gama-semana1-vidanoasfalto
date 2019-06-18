import React from 'react';
import '../styles/CardImage.scss'
import Form from '../components/Form'

const CardImage = ({ title, description, imageURL }) => (
    <div class="hero-section">
        <img src={imageURL} alt="Imagem Card" />
        <div class="centered">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <Form></Form>
        </div>
    </div>
)

export default CardImage


