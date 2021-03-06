import React, { Component, Fragment } from "react";
import CALL2A from "../components/CALL2A";
import PostCards from "../components/PostCards";
import HeroTitle from '../components/HeroTitle'
import uber1 from "../assets/uber1.png";
import uber2 from "../assets/uber2.png";
import uber3 from "../assets/uber3.png";
import uber4 from "../assets/uber4.png";
import uber5 from "../assets/uber5.png";
import uber6 from "../assets/uber6.png";
import uberbonus from "../assets/uberbonus.png";
import uberbonus2 from "../assets/uberbonus2.png";
import FormBait from "../components/FormBait";
import MetaTags from 'react-meta-tags';
import "rbx/index.css";
import "../styles/Article.scss";
import divBar from "../assets/divBar.svg";

class Article3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:
        "Você já pegou um passageiro estranho? Veja algumas reações hilárias!",
      subtitle:
        "Todos os dias, milhões de viagens são feitas no aplicativo, então é de se esperar algumas situações no mínimo engraçadas, confira:",

      topic1: "",
      topic2: "Bônus: as melhores avaliações possíveis",

      imageText1: "1. Quando André escolheu o caldo de cana a uma corrida?",
      imageText2: "2. Fernando se livrou de uma passageira sem noção",
      imageText3: "3. Bruno mereceu um espetinho!",
      imageText4: "4. A Silvana prezou pela segurança!",
      imageText5: "5. Tudo para manter a pontuação alta",
      imageText6: "6. Respeito é bom e todo mundo gosta. Até o Rolando.",
      imageText7: "1. Motorista que devolve o filho é top.",
      imageText8: "2. Quando o “hommi é lindo”",

      subtitle1: "Prioridades, né?!",
      subtitle2: '"Vai demorar muito?"',
      subtitle3: "Nada mais justo!",
      subtitle4: "Melhor evitar os aeroportos.",
      subtitle5: "Quando o passageiro pede para cancelar é complicado",
      subtitle6: "Já perdeu a graça!"
    };
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Você já pegou um passageiro estranho? Veja algumas reações hilárias!</title>
          <meta id="meta-description" name="description" content="Todos os dias, milhões de viagens são feitas no aplicativo, então é de se esperar algumas situações no mínimo engraçadas, confira:" />
          <meta id="og-title" property="og:title" content="Você já pegou um passageiro estranho? Veja algumas reações hilárias!" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Vida no Asfalto" />
          <meta property="article:publisher" content="https://www.facebook.com/vidanoasfalto" />
          <link rel="canonical" href="https://www.vidanoasfalto.com.br/artigos/passageiro-estranho-reacoes-hilarias" />
        </MetaTags>
        <HeroTitle title={this.state.title} subtitle={this.state.subtitle}></HeroTitle>
        <section className="page-content">

          <div className="article-content">
            <h2 className="subtopic">{this.state.topic1}</h2>
            <br />

            <h2 className="subtopic">{this.state.imageText1}</h2>
            <br />
            <img src={uber1} alt="print uber" />
            <span className="mini-title">{this.state.subtitle1}</span>
            <br />
            <br />

            <h2 className="subtopic">{this.state.imageText2}</h2>
            <br />
            <img src={uber2} alt="print uber" />
            <span className="mini-title">{this.state.subtitle2}</span>
            <br />
            <br />
            <FormBait
              title="Se você deu uma risadinha...rs"
              subtitle="Se cadastre para receber conteúdos semelhantes (esse artigo continua após nossa chamada para o conteúdo especial)"
              buttonMsg="Cadastrar"
            />

            <h2 className="subtopic">{this.state.imageText3}</h2>
            <br />
            <img src={uber3} alt="print uber" />
            <span className="mini-title">{this.state.subtitle3}</span>
            <br />
            <br />

            <h2 className="subtopic">{this.state.imageText4}</h2>
            <br />
            <img src={uber4} alt="print uber" />
            <span className="mini-title">{this.state.subtitle4}</span>
            <br />
            <br />

            <h2 className="subtopic">{this.state.imageText5}</h2>
            <br />
            <img src={uber5} alt="print uber" />
            <span className="mini-title">{this.state.subtitle5}</span>
            <br />
            <br />

            <h2 className="subtopic">{this.state.imageText6}</h2>
            <br />
            <img src={uber6} alt="print uber" />
            <span className="mini-title">{this.state.subtitle6}</span>
            <br />
            <br />

            <h2 className="subtopic">{this.state.topic2}</h2>
            <br />

            <h2 className="subtopic">{this.state.imageText7}</h2>
            <br />
            <img src={uberbonus} alt="print uber" />

            <h2 className="subtopic">{this.state.imageText8}</h2>
            <br />
            <img src={uberbonus2} alt="print uber" />
          </div>
          <img className="div-bar" src={divBar} />
          <h1 className="topic">Leia Também</h1>

          <PostCards />
        </section>
      </Fragment>
    );
  }
}

export default Article3;
