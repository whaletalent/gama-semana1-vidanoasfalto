import React, { Component, Fragment } from 'react'
import '../styles/Feed.scss'
import { Column, Title } from 'rbx'
import { Link } from 'react-router-dom'

import post1 from '../assets/postImage1.png'
import post2 from '../assets/post2.png'
import post3 from '../assets/post3.png'
import post4 from '../assets/post4.png'
import post5 from '../assets/post5.png'
import post6 from '../assets/post6.png'

class PostCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Estradas',
                    subtitle: 'Dicas para evitar imprevistos durante a viagem',
                    imageUrl: post1,
                    urlArticle: '/artigos/dicas-para-evitar-imprevistos-durante-a-viagem'

                },
                {
                    title: 'Ponteiros de mouse',
                    subtitle: 'Cursor aparece de forma deselegante',
                    imageUrl: post2,
                    urlArticle: '/artigos/2'
                },
                {
                    title: 'Geral',
                    subtitle: 'card 3 texto',
                    imageUrl: post3,
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: post4,
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: post5,
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: post6,
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
                                <div className="cardPost" key={card.id}> 
                                    <img src={card.imageUrl} />    
                                    <div class="postLegend">
                                        <Title size={7} id="textTitle">{card.title}</Title>
                                        <Title id="textSubtitle" size={5} subtitle> {card.subtitle}</Title>
                                    </div>                             
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