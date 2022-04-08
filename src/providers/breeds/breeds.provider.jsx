import React, { createContext, useState, useEffect } from 'react';

import { fetchWithRetry } from '../../utils/utils';

export const BreedsContext = createContext({
    popularBreeds: [],
    getPopularBreeds: () => {},
    getTopTenPopularBreeds: () => {},
    getPopularBreedsPreview: () => {},
    getBreedImages: () => {},
    addPopularBreed: () => {},
    searchBreedByName: () => {}
});

function BreedsProvider({ children }) {
    const [popularBreeds, setPopularBreeds] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        // Sync popular breeds
        syncPopularBreeds();
        // Reset state
        setIsUpdated(false);
    }, [isUpdated]);

    async function syncPopularBreeds() {
        try {
            let popularBreedsArray = [];
            let popularBreeds = await getPopularBreeds();

            if (popularBreeds) {
                // Sort breeds by search_rank in descending order
                // Returned value: { search_rank, reference_id, breed_id}
                popularBreeds = await popularBreeds.sort(descend);

                // Async iterate to fetch complete breed information for each breed by reference id
                for await (const result of popularBreeds.map((breed) => {
                    return getBreedDetailsByReferenceID(
                        breed.reference_image_id
                    );
                })) {
                    popularBreedsArray.push(result);
                }

                setPopularBreeds(popularBreedsArray);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function getPopularBreeds() {
        return await fetchWithRetry(
            'http://localhost:3001/popular-breeds',
            {},
            5
        )
            .then((res) => res.json())
            .catch((error) => console.error(error));
    }

    async function getBreedDetailsByReferenceID(id) {
        return await fetchWithRetry(`http://localhost:3001/image/${id}`)
            .then((res) => res.json())
            .catch((error) => console.error(error));
    }

    // Only fetch the images of a specific breed by breed id
    async function getBreedImages(id) {
        return await fetchWithRetry(`http://localhost:3001/images/${id}`)
            .then((res) => res.json())
            .catch((error) => console.error(error));
    }

    function descend(a, b) {
        return b.search_rank - a.search_rank;
    }

    function addPopularBreed(item) {
        const breedObject = {
            breed: {
                breed_id: item.id,
                reference_image_id: item.reference_image_id
                    ? item.reference_image_id
                    : null
            }
        };

        fetchWithRetry(
            'http://localhost:3001/popular-breeds',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(breedObject)
            },
            5
        )
            .then((res) => res.json())
            .then((result) => {
                setIsUpdated(true);
                console.log(result);
            })
            .catch((error) => console.error(error));
    }

    function getPopularBreedsPreview() {
        // Get only the top 4 popular breeds at maximum to display at the homepage
        if (popularBreeds.length > 4) {
            return sliceArray(popularBreeds, 0, 4);
        } else {
            return popularBreeds;
        }
    }

    function getTopTenPopularBreeds() {
        if (popularBreeds.length > 10) {
            return sliceArray(popularBreeds, 0, 10);
        } else {
            return popularBreeds;
        }
    }

    function sliceArray(array, start, end) {
        const slicedObject = array.slice(start, end);
        return slicedObject;
    }

    async function searchBreedByName(name) {
        return await fetchWithRetry(
            `http://localhost:3001/breeds/${name}`,
            {},
            5
        )
            .then((res) => res.json())
            .then((searchResults) => {
                return searchResults;
            })
            .catch((error) => console.error(error));
    }

    return (
        <BreedsContext.Provider
            value={{
                popularBreeds,
                getPopularBreeds,
                getTopTenPopularBreeds,
                getPopularBreedsPreview,
                getBreedImages,
                addPopularBreed,
                searchBreedByName
            }}
        >
            {children}
        </BreedsContext.Provider>
    );
}

export default BreedsProvider;
