import React from "react";
import "../Styles/app.css";
import {Link} from "react-router-dom";

const RecipeCard = ({ recipe, index, key }) => {
    console.log("From recipe", recipe);
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={recipe.recipe.image} alt="" />
                </div>
                <div className="label">
                    <Link to={recipe.recipe.image} className="links">{recipe.recipe.label}</Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
