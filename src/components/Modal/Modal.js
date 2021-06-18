import React, { Component } from 'react';

export default class Modal extends Component {
    
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    
};

  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
      
};

handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

handleBackdropClick = (e) => {
     if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
    };
    
    render() {
        return (
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
        );
    };
};