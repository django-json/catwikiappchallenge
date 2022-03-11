import React from 'react';

import './read-more.styles.css';

import CustomLink from '../custom-link/custom-link.component';

function ReadMore() {
    return (
        <div className="read-more">
            <div className="read-more__col">
                <div className="read-more__why">Why should you have a cat?</div>
                <div className="read-more__reason">
                    Having a cat around you can actually trigger the release of
                    calming chemicals in your body which lower your stress and
                    anxiety levels
                </div>
                <CustomLink endIcon="arrow_right_alt">read more</CustomLink>
            </div>
            <div className="read-more__col">
                <div className="read-more__image">
                    <img
                        src={require('../../assets/images/image1.png')}
                        alt="Cat 1"
                    />
                </div>
                <div className="read-more__image">
                    <img
                        src={require('../../assets/images/image2.png')}
                        alt="Cat 2"
                    />
                </div>
                <div className="read-more__image">
                    <img
                        src={require('../../assets/images/image3.png')}
                        alt="Cat 3"
                    />
                </div>
            </div>
        </div>
    );
}

ReadMore.displayName = 'ReadMore';
export default ReadMore;
