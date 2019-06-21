import React, { Component } from 'react'
import FormBait from '../components/FormBait'
import PostCards from '../components/PostCards'


import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'

class Article5 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: '5 passos para vender seu carro acima da tabela FIPE',
                
               
                
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
            <section className="page-content">

                <div id="Titulo" className="article-info">
                    <h1 className="title">{this.state.title}</h1>
                    <h5 className="subtitle">{this.state.subtitle}</h5>
                </div>
                <div className="article-content">
                    <p>{this.state.textContent1}</p><br/>
                    <p>{this.state.textContent2}</p><br/>
                    <p>{this.state.textContent3}</p><br/>
                    
                    <p>{this.state.textContent4}</p><br/>
                     
                    <p>{this.state.textContent5}</p><br/>        
                          
                     
                    <p>{this.state.textContent6}</p><br/>
                    <p>{this.state.textContent7}</p><br/>   
                        
                    <p>{this.state.textContent8}</p><br/> 
                    <p>{this.state.textContent9}</p><br/> 
                    <FormBait 
                    title="Quer mais dicas para melhorar sua performance e se divertir na sua pausa no volante? Junte-se a nós!"
                    subtitle="Quer saber mais sobre seu carro?"
                    buttonMsg="Enviar"
                    />  
                    <span className="subtopic">{this.state.topic5}</span><br />
                    
                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <PostCards></PostCards>


            </section >
        )
    }
}

export default Article5