import React from 'react';

import './mostsearchedbreeds-preview.styles.css';

import Card from '../card/card.component';

function MostSearchedBreedsPreview() {
    return (
        <div className="mostsearchedbreeds-preview">
            <Card title="Bengal" />
            <Card title="Savannah" />
            <Card title="Norweigan Forest Cat" />
            <Card title="Selkirk Rex" />
        </div>
    );
}

MostSearchedBreedsPreview.displayName = 'MostSearchedBreedsPreview';
export default MostSearchedBreedsPreview;
