import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Home from "../components/Home";
import Wishlists from '../components/Wishlists'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/wishlists' component={Wishlists}/>
        </Switch>
    )
}

export default Router
