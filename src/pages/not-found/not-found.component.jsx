import React from 'react';

import './not-found.styles.css';

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <div className="not-found-page__image">
                <img
                    src={require('../../assets/images/not-found.jpg')}
                    alt="404 Not Found"
                />
            </div>
            <div className="not-found-page__text">
                <div className="not-found-page__404">404</div>
                <div>Not Found</div>
            </div>
        </div>
    );
}

NotFoundPage.displayName = 'NotFoundPage';
export default NotFoundPage;
