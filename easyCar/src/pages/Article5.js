import React, { Component, Fragment } from 'react'
import FormBait from '../components/FormBait'
import PostCards from '../components/PostCards'
import HeroTitle from '../components/HeroTitle'

import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'
import FormDownloadInfo from '../components/FormDownloadInfo';

class Article5 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: '5 Passos para Vender seu Carro acima da Tabela FIPE',
                
               
                
                textContent1: 'Chegou a hora de dizer tchau ao seu carro?',
                textContent2: 'Aqui vão algumas dicas para conseguir vende-lo no melhor preço:',
                textContent3: 'Meu primeiro carro me acompanhou por um bom tempo e aguentou poucas e boas.',
                textContent4: 'Eu tinha um carinho enorme por ele, mas foi preciso desapegar.',
                textContent5: 'Afinal, batalhamos para evoluir a cada dia, nada mais justo andarmos com um carro a nossa altura, mais bonito, mais veloz, mais confortável....(a lista vai longe).',
                textContent6: 'A dificuldade é que todo mundo sabe que o carro desvaloriza desde o minuto que sai da concessionária.',
                textContent7: 'Pensando nisso, fiz uma pesquisa para entender como conseguiria vender meu carro por um valor mais alto e achei que poderia ser útil para mais pessoas.',
                textContent8: 'Montei um passo a passo bem visual e fácil de ler.',
                textContent9: 'Você pode acessá-lo colocando seu nome completo e e-mail aqui embaixo:',
                
            };
    }
    render() {

        return (
            <Fragment>
            <HeroTitle title={this.state.title }subtitle={this.state.subtitle}></HeroTitle>
            <section className="page-content">
                    
                    <div className="article-content">
                    <p className="text-content">{this.state.textContent1}</p><br/>
                    <p className="text-content">{this.state.textContent2}</p><br/>
                    <p className="text-content">{this.state.textContent3}</p><br/>                    
                    <p className="text-content">{this.state.textContent4}</p><br/>                                       
                    <p className="text-content">{this.state.textContent5}</p><br/> 
                    <p className="text-content">{this.state.textContent6}</p><br/>
                    <p className="text-content">{this.state.textContent7}</p><br/>
                    <p className="text-content">{this.state.textContent8}</p><br/>                    
                    <p className="text-content">{this.state.textContent9}</p><br/>                      
                    <p className="text-content">{this.state.textContent5}</p><br/> 
                    </div>

                    <FormDownloadInfo 
                    title="Preencha o Formulário para acessar o Infográfico"
                    subtitle=""
                    buttonMsg="Acessar Infográfico"
                    />  


            </section >
            </Fragment>
        )
    }
}

export default Article5