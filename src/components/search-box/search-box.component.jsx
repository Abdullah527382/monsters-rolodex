import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange = {
            handleChange
            // e => 
            // // The 2nd argument takes care of the asynchronous nature of the setState method
            // this.setState({ searchField: e.target.value})
        }
    />
)


