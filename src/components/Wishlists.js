import { connect } from 'react-redux'


const Wishlists = ({ wishlist, filterText }) => {
    
    const searchedList = wishlist.filter( w => w.name.slice(0, filterText.length) === filterText)
    const lists = searchedList.length === 0 ? wishlist : searchedList

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