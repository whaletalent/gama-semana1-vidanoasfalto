import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import Artigos from './pages/Artigos'

import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Article from './pages/Article.js'
import Article2 from './pages/Article2.js'
import Article3 from './pages/Article3.js'
import Article4 from './pages/Article4.js'
import Article5 from './pages/Article5.js'
import Article6 from './pages/Article6.js'
import Page404 from './pages/Page404.js'
function Routes() {
    return (
        <Switch>

            <Route path="/" exact component={Feed} />
            <Route path="/artigos" exact component={Artigos} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Route path="/artigos/dicas-para-evitar-imprevistos-durante-a-viagem" component={Article} />
            <Route path="/artigos/as-viagens-podem-nao-ser-baratas-mas-nao-precisam-ser-caras" component={Article2} />
            <Route path="/artigos/passageiro-estranho-reacoes-hilarias" component={Article3} />
            <Route path="/artigos/e-assim-que-eu-lavo-meu-carro" component={Article4} />
            <Route path="/artigos/como-vender-seu-carro-acima-da-tabela-fipe" component={Article5} />
            <Route path="/artigos/a-tendencia-dos-seguros-digitais" component={Article6} />
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes