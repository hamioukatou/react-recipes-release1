import React, { Component } from 'react';

class RecipeDetails extends Component {
    render() {        
        const { recipe_id, navigateToList } = this.props;
        const { recipe } = this.props.recipes.find(item => recipe_id === item.recipe.uri);
 
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" onClick={() => {navigateToList(1)}} className="btn btn-warning mb-5 text-capitalize">
                                back to recipe list
                            </button>
                            <img src={recipe.image} className="d-block w-100" alt="recipe" />
                        </div>
                        {/* details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{recipe.label}</h6>
                            <h6 className="text-warning text-slanted">
                                provided by : {recipe.source}
                            </h6>
                            <a href={recipe.url} className="btn btn-primary mx-2 text-capitalize"
                                target="_blank" rel="noopener noreferrer">publisher web page</a>
                            <a href={recipe.shareAs} className="btn btn-success mx-2 text-capitalize"
                                target="_blank" rel="noopener noreferrer">share as</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4 text-capitalize">ingrediants</h2>
                                {
                                    recipe.ingredientLines.map((item, i) => {
                                        return (
                                            <li key={i} className="list-group-item text-slanted">{item}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeDetails;