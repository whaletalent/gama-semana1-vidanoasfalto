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
                    <Title id="text"  size={1}>Meu Vida no asfalto</Title>
                    <Title  id="text" as="h1"  size={1} subtitle>
                    Clube Exclusivo
                    </Title>
                    <Title subtitle size={6} id="textP" subtitle subtitle>
<<<<<<< HEAD
<<<<<<< HEAD
                    Quer ser um dos primeiros a participar do “Meu Vida no Asfalto”, nosso clube conteudo exclusivo? Os primeiros convites são limitados e o cadastro encerra em 2 Dias.
=======
                    Quer ser um dos primeiros a participar do “Minha Vida no Asfalto”, nosso clube conteudo exclusivo? Os primeiros convites são limitados e o cadastro encerra em x Dias.
>>>>>>> 8c4cfeb74fcf911167d59a4f34a29302068801ac
=======
                    Quer ser um dos primeiros a participar do “Minha Vida no Asfalto”, nosso clube conteudo exclusivo? Os primeiros convites são limitados e o cadastro encerra em 2 Dias.
>>>>>>> 6f7aba70967d9c18118141e437273fe688b8e40c
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


