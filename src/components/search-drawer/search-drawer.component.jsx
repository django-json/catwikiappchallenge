import React, { Fragment, useState, useEffect } from 'react';
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

import { data } from '../../data';

Modal.setAppElement('#root');

function SearchDrawer() {
    const mobileView = useMediaQuery('(max-width: 767.98px)');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [breeds, setBreeds] = useState([]);

    const debouncedSearchValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        const filteredBreeds = filterBreedsByName(data, debouncedSearchValue);
        setBreeds(filteredBreeds);
    }, [debouncedSearchValue]);

    function closeModal() {
        setModalIsOpen(false);
    }

    function openModal() {
        setModalIsOpen(true);
    }

    function shouldRenderList() {
        return breeds && breeds.length > 0 ? (
            <div className="search__list">
                <List items={breeds} itemRenderer={CatBreedTitleItem} />
            </div>
        ) : null;
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function filterBreedsByName(breeds, name) {
        if (breeds.length > 0 && name) {
            const filteredBreeds = breeds.filter((breed) => {
                return breed.name.toLowerCase().includes(name.toLowerCase());
            });

            return filteredBreeds;
        }
    }

    return (
        <div className="search-drawer">
            <div className="search-drawer__row">
                <Logo className="search-drawer__logo" />
                <p>Get to know more about your cat breed</p>
                {!mobileView ? (
                    <div className="search__searchboxlist">
                        <SearchBox
                            size="lg"
                            placeholder="Enter your breed"
                            onChange={handleChange}
                        />
                        {shouldRenderList()}
                    </div>
                ) : (
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
                                <Button
                                    iconAsLabel="close"
                                    onClick={closeModal}
                                />
                                <SearchBox
                                    size="md"
                                    placeholder="Enter your breed"
                                    onChange={handleChange}
                                />
                                {shouldRenderList()}
                            </div>
                        </Modal>
                    </Fragment>
                )}
            </div>
            <div className="search-drawer__row">
                <div className="search-drawer__most-searched">
                    Most Searched Breeds
                </div>
                <div className="search-drawer__discover-container">
                    <div className="search-drawer__discover">
                        66+ Breeds For you to discover
                    </div>
                    <CustomLink
                        to="mostsearchedbreeds"
                        endIcon="arrow_right_alt"
                    >
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
