import React, {Component }from 'react';

import { Title, Button, Hero, Container } from "rbx";
const style ={ 
    backgroundImage: "url(" + "https://i.imgur.com/x0Hf91B.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
class HeroTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup: false,
        }
    }
    
    render() {
        return(
        <div >
        
        <Hero color="primary" size="Medium" id="hero-title" style={style}>
            <Hero.Body>
                <Container textAlign="centered">
                    
                    <Title id="text"  size={2}>{this.props.title}</Title>
                    <Title  id="text" as="h1"  size={5} subtitle>
                    {this.props.subtitle}
                    </Title>
                </Container>
            </Hero.Body>
        </Hero>
        </div>
        )
    }
} 


export default HeroTitle


