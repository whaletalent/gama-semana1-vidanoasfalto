import React, { Component, Fragment } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'
import PostCards from '../components/PostCards'
import CardImage from '../components/CardImage'
import ContainerForm from '../components/ContainerForm'

class Feed extends Component {
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
                }
            ]
        };
    }
    render() {
        return (
            <Fragment>
                
                    <div className="feed">
                        <PostCards/>
                    </div>
                    <ContainerForm/>
                
            </Fragment>
        )
    }
}

export default Feed