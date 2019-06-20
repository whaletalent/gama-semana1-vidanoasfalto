import React, { Component } from 'react'
import CALL2A from '../components/CALL2A'
import CompactPostCards from '../components/CompactPostCard'



import mapRoad from '../assets/mapRoad.png'
import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'Dicas para evitar imprevistos durante a viagem',
                subtitle: 'Fazer um check-up do seu carro é essencial para garantir uma viagem segura e sem imprevistos.',
                textContent1: 'Mais um feriado se aproximando (20/08 - Corpus Christi) e milhões de pessoas usarão esses dias para descanso ou diversão. O vida no asfalto (VA) vai te ajudar a aproveitar esses momentos e curtir de forma mais segura.',
                textContent1meio: 'Para muitas pessoas serão 4 dias sem trabalhar, mas é importante que, antes de pegar a estrada, você cheque as condições de segurança do seu carro. Seja para perto ou para longe, fazer a revisão no seu veículo é essencial para garantir uma viagem tranquila. E para que você se lembre de tudo na hora da revisão, fizemos uma lista dos principais pontos para checar antes de pegar a estrada. Confira alguns itens básicos e dicas que às vezes deixamos passar batido:',
                topic1: 'Pneus',
                textContent2: 'Ponto clássico de checagem, os pneus, têm fácil visualização, mas o VNA te dá três dicas importantes:',
                topic2: 'Caso seu pneu fure, você pode não encontrar um borracheiro com tanta facilidade.',
                topic3: 'O pneu com bolhas pode explodir devido à exposição a altas temperaturas em rodovias a pressão pode aumentar',
                topic4: 'Pneus carecas indicam risco e não devem ser ignorados. Em caso de chuva permitem maior aquaplanagem e perda de controle da direção.',
                textContent3: 'A quantidade dos passageiros e de bagagem podem impactar nas na pressão que cada tipo de pneu pode suportar.',
                topic5: 'Rodas',
                textContent4: 'Juntinho dos pneus (hehe), as rodas também são pontos de atenção. Veja pontos de atenção nos diferentes tipos:',
                topic6: '. Observe as partes amassadas que podem provocar pressão nos pneus e fuga de ar, colocando em risco a vida do motorista e dos passageiro.',
                topic7: 'verifique se há quebras ou trincas. Caso encontre, dependendo da gravidade, será necessário substituí-las.',
                topic8: 'Triângulo, macaco e chave de roda',
                textContent5: 'Levar esses itens é obrigatório, mas testá-los antes de viajar é essencial. Não adianta fazer vista grossa, se seu triângulo não ficar em pé, troque-o!',
                textContent6: 'Caso seu pneu fure, macaco e chave de rodas também são fundamentais, portanto, teste posicionando o macaco no local adequado e verificando a lubrificação do equipamento (você não vai querer sofrer colocando mais força do que o necessário).',
                topic9: 'Sistema elétrico',
                textContent7: 'Confira se as lanternas, faróis e piscas estão em pleno funcionamento. A troca de uma lâmpada não leva muito tempo e garante a segurança dos viajantes.',
                topic10: 'Sistema de limpeza dos vidros',
                textContent8: 'Além dos limpadores e desembaçadores, verifique o nível do reservatório de limpeza e o estado das palhetas. Se as palhetas estiverem ressecadas, não farão sua função corretamente, impactando no escoamento correto da água. No dia em que for viajar, garanta que os vidros estejam bem limpos, pois a sujeira reflete luz e impactando na visão.',
                topic11: 'Depois de ter checado todos esses pontos é hora de cair na estrada. Dirija com segurança e boa viagem!',
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
                    <p className="text-content">{this.state.textContent1}</p><br />
                    <p className="text-content">{this.state.textContent1meio}</p><br />
                    <img className="imagem" src={mapRoad}/>
                    <h2 className="supertopic">{this.state.topic1}</h2>
                    <p className="text-content">{this.state.textContent2}</p>
                    <h5><span className="subtopic">1 - Não esqueça seu estepe!</span><br /><span className="text-content">{this.state.topic2}</span></h5>
                    <h5><span className="subtopic">2 - Verifique a existência de bolhas.</span><br /><span className="text-content">{this.state.topic3}</span><br /><br /><img className="imagem" src="https://i.makeagif.com/media/7-29-2015/VERCQU.gif" /></h5>
                    <h5><span className="subtopic">3 - Seja justo com a banda de rodagem.</span><br /><span className="text-content">{this.state.topic4}</span><br /><br /><img className="imagem" src="https://i.makeagif.com/media/5-27-2014/jP2cO3.gif" /></h5>
                    <h5 className="text-content"><span className="subtopic">Lembre-se:</span> <br />{this.state.textContent3}</h5><br /><br />
                    <img className="imagem" src="https://i.makeagif.com/media/6-09-2017/G-ouPi.gif" />
                    <h2 className="supertopic">{this.state.topic5}</h2>
                    <p className="text-content">{this.state.textContent4}</p><br />
                    <h5><span className="subtopic">1 - Nas rodas de aço.</span><br /><span className="text-content">{this.state.topic3}</span></h5>
                    <h5><span className="subtopic">2 - Nas rodas de liga leve.</span> <br /><span className="text-content">{this.state.topic4}</span></h5><br />
                    <h5 className="subtopic">Lembre-se: procure um borracheiro caso note alguma dessas características</h5>
                    <h2 className="supertopic">{this.state.topic8}</h2>
                    <span className="subtopic">{this.state.textContent5}</span><br />
                    <p>{this.state.textContent6}</p><br /><br />
                    
                    <h2 className="topic">{this.state.topic9}</h2>
                    <span className="text-content">{this.state.textContent7}</span>
                    <h2 className="topic">{this.state.topic10}</h2>
                    <span className="text-content">{this.state.textContent8}</span><br />
                    <span className="text-content">{this.state.topic11}</span>
                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <CompactPostCards />


            </section >
        )
    }
}

export default Article 