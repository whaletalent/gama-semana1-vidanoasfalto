import React, { Component } from 'react'
import FormBait from '../components/FormBait'
import PostCards from '../components/PostCards'


import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'
import PostCard from '../components/PostCards';

class Article6 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'Insurtechs e os seguros digitais',
                subtitle: 'Inovação no mercado de seguros: os seguros digitais agilizam processos e barateiam os seguros automotivos.',

                               
                textContent1: 'Que a tecnologia está mudando o modo das empresas lidar com os clientes, não é novidade para ninguém. E diariamente ouvimos falar sobre novas startups que encontraram uma forma de solucionar algum problema de décadas ou que desenvolveram um serviço inovador para suprir a necessidade dos clientes.',
                textContent2: 'E claro, no mercado dos seguros não é diferente. Existem startups especializadas nesse ramo, são as insurtechs. O nome parece difícil, mas trocando em miúdos, é a inovação tecnológica para reduzir custos e aumentar eficiência no setor de seguros.',
                textContent3: 'A maioria das insurtechs são 100% digitais, você pode contratar ou cancelar o serviço pelo aplicativo e existem algumas que até oferecem o serviço de seguro sem pagamento de franquia (sim, talvez você tenha pago esse valor alguma vez sem necessidade ☹).',
                textContent4: 'Existem outras que oferecem aplicativo que analisa como você dirige e dependendo da avaliação você ganha um desconto de até 40% no valor do seguro do carro. Quanto será que você ganharia de desconto? rs',
                textContent5: 'As soluções e opções são muitas e você pode estar se questionando se vale a pena deixar aquela seguradora que você investe seu dinheiro anualmente para não ter dor de cabeça (ou o mínimo possível), mas às vezes não é bem isso que acontece, não é?',
                textContent6: 'Vai uma dica do VNA é: Se o casamento não está dando certo é melhor pedir o divórcio. Provavelmente a seguradora não vai mudar a forma de tratar seus clientes e você vai continuar com os mesmos problemas.',
                
                
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
                    <p>{this.state.textContent2}</p><br/>
                    <p>{this.state.textContent3}</p><br/>                    
                    <p>{this.state.textContent4}</p><br/>                      
                    <p>{this.state.textContent5}</p><br/>        
                    <FormBait 
                    title="Quer mais dicas para melhorar sua performance e se divertir na sua pausa no volante? Junte-se a nós!"
                    subtitle="Quer saber mais sobre seu carro?"
                    buttonMsg="Enviar"
                    />                       
                    <p>{this.state.textContent6}</p><br/>
                    <p>{this.state.textContent7}</p><br/>                           
                    <p>{this.state.textContent8}</p><br/> 
                    <span className="subtopic">{this.state.topic5}</span><br />
                    
                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <PostCards></PostCards>


            </section >
        )
    }
}

export default Article6