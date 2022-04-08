import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './mostsearchedbreeds-preview.styles.css';

import Card from '../card/card.component';

import { BreedsContext } from '../../providers/breeds/breeds.provider';

function MostSearchedBreedsPreview() {
    const { getPopularBreedsPreview } = useContext(BreedsContext);
    const navigate = useNavigate();

    function handleCardClick(id) {
        navigate(`breed-details/${id}`);
    }

    return getPopularBreedsPreview().length > 0 ? (
        <div className="mostsearchedbreeds-preview">
            {getPopularBreedsPreview().map((item) => {
                return (
                    <Card
                        key={item.id}
                        title={item.breeds[0].name}
                        photoURL={item.url}
                        onClick={() => handleCardClick(item.breeds[0].id)}
                    />
                );
            })}
        </div>
    ) : null;
}

MostSearchedBreedsPreview.displayName = 'MostSearchedBreedsPreview';
export default MostSearchedBreedsPreview;
