import React from 'react';
import RecipeCard from './recipe_card';
import '../Styles/app.css';

const DisplayRecipe = ({ recipes }) => {
    if (recipes.data) {
        let { hits } = recipes.data;
        let renderedRecipes = hits.map((recipe, index) => {

            return (
                <div key={index
                }>
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
        return <div className="recipeHeader">We are fetching your requested recipes</div>
    }
}

export default DisplayRecipe;