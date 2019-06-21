import React, { Component, Fragment } from 'react'
import '../styles/Article.scss'

class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state =

            {
                errorMsg:'Desculpe, a página que você procurava não foi encontrada :('
            };
    }
    render() {

        return (

            <Fragment>
                <MetaTags>
                    <title>Erro 404</title>
                    

                </MetaTags>
                <HeroTitle title={this.state.title} subtitle={this.state.subtitle}></HeroTitle>
                <section className="page-content">

                   <h1 className="supertopic">Desculpe, a página que você procurava não foi encontrada. :(</h1>

                </section >
            </Fragment>
        )
    }
}

export default Page404 