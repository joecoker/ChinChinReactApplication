import React, { Component } from 'react';
import CocktailListItem from './CocktailListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CocktailList extends Component {


  render() {
    return (
      <div className="flex-container">
      {
        this.props.recipes.map(function(cocktail) {
        return <CocktailListItem cocktail={cocktail} />
      })
      }
      </div>
    )
  }
}

export default CocktailList;
