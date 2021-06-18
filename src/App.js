import './App.css';
import React, { Component } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import axios from 'axios';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Modal from './components/Modal'



class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImg: '',
    modalAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    };
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      //error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    //const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });
     
    axios.get(`https:pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21283413-606cd1182a523c739b6934f12&image_type=photo&orientation=horizontal&per_page=15`).then(response => response.data.hits).then(images => {
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

  openModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: url,
      modalAlt: alt
    }));
  };

  closeModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: '',
      modalAlt: ''
    }));
  };
  
render() {
    return (
      <>
        <SearchBar changeQuery={this.onChangeQuery} />
        <ImageGallery images={this.state.images} openModal={ this.openModal }/>
        {this.state.isLoading && <Spinner/>}
        {this.state.images.length > 0 && !this.state.isLoading &&
          <Button onClick={this.fetchImages} />}
        {this.state.showModal && <Modal largeImg={this.state.modalImg}
          largeAlt={ this.state.modalAlt } closeModal={this.closeModal}/>}
        </>
       )
  };
};


export default App;
