import React from 'react';
import { connect } from 'react-redux'
import { addList } from '../actions/wishlistActions'

class WishlistForm extends React.Component {

    state = {
        name: '',
        descripton: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ name: '', description: '' })
        this.props.addList(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Create A Wishlist</h3>
                <label>Name:</label><br/>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name' placeholder='list name' />
                <br />
                <label>Description:</label><br/>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description' placeholder='list description' />
                <br /><br />
                <input type='submit' value="Create List" className='btn btn-block' />
            </form>
        );
    }
}

export default connect(null, { addList })(WishlistForm);
