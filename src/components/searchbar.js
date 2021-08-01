import React, { useState } from 'react';
import '../Styles/app.css';
import food2 from '../Images/food2.jpg'

const SearchBar = ({ getSearchTerm }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        getSearchTerm(searchTerm);
    }

    return <div className="searchBar">
        <div className="image">
            <img src={food2} alt="" />
        </div>
        <div className="search">

            <form onSubmit={onFormSubmit}>
                <div>
                    <h1>Find a Recipe!</h1>
                </div>
                    <input placeholder="Search Receipe" onChange={(e) => { setSearchTerm(e.target.value) }} />
            </form>
        </div>
    </div>
}

export default SearchBar;