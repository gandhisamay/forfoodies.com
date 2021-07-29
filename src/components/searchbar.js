import React from 'react';
import '../Styles/app.css';
import food2 from '../Images/food2.jpg'

const SearchBar = () => {
    return <div className="searchBar">
        <div className="image">
            <img src={food2} alt="" />
        </div>
        <div className="search">
            <span><i className="fas fa-search"></i></span>
            <input placeholder="Search Receipe" />
        </div>
    </div>
}

export default SearchBar;