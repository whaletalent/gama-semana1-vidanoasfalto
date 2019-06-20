import React, { Component } from 'react'
import CALL2A from '../components/CALL2A'
import CompactPostCards from '../components/CompactPostCard'

import uber1 from '../assets/uber1.png'
import uber2 from '../assets/uber2.png'
import uber3 from '../assets/uber3.png'
import uber4 from '../assets/uber4.png'
import uber5 from '../assets/uber5.png'
import uber6 from '../assets/uber6.png'
import uberbonus from '../assets/uberbonus.png'
import uberbonus2 from '../assets/uberbonus2.png'

import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'

class Article2 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'Você já pegou um passageiro estranho? Veja algumas reações hilárias!',
                subtitle: 'Todos os dias, milhões de viagens são feitas no aplicativo, então é de se esperar algumas situações no mínimo engraçadas, confira:',

                topic1: 'Vida no Asfalto',
                topic2: 'Bônus: as melhores avaliações possíveis',

                imageText1: '1. Quando André escolheu o caldo de cana a uma corrida?',
                imageText2: '2. Fernando se livrou de uma passageira sem noção',
                imageText3: '3. Bruno mereceu um espetinho!',
                imageText4: '4. A Silvana prezou pela segurança!',
                imageText5: '5. Tudo para manter a pontuação alta',
                imageText6: '6. Respeito é bom e todo mundo gosta. Até o Rolando.',
                imageText7: '1. Motorista que devolve o filho é top.',
                imageText8: '2. Quando o “hommi é lindo”',

                subtitle1: 'Prioridades, né?!',
                subtitle2: '"Vai demorar muito?"',
                subtitle3: 'Nada mais justo!',
                subtitle4: 'Melhor evitar os aeroportos.',
                subtitle5: 'Quando o passageiro pede para cancelar é complicado',
                subtitle6: 'Já perdeu a graça!',


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
                    <h2 className="subtopic">{this.state.topic1}</h2><br />

                    <h2 className="subtopic">{this.state.imageText1}</h2><br />
                    <img src={uber1} />
                    <span className="mini-title">{this.state.subtitle1}</span><br/><br/>

                    <h2 className="subtopic">{this.state.imageText2}</h2><br />
                    <img src={uber2} />
                    <span className="mini-title">{this.state.subtitle2}</span><br/><br/>                   

                    <h2 className="subtopic">{this.state.imageText3}</h2><br />
                    <img src={uber3} />
                    <span className="mini-title">{this.state.subtitle3}</span><br/><br/>

                    <h2 className="subtopic">{this.state.imageText4}</h2><br />
                    <img src={uber4} />
                    <span className="mini-title">{this.state.subtitle4}</span><br/><br/>

                    <h2 className="subtopic">{this.state.imageText5}</h2><br />
                    <img src={uber5} />
                    <span className="mini-title">{this.state.subtitle5}</span><br/><br/>

                    <h2 className="subtopic">{this.state.imageText6}</h2><br />
                    <img src={uber6} />
                    <span className="mini-title">{this.state.subtitle6}</span><br/><br/>

                    <h2 className="subtopic">{this.state.topic2}</h2><br />

                    <h2 className="subtopic">{this.state.imageText7}</h2><br />
                    <img src={uberbonus} />

                    <h2 className="subtopic">{this.state.imageText8}</h2><br />
                    <img src={uberbonus2} />


                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <CompactPostCards />


            </section >
        )
    }
}

export default Article2 