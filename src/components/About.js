import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 2.0.0</h4>
      <small><p align="center">
          Flatiron School Software Engineering<br/><br/>
          <b>Final Project - React</b><br/>
          by<br/>
          <a href="http://github.com/imcarissa/wishlist-app">Carissa Sarreal</a>
      <br/>
      </p></small>
      <Link to='/'>hide</Link>
    </div>
  )
}

export default About
