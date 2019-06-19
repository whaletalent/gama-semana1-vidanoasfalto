import React from 'react';
import '../styles/CardImage.scss'
import Form from '../components/Form'
import { Title } from "rbx";

const CardImage = ({ title, description, imageURL }) => (
    <div class="hero-section">
        <img src={imageURL} alt="Imagem Card" />
        <div class="centered">
            <Title>{title}</Title>
            <Title subtitle size={3}>{description}</Title>
            <Form />
        </div>
    </div>
)

export default CardImage


