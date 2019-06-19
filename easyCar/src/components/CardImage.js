import React from 'react';
import '../styles/CardImage.scss'
import Form from '../components/Form'
import { Title } from "rbx";
import BannerHome from '../assets/BannerHome.png'

const CardImage = ({ title, subtitle, imageURL, description  }) => (
    <div class="hero-section">
        <img src={BannerHome} alt="Imagem Card" />
        <div class="centered">
            <Title className="home-title">{title}</Title>
            <Title subtitle size={3} className="home-subtitle">{subtitle}</Title>
            <p>{description}</p>

            <Form />
        </div>
    </div>
)

export default CardImage


