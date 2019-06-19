import React, { Component, Fragment } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'
import PostCards from '../components/PostCards'
import CardImage from '../components/CardImage'


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
                 <CardImage title="Minha Vida no Asfalto" subtitle="Clube Exclusivo" imageURL='./assets/BannerHome.png' description='Quer ser um dos primeiros a participar do "Minha vida no asfalto", nosso clube de conteúdo exclusivo? Os primeiros convites são limitados e o cadastro encerra em X dias. Acelere e garanta já o seu lugar!"' />
                <section className="page-content">
                    <div className="feed">
                        <PostCards/>
                    </div>
                </section >
            </Fragment>
        )
    }
}

export default Feed