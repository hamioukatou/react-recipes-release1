import React, { Component } from 'react';

class RecipeSearch extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 text-center mt-5">
                            <h1 className="text-slanted text-capitalize">search for recipe with {" "} <strong className="text-danger">Food2Fork</strong></h1>
                        </div>
                    </div>
                    <form className="mt-4" action="">
                        <label htmlFor="search" className="text-capitalize">type recipes seperated by comma :</label>
                        <div className="input-group">
                            <input name="search" type="text" placeholder="chicken, onions, carrots" className="form-control"/>
                            <div className="input-group-append">
                                <button type="submit" className="input-group-text bg-primary text-white">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="row">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSearch;