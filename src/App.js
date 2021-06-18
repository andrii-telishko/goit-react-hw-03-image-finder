import './App.css';
import React, { Component } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Modal from './components/Modal';
import fetchData from './api'

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImg: '',
    modalAlt: '',
    error: null,
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
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });
     
    fetchData(options).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
      }));
      this.scrollWindow();
    })
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollWindow() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
  }

  openModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: url,
      modalAlt: alt
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: '',
      modalAlt: ''
    }));
  };
  
  render() {
    const { error, images, isLoading, showModal, modalImg, modalAlt } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    
    return (
      <>
        <SearchBar changeQuery={this.onChangeQuery} />
        {error && <h1 style={{ color: '#ff0000', textAlign: 'center' }}>Something going wrong</h1>}
        <ImageGallery images={images} openModal={ this.openModal }/>
        {isLoading && <Spinner/>}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages} />}
        {showModal && <Modal closeModal={this.closeModal}>
              <img src={modalImg} alt={modalAlt}/>
          </Modal>}
        </>
       )
  };
};


export default App;
