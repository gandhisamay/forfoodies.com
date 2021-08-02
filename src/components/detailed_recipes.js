import React, { useEffect, useState } from 'react';
import edamam from '../apis/edamam';
import '../Styles/app.css';
import Tag from './tags';

const DetailedRecipe = ({ match }) => {

    let [searchId, setSearchid] = useState({})
    let [url, setURL] = useState('')

    useEffect(() => {
        setURL(`/v2/${window.location.href.slice(window.location.href.length-39, window.location.href.length)}`)
        edamam.get(url).then((res) => {
            setSearchid(res);
        });
    }, [url]);

    if (searchId.data) {
        let {image, label, healthLabels, ingredients,calories, cautions,url} = searchId.data.recipe;
        return (
            <div className="detailedRecipe">
                <div className="top-info">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="recipe-data">
                        <div className="label">
                            {label}
                        </div>
                        <div className="for-tags">
                            {healthLabels.map((label, index) => <Tag key={index} tag={label} />)}
                        </div>
                        <div className="ingredients">
                            <h1>Ingredients</h1>
                            <div className="ingredients-list" style={{marginBottom:"2rem"}}>
                                {ingredients.map((ingredient,index) => <p key={index} style={{fontSize:"18px",lineHeight:"1.25"}}>{ingredient.text}</p>)}
                            </div>
                        </div>
                        <div className="calories" style={{fontSize:"24px"}}>
                            Calories: {calories}  (Per Serving)
                        </div>
                        <div className="cautions">
                            <h1>Cautions</h1>
                            <div className="cautions-list" style={{marginBottom:"2rem"}}>
                                {cautions.map((caution,index)=><p key={index} style={{fontSize:"18px",lineHeight:"1.25"}}>{caution}</p>)}
                            </div>
                        </div>
                        <div className="forMoreDetails">
                            <h1>For More Details Visit</h1>
                            <a href={url} style={{marginTop:"1rem"}}>{url}</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    } else {
        return <div className="loading-message">We are fetching the results, please wait!</div>
    }
}

export default DetailedRecipe;