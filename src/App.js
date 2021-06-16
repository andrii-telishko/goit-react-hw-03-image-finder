import SearchBar from './components/SearchBar'
import './App.css';
import React, { Component } from 'react';
import './styles.css';
import ImageGallery from './components/ImageGallery';
import axios from 'axios';
import Button from './components/Button'

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    currentPage: 1,
    isLoading: false
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

    this.setState({ isLoading: true });

    axios.get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}
      &key=21283413-606cd1182a523c739b6934f12&image_type=photo&orientation=horizontal&per_page=15`
    ).then(response => response.data.hits)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));

        window.scrollTo({
           top: document.documentElement.scrollHeight,
           behavior: 'smooth',
         });
      }).finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
        <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && <Button
          loadMoreImages={this.fetchImages}
          isLoading={ this.state.isLoading }/>}
        </>
      );
  };
  
};

export default App;
