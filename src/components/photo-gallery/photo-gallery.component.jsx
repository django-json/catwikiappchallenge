import React from 'react';

import './photo-gallery.styles.css';

import Card from '../card/card.component';

const photoURL =
	'https://media.istockphoto.com/photos/bengal-cat-at-home-picture-id1276717883?b=1&k=20&m=1276717883&s=170667a&w=0&h=BPuk46_p--l8RQDAk-EXLDMe-03pyq30jbBQ4pfx-YY=';

function PhotoGallery() {
	return (
		<div className="photo-gallery">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}

PhotoGallery.displayName = 'PhotoGallery';
export default PhotoGallery;
