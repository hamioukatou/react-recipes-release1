import React, { Component } from 'react';
import './App.css';
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url: "",
    details_id: 35382,
    pageIndex: 1
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} navigateToDetails={this.navigateToDetails} />);
      case 0:
        return (<RecipeDetails id={this.state.details_id} navigateToList={this.navigateToList} />);
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

  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
