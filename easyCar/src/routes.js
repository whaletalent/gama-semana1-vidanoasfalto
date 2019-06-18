import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import Artigos from './pages/Artigos'
import Quizz from './pages/Quizz'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/artigos" component={Artigos} />
            <Route path="/quizz" component={Quizz} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            
        </Switch>
    )
}

export default Routes