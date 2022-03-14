import React from 'react';

import './mostsearchedbreed-item.styles.css';

import Card from '../card/card.component';

function MostSearchedBreedItem() {
    return (
        <div className="mostsearchedbreed-item">
            <Card />
            <div>
                <div className="mostsearchedbreed-item__title">1. Bengal</div>
                <div className="mostsearchedbreed-item__description">
                    Bengals are a lot of fun to live with, but they're
                    definitely not the cat for everyone, or for first-time cat
                    owners. Extremely intelligent, curious and active, they
                    demand a lot of interaction and woe betide the owner who
                    doesn't provide it.
                </div>
            </div>
        </div>
    );
}

MostSearchedBreedItem.displayName = 'MostSearchedBreedItem';
export default MostSearchedBreedItem;
