import React, {useState, useEffect} from 'react';
import edamam from './apis/edamam';
import DisplayRecipe from './components/display_receipe';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';

const Foodie = ()=>{
    let [term, setTerm] = useState('kulcha');
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

    const shouldIDisplayRecipe = ()=>{
        if(results){
            console.log("From I should",results)
            return <DisplayRecipe recipes={results} />
        }else{
            return;
        }
    }

    return (
        <div>
            <Navbar />
            <SearchBar getSearchTerm={getSearchTerm}/>
            {shouldIDisplayRecipe()}
        </div>
    );
}

export default Foodie;


