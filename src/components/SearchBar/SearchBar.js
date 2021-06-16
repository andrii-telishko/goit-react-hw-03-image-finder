import { React, Component } from 'react';


export default class SearchBar extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({ value: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <header className="Searchbar" >
                <form className="SearchForm" onSubmit={this.handleSubmit}>
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
            </header>)
    };
        
};