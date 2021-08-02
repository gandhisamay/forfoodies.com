import React, { useEffect, useState } from 'react';
import edamam from '../apis/edamam';
import '../Styles/app.css';
import Tag from './tags';

const DetailedRecipe = ({ match }) => {

    let [searchId, setSearchid] = useState({})
    let [numRequests, setNumRequests] = useState(0);

    useEffect(() => {
        setNumRequests(numRequests++);
        if (numRequests === 1) {
            let url = `/v2/${window.location.href.slice(66, 105)}`
            edamam.get(url).then((res) => {
                setSearchid(res);
            });
        }

        console.log("id search", searchId);
    }, [searchId, numRequests]);

    if (searchId.data) {
        return (
            <div className="detailedRecipe">
                <div className="top-info">
                    <div className="image">
                        <img src={searchId.data.recipe.image} alt="" />
                    </div>
                    <div className="recipe-data">
                        <div className="label">
                            {searchId.data.recipe.label}
                        </div>
                        <div className="for-tags">
                            {searchId.data.recipe.healthlabels.map((label) => <Tag tag={label} />)}
                        </div>
                    </div>
                </div>

            </div>
        );
    } else {
        return <div className="loading-message">We are fetching the results, please wait!</div>
    }
}

export default DetailedRecipe;