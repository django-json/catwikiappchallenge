import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { ReactComponent as Logo } from './assets/images/catwikilogo.svg';
import Footer from './components/footer/footer.component';
import CustomLink from './components/custom-link/custom-link.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import BreedDetailsPageContainer from './pages/breed-details/breed-details.container';
import MostSearchedBreedsPageContainer from './pages/mostsearchedbreeds/mostsearchedbreeds.container';
import HomePage from './pages/home/home.component';

function App() {
    return (
        <div className="App">
            <CustomLink to=".">
                <Logo className="App__logo" />
            </CustomLink>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="mostsearchedbreeds"
                    element={<MostSearchedBreedsPageContainer />}
                />
                <Route
                    path="breed-details/:id"
                    element={<BreedDetailsPageContainer />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
