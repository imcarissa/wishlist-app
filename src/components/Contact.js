import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
        <p align="center">
        <br/>
            Contact Us:<br/>
            <a href="twitter.com/imcarissa">Twitter</a><br/>
            <a href="github.com/imcarissa">Github</a>
            <br/><br/>
        </p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Contact
