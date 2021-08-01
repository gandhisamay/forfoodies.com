import React from "react";
import "../Styles/app.css";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import DetailedRecipe from "./detailed_recipes";

const RecipeCard = ({ recipe, index, key }) => {
    console.log("From recipe", recipe);
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={recipe.recipe.image} alt="" />
                </div>
                <div className="label">
                    <Link to={`/${index}`} className="links">{recipe.recipe.label}</Link>
                    <Switch>
                        <Route exact path={`/${index}`}>
                            <DetailedRecipe recipe={recipe} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
