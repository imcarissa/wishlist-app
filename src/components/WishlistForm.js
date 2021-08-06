import React from 'react';

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

    render() {
        return (
            <form>
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

export default WishlistForm;
