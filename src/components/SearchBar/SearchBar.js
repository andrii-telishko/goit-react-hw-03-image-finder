import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {value: ''};

    handleChange = e => {
       this.setState({ value: e.currentTarget.value });
    };
    
    handleSubmit = e => {
         e.preventDefault();

        this.props.changeQuery(this.state.value);
        this.setState({ value: '' });
  };
    
    render() {
        return (
            <header className="Searchbar" onSubmit={this.handleSubmit}>
                <form className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    };
};