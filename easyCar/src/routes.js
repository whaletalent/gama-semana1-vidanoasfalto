import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import Artigos from './pages/Artigos'
import Quizz from './pages/Quizz'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Article from './pages/Article.js'
import Article2 from './pages/Article2.js'
import Article3 from './pages/Article3.js'

function Routes() {
    return (
        <Switch>

            <Route path="/" exact component={Feed} />
            <Route path="/artigos" exact component={Artigos} />
            <Route path="/quizz" component={Quizz} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Route path="/artigos/dicas-para-evitar-imprevistos-durante-a-viagem" component={Article} />
            <Route path="/artigos/as-viagens-podem-nao-ser-baratas-mas-nao-precisam-ser-caras" component={Article2} />
            <Route path="/artigos/3" component={Article3} />
  
        </Switch>
    )
}

export default Routes