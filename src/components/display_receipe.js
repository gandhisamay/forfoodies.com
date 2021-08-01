import React from 'react';
import RecipeCard from './recipe_card';
import '../Styles/app.css';

const DisplayRecipe = ({ recipes }) => {
    if (recipes.data) {
        console.log("From display recipe", recipes.data.hits);
        let { hits } = recipes.data;
        console.log(hits);
        let renderedRecipes = hits.map((recipe) => {
            return (
                <div key={recipe.image}>
                    <RecipeCard recipe={recipe} />
                </div>
            );
        })

        return <div className="displayRecipe">{renderedRecipes}</div>
    } else {
        return <div></div>
    }
    // if(recipes){
    // let renderedRecipes = recipes.data.hits.map((recipe)=>{
    //     return (
    //         <div key={recipe.image}>
    //            <RecipeCard recipe={recipe} />
    //         </div>
    //     );
    // })

    // return <div className="displayRecipe">
    //     {renderedRecipes}
    // </div>
    // }else{
    // }
}

export default DisplayRecipe;