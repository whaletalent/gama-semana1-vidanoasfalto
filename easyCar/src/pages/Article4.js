import React, { Component } from 'react'
import CALL2A from '../components/CALL2A'
import PostCards from '../components/PostCards'

import mulhereslavando1 from '../assets/mulheres-lavando1.gif'
import mulhereslavando2 from '../assets/mulheres-lavando2.gif'
import mulhereslavando3 from '../assets/mulheres-lavando3.gif'


import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'


class Article4 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'É assim mesmo que eu lavo meu carro!',
                

                topic: 'Faça parte do Clube',
                
                
                textContent1: 'Estavamos em busca de fotos de mulheres cuidando de veículos para usarmos nas comunicações do blog, quando nos deparamos com esa questão. Além de quase não existir esse tipo de registro, as poucas que encontramos foram essas:',
                textContent2: 'Mulheres semi-nuas, ensaboando a lataria com o bumbum empinado e carão.',
                textContent3: 'Espante-se com nosso espanto, mas já passou o tempo das mulheres serem retratadas de forma sexualizada.',
                textContent4: 'E como a missão da Vida no Asfalto é levar informação, não podemos ficar quietos diante dessa situação.',
                textContent5: 'Por isso, queremos fazer um movimento para transformarmos os bancos de imagem e as concepções da sociedade quando se fala em automóveis! ',
                textContent6: 'Assine com seu nome e e-mail para apoiar a ação!',
                textContent7: 'O Vida no Asfalto não é só mais um blog sobre carros. Nós buscamos simplificar a linguagem automotiva e aproximá-la de todas as pessoas para que elas possam elevar seus conhecimentos e ter uma experiência melhor na mobilidade do dia a dia.',
                
                
            };
    }
    render() {
        return (
            <section className="page-content">
                <div id="Titulo" className="article-info">
                    <h1 className="title">{this.state.title}</h1>                    
                </div>

                <div className="article-content">

                    <p>{this.state.textContent1}</p><br/>

                    <img className="imagem" src={mulhereslavando1}/><br/>
                    <img className="imagem" src={mulhereslavando2}/><br/>
                    <img className="imagem" src={mulhereslavando3}/><br/>

                    <p className='text-content'>{this.state.textContent2}</p><br/>
                    <p className='text-content'>{this.state.textContent3}</p><br/>                    
                    <p className='text-content'>{this.state.textContent4}</p><br/>
                    <p className='text-content'>{this.state.textContent5}</p><br/>        
                    <p className='text-content'>{this.state.textContent6}</p><br/>
                    <CALL2A className="CTA" linkURL="" writtenLink="" call="Quer mais dicas para melhorar sua performance e se divertir na sua pausa no volante? Junte-se a nós!" /><br/><br/>        
                    <p className='text-content'>{this.state.textContent7}</p><br/>                          
                    <p className='text-content'>{this.state.textContent8}</p>               
                    <h5 className='sub-topic'>{this.state.topic}</h5>
                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <PostCards></PostCards>


            </section >
        )
    }
}

export default Article4