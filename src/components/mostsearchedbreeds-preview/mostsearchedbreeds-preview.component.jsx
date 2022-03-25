import React from 'react';
import { useNavigate } from 'react-router-dom';

import './mostsearchedbreeds-preview.styles.css';

import Card from '../card/card.component';

import { data } from '../../data';

function MostSearchedBreedsPreview() {
    const navigate = useNavigate();
    function handleCardClick(id) {
        navigate(`breed-details/${id}`);
    }

    return (
        <div className="mostsearchedbreeds-preview">
            {data.map((item) => {
                return (
                    <Card
                        key={item.id}
                        title={item.name}
                        photoURL={item.image.url}
                        onClick={() => handleCardClick(item.id)}
                    />
                );
            })}
        </div>
    );
}

MostSearchedBreedsPreview.displayName = 'MostSearchedBreedsPreview';
export default MostSearchedBreedsPreview;
