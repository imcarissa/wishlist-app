import { Switch, Route } from 'react-router-dom'
import About from '../components/About'
import Credits from '../components/Credits';
import Contact from '../components/Contact'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/credits' component={Credits} />
            <Route  path='/about' component={About} />
            <Route  path='/contact' component={Contact}/>
        </Switch>
    )
}

export default Router