import React from 'react'
import { connect } from 'react-redux'
import { fetchLists } from '../actions/wishlistActions'
import WishlistForm from '../components/WishlistForm'

class WishlistContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLists()
    }
    render() {
        return (
            <div>
                <WishlistForm />
            </div>
        )
    }
}

export default connect(null, { fetchLists })(WishlistContainer);