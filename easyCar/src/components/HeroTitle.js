import React, {Component }from 'react';

import { Title, Button, Hero, Container } from "rbx";

class HeroTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup: false,
        }
    }
    
    render() {
        return(
        <div>
        
        <Hero color="primary" size="Medium" id="hero-title">
            <Hero.Body>
                <Container textAlign="centered">
                    <img src={this.props.img}></img>
                    <Title id="text"  size={2}>{this.props.title}</Title>
                    <Title  id="text" as="h1"  size={2} subtitle>
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


