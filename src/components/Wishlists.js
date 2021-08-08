import React from 'react';
import { connect } from 'react-redux'
//import { deleteList } from '../actions/wishlistActions'


const Wishlists = ({ wishlist }) => {
    
    // const handleDelete = (wishlist) => {
    //     wishlist.deleteContact(wishlist.id)
    // }

    return (
        <div>
            <h3>Current Wishlists:</h3>
            {wishlist.map(wishlist => 
                    <ul key={wishlist.id}>
                        <li>{wishlist.name}<br/>
                         "{wishlist.description}"<br/>
                        <button>Delete</button>
                        </li>
                    </ul>
                )}
        </div>
    );
}

const mapStateToProps = state => {
    return { wishlist: state.wishlist }
}

export default connect(mapStateToProps)(Wishlists);
