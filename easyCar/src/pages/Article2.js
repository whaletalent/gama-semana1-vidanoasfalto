import React, { Component } from 'react'
import CALL2A from '../components/CALL2A'
import CompactPostCards from '../components/CompactPostCard'


import "rbx/index.css";
import '../styles/Article.scss'
import divBar from '../assets/divBar.svg'

class Article2 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                title: 'As viagens podem não ser baratas, mas não precisam ser caras.',
                subtitle: 'Ficar atento à questões simples como o uso do cinto pelo passageiro já ajuda a evitar multas.',

                topic1: 'Seguir a leis de trânsito',
                topic2: 'E o apressadinho?',
                topic3: 'Economizando seu tempo e dinheiro',
                topic4: 'Melhorando a comunicação',
                topic5: 'Uma boa viagem e até a próxima!',
                
                textContent1: 'Os motoristas que trabalham usando aplicativos como Uber, Cabify e 99 já formam uma enorme categoria daqueles que, nos dias e noites levam a vida no asfalto. Esses homens e mulheres utilizam um ou mais aplicativos simultaneamente e, muitas vezes têm dificuldades nas ruas.',
                textContent2: 'As empresas de transporte compartilhado costumam ajudar a melhorar os serviços dando dicas sobre atendimento para garantir as cinco estrelas tão desejadas. As benditas estrelinhas, não só: mostram ao passageiro qual o melhor atendimento,mas permitem aos motoristas a participação em promoções e atividades que melhoram o ganho em corridas e dias específicos.',
                textContent3: 'O vida no asfalto se juntou a motoristas para ver um pouco mais sobre o dia a dia usando os aplicativos e resolveu compartilhar um papo que diz respeito não só a quem está por trás do volante, mas também aos passageiros de aplicativos: como reduzir os custos em viagens por aplicativos.',
                textContent4: 'Pode parecer óbvio, mas nem todas as pessoas querem colaborar seguindo o que está previsto em lei. Isso mesmo, o desrespeito a normas como o uso do cinto, parada em locais não permitidos e falar ao telefone são exemplos clássicos de como você pode reduzir seus custos em viagens que podem te valer multas bem caras. Então fique atento: enquanto estiver dirigindo use o telefone apenas para orientar suas viagens, peça ao passageiro para colocar o cinto de segurança e; não pare em local proibido apenas para agradar um passageiro. Todos os apps possuem campos para relatar problemas, caso o passageiro não queira ajudar.',
                textContent5: 'Um clássico da vida de quem trabalha dirigindo o pedido do passageiro: “Dá pra ir mais rápido?” De uma forma tranquila, sua resposta será algo do tipo: Estou indo na velocidade máxima permitida.',
                textContent6: 'Um ponto sempre relatado pelos passageiro e estimulado pelos apps a ser acompanhado é a limpeza do seu carro. Daí você pode pensar: trabalho o dia quase todo e mal tenho tempo para curtir minha família, estudar ou simplesmente ficar à toa… em que momento eu vou lavar o carro e me preocupar com manutenções básicas?',
                textContent7: 'Seja para você motorista, dono de frota ou usuário que possui carro, os aplicativos não são apenas de corrida compartilhada.  A Easy Carros, por exemplo, já oferece serviços que prezam pela sua comodidade agendando horários e com uma série de facilidades… vale a pena conferir!',
                textContent8: 'Por fim, para oferecer corridas com qualidade e reduzir custos (financeiros ou psicológicos), o negócio é estabelecer uma boa comunicação com o passageiro. Assim, você terá na prática uma viagem mais tranquila e ainda poderá ganhar suas desejadas estrelinhas. Deseje sempre um bom dia e mantenha um papo leve, percebendo o estado da pessoa que está compartilhando a viagem com você (nem sempre ela vai querer conversar por horas).',
                textContent9: 'Então, nós do Vida no asfalto de desejamos:',
                
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
                    <h2 className="supertopic">{this.state.topic1}</h2><br/>
                    <p>{this.state.textContent4}</p><br/>
                    <h2 className="supertopic">{this.state.topic2}</h2><br/>  
                    <p>{this.state.textContent5}</p><br/>        
                    <CALL2A className="CTA" linkURL="" writtenLink="" call="Quer mais dicas para melhorar sua performance e se divertir na sua pausa no volante? Junte-se a nós!" /><br/><br/>        
                    <h2 className="supertopic">{this.state.topic3}</h2><br/> 
                    <p>{this.state.textContent6}</p><br/>
                    <p>{this.state.textContent7}</p><br/>   
                    <h2 className="supertopic">{this.state.topic4}</h2><br/>    
                    <p>{this.state.textContent8}</p><br/> 
                    <span className="subtopic">{this.state.topic5}</span><br />
                    
                </div>
                <img className="div-bar" src={divBar} />
                <h1 className="topic">Leia Também</h1>
                <CompactPostCards />


            </section >
        )
    }
}

export default Article2 