import React, { useContext } from 'react';

import MostSearchedBreedsPage from './mostsearchedbreeds.component';
import Spinner from '../../components/spinner/spinner.component';

import { BreedsContext } from '../../providers/breeds/breeds.provider';

function MostSearchedBreedsPageContainer() {
    const { getTopTenPopularBreeds } = useContext(BreedsContext);

    return getTopTenPopularBreeds().length > 0 ? (
        <MostSearchedBreedsPage
            getTopTenPopularBreeds={getTopTenPopularBreeds}
        />
    ) : (
        <Spinner />
    );
}

export default MostSearchedBreedsPageContainer;
