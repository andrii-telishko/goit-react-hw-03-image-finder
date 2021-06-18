import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem'

  const ImageGallery = ({images}) => {
    return (
      <ul className="ImageGallery">
            {images.map(({ id, webformatURL, tags }) => {
                return (
                    <li className="ImageGalleryItem" key={id}>
                        <ImageGalleryItem
                            url={webformatURL}
                            alt={ tags }/>
                 </li>
             );
         })}
      </ul>
  );
};

export default ImageGallery;


        
        