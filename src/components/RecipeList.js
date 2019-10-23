import React, { Component } from 'react';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
    render() {
        const {
            recipes,
            navigateToDetails,
            handleChangeSearch,
            handleSubmitSearch,
            searchValue
        } = this.props;

        return (
            <React.Fragment>
                <RecipeSearch handleChange={handleChangeSearch} handleSubmit={handleSubmitSearch}
                    searchValue={searchValue} />

                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            recipes.map(item => {
                                return (
                                    <Recipe key={item.recipe.uri} recipe={item.recipe}
                                        navigateToDetails={navigateToDetails} />
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeList;