import React from "react";
import "../Styles/app.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, index }) => {
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={recipe.recipe.image} alt="" />
                </div>
                <div className="label">
                    <Link to={recipe.recipe.uri.slice(recipe.recipe.uri.length - 39, recipe.recipe.uri.length)} className="links">{recipe.recipe.label}</Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
