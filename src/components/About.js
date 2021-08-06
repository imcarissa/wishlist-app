import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 2.0.0</h4>
      <small><p align="center">
          Thank you to Flatiron School Software Engineering for this amazing opportunity and all the wonderful help from a dream team cohort.<br/><br/>
          <strong>Final Project - React</strong><br/>
          by<br/>
          <a href="http://github.com/imcarissa/wishlist-app">Carissa Sarreal</a>
      <br/>
      </p></small>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
