import React, { Component, Fragment } from 'react'
import '../styles/Feed.scss'
import { Column, Button } from 'rbx'
class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Geral',
                    subtitle: 'Porque comprar um carro semi-novo?',
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
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: ''
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: ''
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: ''
                },
            ]
        };
    }
    render() {
        return (
            <Fragment>
                <Column.Group multiline centered>
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
                </Column.Group>
            </Fragment>
        )
    }
}
export default PostCard