import React from 'react';

import './photo-gallery.styles.css';

import Card from '../card/card.component';

function PhotoGallery({ imageURLs }) {
    function shouldRenderImages() {
        return imageURLs.map((imageURL) => (
            <Card key={imageURL.id} photoURL={imageURL.url} />
        ));
    }

    return <div className="photo-gallery">{shouldRenderImages()}</div>;
}

PhotoGallery.displayName = 'PhotoGallery';
export default PhotoGallery;
