import React from 'react';
import edamam from './apis/edamam';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';

const Foodie = ()=>{
    let term;

    const apiSearch = (term)=>{
        edamam('/v2', {
            params:{
                q: term
            }
        }).then((response)=>{
            console.log(response.data.hits);
        }).catch((er)=>{
            console.log(er);
        })
    }

    const getSearchTerm = (search)=>{
        term = search;
        console.log("FROM APP", term);
        apiSearch(term);
    }

    return (
        <div>
            <Navbar />
            <SearchBar getSearchTerm={getSearchTerm}/>
        </div>
    );
}

export default Foodie;


