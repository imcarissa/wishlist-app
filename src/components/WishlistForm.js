import React from 'react';
import { connect } from 'react-redux'
import { addList } from '../actions/wishlistActions'

class WishlistForm extends React.Component {

    state = {
        name: '',
        descripton: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addList(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Create A Wishlist</h1>
                <label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name' placeholder='list name' />
                <br /><br />
                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description' placeholder='list description' />
                <br /><br />
                <input type='submit' value="Create List" />
            </form>
        );
    }
}

export default connect(null, { addList })(WishlistForm);
