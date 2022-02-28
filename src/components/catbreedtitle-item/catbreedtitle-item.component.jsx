import React from 'react';

import './catbreedtitle-item.styles.css';

function CatBreedTitleItem({ item }) {
    return <li className="catbreedtitle-item">{item}</li>;
}

CatBreedTitleItem.displayName = 'CatBreedTitleItem';
export default CatBreedTitleItem;
