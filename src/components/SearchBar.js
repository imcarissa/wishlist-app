import React from 'react';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {      
        return (
            <form>
                Search:<br/>
                <input
                  type="text"
                  placeholder="filter by name..."
                  value={this.props.filterText}
                  onChange={this.handleFilterTextChange}
                />
            </form>
          );
    }
}

export default SearchBar;
