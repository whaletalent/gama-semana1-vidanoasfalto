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

                    <FormBait 
                    title="Quer mais dicas para melhorar sua performance e se divertir na sua pausa no volante? Junte-se a nós!"
                    subtitle="Quer saber mais sobre seu carro?"
                    buttonMsg="Enviar"
                    />  


            </section >
        )
    }
}

export default Article5