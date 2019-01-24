import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailDetailsItem extends Component {

  render() {
    const cocktail = this.props.cocktail
    return (
      <div class="indi-cocktail">
        <div><img class="thumbnail" src={this.props.cocktail.pictureUrl} alt={this.props.cocktail.name} /></div>
        <div class='name'>{cocktail.name}</div>
        <div>Glass: {cocktail.glass}</div>
        <div>Category: {cocktail.category}</div>
        <ul>{cocktail.ingredients.map(function(ingredient) {
          return <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}</li>
        })}
        <li>Garnish with {cocktail.garnish}</li>
        </ul>

        <div>{cocktail.preparation}</div>
      </div>

    )
  }
}

export default CocktailDetailsItem;


// <div className='cocktail-item'><Link to={address}>
//   <div class="image-container"><img class='thumbnail' src={this.props.cocktail.pictureUrl} alt={this.props.cocktail.name} /></div>
//   <div class='name'>{this.props.cocktail.name}</div>
//   </Link>
// </div>
