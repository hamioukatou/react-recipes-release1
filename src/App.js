import React, { Component } from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { recipesList } from "./newRecipesAPI";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      url: "https://api.edamam.com/search?q=",
      base_url: "https://api.edamam.com/search?q=onions&app_id=1bdcc1fe&app_key=6a6ff402c3199527089243bc07a0bfea&from=0&to=10&calories=591-722&health=alcohol-free",
      details_id: '',
      pageIndex: 1,
      searchValue: '',
      params: "&app_id=1bdcc1fe&app_key=6a6ff402c3199527089243bc07a0bfea&from=0&to=10&calories=591-722&health=alcohol-free"
    }
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.base_url);
      const jsonData = await data.json();
      console.log(jsonData);

      this.setState({
        recipes: jsonData.hits
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    //debugger;
    this.getRecipes();
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} navigateToDetails={this.navigateToDetails}
          handleChangeSearch={this.handleChangeSearch} handleSubmitSearch={this.handleSubmitSearch}
          searchValue={this.state.searchValue} />);
      case 0:
        return (<RecipeDetails recipes={this.state.recipes} recipe_id={this.state.details_id} navigateToList={this.navigateToList} />);
    }
  }

  navigateToList = (index) => {
    this.setState({
      pageIndex: index
    });
  }

  navigateToDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  }

  handleChangeSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    }, () => {
      console.log(this.state.searchValue);
    });
  }

  handleSubmitSearch = (event) => {
    event.preventDefault();
    const { url, params, searchValue } = this.state;
    this.setState(() => {
      return {
        base_url: `${url}${searchValue}${params}`,
        searchValue: ''
      }
    }, () => {
      this.getRecipes();
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
