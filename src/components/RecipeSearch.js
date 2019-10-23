import React, { Component } from 'react';

class RecipeSearch extends Component {
    render() {
        const {
            handleChange, 
            handleSubmit,
            searchValue
        } = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 text-center mt-5">
                            <h1 className="text-slanted text-capitalize">search for recipe from {" "}  <a href="https://www.edamam.com/" target="_blank" rel="noopener noreferrer" className="text-success">EDAMAM</a> API</h1>
                        </div>
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <label htmlFor="search" className="text-capitalize">type recipes seperated by comma :</label>
                        <div className="input-group">
                            <input value={searchValue} onChange={handleChange} name="search" type="text" placeholder="chicken, onions, carrots" className="form-control"/>
                            <div className="input-group-append">
                                <button type="submit" className="input-group-text bg-primary text-white">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSearch;