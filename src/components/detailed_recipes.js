import React from 'react';

const DetailedRecipe = ({recipe})=>{
    return(
        <div className="detailedRecipe">
            <div className="recipe-image">
                <img src={recipe.recipe.image} alt="" />
            </div>
        </div>
    );
}

export default DetailedRecipe;