import React from 'react';
import RecipeCard from './recipe_card';
import '../Styles/app.css';

const DisplayRecipe = ({recipes})=>{
    if(recipes){
    console.log("From display recipe",recipes);
    let renderedRecipes = recipes.hits.map((recipe)=>{
        return (
            <div key={recipes.hits.label}>
               <RecipeCard recipe={recipe} />
            </div>
        );
    })

    return <div className="displayRecipe">
        {renderedRecipes}
    </div>
    }else{
        return <div></div>;
    }
}

export default DisplayRecipe;