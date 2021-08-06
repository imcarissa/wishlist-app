import React from 'react';
import { connect } from 'react-redux'

const Wishlists = ({ wishlist }) => {
    return (
        <div>
            Your Wishlists:
            {wishlist.map(wishlist => 
                    <ul key={wishlist.id}>
                        <li>{wishlist.name}<br/>
                         "{wishlist.description}"<br/>
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
