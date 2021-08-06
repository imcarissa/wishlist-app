import { FaTimes } from 'react-icons/fa'

const Wishlist = (wishlist) => {
    return (
        <div className='wishlist'>
            <h3>{wishlist.name} <FaTimes style={{ color: 'red'}} /></h3>
            <p>{wishlist.description}</p>
        </div>
    )
}

export default Wishlist
