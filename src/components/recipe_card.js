import React from 'react';
import '../Styles/app.css';

const RecipeCard = ({recipe})=>{
    return (
    <div className="card">
        <div className="image">
            <img src={recipe.image} alt=""/>
        </div>
        <div className="label">
            {recipe.label}
        </div>
    </div>
    );
}

export default RecipeCard;