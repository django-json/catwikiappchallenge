import React from 'react';

import './mostsearchedbreeds.styles.css';

import List from '../../components/list/list.component';
import MostSearchedBreedItem from '../../components/mostsearchedbreed-item/mostsearchedbreed-item.component';

import { data } from '../../data';

function MostSearchedBreedsPage() {
    return (
        <div className="mostsearchedbreeds-page">
            <div className="mostsearchedbreeds-page__heading">
                Top 10 most searched breeds
            </div>
            <MostSearchedBreedItem item={data[2]} />
            <MostSearchedBreedItem item={data[1]} />
            <MostSearchedBreedItem item={data[3]} />
            <MostSearchedBreedItem item={data[0]} />
        </div>
    );
}

MostSearchedBreedsPage.displayName = 'MostSearchedBreedsPage';
export default MostSearchedBreedsPage;
