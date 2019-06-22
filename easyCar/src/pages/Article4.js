import React, { Component, Fragment } from 'react'
import FormBait from '../components/FormBait'
import PostCards from '../components/PostCards'
import HeroTitle from '../components/HeroTitle'
import mulhereslavando1 from '../assets/mulheres-lavando1.gif'
import mulhereslavando2 from '../assets/mulheres-lavando2.gif'
import mulhereslavando3 from '../assets/mulheres-lavando3.gif'
import MetaTags from 'react-meta-tags';

import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'


class Article4 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'É assim mesmo que eu lavo meu carro!',


                topic: '',


                textContent1: 'Estavamos em busca de fotos de mulheres cuidando de veículos para usarmos nas comunicações do blog, quando nos deparamos com esa questão. Além de quase não existir esse tipo de registro, as poucas que encontramos foram essas:',
                textContent2: 'Mulheres semi-nuas, ensaboando a lataria com o bumbum empinado e carão.',
                textContent3: 'Espante-se com nosso espanto, mas já passou o tempo das mulheres serem retratadas de forma sexualizada.',
                textContent4: 'E como a missão da Vida no Asfalto é levar informação, não podemos ficar quietos diante dessa situação.',
                textContent5: 'Por isso, queremos fazer um movimento para transformarmos os bancos de imagens e as concepções da sociedade quando se fala em automóveis! ',
                textContent6: 'Assine com seu nome e e-mail para apoiar a ação!',
                textContent7: 'O Vida no Asfalto não é só mais um blog sobre carros. Nós buscamos simplificar a linguagem automotiva e aproximá-la de todas as pessoas para que elas possam elevar seus conhecimentos e ter uma experiência melhor na mobilidade do dia a dia.',


            };
    }
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>É assim mesmo que eu lavo meu carro!</title>
                    <meta id="meta-description" name="description" content="Espante-se com nosso espanto, mas já passou o tempo das mulheres serem retratadas de forma sexualizada." />
                    <meta id="og-title" property="og:title" content="É assim mesmo que eu lavo meu carro!" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="Vida no Asfalto" />
                    <meta property="article:publisher" content="https://www.facebook.com/vidanoasfalto" />
                    <link rel="canonical" href="https://www.vidanoasfalto.com.br/artigos/e-assim-que-eu-lavo-meu-carro" />


                </MetaTags>
                <HeroTitle title={this.state.title} subtitle={this.state.subtitle}></HeroTitle>
                <section className="page-content">


                    <div className="article-content">

                        <p>{this.state.textContent1}</p><br />

                        <img className="imagem" src={mulhereslavando1} alt="mulheres lavando carro"/><br />
                        <img className="imagem" src={mulhereslavando2} alt="mulheres lavando carro"/><br />
                        <img className="imagem" src={mulhereslavando3} alt="mulheres lavando carro"/><br />

                        <p className='text-content'>{this.state.textContent2}</p><br />
                        <p className='text-content'>{this.state.textContent3}</p><br />
                        <p className='text-content'>{this.state.textContent4}</p><br />
                        <p className='text-content'>{this.state.textContent5}</p><br />
                        <p className='text-content'>{this.state.textContent6}</p><br />
                        <FormBait
                            title="Faça parte desse movimento!"
                            subtitle="Junte-se a nós!"
                            buttonMsg="Eu Apoio!"
                        ></FormBait>
                        <p className='text-content'>{this.state.textContent7}</p><br />
                        <p className='text-content'>{this.state.textContent8}</p>
                        <h5 className='sub-topic'>{this.state.topic}</h5>
                    </div>
                    <img className="div-bar" src={divBar} />
                    <h1 className="topic">Leia Também</h1>
                    <PostCards></PostCards>


                </section >
            </Fragment>
        )
    }
}

export default Article4