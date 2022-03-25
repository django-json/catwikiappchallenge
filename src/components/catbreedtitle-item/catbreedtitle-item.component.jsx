import React from 'react';
import { useNavigate } from 'react-router-dom';

import './catbreedtitle-item.styles.css';

function CatBreedTitleItem({ item }) {
    const navigate = useNavigate();
    function handleClick() {
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
