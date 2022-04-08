import React from 'react';

import './mostsearchedbreeds.styles.css';

import MostSearchedBreedItem from '../../components/mostsearchedbreed-item/mostsearchedbreed-item.component';

function MostSearchedBreedsPage({ getTopTenPopularBreeds }) {
    return (
        <div className="mostsearchedbreeds-page">
            <div className="mostsearchedbreeds-page__heading">
                Top 10 most searched breeds
            </div>
            {getTopTenPopularBreeds().map((item) => {
                return (
                    <MostSearchedBreedItem
                        key={item.breeds[0].id}
                        item={item}
                    />
                );
            })}
        </div>
    );
}

MostSearchedBreedsPage.displayName = 'MostSearchedBreedsPage';
export default MostSearchedBreedsPage;
