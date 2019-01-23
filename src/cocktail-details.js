import React, { Component } from 'react';

let recipes = require('./recipes.json');

class CocktailDetails extends Component {

  getCocktailDetails(name) {
    let cocktailDetails = recipes.find(function(element) {
      return element.name === name;
    })
    return cocktailDetails;
  }

  render() {
    let cocktailDetails = this.getCocktailDetails(this.props.name)
    return (
      <div>
        <div><img src='https://www.seriouseats.com/recipes/images/2015/04/20150323-cocktails-vicky-wasik-negroni-1500x1125.jpg' alt='negroni' /></div>
        <div class='name'>{cocktailDetails.name}</div>
        <ul>{cocktailDetails.ingredients.map(function(ingredient) {
          return <li>{ingredient.ingredient} {ingredient.amount} {ingredient.unit}</li>
        })}
        </ul>
        <div>{cocktailDetails.preparation}</div>
      </div>
    )
  }
}

export default CocktailDetails;
