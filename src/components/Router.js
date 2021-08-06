import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import WishlistContainer from './WishlistContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/Wishlists' component={WishlistContainer}/>
        </Switch>
    )
}

export default Router
