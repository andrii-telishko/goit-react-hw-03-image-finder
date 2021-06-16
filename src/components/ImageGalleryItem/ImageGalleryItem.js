import React from 'react'

export default function ImageGalleryItem({img, alt}) {
    return (
      <img src={img} alt={alt} className="ImageGalleryItem-image" />
    );
};