import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import BreedDetails from './breed-details.component';
import Spinner from '../../components/spinner/spinner.component';

import { BreedsContext } from '../../providers/breeds/breeds.provider';

function BreedDetailsContainer() {
    const { getBreedImages } = useContext(BreedsContext);
    const { id } = useParams();
    const [breed, setBreed] = useState(null);
    const [imageURLs, setImageURLs] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);

        syncBreedImages(id);
    }, [id]);

    async function syncBreedImages(breed_id) {
        try {
            const breedImages = await getBreedImages(breed_id);
            // The responsed data array has elements limited to 8 objects of a specific breed
            // Each object has the same "breeds" array
            // The "breeds" object has the same value of the rest of the 8 objects
            const breed = breedImages[0].breeds[0];
            setBreed(breed);
            const urls = breedImages.map((image) => {
                return { id: image.id, url: image.url };
            });
            setImageURLs(urls);

            setIsFetching(false);
        } catch (error) {
            setIsFetching(false);
        }
    }

    return !isFetching ? (
        <BreedDetails breed={breed} imageURLs={imageURLs} />
    ) : (
        <Spinner />
    );
}

export default BreedDetailsContainer;
