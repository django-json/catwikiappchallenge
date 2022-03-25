import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './breed-details.styles.css';

import Card from '../../components/card/card.component';
import LevelBar from '../../components/levelbar/levelbar.component';
import PhotoGallery from '../../components/photo-gallery/photo-gallery.component';

import { data } from '../../data';
import { fetchWithRetry } from '../../utils/utils';

function BreedDetailsPage() {
    const { id } = useParams();
    const breed = data.find((item) => item.id === id);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        fetchWithRetry(
            `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=8`
        )
            .then((res) => res.json())
            .then((images) => {
                console.log(images);
                const urls = images.map((image) => {
                    return { id: image.id, url: image.url };
                });
                setImageURLs(urls);
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="breed-details-page">
            <div className="breed-details-page__row">
                <div className="breed-details-page__col">
                    <Card photoURL={breed.image.url} />
                </div>
                <div className="breed-details-page__col">
                    <div className="breed-details-page__name">{breed.name}</div>
                    <div className="breed-details-page__description">
                        {breed.description}
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__temperament">
                            Temperament:
                        </div>{' '}
                        <div className="attribute__value">
                            {breed.temperament}
                        </div>
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__origin">Origin: </div>{' '}
                        <div className="attribute__value">{breed.origin}</div>
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__lifespan">Life Span: </div>{' '}
                        <div className="attribute__value">
                            {breed.life_span}
                        </div>
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Adaptability:</div>{' '}
                        <LevelBar level={breed.adaptability} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Affection level:</div>{' '}
                        <LevelBar level={breed.affection_level} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Child Friendly:</div>{' '}
                        <LevelBar title={breed.child_friendly} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Grooming:</div>{' '}
                        <LevelBar level={breed.grooming} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Intelligence:</div>{' '}
                        <LevelBar level={breed.intelligence} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Health issues:</div>{' '}
                        <LevelBar level={breed.health_issues} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">Social needs:</div>{' '}
                        <LevelBar level={breed.social_needs} />
                    </div>
                    <div className="breed-details-page__attribute">
                        <div className="attribute__title">
                            Stranger friendly:{' '}
                        </div>
                        <LevelBar level={breed.stranger_friendly} />
                    </div>
                </div>
            </div>
            <div className="breed-details-page__row">
                <div className="breed-details-page__other">Other photos</div>
                <PhotoGallery imageURLs={imageURLs} />
            </div>
        </div>
    );
}

BreedDetailsPage.displayName = 'BreedDetailsPage';
export default BreedDetailsPage;
