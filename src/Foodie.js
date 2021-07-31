import React, {useState, useEffect} from 'react';
import edamam from './apis/edamam';
import DisplayRecipe from './components/display_receipe';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';

const Foodie = ()=>{
    let [term, setTerm] = useState('');
    let [results, setResults] = useState({});

    useEffect(()=>{
        console.log("From useeffect",term);
        if(!term){
            console.log("From if");
            return;
        }else{
        console.log("in else", term);
        edamam('/v2',{
            params:{
                q: term
            }
        }).then((res)=>{
            setResults(res);
        }).catch((err)=>{
            console.log("Didn't get any response!!", err);
        })
        }
    }, [term]);


    const getSearchTerm = (search)=>{
        console.log("before set term!!", term);
        setTerm(search);
        console.log(term);
    }

    return (
        <div>
            <Navbar />
            <SearchBar getSearchTerm={getSearchTerm}/>
            <DisplayRecipe recipes={results}/>
        </div>
    );
}

export default Foodie;


