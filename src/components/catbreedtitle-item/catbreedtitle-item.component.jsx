import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './catbreedtitle-item.styles.css';

import { BreedsContext } from '../../providers/breeds/breeds.provider';

function CatBreedTitleItem({ item }) {
    const { addPopularBreed } = useContext(BreedsContext);
    const navigate = useNavigate();

    function handleClick() {
        if (item.hasOwnProperty('reference_image_id')) addPopularBreed(item);
        navigate(`breed-details/${item.id}`);
    }

    return (
        <li className="catbreedtitle-item" onClick={handleClick}>
            {item.name}
        </li>
    );
}

CatBreedTitleItem.displayName = 'CatBreedTitleItem';
export default CatBreedTitleItem;
