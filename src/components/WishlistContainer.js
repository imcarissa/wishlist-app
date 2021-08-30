import React from 'react'
import { connect } from 'react-redux'
import { fetchLists } from '../actions/wishlistActions'
import WishlistForm from '../components/WishlistForm'
import Wishlists from '../components/Wishlists'
import SearchBar from '../components/SearchBar'

class WishlistContainer extends React.Component {

    state = { 
        filterText: ''
    }

    handleFilter = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }

    componentDidMount() {
        this.props.fetchLists()
    };
    
    render() {
        return (
            <div>
                <WishlistForm /><br/>
        
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilter}
                /><br/>

                <Wishlists 
                    filterText={this.state.filterText}
                />
            </div>
        )
    }
}

export default connect(null, { fetchLists })(WishlistContainer);