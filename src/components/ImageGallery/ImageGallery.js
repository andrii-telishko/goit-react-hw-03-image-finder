import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'

export default function ImageGallery({ images }) {
    return (
      <ul className="ImageGallery">
        {images.map(({id, tags, webformatURL }) => (
          <li key={id} className="ImageGalleryItem">
               <ImageGalleryItem img={webformatURL} alt={tags} />
          </li>
        ))}
      </ul>
    );
};