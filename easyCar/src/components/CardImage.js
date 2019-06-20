import React, {Component }from 'react';
import '../styles/CardImage.scss'
import Popup from './Popup'
import { Title, Button } from "rbx";
import BannerHome from '../assets/BannerHome.png'
import ModalButton from '../components/ModalButton'


class CardImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup: false
        }
    }
    
    render() {
        return(
        <div class="hero-section">
            
        
            <img src={BannerHome} alt="Imagem Card" />
            <div class="centered">
                <Title className="home-title">{this.props.title}</Title>
                <Title subtitle size={3} className="home-subtitle">{this.props.subtitle}</Title>
                <p>{this.props.description}</p>          
                <ModalButton/>
            </div>
        </div>
        )
    }
} 


export default CardImage


