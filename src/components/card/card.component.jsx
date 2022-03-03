import React from 'react';

import './card.styles.css';

const defaultProps = {
    photoURL:
        'https://media.istockphoto.com/photos/bengal-cat-at-home-picture-id1276717883?b=1&k=20&m=1276717883&s=170667a&w=0&h=BPuk46_p--l8RQDAk-EXLDMe-03pyq30jbBQ4pfx-YY=',
    width: '220px',
    height: '220px'
};

function Card({ photoURL, title, width, height }) {
    return (
        <div className="card">
            <div className="card__image-container">
                <img
                    className="card__image"
                    src={photoURL}
                    alt={title}
                    width={width}
                    height={height}
                />
            </div>
            <div className="card__title">{title}</div>
        </div>
    );
}

Card.defaultProps = defaultProps;
Card.displayName = 'Card';
export default Card;
