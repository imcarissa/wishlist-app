import { connect } from 'react-redux'


const Wishlists = ({ wishlist, filterText }) => {
    

    return (
        <div className="index">         
            <h3>Current Wishlists:</h3>
            {lists.map(wishlist => 
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