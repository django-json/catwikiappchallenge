import React from 'react';

import './search-drawer.styles.css';

import { ReactComponent as Logo } from '../../assets/images/catwikilogo.svg';

import Input from '../input/input.component';
import MostSearchedBreedsPreview from '../mostsearchedbreeds-preview/mostsearchedbreeds-preview.component';
import CustomLink from '../custom-link/custom-link.component';

import { useMediaQuery } from '../../custom-hooks/useMediaQuery';

function SearchDrawer() {
    const mobileView = useMediaQuery('(max-width: 767.98px)');

    function shouldRenderSearchBox() {
        return mobileView ? (
            <div className="search-drawer__search-static">
                <span>Search</span>
                <i className="material-icons">search</i>
            </div>
        ) : (
            <Input
                type="text"
                placeholder="Enter your breed"
                endIcon="search"
                size="lg"
            />
        );
    }

    return (
        <div className="search-drawer">
            <div className="search-drawer__row">
                <Logo className="search-drawer__logo" />
                <p>Get to know more about your cat breed</p>
                {shouldRenderSearchBox()}
            </div>
            <div className="search-drawer__row">
                <div className="search-drawer__most-searched">
                    Most Searched Breeds
                </div>
                <div className="search-drawer__discover-container">
                    <div className="search-drawer__discover">
                        66+ Breeds For you to discover
                    </div>
                    <CustomLink to="/" endIcon="arrow_right_alt">
                        see more
                    </CustomLink>
                </div>
                <div className="search-drawer__catbreeds-preview-container">
                    <MostSearchedBreedsPreview />
                </div>
            </div>
        </div>
    );
}

SearchDrawer.displayName = 'SearchDrawer';
export default SearchDrawer;
