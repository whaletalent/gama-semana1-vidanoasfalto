import React, {Component }from 'react';
import '../styles/CardImage.scss'
import Popup from './Popup'
import { Title, Button, Hero, Container } from "rbx";
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
            
        <Hero size="large" id="hero">
            <Hero.Body>
                <Container textAlign="centered">
                    <Title id="text"  size={1}>Minha Vida no asfalto</Title>
                    <Title  id="text" as="h1"  size={1} subtitle>
                    Clube Exclusivo
                    </Title>
                    <Title subtitle size={6} id="textP" subtitle subtitle>
                    Quer ser um dos primeiros a participar do “Meu Vida no Asfalto”, nosso clube conteudo exclusivo? Os primeiros convites são limitados e o cadastro encerra em xDias.
Acelere e garanta já o seu lugar!
                    </Title>
                    <ModalButton/>
                </Container>
            </Hero.Body>
        </Hero>
        </div>
        )
    }
} 


export default CardImage


