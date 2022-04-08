import React from 'react';
import './breed-details.styles.css';

import Card from '../../components/card/card.component';
import LevelBar from '../../components/levelbar/levelbar.component';
import PhotoGallery from '../../components/photo-gallery/photo-gallery.component';

function BreedDetailsPage({ breed, imageURLs }) {
    function shouldRenderPhotoGallery() {
        return imageURLs.length > 0 ? (
            <PhotoGallery imageURLs={imageURLs} />
        ) : (
            <div style={{ paddingLeft: '1em', paddingBottom: '6em' }}>
                Not Available
            </div>
        );
    }

    function shouldRenderHeroImage() {
        return imageURLs.length > 0 ? (
            <Card photoURL={imageURLs[1].url} />
        ) : (
            <Card photoURL={null} />
        );
    }

    return breed ? (
        <div className="breed-details-page">
            <div className="breed-details-page__row">
                <div className="breed-details-page__col">
                    {shouldRenderHeroImage()}
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
                {shouldRenderPhotoGallery()}
            </div>
        </div>
    ) : (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                paddingBottom: '100px'
            }}
        >
            Sorry, page is not available for this breed. Please try another one.
        </div>
    );
}

BreedDetailsPage.displayName = 'BreedDetailsPage';
export default BreedDetailsPage;
