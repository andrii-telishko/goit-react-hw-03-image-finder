import SearchBar from './components/SearchBar'
import './App.css';
import React, { Component } from 'react';
import './styles.css';
import ImageGallery from './components/ImageGallery';
import axios from 'axios';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    };
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    //const options = { searchQuery, currentPage };

    //this.setState({ isLoading: true });

    axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}
      &key=21283413-606cd1182a523c739b6934f12&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => response.data.hits)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      });
  };

  render() {
    return (
        <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={ this.state.images }/>
        </>
      );
  };
  
};

export default App;
