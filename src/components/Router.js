import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home';
import Contact from '../components/Contact'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact}/>
            <Route path='/about' component={About} />
        </Switch>
    )
}

export default Router
