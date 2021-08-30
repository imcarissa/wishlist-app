import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
        <p align="center">
        <br/>
            Contact:<br/><br/>
            <a href="http://twitter.com/imcarissa">Twitter</a><br/>
            <a href="http://github.com/imcarissa">Github</a>
            <br/>
        </p>
            <Link to='/'>hide</Link>
        </div>
    )
}

export default Contact
