import React from 'react';

import './App.css';

import { ReactComponent as Logo } from './assets/images/catwikilogo.svg';

import Input from './components/input/input.component';

function App() {
    return (
        <div className="App">
            <Logo />
            <div className="App__col">
                <div className="App__row">
                    <Logo className="App__logo" />
                    <p>Get to know more about your cat breed</p>
                    <Input
                        type="text"
                        placeholder="Enter your breed"
                        endIcon="search"
                        size="lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
