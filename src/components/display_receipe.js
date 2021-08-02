import React from 'react';
import RecipeCard from './recipe_card';
import '../Styles/app.css';

const DisplayRecipe = ({ recipes }) => {
    if (recipes.data) {
        console.log("From display recipe", recipes.data.hits);
        let { hits } = recipes.data;
        console.log(hits);
        let renderedRecipes = hits.map((recipe, index) => {
            console.log(index, recipe);
            return (
                <div key={recipe.uri}>
                    <RecipeCard recipe={recipe} index={index}/>
                </div>
            );
        })

        return <div>
            <div className="recipeHeader">
                <h1>Checkout your search results here!</h1>
            </div>
            <div className="displayRecipe">
                {renderedRecipes}
            </div>
            <div className="recipeFooter">
                <h1>For best recipes in the world only at forfoodies.com!</h1>
            </div>
        </div>
    } else {
        return <div></div>
    }
}

export default DisplayRecipe;