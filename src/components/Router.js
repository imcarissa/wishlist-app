import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Wishlists from '../components/Wishlists'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/wishlists' component={Wishlists}/>
        </Switch>
    )
}

export default Router
