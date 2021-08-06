import Header from './Header'
import Footer from './Footer'
import Router from './Router'
import WishlistContainer from './WishlistContainer'

const App = () => {
  return (
    <div className="container">
      <Header />
      <WishlistContainer />
      <Router />
      <Footer />
    </div>
  )
}

export default App
