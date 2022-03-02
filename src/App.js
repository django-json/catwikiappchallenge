import React from 'react';

import './App.css';

import { ReactComponent as Logo } from './assets/images/catwikilogo.svg';

import Input from './components/input/input.component';

import { useMediaQuery } from './custom-hooks/useMediaQuery';

function App() {
    const mobileView = useMediaQuery('(max-width: 767.98px)');

    function shouldRenderSearchBox() {
        return mobileView ? (
            <div className="App__search-static">
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
        <div className="App">
            <Logo />
            <div className="App__col">
                <div className="App__row">
                    <Logo className="App__logo" />
                    <p>Get to know more about your cat breed</p>
                    {shouldRenderSearchBox()}
                </div>
            </div>
        </div>
    );
}

export default App;
