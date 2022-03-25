import React from 'react';

import './searchbox.styles.css';

import Input from '../input/input.component';

function SearchBox({ placeholder, size, onChange }) {
    return (
        <div className="searchbox">
            <Input
                type="text"
                placeholder={placeholder}
                endIcon="search"
                size={size}
                onChange={onChange}
            />
        </div>
    );
}

SearchBox.displayName = 'SearchBox';
export default SearchBox;
