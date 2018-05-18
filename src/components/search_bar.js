import React, { Component } from 'react';

class SearchBar extends Component  {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    render() {
        return (
        <div>
            <input
            value = {this.state.term} 
            onChange = { (event) => this.changeVideoTerm(event.target.value) } />
        </div>
        )
    }

    changeVideoTerm(term) {
        this.setState({term});
        this.props.onVideoTermUpdate(term);
    }
    
};

export default SearchBar;