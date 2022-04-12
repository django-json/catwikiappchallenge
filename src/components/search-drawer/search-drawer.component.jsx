import React, { Fragment, useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';

import './search-drawer.styles.css';

import { ReactComponent as Logo } from '../../assets/images/catwikilogo.svg';

import MostSearchedBreedsPreview from '../mostsearchedbreeds-preview/mostsearchedbreeds-preview.component';
import CustomLink from '../custom-link/custom-link.component';
import Button from '../button/button.component';
import SearchBox from '../searchbox/searchbox.component';
import List from '../list/list.component';
import CatBreedTitleItem from '../catbreedtitle-item/catbreedtitle-item.component';

import { useMediaQuery } from '../../custom-hooks/useMediaQuery';
import { useDebounce } from '../../custom-hooks/useDebounce';

import { BreedsContext } from '../../providers/breeds/breeds.provider';

Modal.setAppElement('#root');

function SearchDrawer() {
    const { searchBreedByName, getPopularBreedsPreview } =
        useContext(BreedsContext);
    const mobileView = useMediaQuery('(max-width: 767.98px)');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [hasError, setHasError] = useState(false);

    const debouncedSearchValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        async function searchBreedByNameAsync() {
            const searchResults = await searchBreedByName(debouncedSearchValue);
            if (searchResults) {
                setBreeds(searchResults);
                setHasError(false);
            } else {
                resetBreeds();
                setHasError(true);
            }
        }

        if (debouncedSearchValue) {
            searchBreedByNameAsync();
        } else {
            resetBreeds();
            setHasError(false);
        }
    }, [debouncedSearchValue]);

    function resetBreeds() {
        setBreeds([]);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function openModal() {
        setModalIsOpen(true);
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function shouldRenderList() {
        return breeds && breeds.length > 0 ? (
            <div className="search__list">
                <List items={breeds} itemRenderer={CatBreedTitleItem} />
            </div>
        ) : (
            hasError && <div className="search__list">No results found.</div>
        );
    }

    function shouldRenderSearchBoxListDesktop(desktopView) {
        return desktopView ? (
            <div className="search__searchboxlist">
                <SearchBox
                    size="lg"
                    placeholder="Enter your breed"
                    onChange={handleChange}
                />
                {shouldRenderList()}
            </div>
        ) : null;
    }

    function shouldRenderSearchBoxListMobile(mobileView) {
        return mobileView ? (
            <Fragment>
                <div className="search__static" onClick={openModal}>
                    <span>Search</span>
                    <i className="material-icons">search</i>
                </div>
                <Modal
                    className="search__modal"
                    overlayClassName="search__modal--overlay"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Mobile Searchbox"
                    closeTimeoutMS={200}
                >
                    <div className="search__modal-content">
                        <Button iconAsLabel="close" onClick={closeModal} />
                        <SearchBox
                            size="md"
                            placeholder="Enter your breed"
                            onChange={handleChange}
                        />
                        {shouldRenderList()}
                    </div>
                </Modal>
            </Fragment>
        ) : null;
    }

    return (
        <div className="search-drawer">
            <div className="search-drawer__row">
                <Logo className="search-drawer__logo" />
                <p>Get to know more about your cat breed</p>
                {shouldRenderSearchBoxListDesktop(!mobileView)}
                {shouldRenderSearchBoxListMobile(mobileView)}
            </div>
            <div className="search-drawer__row">
                <div className="search-drawer__most-searched">
                    Most Searched Breeds
                </div>
                <div className="search-drawer__discover-container">
                    <div className="search-drawer__discover">
                        66+ Breeds For you to discover
                    </div>
                    {getPopularBreedsPreview().length > 0 ? (
                        <CustomLink
                            to="mostsearchedbreeds"
                            endIcon="arrow_right_alt"
                        >
                            see more
                        </CustomLink>
                    ) : (
                        <span>Search more breeds to display...</span>
                    )}
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
