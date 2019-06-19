import React from 'react';
import '../styles/BannerImage.scss'
import { Title } from "rbx";
import BannerImage1 from '../assets/BannerImage1.png'

const BannerImage = ({ title, subtitle, imageURL}) => (
    <div class="banner-container">  
        <img src={BannerImage1}/>    
        <div class="centered">            
            <Title className="banner-title">{title}</Title>
            <Title subtitle size={3} className="banner-subtitle">{subtitle}</Title>          
        </div>
    </div>
)

export default BannerImage
