import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import Register from './pages/Register'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/register" component={Register} />
            
        </Switch>
    )
}

export default Routes