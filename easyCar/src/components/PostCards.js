import React, { Component, Fragment } from 'react'
import '../styles/Feed.scss'
import { Column, Button } from 'rbx'
import postImage1 from '../assets/postImage1.png'
import { Link } from 'react-router-dom'

class PostCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Estradas',
                    subtitle: 'Estradas são feitas de asfalto ou marshmallow?',
                    imageUrl: postImage1,
                    urlArticle: '/artigoteste'
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
                            <Link to={card.urlArticle}>
                                <div className="card" key={card.id}>                                    
                                    <h1 className="card-title">{card.title}</h1>
                                    <h2 className="category">{card.subtitle}</h2>
                                </div>
                            </Link>
                        ))
                    }
                </Column.Group>
            </Fragment>
        )
    }
}
export default PostCard