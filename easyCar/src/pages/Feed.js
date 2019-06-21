import React, { Component, Fragment } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'
import PostCards from '../components/PostCards'
import CardImage from '../components/CardImage'
import ContainerForm from '../components/ContainerForm'
import FormDownload from '../components/FormDownload';

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
                    <FormDownload
                    title="Quer fazer uma checklist para a sua próxima viagem?"
                    subtitle="Baixe a nossa checklist gratuita e se prepare com segurança para o seu próximo destino"
                    buttonMsg="Baixar Grátis"
                    />
                
            </Fragment>
        )
    }
}

export default Feed