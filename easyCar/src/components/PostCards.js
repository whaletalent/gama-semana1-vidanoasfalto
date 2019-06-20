import React, { Component, Fragment } from 'react'
import '../styles/Feed.scss'
import { Column, Title } from 'rbx'
import { Link } from 'react-router-dom'

class PostCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Estradas',
                    subtitle: 'Dicas para evitar imprevistos durante a viagem',
                    imageUrl: 'https://image.freepik.com/fotos-gratis/raios-de-luz-do-sol-da-manha-perfurando-as-arvores_97378-54.jpg',
                    urlArticle: '/artigos/dicas-para-evitar-imprevistos-durante-a-viagem'

                },
                {
                    title: 'Ponteiros de mouse',
                    subtitle: 'Cursor aparece de forma deselegante',
                    imageUrl: '',
                    urlArticle: '/artigos/2'
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