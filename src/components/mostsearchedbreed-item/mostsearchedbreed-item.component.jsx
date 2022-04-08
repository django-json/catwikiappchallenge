import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mostsearchedbreed-item.styles.css';

import Card from '../card/card.component';

function MostSearchedBreedItem({ item }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`../breed-details/${item.breeds[0].id}`);
    }

    return (
        <div className="mostsearchedbreed-item" onClick={handleClick}>
            <Card photoURL={item.url} />
            <div>
                <div className="mostsearchedbreed-item__title">
                    {item.breeds[0].name}
                </div>
                <div className="mostsearchedbreed-item__description">
                    {item.breeds[0].description}
                </div>
            </div>
        </div>
    );
}

MostSearchedBreedItem.displayName = 'MostSearchedBreedItem';
export default MostSearchedBreedItem;
