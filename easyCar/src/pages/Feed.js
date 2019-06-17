import React, { Component } from 'react'
import Form from '../components/Form.js'
import  CardImage  from '../components/CardImage'
import "rbx/index.css";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Feed.scss'

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Geral',
                    subtitle: 'Porque comprar um carro sei-novo?',
                    imageUrl: ''
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: ''
                },
                {
                    title: 'Geral',
                    subtitle: 'card 3 texto',
                    imageUrl: ''
                }
            ]
        };
    }
    render() {
        return (
            <section className="page-content">
                <CardImage title="titulo" description="Descriçãojksdfgkjfdgjkdfg" imageURL=""/>
                <div className="feed">
                    {
                        this.state.cards.map(card => (
                            <div className="card"
                                key={card.id}
                            >
                                <h1 className="card-title">{card.title}</h1>
                                <h2 className="category">{card.subtitle}</h2>
                            </div>
                        ))
                    }
                </div>
            </section >
        )
    }
}

export default Feed