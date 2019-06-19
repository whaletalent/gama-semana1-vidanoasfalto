import React, { Component } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'


class Article extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'TITULO DO ARTIGO',
                subtitle: 'Porque comprar um carro semi-novo?',
                textContent1: 'loremipsumjsh jdhgjjgjd fkgkjfjgjfdkgjdfjjgkfd jjgdfjnbjfgdnbjkd fjgfdjgfdgkjdfg',
                textContent2: 'loremipsumjsh jdhgjjgjd fkgkjfjgjfdkgjdfjjgkfd jjgdfjnbjfgdnbjkd fjgfdjgfdgkjdfg',
                imageUrl: ''
            };
    }
    render() {

        return (
            <section className="page-content">

                <div className="article-info">
                    <h1 className="title">{this.state.title}</h1>
                    <h5 className="subtitle">{this.state.subtitle}</h5>
                </div>
                <div className="article-content">
                    <p>{this.state.textContent1}</p>
                    <img src={this.state.imageUrl} alt="imagem do artigo" />
                    <p>{this.state.textContent1}</p>
                </div>


            </section >
        )
    }
}

export default Article