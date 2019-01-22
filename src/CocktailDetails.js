import React, { Component } from 'react';
let recipes = require('./recipes.json');

class CocktailDetails extends Component {

  getCocktailDetails(name) {
    // Replace with API query for single cocktail by name
    let cocktailDetails = recipes.find(function(element) {
      return element.name === name;
    })
    console.log(cocktailDetails);
    return cocktailDetails;
  }

  render() {
    let cocktailDetails = this.getCocktailDetails(this.props.name)
    return(
      <div>
        <div>
          {cocktailDetails.name}
        </div>
        <div>
          {cocktailDetails.preparation}
        </div>
      </div>
    )
  }
}

export default CocktailDetails;
