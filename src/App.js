import React from 'react';

import './App.css';

import { ReactComponent as Logo } from './assets/images/catwikilogo.svg';

import Input from './components/input/input.component';

function App() {
    return (
        <div className="App">
            <Input size="sm" placeholder="Enter your breed" endIcon="search" />
        </div>
    );
}

export default App;
