import React from 'react';
import '../Styles/app.css';

const RecipeCard = ({recipe})=>{
    console.log("From recipe", recipe);
    return (
    <div className="card">
        <div className="image">
            <img src={recipe.recipe.image} alt=""/>
        </div>
        <div className="label">
            {recipe.recipe.label}
        </div>
    </div>
    );
}

export default RecipeCard;