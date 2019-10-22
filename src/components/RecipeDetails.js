import React, { Component } from 'react';
import { recipe } from "../tempDetails";

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: recipe,
            url: ''
        }
    }

    render() {
        console.log(this.state.recipe);
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;
        const { navigateToList } = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" onClick={() => {navigateToList(1)}} className="btn btn-warning mb-5 text-capitalize">
                                back to recipe list
                            </button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        {/* details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-slanted">
                                provided by : {publisher}
                            </h6>
                            <a href={publisher_url} className="btn btn-primary mx-2 text-capitalize"
                                target="_blank" rel="noopener noreferrer">publisher web page</a>
                            <a href={source_url} className="btn btn-success mx-2 text-capitalize"
                                target="_blank" rel="noopener noreferrer">recipe url</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4 text-capitalize">ingrediants</h2>
                                {
                                    ingredients.map((item, i) => {
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